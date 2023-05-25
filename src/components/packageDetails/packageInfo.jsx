import { Box, styled } from "@mui/material";
import greenTick from "../../assets/icons/list-green-tick.svg";
import grayTick from "../../assets/icons/list-gray-tick.svg";
import { useRef, useState } from "react";

const LIMIT = 8;

const Container = styled(Box)(() => ({
  display: "flex",
  gap: "1rem",
  flexDirection: "column",
}));

export const PackageInfo = ({ header, description, info, programList, specialties, amenities, bestPractices }) => {
  const [specialtiesLimit, setSpecialtiesLimit] = useState(LIMIT);
  const [amenitiesLimit, setAmenitiesLimit] = useState(LIMIT);

  const topBoxRef = useRef(null);
  const bottomBoxRef = useRef(null);

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
      <Description description={description} info={info} />
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
              <span style={{ color: "red" }} onClick={() => setSpecialtiesLimit(specialties?.length)}>
                +{specialties?.length - specialtiesLimit - 1} more
              </span>
            ) : (
              <span onClick={() => setSpecialtiesLimit(LIMIT)}>Show less</span>
            )}
          </div>
        </FlexBox>
      </SplitContainer>
      <SplitContainer backgroundColor={"#F2F2F2"} ref={bottomBoxRef}>
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
              <span style={{ color: "red" }} onClick={() => setAmenitiesLimit(amenities?.length)}>
                +{amenities?.length - amenitiesLimit - 1} more
              </span>
            ) : (
              <span onClick={() => setAmenitiesLimit(LIMIT)}>Show less</span>
            )}
          </div>
        </FlexBox>
      </SplitContainer>
    </Container>
  );
};

// header ---------------------------------------------
const HeaderContainer = styled(Box)(() => ({
  display: "flex",
  gap: "1rem",
  padding: "0 1rem",
  justifyContent: "space-between",

  div: {
    display: "flex",
    gap: "1rem",
  },
}));

const HeaderImage = styled(Box)(({ theme }) => ({
  img: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    border: `3px solid ${theme.palette.primary.main}`,
    boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
  },
}));

const HeaderInfo = styled(Box)(({ theme }) => ({
  margin: "0.063rem 0.313rem",
  fontFamily: theme.typography.secondaryText.fontFamily,
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  div: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "0.5rem",
    p: {
      margin: "unset",
      fontWeight: "500",
    },
  },
  h4: {
    fontWeight: "700",
    margin: "unset",
    fontSize: "0.8rem",
  },
  h2: {
    fontWeight: "500",
    margin: "unset",
    fontSize: "1rem",
  },
}));

const SpecialtyBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.packageInfo.chipColor,
  padding: "0.25rem 0.5rem",
  fontSize: "0.8rem",
  color: "white",
}));

const HeaderAwards = styled(Box)(() => ({
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
  minWidth: "calc(66px + 66px + 1rem)",
  img: {
    height: "88px",
    width: "66px",
  },
}));

const Header = ({ header }) => {
  return (
    <HeaderContainer>
      <div>
        <HeaderImage>
          <img src={header?.logo} />
        </HeaderImage>
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
            <b>|</b>
            <p>
              <b>{header?.info?.person}</b> Person
            </p>
          </div>
        </HeaderInfo>
      </div>
      <HeaderAwards>
        {header?.awards?.map((award, index) => (
          <img key={index} src={award} />
        ))}
      </HeaderAwards>
    </HeaderContainer>
  );
};

// description ---------------------------------------------

const DescriptionContainer = styled(Box)(({ theme }) => ({
  color: theme.palette.textPrimary.main,
  padding: "0 1rem",
  h3: {
    fontFamily: theme.typography.primaryTitle.fontFamily,
    fontWeight: 500,
    fontSize: "1rem",
    margin: "unset",
  },
  p: {
    fontFamily: theme.typography.secondaryText.fontFamily,
    fontWeight: 400,
    fontSize: "0.8rem",
  },
  div: {
    fontFamily: theme.typography.secondaryText.fontFamily,
    fontSize: "0.8rem",
    display: "flex",
    gap: "0.8rem",
  },
}));

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
        {info?.genders.map((gender, index) => (
          <span key={index}>{gender}</span>
        ))}
        <b>|</b>

        {info?.freeCancellation ? <span style={{ color: "red" }}>Free Cancellation</span> : <span>No Cancellation</span>}
      </div>
    </DescriptionContainer>
  );
};

const SplitContainer = styled(Box)(({ backgroundColor }) => ({
  backgroundColor: backgroundColor,
  display: "flex",
  justifyContent: "space-between",
}));

const FlexBox = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: "0 1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  h3: {
    fontFamily: theme.typography.secondaryText.fontFamily,
    fontSize: "1rem",
    fontWeight: 500,
  },
  ul: {
    gap: "1rem",
  },
  li: {
    listStyle: "none",
    display: "flex",
    gap: "0.4rem",
    alignItems: "flex-start",
    fontFamily: theme.typography.secondaryText.fontFamily,
    fontSize: "0.9rem",
    fontWeight: 400,
    margin: "0 0 10px 0",
  },
  div: {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
  },
  span: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    fontFamily: theme.typography.secondaryText.fontFamily,
    fontSize: "0.9rem",
    fontWeight: 400,
    gap: "0.5rem",
    margin: "0 0 10px 0",
    minWidth: 60,
  },
}));