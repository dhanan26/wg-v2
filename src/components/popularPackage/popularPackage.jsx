import { StyledMainContainer } from "../common/box/box";
import { PopularPackageCard } from "../widgets/popularPackageCard";
import {
  PopularPackageBox,
  PopularPackageTitleBox,
  PopularPackageMainTitle,
  PopularPackageSubTitle,
  SwiperContainer,
} from "./popularPackage.styles";
//Swiper imports
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Navigation]);

//custom style
import "./popularPackage.css";

export const PopularPackage = () => {
  return (
    <StyledMainContainer>
      <PopularPackageBox>
        <PopularPackageTitleBox>
          <PopularPackageMainTitle variant="primaryTitle" color="primary">
            Most Popular Back Pain Packages
          </PopularPackageMainTitle>
          <PopularPackageSubTitle variant="secondaryTitle" color="textPrimary">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus{" "}
          </PopularPackageSubTitle>
        </PopularPackageTitleBox>
        <SwiperContainer>
          <SwiperCards />
        </SwiperContainer>
      </PopularPackageBox>
    </StyledMainContainer>
  );
};

const popularPackage = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

const SwiperCards = () => {
  const breakpoints = {
    // when window width is >= 640px
    200:{
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 2,
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
        navigation={{
          prevEl: ".swiper-button-next",
          nextEl: ".swiper-button-prev",
        }}
        breakpoints={breakpoints}
        loop={true}
        style={{ paddingRight: 0 }}
      >
        {popularPackage?.map((each, index) => (
          <SwiperSlide key={index}>
            <PopularPackageCard data={each} />
          </SwiperSlide>
        ))}
        {/* Previous and next arrow buttons */}
      </Swiper>
      <div className="swiper-button-prev "></div>
      <div className="swiper-button-next"></div>
    </>
  );
};
