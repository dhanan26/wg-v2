import "swiper/css";
import arrow from "../../assets/icons/arrow-right-thin.svg";

import { Box, Typography, styled } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

import { useState } from "react";

import {
  Container,
  Header,
  SubHeader,
  SwiperContainer,
  SwiperButton,
  CardContainer,
  CardHeroContainer,
  CardHeroProfile,
  CardHeroProfileImage,
  CardHeroInfo,
  CardInfoTitle,
  CardInfoTypes,
  CardInfoTypesMobile,
  CardBody,
} from "./successStories.styles";


import { useContext } from "react";
import { MainContext } from "../../pages/main/main";

export const SuccessStories = () => {
  const {approchType} = useContext(MainContext);
  const [swiper, setSwiper] = useState();
  return (
    <Container>
      <Header>Success Stories</Header>
      <SubHeader>By users with similar conditions & treatment program</SubHeader>

      <SwiperContainer>
        <SwiperButton
          id="success-stories-prev-button"
          sx={{ left: 0 }}
          onClick={() => {
            swiper.slidePrev();
          }}
        >
          <img src={arrow} height={47} />
        </SwiperButton>
        <Swiper
          spaceBetween={50}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            820: {
              slidesPerView: 2,
            },
          }}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
        >
          {tempData.map((_each, _index) => {
            return (
              <SwiperSlide key={_index}>
                <SuccessStoriesCard data={_each} approchType={approchType} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <SwiperButton
          id="success-stories-next-button"
          sx={{ right: 0 }}
          onClick={() => {
            swiper.slideNext();
          }}
        >
          <img src={arrow} height={47} style={{ transform: "rotate(180deg)" }} />
        </SwiperButton>
      </SwiperContainer>
    </Container>
  );
};

const SuccessStoriesCard = ({ data,approchType }) => {
  return (
    <CardContainer  approchType={approchType}>
      <CardHeroContainer>
        <CardHeroInfo>
          <CardInfoTitle>
            <img src={data?.titleLogo} height={57} width={57} />
            <div>
              <span>{data?.name}</span>
              <br />
              <span>{data?.subTitle}</span>
            </div>
          </CardInfoTitle>
          <CardInfoTypes>
            {data.types.map((_type, _index) => {
              return (
                <div key={_index}>
                  <img src={_type?.logo} />
                  {_type?.name}
                </div>
              );
            })}
          </CardInfoTypes>
        </CardHeroInfo>
        <CardHeroProfile>
          <CardHeroProfileImage style={{ backgroundImage: `url(${data?.logo})` }} />
        </CardHeroProfile>
      </CardHeroContainer>
      <CardBody>
        <CardInfoTypesMobile>
          {data.types.map((_type, _index) => {
            return (
              <div key={_index}>
                <img src={_type?.logo} />
                {_type?.name}
              </div>
            );
          })}
        </CardInfoTypesMobile>
        <span>{data?.description}</span>
        <br />
        <span>
          {data?.docName}
          <br />
          <small>{data?.docLocation}</small>
        </span>
      </CardBody>
    </CardContainer>
  );
};

const tempData = [
  {
    name: "Gut Health",
    subTitle: "Supreme gut health",
    titleLogo: "https://picsum.photos/200/200",
    logo: "https://picsum.photos/200/200",
    types: [
      { name: "Ayurveda", logo: "https://picsum.photos/200/200" },
      { name: "Naturopathy", logo: "https://picsum.photos/200/200" },
    ],
    description:
      "Mental health conditions affect 1 in 4 people around the world. They disrupt a person’s thinking, feeling, moods and ability to relate to others, thereby affecting their lives and livelihood. Mental health conditions are leading causes of disability worldwide.",
    docName: "Mr. kidder, New York, U.S.",
    docLocation: "Saoukya Bangalore, India.",
  },
  {
    name: "Gut Health",
    subTitle: "Supreme gut health",
    titleLogo: "https://picsum.photos/200/200",
    logo: "https://picsum.photos/200/200",
    types: [
      { name: "Ayurveda", logo: "https://picsum.photos/200/200" },
      { name: "Naturopathy", logo: "https://picsum.photos/200/200" },
    ],
    description:
      "Mental health conditions affect 1 in 4 people around the world. They disrupt a person’s thinking, feeling, moods and ability to relate to others, thereby affecting their lives and livelihood. Mental health conditions are leading causes of disability worldwide.",
    docName: "Mr. kidder, New York, U.S.",
    docLocation: "Saoukya Bangalore, India.",
  },
  {
    name: "Gut Health",
    subTitle: "Supreme gut health",
    titleLogo: "https://picsum.photos/200/200",
    logo: "https://picsum.photos/200/200",
    types: [
      { name: "Ayurveda", logo: "https://picsum.photos/200/200" },
      { name: "Naturopathy", logo: "https://picsum.photos/200/200" },
    ],
    description:
      "Mental health conditions affect 1 in 4 people around the world. They disrupt a person’s thinking, feeling, moods and ability to relate to others, thereby affecting their lives and livelihood. Mental health conditions are leading causes of disability worldwide.",
    docName: "Mr. kidder, New York, U.S.",
    docLocation: "Saoukya Bangalore, India.",
  },
  {
    name: "Gut Health",
    subTitle: "Supreme gut health",
    titleLogo: "https://picsum.photos/200/200",
    logo: "https://picsum.photos/200/200",
    types: [
      { name: "Ayurveda", logo: "https://picsum.photos/200/200" },
      { name: "Naturopathy", logo: "https://picsum.photos/200/200" },
    ],
    description:
      "Mental health conditions affect 1 in 4 people around the world. They disrupt a person’s thinking, feeling, moods and ability to relate to others, thereby affecting their lives and livelihood. Mental health conditions are leading causes of disability worldwide.",
    docName: "Mr. kidder, New York, U.S.",
    docLocation: "Saoukya Bangalore, India.",
  },
];
