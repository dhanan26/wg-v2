import { StyledMainContainer } from "../common/box/box";
import { PopularPackageCard } from "../widgets/popularPackageCard";
import {
  PopularPackageBox,
  PopularPackageTitleBox,
  PopularPackageMainTitle,
  PopularPackageSubTitle,
  SwiperContainer,
  PopularPackageSkeleten
} from "./popularPackage.styles";
//Swiper imports
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Navigation]);

import { useContext, useState } from "react";
import { MainContext } from "../../pages/main/main";

//custom style
import "./popularPackage.css";
import { Skeleton } from "@mui/material";

export const PopularPackage = () => {
  const {programData,popularPackageData,programName} = useContext(MainContext);
  return (
    <StyledMainContainer>
      <PopularPackageBox>
        <PopularPackageTitleBox>
          <PopularPackageMainTitle variant="primaryTitle" color="primary">
            Most Popular {programName===""?programData?.name:programName} Packages
          </PopularPackageMainTitle>
          <PopularPackageSubTitle variant="secondaryTitle" color="textPrimary">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus{" "}
          </PopularPackageSubTitle>
        </PopularPackageTitleBox>
        <SwiperContainer>
          <SwiperCards popularPackageData={popularPackageData} />
        </SwiperContainer>
      </PopularPackageBox>
    </StyledMainContainer>
  );
};


const SwiperCards = ({popularPackageData=[]}) => {
  // console.log("🚀 ~ file: popularPackage.jsx:45 ~ SwiperCards ~ popularPackageData:", popularPackageData?.popularPackages)
  const breakpoints = {
    // when window width is >= 640px
    200:{
      slidesPerView: 1,
    },
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
      slidesPerView: 4,
    },
  }; 


  // if(popularPackageData?.isPopularPackageLoading){
  //   return <div>Loading...</div>
  
  // }


  return (
    <>
      <Swiper
        navigation={{
          prevEl: ".swiper-button-next",
          nextEl: ".swiper-button-prev",
        }}
        breakpoints={breakpoints}
        loop={true}
        // style={{ paddingRight: 0 }}
      >
        {
         (popularPackageData?.isPopularPackageLoading?Array.from(new Array(4)) : popularPackageData?.popularPackages)?.map((each, index) => (
          
            <SwiperSlide key={index}>
             { popularPackageData?.isPopularPackageLoading? <PopularPackageSkeleten variant="rectangular" />: 
            <PopularPackageCard data={each} />}
          </SwiperSlide>

          
         
        ))}
        {/* Previous and next arrow buttons */}
      </Swiper>
      <div className="swiper-button-prev "></div>
      <div className="swiper-button-next"></div>
    </>
  );
};
