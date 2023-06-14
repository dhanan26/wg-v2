import { Box, styled, useMediaQuery } from "@mui/material";
import greenTick from "../../assets/icons/list-green-tick.svg";
import grayTick from "../../assets/icons/list-gray-tick.svg";
import { useRef, useState } from "react";
import {
  Container,
  HeaderContainer,
  HeaderMainSection,
  HeaderImage,
  HeaderInfo,
  SpecialtyBox,
  HeaderAwards,
  DescriptionContainer,
  GenderContainer,
  SplitContainer,
  FlexBox,
  SpecialtyMainBox,
  AmenityMainBox,
} from "./packageInfo.styles";
const LIMIT = 8;

export const PackageInfo = ({
  header,
  description,
  packageInfo,
  programList,
  specialties,
  amenities,
  bestPractices,
}) => {
  const [specialtiesLimit, setSpecialtiesLimit] = useState(LIMIT);
  const [amenitiesLimit, setAmenitiesLimit] = useState(LIMIT);

  const topBoxRef = useRef(null);

  //   useEffect(() => {
  //     if (topBoxRef) {
  //       topBoxRef.current.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }, [specialtiesLimit]);

  //   useEffect(() => {
  //     if (bottomBoxRef) {
  //       bottomBoxRef.current.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }, [amenitiesLimit]);

  return (
    <Container>
      <Header header={header} />
      <Description description={description} info={packageInfo} />
      <SplitContainer ref={topBoxRef}>
        <FlexBox>
          <h3>Program Inclusion</h3>
          <ui>
            {programList?.map((program, index) => {
              return (
                <li key={index}>
                  <img src={greenTick} height={20} />
                  {program}
                </li>
              );
            })}
          </ui>
        </FlexBox>
        <FlexBox>
          <SpecialtiesContainer
            specialties={specialties}
            specialtiesLimit={specialtiesLimit}
            setSpecialtiesLimit={setSpecialtiesLimit}
          />
        </FlexBox>
      </SplitContainer>
      <SplitContainer backgroundColor={"#F2F2F2"} reverse>
        <FlexBox>
          <h3>Best Practices</h3>
          <ui>
            {bestPractices?.map((practice, index) => (
              <li key={index}>
                <img src={grayTick} height={20} />
                {practice}
              </li>
            ))}
          </ui>
        </FlexBox>
        <FlexBox>
          <AmenitiesContainer
            amenities={amenities}
            amenitiesLimit={amenitiesLimit}
            setAmenitiesLimit={setAmenitiesLimit}
          />
        </FlexBox>
      </SplitContainer>
    </Container>
  );
};

const SpecialtiesContainer = ({
  specialties,
  specialtiesLimit,
  setSpecialtiesLimit,
}) => {
  return (
    <SpecialtyMainBox>
      <h3>Specialties</h3>
      <div>
        {specialties?.map((specialty, index) => {
          if (index > specialtiesLimit) return;
          return (
            <span key={index}>
              <img src={specialty.imgSrc} height={25} width={25} />
              {specialty.name}
            </span>
          );
        })}
        {specialties?.length > specialtiesLimit ? (
          <span
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => setSpecialtiesLimit(specialties?.length)}
          >
            +{specialties?.length - specialtiesLimit - 1} more
          </span>
        ) : (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setSpecialtiesLimit(LIMIT)}
          >
            Show less
          </span>
        )}
      </div>
    </SpecialtyMainBox>
  );
};

const AmenitiesContainer = ({
  amenities,
  amenitiesLimit,
  setAmenitiesLimit,
}) => {
  return (
    <AmenityMainBox>
      <h3>Amenities</h3>
      <div>
        {amenities?.map((amenity, index) => {
          if (index > amenitiesLimit) return;
          return (
            <span key={index}>
              <img src={amenity.imgSrc} height={25} width={25} />
              {amenity.name}
            </span>
          );
        })}
        {amenities?.length > amenitiesLimit ? (
          <span
            style={{ color: "red" }}
            onClick={() => setAmenitiesLimit(amenities?.length)}
          >
            +{amenities?.length - amenitiesLimit - 1} more
          </span>
        ) : (
          <span onClick={() => setAmenitiesLimit(LIMIT)}>Show less</span>
        )}
      </div>
    </AmenityMainBox>
  );
};

const Header = ({ header }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <>
      <HeaderContainer>
        <HeaderMainSection>
          <HeaderImage>
            <img src={header?.logo} />
          </HeaderImage>
          {!isSmallScreen && (
            <HeaderInfo>
              <div>
                <h4>{header?.info?.type}</h4>
                {header?.info?.specialties?.map((specialty, index) => (
                  <SpecialtyBox key={index}>{specialty}</SpecialtyBox>
                ))}
              </div>
              <h2>
                {header?.info?.name} ({header?.info?.sessionDuration} Mins)
              </h2>
              <div>
                <p>
                  Duration: <b>{header?.info?.duration} Days</b>
                </p>
                <b>|</b>
                <p>
                  Sessions: <b>{header?.info?.session}</b>
                </p>
                <b>|</b>
                <p>
                  Session Duration: <b>{header?.info?.sessionDuration} Mins</b>
                </p>
                <b>|</b>
                <p>
                  Valid For: <b>{header?.info?.validFor} Day</b>
                </p>
                <b>|</b>
                <p>
                  <b>{header?.info?.person}</b> Person
                </p>
              </div>
            </HeaderInfo>
          )}
        </HeaderMainSection>
        <HeaderAwards>
          {header?.awards?.map((award, index) => (
            <img key={index} src={award} />
          ))}
        </HeaderAwards>
      </HeaderContainer>
      {isSmallScreen && (
        <HeaderInfo>
          <div>
            <h4>{header?.info?.type}</h4>
            {header?.info?.specialties?.map((specialty, index) => (
              <SpecialtyBox key={index}>{specialty}</SpecialtyBox>
            ))}
          </div>
          <h2>
            {header?.info?.name} ({header?.info?.sessionDuration}Mins)
          </h2>
          <div>
            <p>
              Duration: <b>{header?.info?.duration} Days</b>
            </p>
            <b>|</b>
            <p>
              <b>{header?.info?.person}</b> Person
            </p>
          </div>
          <div>
            <p>
              Sessions: <b>{header?.info?.session}</b>
            </p>
            <b>|</b>
            <p>
              Session Duration: <b>{header?.info?.sessionDuration}Mins</b>
            </p>
            <b>|</b>
            <p>
              Valid For: <b>{header?.info?.validFor}Day</b>
            </p>
          </div>
        </HeaderInfo>
      )}
    </>
  );
};

const Description = ({ description, info }) => {
  return (
    <DescriptionContainer>
      <h3>Description</h3>
      <p>{description}</p>
      <div>
        <span>{info?.address}</span>
        <b>|</b>
        {info?.serviceType.map((service, index) => (
          <span key={index}>
            <img src={service?.imgSrc} height={12} width={12} /> {service?.text}
          </span>
        ))}
        <b>|</b>
        <GenderContainer>
          {info?.genders.map((gender, index) => (
            <span key={index}>{gender}</span>
          ))}
          <b>|</b>
          {info?.freeCancellation ? (
            <span style={{ color: "red" }}>Free Cancellation</span>
          ) : (
            <span>No Cancellation</span>
          )}
        </GenderContainer>
      </div>
    </DescriptionContainer>
  );
};
