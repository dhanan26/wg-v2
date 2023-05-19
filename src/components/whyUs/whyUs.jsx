import styled from "@emotion/styled";
import { Box, Grid, useMediaQuery } from "@mui/material";
import { TextCenterBox, GridBox } from "../common/containers/containers";
import {
  PrimarySubText,
  PrimaryText,
} from "../common/typographies/typographies";
import { whyUsImageData } from "../../data/whyUs";
import ImageListItem from "@mui/material/ImageListItem";
import image1 from "../../assets/images/Why Us/Why_Us-1.png";
import image2 from "../../assets/images/Why Us/Why_Us-2.png";
import image3 from "../../assets/images/Why Us/Why_Us-3.png";

const WhyUsBox = styled(TextCenterBox)(({ theme }) => ({
  height:209,
  backgroundColor:"red"
}));

const WhyUsTitleBox = styled(TextCenterBox)(({ theme }) => ({
  flexDirection: "column",
  textAlign: "center",
  gap: 10,
}));

const WhyUsTitle = styled(PrimaryText)(({ theme }) => ({
  padding: "40px 0px 0px 0px",
  fontSize: 40,
  color: theme.palette.primary.main,
  [theme.breakpoints.down("smd")]: {
    fontSize: 20,
    padding: "30px 0px 0px 0px",
  },
}));

const WhyUsSubTitle = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 16,
  margin: 0,
  [theme.breakpoints.down("smd")]: {
    fontSize: 12,
    padding: "0px 34px 0px 34px",
  },
  fontWeight: 400,
  fontFamily: theme?.fontFamily.Rubik,
}));

const WhyUsSubText = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 14,
  [theme.breakpoints.down("smd")]: {
    fontSize: 12,
  },
  fontWeight: 400,
  fontFamily: theme?.fontFamily.Rubik,
  textAlign: "center",
  marginTop: "10px",
}));

const CustomImageBox = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 1,
  gridTemplateRows: "auto",
  gridTemplateAreas: `"main footer sidebar "`,
  justifyContent: "center",
  [theme.breakpoints.down("smd")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 1,
    gridTemplateRows: "auto",
    gridTemplateAreas: `
        "main main sidebar sidebar"
        "footer footer footer footer"`,
  },
}));

export const WhyUS = () => {
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  return (
    <>
      <WhyUsBox>
        <WhyUsTitleBox>
          <WhyUsTitle variant="primaryTitle" color="secondary">
            Why Us?
          </WhyUsTitle>
          <WhyUsSubTitle variant="secondaryTitle" color="textPrimary">
            We offer more than just clinically proven beauty products, and
            provide holistic care for hair and nutrition led by trichologists
            and dieticians
          </WhyUsSubTitle>

          <Box
            sx={{
              width: "100%",
              height: "140px",
              color: "#fff",
              "& > .MuiBox-root > .MuiBox-root": {
                p: 1,
                borderRadius: 2,
                fontSize: "0.875rem",
                fontWeight: "700",
              },
            }}
          >
            <CustomImageBox>
              <Box sx={{ gridArea: "main" }}>
                {isSmallScreen ? (
                  <img src={image1} alt="image1" loading="lazy" width={100} />
                ) : (
                  <img src={image1} alt="image1" loading="lazy" />
                )}{" "}
                <WhyUsSubText color="textPrimary">
                  We understand your needs
                </WhyUsSubText>
              </Box>
              <Box sx={{ gridArea: "sidebar" }}>
                {isSmallScreen ? (
                  <img src={image2} alt="image1" loading="lazy" width={100} />
                ) : (
                  <img src={image2} alt="image1" loading="lazy" />
                )}
                <WhyUsSubText color="textPrimary">
                  We understand your needs
                </WhyUsSubText>
              </Box>
              <Box
                sx={{
                  gridArea: "footer",
                }}
              >
                {isSmallScreen ? (
                  <img src={image3} alt="image1" loading="lazy" width={100} />
                ) : (
                  <img src={image3} alt="image1" loading="lazy" />
                )}
                <WhyUsSubText color="textPrimary">
                  We understand your needs
                </WhyUsSubText>
              </Box>
            </CustomImageBox>
          </Box>
        </WhyUsTitleBox>
      </WhyUsBox>
    </>
  );
};
