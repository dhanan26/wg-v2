import { Stack, styled, Box, useMediaQuery } from "@mui/material";
import { RecommendedSpecialtiesCard } from "../widgets/recommendedSpecialtiesCard";


import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { PrimaryText } from "../common/typographies/typographies";
SwiperCore.use([Navigation]);


const RecommendedSpecialtiesContainer = styled(Box)(({ theme }) => ({
marginTop:10
}));


const RecommendedSpecialtiesTitle = styled(PrimaryText)(({ theme }) => ({
    fontSize: 20,
}));




const LinearGradientBox = styled(Box)(({ theme }) => ({
    height: 111,
    background: 'linear-gradient(to right bottom, #BEBEBE, #E0E0E078)',
    width: "95%",
    position: "relative",
    marginTop: "-90px",
    marginLeft: "-20px",
}));








export const RecommendedSpecialties = () => {
    return (
        <>

            <RecommendedSpecialtiesTitle variant="PrimaryText" color="textPrimary" >Recommended Specialties</RecommendedSpecialtiesTitle>
            <RecommendedSpecialtiesContainer>
                <SwiperCards />
                <LinearGradientBox />
            </RecommendedSpecialtiesContainer>
        </>
    )
}


const specialties = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]


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
        }
    };
    return (
        <>
            <Swiper
                breakpoints={breakpoints}
                loop={true}
                navigation={{
                    prevEl: '.swiper-button-next',
                    nextEl: '.swiper-button-prev',
                }}
            >
                {
                    specialties?.map((each, index) => (
                        <SwiperSlide key={index}  >
                            <RecommendedSpecialtiesCard />
                        </SwiperSlide>
                    ))
                }
                {/* Previous and next arrow buttons */}
            </Swiper>
        </>
    )
}


