import "swiper/css";
import arrow from "../../assets/icons/arrow-right-thin.svg";

import { Box, Typography, styled } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

import { useState } from "react";

const Container = styled(Box)(() => ({
  fontFamily: "'Aquawax', Courier, monospace;",
  margin: "2rem 0 2rem 0",
}));

const Header = styled(Typography)(() => ({
  fontFamily: "'Aquawax', Courier, monospace;",
  fontSize: "2.5rem",
  color: "#00256D",
  fontWeight: 500,
  textAlign: "center",
}));

const SubHeader = styled(Typography)(() => ({
  fontFamily: "'Rubik', Courier, monospace;",
  fontSize: "1rem",
  color: "#333333",
  fontWeight: 400,
  textAlign: "center",
  padding: "0 1rem 0 1rem",
}));

const SwiperContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  marginTop: "1rem",
  width: "calc(100% - 6.25rem - 6.25rem)",
  paddingLeft: "6.25rem",
  paddingRight: "6.25rem",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "2.5rem",
    paddingRight: "2.5rem",
    width: "calc(100% - 5rem)",
  },
}));

const SwiperButton = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "6.25rem",
  position: "absolute",
  top: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "2.5rem",
  },
}));

export const SuccessStories = () => {
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
                <SuccessStoriesCard data={_each} />
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

const CardContainer = styled(Box)(({ theme }) => ({
  fontFamily: "'Aquawax', Courier, monospace;",
  minHeight: 300,
  width: "calc(100% - 2rem)",
  display: "flex",
  flexDirection: "column",
  background: "#E3EDFC",
  padding: "0 1rem 0 1rem",
  [theme.breakpoints.down("xs")]: {
    padding: "0 0.2rem 0 0.2rem",
    width: "calc(100% - 0.4rem)",
  },
}));

const CardHeroContainer = styled(Box)(() => ({
  fontFamily: "'Aquawax', Courier, monospace;",
  width: "100%",
  display: "flex",
}));

const CardHeroProfile = styled(Box)(() => ({
  fontFamily: "'Aquawax', Courier, monospace;",
  height: "calc(100% - 1rem)",
  width: 120,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.5rem",
}));

const CardHeroProfileImage = styled(Box)(({ theme }) => ({
  fontFamily: "'Aquawax', Courier, monospace;",
  aspectRatio: "1/1",
  width: 114,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "50%",
  backgroundSize: "contain",
  [theme.breakpoints.down("sm")]: {
    width: 90,
  },
  [theme.breakpoints.down("xs")]: {
    width: 57,
  },
}));

const CardHeroInfo = styled(Box)(() => ({
  fontFamily: "'Aquawax', Courier, monospace;",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

const CardInfoTitle = styled(Box)(() => ({
  fontFamily: "'Aquawax', Courier, monospace;",
  height: "calc(100% - 1rem)",
  width: "calc(100% - 1rem)",
  padding: "0.5rem",
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  "& span": {
    fontSize: "1rem",
    color: "#00256D",
  },
  "& img": {
    height: 57,
    width: 57,
    borderRadius: "50%",
  },
  "& span:last-child": {
    fontSize: "0.875rem",
    color: "rgba(0, 37, 109, 0.8)",
  },
}));

const CardInfoTypes = styled(Box)(({ theme }) => ({
  fontFamily: "'Rubik', Courier, monospace;",
  height: "calc(100% - 1rem)",
  width: "calc(100% - 1rem)",
  padding: "0.5rem",
  display: "flex",
  alignItems: "end",
  justifyContent: "start",
  gap: "0.5rem",
  flexWrap: "wrap",
  [theme.breakpoints.down("xs")]: {
    display: "none",
  },
  "& div": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    color: "rgba(0, 37, 109, 1)",
    fontSize: "0.75rem",
    "& img": {
      height: 24,
      width: 24,
    },
  },
}));

const CardInfoTypesMobile = styled(Box)(({ theme }) => ({
  fontFamily: "'Rubik', Courier, monospace;",
  display: "none",
  height: "calc(100% - 1rem)",
  width: "calc(100% - 1rem)",
  padding: "0.5rem",
  alignItems: "end",
  justifyContent: "start",
  gap: "0.5rem",
  flexWrap: "wrap",
  [theme.breakpoints.down("xs")]: {
    display: "flex",
  },
  "& div": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    color: "rgba(0, 37, 109, 1)",
    fontSize: "0.75rem",
    "& img": {
      height: 24,
      width: 24,
    },
  },
}));

const CardBody = styled(Box)(({ theme }) => ({
  fontFamily: "Rubik, Courier, monospace;",
  height: "100%",
  flex: 1,
  padding: "0.5rem",
  fontSize: "0.875rem",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  color: "rgba(0, 37, 109, 1)",
  "& span": {
    lineHeight: "2rem",
    [theme.breakpoints.down(980)]: {
      lineHeight: "1rem",
    },
  },
  "& span:last-child": {
    fontSize: "0.75rem",
  },
}));

const SuccessStoriesCard = ({ data }) => {
  return (
    <CardContainer>
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
