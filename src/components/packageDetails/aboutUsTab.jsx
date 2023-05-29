import { Box, Button, styled, Typography } from "@mui/material";
import imageConatainer from "../../assets/images/Image Container.svg";
import verified from "../../assets/icons/verified.svg";
import clock from "../../assets/icons/clock.svg";
import location from "../../assets/icons/Mark.svg";
import React from "react";

const photos = [
  "https://picsum.photos/5000/3333",
  "https://picsum.photos/5000/3333",
  "https://picsum.photos/5000/3333",
  "https://picsum.photos/5000/3333",
  "https://picsum.photos/5000/3333",
];

const PackageDetailsMainBox = styled(Box)(({ theme }) => ({
  //   backgroundColor: "yellow",
  top: 0,
}));
const AboutUsContainer = styled(Box)(({ theme }) => ({
  //   display: "flex",
  //   flexDirection: "column",
}));

const AboutUsMainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
}));

const ImageBox = styled(Box)(({ theme, imageUrl }) => ({
  fontFamily: theme.typography.secondaryText.fontFamily,
  height: 141,
  width: "100%",
  position: "relative",
  borderBottom: `5px solid #fff`,
  "& div": {
    top: -10,
    borderRadius: "50%",
    height: 141,
    width: 141,
    border: `3px solid ${theme.palette.avatar.borderColor}`,
    boxShadow: `0px 4px 4px ${theme.palette.avatar.borderColor}80`,
    flexDirection: "column",
  },
  "& img": {
    borderRadius: "50%",
    height: "100%",
    width: "100",
  },
  "& span": {
    "& img": {
      marginTop: "-15px",
      marginLeft: "40%",
      height: 32.18,
      width: 32.18,
      border: "none",
      boxShadow: "none",
      borderRadius: "none",
    },
    "& p": {
      marginTop: "-10px",
      textAlign: "center",
      color: theme.palette.secondary.main,
      fontSize: "12px",
    },
  },
}));

const AboutUsInfoBox = styled(Box)(({ theme }) => ({
  paddingTop: 30,

  "& h1": {
    color: theme.palette.secondary.purpleBaloon,
    fontSize: 30,
    fontWeight: 500,
    fontFamily: theme?.fontFamily.primary,
    textTransform: "uppercase",
    lineHeight: 1,
    "& span": {
      fontSize: 16,
      fontFamily: theme?.fontFamily.Rubik,
      textTransform: "capitalize",
    },
  },

  "& p": {
    fontSize: 16,
    fontWeight: 400,
    fontFamily: theme?.fontFamily.Rubik,
    "& span": {
      marginRight: 10,
    },
  },
}));

const ViewImageBox = styled(Box)(({ theme }) => ({
  width: "80%",
}));

export const AboutUS = ({ setValue }) => {
  const handleRedirect = () => {
    setValue(3);
  };
  return (
    <>
      <PackageDetailsMainBox>
        <img src={imageConatainer} alt="image" width="100%" />
        <AboutUsMainBox>
          <AboutUsContainer
            style={{
              marginTop: "-100px",
              marginLeft: "35px",
              width: "100%",
            }}
          >
            <ImageBox>
              <div>
                <img
                  src="https://picsum.photos/5000/3333"
                  height={141}
                  width={141}
                  alt="person-img"
                />
                <span>
                  <img src={verified} /> <p>Verified</p>
                </span>
              </div>
            </ImageBox>

            <AboutUsInfoBox>
              <h1>
                Dr. Ramya
                <br />
                <span>12 Yr. of exp</span>
              </h1>

              <p>BDS MDS - Naturopathy and Ayurveda</p>
              <p>Yeshwantpura, Bangalore</p>
              <p>www.dr.ramya.com</p>

              <p>
                <span>
                  <img src={location} height={15} width={15} alt="location" />
                </span>
                Locate other branches
              </p>
              <p>
                <span>
                  <img src={clock} height={15} width={15} alt="clock" />
                </span>
                Wednesday 9:30 am–6 pm
              </p>
              <ViewImageBox>
                {photos.map((src, index) => (
                  <img
                    src={src}
                    onClick={handleRedirect}
                    key={`image ${index}`}
                    alt={`image ${index + 1}`}
                    style={{ margin: "0.5px 8px 0.5px 8px", cursor: "pointer" }}
                    height={60}
                    width={60}
                  />
                ))}
              </ViewImageBox>
              <Button onClick={handleRedirect}>View More</Button>
            </AboutUsInfoBox>
          </AboutUsContainer>

          <AboutUsContainer
            style={{
              marginTop: "-60px",
              marginLeft: "148px",
            }}
          >
            <div className="card1">
              <img src="https://picsum.photos/id/11/60" alt="image" />

              <p>
                Discover nature's way of healing with harmony at the Jiva Spa.
                The wisdom gathered from centuries of studies on wellness. The
                skilled hands of our trained therapists. This internationally
                renowned centre for wellness soothes yet invigorates your mind,
                body and soul.{" "}
              </p>

              <p>
                <b>Specialties</b>
              </p>
              <p style={{ margin: "10px" }}>
                <img src="https://picsum.photos/id/15/60" alt="image" />
                <img src="https://picsum.photos/id/15/60" alt="image" />
                <img src="https://picsum.photos/id/15/60" alt="image" />
              </p>
              <p>BDS MDS - Naturopathy and Ayurveda </p>
              <p>www.dr.ramya.com</p>
              <p>Locate other branches</p>
              <p>Wednesday 9:30 am–6 pm</p>
            </div>
          </AboutUsContainer>
        </AboutUsMainBox>
      </PackageDetailsMainBox>
    </>
  );
};
