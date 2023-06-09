import { Box, Button, styled, Typography, useMediaQuery } from "@mui/material";
import imageConatainer from "../../assets/images/Image Container.svg";
import verified from "../../assets/icons/verified.svg";
import clock from "../../assets/icons/clock.svg";
import location from "../../assets/icons/Mark.svg";
import { useState } from "react";
import { AboutUsDropDown } from "../common/dropdowns/dropdowns";
const PackageDetailsMainBox = styled(Box)(({ theme }) => ({
  //   backgroundColor: "yellow",
  top: 0,
}));
const AboutUsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    marginTop: "-50px",
    width: "auto",
    marginLeft: "1.5rem",
  },
  marginTop: "-100px",
  marginLeft: "35px",
  width: "50%",
}));

const AboutUsMainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    rowGap: 40,
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.secondaryText.fontFamily,
  height: 141,
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

const AwardsBox = styled(Box)(({ theme }) => ({
  textAlignLast: "right",
  width: "100%",
  marginRight: "10px",
  marginTop: "20px",
}));

const ViewImageBox = styled(Box)(({ theme }) => ({
  width: "80%",
}));

const BadgesBox = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: "0 1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  "& div": {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    "& span": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  },
}));

const BannerImageBox = styled(Box)(({ theme, image }) => ({
  width: "auto",
  height: 179,
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}));

export const AboutUS = ({ setValue, individualData, photosRef }) => {
  const SpecialtiesLimit = individualData.Specialties.length - 2;
  const AmenitiesLimit = 8;
  const imageLimit = 2;
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const [specialtiesLimit, setSpecialtiesLimit] = useState(SpecialtiesLimit);
  const [amenitiesLimit, setAmenitiesLimit] = useState(AmenitiesLimit);

  const handleRedirect = () => {
    photosRef.current?.scrollIntoView({
      behavior: "smooth",
    });
    setValue(3);
  };
  const States = ["Bangalore", "Chennai", "Kolkata"];
  const Timings = ["Monday 9:30 am–6 pm", "Tuesday 9:30 am–6 pm", "Wednesday 9:30 am–6 pm"];
  return (
    <>
      <PackageDetailsMainBox>
        <BannerImageBox image="https://picsum.photos/5000/3333" />
        <AboutUsMainBox>
          <AboutUsContainer>
            <div
              style={{
                display: "flex",
                displayDirection: "column",
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
              {isSmallScreen ? (
                <AwardsBox>
                  {individualData.awards.map((src, index) => (
                    <img
                      src={src}
                      onClick={handleRedirect}
                      key={`image ${index}`}
                      alt={`image ${index + 1}`}
                      style={{ margin: "5px" }}
                      height={64}
                      width={50}
                    />
                  ))}
                </AwardsBox>
              ) : (
                ""
              )}
            </div>

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
                {/* <span> */}
                <img src={location} height={15} width={15} alt="location" />
                {/* </span> */}
                <AboutUsDropDown label={"Location"} items={States} />
              </p>
              <p>
                {/* <span> */}
                <img src={clock} height={15} width={15} alt="clock" />
                {/* </span> */}
                <AboutUsDropDown label={"Timings"} items={Timings}></AboutUsDropDown>
              </p>
              <ViewImageBox>
                {individualData.photos.map((src, index) => {
                  if (index > imageLimit) return;
                  return (
                    <img
                      src={src}
                      onClick={handleRedirect}
                      key={`image ${index}`}
                      alt={`image ${index + 1}`}
                      style={{
                        margin: "0.5px 8px 0.5px 8px",
                        cursor: "pointer",
                      }}
                      height={60}
                      width={60}
                    />
                  );
                })}
              </ViewImageBox>
              <Button onClick={handleRedirect}>View More</Button>
            </AboutUsInfoBox>
          </AboutUsContainer>

          <AboutUsContainer>
            <div style={{ marginTop: "40px" }}>
              {!isSmallScreen ? (
                <>
                  {individualData.awards.map((src, index) => (
                    <img
                      src={src}
                      key={`image ${index}`}
                      alt={`image ${index + 1}`}
                      style={{
                        margin: "0.5px 23px 0.5px 23px",
                      }}
                      height={100}
                      width={80}
                    />
                  ))}
                </>
              ) : (
                ""
              )}

              <p>{individualData.description}</p>

              <BadgesBox>
                <p>
                  <b>Specialties</b>
                </p>
                <div>
                  {individualData.Specialties.map((data, index) => {
                    if (index > specialtiesLimit) return;
                    return (
                      <span key={`Specialties ${index}`}>
                        <img
                          src={data.src}
                          alt={`Specialties ${index + 1}`}
                          height={25}
                          width={25}
                        />
                        {data.name}
                      </span>
                    );
                  })}

                  {individualData.Specialties?.length > specialtiesLimit ? (
                    <span
                      style={{
                        color: "red",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        setSpecialtiesLimit(individualData.Specialties?.length)
                      }
                    >
                      +
                      {individualData.Specialties?.length -
                        specialtiesLimit -
                        1}{" "}
                      more
                    </span>
                  ) : (
                    <span
                      style={{
                        color: "red",
                        cursor: "pointer",
                      }}
                      onClick={() => setSpecialtiesLimit(SpecialtiesLimit)}
                    >
                      Show less
                    </span>
                  )}
                </div>
              </BadgesBox>

              <BadgesBox>
                <p>
                  <b>Amenities</b>
                </p>
                <div>
                  {individualData.Amenities.map((data, index) => {
                    if (index > amenitiesLimit) return;
                    return (
                      <span key={`Amenities ${index}`}>
                        <img
                          src={data.src}
                          alt={`Amenities ${index + 1}`}
                          height={25}
                          width={25}
                        />
                        {data.name}
                      </span>
                    );
                  })}

                  {individualData.Amenities?.length > amenitiesLimit ? (
                    <span
                      style={{
                        color: "red",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        setAmenitiesLimit(individualData.Amenities?.length)
                      }
                    >
                      +{individualData.Amenities?.length - amenitiesLimit - 1}{" "}
                      more
                    </span>
                  ) : (
                    <span
                      style={{
                        color: "red",
                        cursor: "pointer",
                      }}
                      onClick={() => setAmenitiesLimit(AmenitiesLimit)}
                    >
                      Show less
                    </span>
                  )}
                </div>
              </BadgesBox>
            </div>
          </AboutUsContainer>
        </AboutUsMainBox>
      </PackageDetailsMainBox>
    </>
  );
};
