import { Box, Button, styled, Typography } from "@mui/material";
import imageConatainer from "../../assets/images/Image Container.svg";
import verified from "../../assets/icons/verified.svg";
import clock from "../../assets/icons/clock.svg";
import location from "../../assets/icons/Mark.svg";
import React from "react";

const PackageDetailsMainBox = styled(Box)(({ theme }) => ({
  //   backgroundColor: "yellow",
  top: 0,
}));
const AboutUsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const AboutUsMainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    rowGap: 40
  },
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

export const AboutUS = ({ setValue, individualData }) => {
  const handleRedirect = () => {
    setValue(3);
  };
  return (
    <>
      <PackageDetailsMainBox>
        {/* <img src={imageConatainer} alt="image" width="100%" /> */}
        <AboutUsMainBox>
          <AboutUsContainer
            style={{
              marginTop: "-100px",
              marginLeft: "35px",
              width: "50%",
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
                {individualData.name}
                <br />
                <span>{individualData.experience}</span>
              </h1>

              <p>{individualData.designation}</p>
              <p>{individualData.address}</p>
              <p>{individualData.link}</p>

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
                {individualData.photos.map((src, index) => (
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
              marginTop: "-50px",
              // marginLeft: "128px",
              width: "100%",
            }}
          >
            <div className="card1">
              {individualData.awards.map((src, index) => (
                <img
                  src={src}
                  onClick={handleRedirect}
                  key={`image ${index}`}
                  alt={`image ${index + 1}`}
                  style={{ margin: "0.5px 23px 0.5px 23px", cursor: "pointer" }}
                  height={100}
                  width={80}
                />
              ))}

              <p>{individualData.description}</p>

              <p>
                <b>Specialties</b>
              </p>
              <p style={{ margin: "10px" }}>
                {individualData.Specialties.map((data, index) => (
                  <img
                    src={data.src}
                    key={`image ${index}`}
                    alt={`image ${index + 1}`}
                    style={{ margin: "0.5px 8px 0.5px 8px" }}
                    height={25}
                    width={25}
                  />
                ))}
              </p>
              <p>
                <b>Amenities</b>
              </p>
              <Box
                style={{
                  flex: 1,
                  padding: "0 1rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
                >
                  {individualData.Amenities.map((data, index) => (
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                      key={`Amenities ${index}`}
                    >
                      <img
                        src={data.src}
                        alt={`Amenities ${index + 1}`}
                        style={{
                          margin: "0.5px 8px 0.5px 8px",
                          cursor: "pointer",
                        }}
                        height={25}
                        width={25}
                      />
                      {data.name}
                    </span>
                  ))}
                </div>
              </Box>
            </div>
          </AboutUsContainer>
        </AboutUsMainBox>
      </PackageDetailsMainBox>
    </>
  );
};
