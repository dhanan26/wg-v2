import { StyledMainContainer } from "../common/box/box";
import { Stack, styled, Box, useMediaQuery } from "@mui/material";
import { PrimarySubText, PrimaryText } from "../common/typographies/typographies";
import { TextCenterBox } from "../common/containers/containers";
import { PrimaryButton, SecondaryButton } from "../common/buttons/button";
import { ButtonDropdown } from "../common/dropdowns/dropdowns";

//icons
import HeadPhoneIcon from "../../assets/icons/HeadPhoneIcon.svg";
import { Icon } from "../common/icon/icon";
import {
  BannerBox,
  BannerMainText,
  BannerSubText,
  BannerFooter,
  SubProgramBox,
  SubProgramButton,
  RecommendationButton,
  TalkToExpertButton,
  RecommendationBox,
} from "./banner.styles";

const subPrograms = ["Upper Back", "Lower Back", "Lower Back", "Lower Back", "Lower Back"];

export const Banner = ({ bannerData }) => {
  const isSmallScreen = useMediaQuery("(max-width:1300px)");
  return (
    <StyledMainContainer>
      <BannerBox image={bannerData}>
        <TextCenterBox>
          <Stack spacing={1}>
            <BannerMainText variant="secondaryTitle" color="textSecondary">
              Back Pain
            </BannerMainText>
            <BannerSubText variant="secondaryTitle" color="textSecondary">
              Back pain can range from a dull, constant ache to a sudden, sharp pain.
            </BannerSubText>
          </Stack>
        </TextCenterBox>
        <BannerFooter>
          {isSmallScreen ? (
            <Box>
              <ButtonDropdown items={subPrograms} defaultValue={"Upper Back"} />
            </Box>
          ) : (
            <>
              <SubProgramBox>
                {subPrograms?.map((subProgram, index) => {
                  return (
                    <SubProgramButton key={index} variant="contained" color="buttonSecondary">
                      {subProgram}
                    </SubProgramButton>
                  );
                })}
              </SubProgramBox>
            </>
          )}
          <RecommendationBox>
            <RecommendationButton variant="contained" color="headerButtonMain">
              Recommendations
            </RecommendationButton>
            {isSmallScreen ? (
              <TalkToExpertButton
                variant="contained"
                color="headerButtonSecondary"
                startIcon={<Icon src={HeadPhoneIcon} className={"header_icon"} />}
              />
            ) : (
              <SecondaryButton variant="contained" color="headerButtonSecondary">
                Talk to Expert
              </SecondaryButton>
            )}
          </RecommendationBox>
        </BannerFooter>
      </BannerBox>
    </StyledMainContainer>
  );
};
