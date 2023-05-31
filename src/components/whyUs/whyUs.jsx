import { Box, useMediaQuery } from "@mui/material";
import image1 from "../../assets/images/Why Us/Why_Us-1.png";
import image2 from "../../assets/images/Why Us/Why_Us-2.png";
import image3 from "../../assets/images/Why Us/Why_Us-3.png";
import { WhyUsBox, WhyUsTitleBox, WhyUsTitle, WhyUsSubTitle, WhyUsSubText, CustomImageBox } from "./whyUs.styles";

export const WhyUS = () => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  return (
    <WhyUsBox>
      <WhyUsTitleBox>
        <WhyUsTitle variant="primaryTitle" color="secondary">
          Why Us?
        </WhyUsTitle>
        <WhyUsSubTitle variant="secondaryTitle" color="textPrimary">
          We offer more than just clinically proven beauty products, and provide holistic care for hair and nutrition
          led by trichologists and dieticians
        </WhyUsSubTitle>

        <CustomImageBox>
          <Box sx={{ gridArea: "main" }}>
            {isSmallScreen ? (
              <img src={image1} alt="image1" loading="lazy" width={100} />
            ) : (
              <img src={image1} alt="image1" loading="lazy" />
            )}
            <WhyUsSubText color="textPrimary">We understand your needs</WhyUsSubText>
          </Box>
          <Box sx={{ gridArea: "sidebar" }}>
            {isSmallScreen ? (
              <img src={image2} alt="image1" loading="lazy" width={100} />
            ) : (
              <img src={image2} alt="image1" loading="lazy" />
            )}
            <WhyUsSubText color="textPrimary">We understand your needs</WhyUsSubText>
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
            <WhyUsSubText color="textPrimary">We understand your needs</WhyUsSubText>
          </Box>
        </CustomImageBox>
      </WhyUsTitleBox>
    </WhyUsBox>
  );
};
