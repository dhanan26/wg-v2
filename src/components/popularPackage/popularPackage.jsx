
import { Stack, styled, Box, useMediaQuery } from "@mui/material";
import { StyledMainContainer } from "../common/box/box"
import { PrimarySubText, PrimaryText } from "../common/typographies/typographies";
import { TextCenterBox } from "../common/containers/containers";
import { PopularPackageCard } from "../widgets/popularPackageCard";



//Swiper imports
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Navigation]);

//custom style
import "./popularPackage.css"
import { width } from "@mui/system";



const PopularPackageBox = styled(Box)(({ theme }) => ({
    height: 498
}));

const PopularPackageTitleBox = styled(TextCenterBox)(({ theme }) => ({
    height: 117,
    [theme.breakpoints.down('lg')]: {
        height: 115,
    },
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 18
}));

const PopularPackageMainTitle = styled(PrimaryText)(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
        fontSize:30,
    },
    [theme.breakpoints.down('sm')]: {
        fontSize:20,
    },
}));

const PopularPackageSubTitle = styled(PrimarySubText)(({ theme }) => ({
    fontSize: 16,
    [theme.breakpoints.down('lg')]: {
        fontSize:14,
    },
    [theme.breakpoints.down('sm')]: {
        fontSize:12,
    },
    fontWeight: 400,
    fontFamily: theme?.fontFamily.Rubik
}));

const SwiperContainer = styled(Box)(({ theme }) => ({
    position: "relative",
    width:"100%",
    [theme.breakpoints.down('sm')]: {
        width: "90%",
        marginLeft:20
    },
    // width: "95%",
    marginLeft: "auto",
    marginRight: "auto"
}));





export const PopularPackage = () => {
    return (
        <StyledMainContainer>
            <PopularPackageBox>
                <PopularPackageTitleBox>
                    <PopularPackageMainTitle variant="primaryTitle" color="primary" >Most Popular Back Pain Packages</PopularPackageMainTitle>
                    <PopularPackageSubTitle variant="secondaryTitle" color="textPrimary" >Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus </PopularPackageSubTitle>
                </PopularPackageTitleBox>
                <SwiperContainer>
                    <SwiperCards />
                </SwiperContainer>
            </PopularPackageBox>
        </StyledMainContainer>
    )
}

const popularPackage = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]


const SwiperCards = () => {
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
            slidesPerView:3,
        },
        // when window width is >= 768px
        1120:{
            slidesPerView: 4,
        },
        1400:{
            slidesPerView: 4,
        },
        // when window width is >= 1024px
        1800: {
            slidesPerView: 5,
        }
    };
    return (
        <>
            <Swiper
                navigation={{
                    prevEl: '.swiper-button-next',
                    nextEl: '.swiper-button-prev',
                }}
                breakpoints={breakpoints}
                loop={true}
                style={{ paddingRight: 0 }}
            >
                {
                    popularPackage?.map((each, index) => (
                        <SwiperSlide key={index}  >
                            <PopularPackageCard data={each} />
                        </SwiperSlide>
                    ))
                }
                {/* Previous and next arrow buttons */}
            </Swiper>
            <div className="swiper-button-prev "></div>
            <div className="swiper-button-next"></div>
        </>
    )
}