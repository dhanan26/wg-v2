import { RecommendedSpecialtiesCard } from "../widgets/recommendedSpecialtiesCard";

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
import { useContext } from "react";
SwiperCore.use([Navigation]);

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
  console.log("🚀 ~ file: recommendedSpecialties.jsx:48 ~ SwiperCards ~ specialties:", specialties)

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
    <SwiperContainer>
      <Swiper breakpoints={breakpoints} loop={true}>
        {specialties?.map((specialtiesData, index) => (
          <SwiperSlide key={index}>
            <RecommendedSpecialtiesCard specialtiesData={specialtiesData} />
          </SwiperSlide>
        ))}
        {/* Previous and next arrow buttons */}
      </Swiper>
    </SwiperContainer>
  );
};
