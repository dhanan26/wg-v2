import { RecommendedSpecialtiesCard } from "../widgets/recommendedSpecialtiesCard";
import arrow from "../../assets/icons/arrow-right-thin.svg";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import {
  RecommendedSpecialtiesContainer,
  RecommendedSpecialtiesTitle,
  LinearGradientBox,
  SwiperContainer,
} from "./recommendedSpecialities.styles";
import { MainContext } from "../../pages/main/main";
import { useState, useContext, useEffect } from "react";
SwiperCore.use([Navigation]);

import { Box } from "@mui/material";

export const RecommendedSpecialties = () => {
  return (
    <>
      <RecommendedSpecialtiesTitle variant="primaryTitle" color="textPrimary">
        Recommended Specialties
      </RecommendedSpecialtiesTitle>
      <RecommendedSpecialtiesContainer>
        <SwiperCards />
        <LinearGradientBox />
      </RecommendedSpecialtiesContainer>
    </>
  );
};

// const specialties = [
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
//   "ten",
// ];

const SwiperCards = () => {
  const { programData, approchType } = useContext(MainContext);
  const specialties = programData?.selectRecommendations;
  const specialtiesCount = specialties?.length;
  const [swiper, setSwiper] = useState();
  const [cardCount, setCardCount] = useState(0);
  const LIMIT = 3;
  console.log(
    "🚀 ~ file: recommendedSpecialties.jsx:52 ~ SwiperCards ~ cardCount:",
    cardCount
  );
  useEffect(() => {
    setCardCount(specialtiesCount);
  }, [specialtiesCount]);

  const breakpoints = {
    // when window width is >= 640px
    300: {
      slidesPerView: 1.5,
      // spaceBetween: 30
    },
    520: {
      slidesPerView: 2,
      // spaceBetween: 30
    },
    800: {
      slidesPerView: 3,
    },
    // when window width is >= 768px
    1120: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 4,
    },
    // when window width is >= 1024px
    1800: {
      slidesPerView: 5,
    },
  };
  return (
    <>
      <Swiper
        breakpoints={breakpoints}
        loop={true}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        style={{ position: "relative" }}
      >
        {LIMIT < cardCount && (
          <Box
            sx={{
              cursor: "pointer",
              width: 50,
              display: "flex",
              position: "absolute",
              zIndex: 99,
              top: 25,
              left: 0,
            }}
            id="success-stories-prev-button"
            onClick={() => {
              swiper.slidePrev();
            }}
          >
            <img src={arrow} height={47} />
          </Box>
        )}
        {specialties?.map((specialtiesData, index) => (
          <SwiperSlide style={{ left: LIMIT < cardCount ? 50 : 0 }} key={index}>
            <RecommendedSpecialtiesCard
              specialtiesData={specialtiesData}
              index={index}
            />
          </SwiperSlide>
        ))}
        {LIMIT < cardCount && (
          <Box
            id="success-stories-next-button"
            sx={{
              right: 0,
              top: 25,
              cursor: "pointer",
              width: 50,
              display: "flex",
              position: "absolute",
              zIndex: 99,
            }}
            onClick={() => {
              swiper.slideNext();
            }}
          >
            <img
              src={arrow}
              height={47}
              style={{ transform: "rotate(180deg)" }}
            />
          </Box>
        )}
      </Swiper>
    </>
  );
};
