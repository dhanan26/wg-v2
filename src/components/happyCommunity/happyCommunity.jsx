import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { TextCenterBox, GridBox } from "../common/containers/containers";
import {
  PrimarySubText,
  PrimaryText,
} from "../common/typographies/typographies";
import ImageListItem from "@mui/material/ImageListItem";
import image1 from "../../assets/images/Happy Community/happy_community-1.png";
import image2 from "../../assets/images/Happy Community/happy_community-2.png";
import image3 from "../../assets/images/Happy Community/happy_community-3.png";
import image4 from "../../assets/images/Happy Community/happy_community-4.png";
import image5 from "../../assets/images/Happy Community/happy_community-5.png";
import image6 from "../../assets/images/Happy Community/happy_community-6.png";
import Results from "../../assets/images/Happy Community/results.png";
import Medicine from "../../assets/images/Happy Community/medicine.png";
import Doctors from "../../assets/images/Happy Community/doctors.png";
import Care from "../../assets/images/Happy Community/care.png";

const imageData = [
  {
    img: image1,
    title: "image1",
  },
  {
    img: image2,
    title: "image2",
  },
  {
    img: image3,
    title: "image3",
  },
  {
    img: image4,
    title: "image4",
  },
  {
    img: image5,
    title: "image5",
  },
  {
    img: image6,
    title: "image6",
  },
];

const footerData = [
  {
    img: Results,
    title: "Results",
    subText: "Guaranteed Results",
  },
  {
    img: Medicine,
    title: "Medicine",
    subText: "Authentic Medicines",
  },
  {
    img: Doctors,
    title: "Doctors",
    subText: "Expert Doctors",
  },
  {
    img: Care,
    title: "Care",
    subText: "Personalized Care",
  },
];

const HappyCommunityBox = styled(TextCenterBox)(({ theme }) => ({
  height: 640,
  backgroundColor: theme.palette.cardActive.main,
  [theme.breakpoints.down(`smd`)]: {
    height: 650,
  },
}));

const HappyCommunityTitleBox = styled(TextCenterBox)(({ theme }) => ({
  height: 117,
  [theme.breakpoints.down("lg")]: {
    height: 115,
  },
  flexDirection: "column",
  textAlign: "center",
  gap: 18,
}));

const HappyCommunityTitle = styled(PrimaryText)(({ theme }) => ({
  [theme.breakpoints.down("smd")]: {
    fontSize: 30,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 30,
  },
}));

const HappyCommunitySubTitle = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 14,
  [theme.breakpoints.down("lg")]: {
    fontSize: 14,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
  },
  fontWeight: 400,
  fontFamily: theme?.fontFamily.Rubik,
}));

const HappyCommunitySubText = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 500,
  fontFamily: theme?.fontFamily.primary,
  textAlign: "center",
  marginTop: "15px",
}));

const Item = (props) => {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        borderRadius: "3px",
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
};

const FooterContainer = (props) => {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: "0px 15px 0px 15px",
        borderRadius: "3px",
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
};

export const HappyCommunity = () => {
  return (
    <>
      <HappyCommunityBox>
        <HappyCommunityTitleBox>
          <HappyCommunityTitle variant="primaryTitle" color="secondary">
            Our Happy Community
          </HappyCommunityTitle>
          <HappyCommunitySubTitle variant="secondaryTitle" color="textPrimary">
            Lorem ipsum dolor sit amet consectetur. Ante sapien.
          </HappyCommunitySubTitle>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 6,
            }}
          >
            {imageData.map((item) => (
              <Item sx={{ backgroundColor: "#ACE6CF", paddingBottom: "0px" }}>
                <ImageListItem key={item.img}>
                  <img src={item.img} alt={item.title} loading="lazy" />
                </ImageListItem>
              </Item>
            ))}
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
            }}
          >
            {footerData.map((item) => (
              <FooterContainer>
                <img src={item.img} alt={item.title} loading="lazy" />
                <HappyCommunitySubText color="textPrimary">
                  {item.subText}
                </HappyCommunitySubText>
              </FooterContainer>
            ))}
          </Box>
        </HappyCommunityTitleBox>
      </HappyCommunityBox>
    </>
  );
};
