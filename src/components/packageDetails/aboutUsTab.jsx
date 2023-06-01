import { Box, Button, styled, Typography, useMediaQuery } from "@mui/material";
import imageConatainer from "../../assets/images/Image Container.svg";
import verified from "../../assets/icons/verified.svg";
import clock from "../../assets/icons/clock.svg";
import location from "../../assets/icons/Mark.svg";
import { useState } from "react";
import {
  BadgesBox,
  AwardsBox,
  ViewImageBox,
  AboutUsInfoBox,
  ImageBox,
  AboutUsMainBox,
  AboutUsContainer,
  PackageDetailsMainBox,
} from "./aboutUsTab.styles";

export const AboutUS = ({ setValue, individualData }) => {
  const SpecialtiesLimit = individualData.Specialties.length - 2;
  const AmenitiesLimit = 8;
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const [specialtiesLimit, setSpecialtiesLimit] = useState(SpecialtiesLimit);
  const [amenitiesLimit, setAmenitiesLimit] = useState(AmenitiesLimit);

  const handleRedirect = () => {
    setValue(3);
  };
  return (
    <>
      <PackageDetailsMainBox>
        <img src={imageConatainer} alt="image" width="100%" />
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
                  <img src="https://picsum.photos/5000/3333" height={141} width={141} alt="person-img" />
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
                        <img src={data.src} alt={`Specialties ${index + 1}`} height={25} width={25} />
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
                      onClick={() => setSpecialtiesLimit(individualData.Specialties?.length)}
                    >
                      +{individualData.Specialties?.length - specialtiesLimit - 1} more
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
                        <img src={data.src} alt={`Amenities ${index + 1}`} height={25} width={25} />
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
                      onClick={() => setAmenitiesLimit(individualData.Amenities?.length)}
                    >
                      +{individualData.Amenities?.length - amenitiesLimit - 1} more
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
