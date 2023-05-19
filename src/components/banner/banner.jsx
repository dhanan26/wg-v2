import { StyledMainContainer } from "../common/box/box";
import { Stack, styled, Box, useMediaQuery } from "@mui/material";
import { PrimarySubText, PrimaryText } from "../common/typographies/typographies";
import { TextCenterBox } from "../common/containers/containers";
import { PrimaryButton, SecondaryButton } from "../common/buttons/button";
import { ButtonDropdown } from "../common/dropdowns/dropdowns";

//icons
import HeadPhoneIcon from "../../assets/icons/HeadPhoneIcon.svg";
import { Icon } from "../common/icon/icon";

const BannerBox = styled(Box)(({ theme, image }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "auto",
  height: 416,
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    height: 243,
  },
  justifyContent: "center",
  position: "relative",
}));

const BannerMainText = styled(PrimaryText)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: 22,
  },
}));

const BannerSubText = styled(PrimarySubText)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    padding: "0 1rem 0 1rem",
  },
}));

const BannerFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "absolute",
  bottom: "10%",
  width: "93%",
  justifyContent: "space-between",
  marginLeft: "40px",
  [theme.breakpoints.down("md")]: {
    width: "90%",
    marginLeft: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "98%",
    marginLeft: "5px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "94%",
    marginLeft: "15px",
  },
}));

const SubProgramBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: 10,
  alignItems: "center",
}));

const SubProgramButton = styled(PrimaryButton)(() => ({}));

const RecommendationButton = styled(SecondaryButton)(({ theme }) => ({
  color: theme.palette.secondary.main,
  [theme.breakpoints.down("sm")]: {
    width: 142,
    fontSize: 14,
  },
  [theme.breakpoints.down("xs")]: {
    width: 142,
    fontSize: 12,
  },
}));

const TalkToExpertButton = styled(SecondaryButton)(({ theme }) => ({
  ".MuiButton-startIcon": {
    margin: 0,
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: 0,
    width: 42,
  },
}));

const RecommendationBox = styled(SecondaryButton)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: 16,
  [theme.breakpoints.down("sm")]: {
    gap: 10,
  },
}));

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
                {subPrograms?.map((subProgram) => {
                  return (
                    <SubProgramButton key={subProgram} variant="contained" color="buttonSecondary">
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
