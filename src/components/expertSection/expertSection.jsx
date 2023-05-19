import { Stack, styled, Box, useMediaQuery } from "@mui/material";
import { PrimaryText, PrimarySubText } from "../common/typographies/typographies";
import { TextCenterBox } from "../common/containers/containers";
import expertImage from "../../assets/images/expertsection.jpg";

const ExpertSectionMainBox = styled(TextCenterBox)(({ theme }) => ({
  height: "auto",
  width: "auto",
  backgroundColor: theme.palette.expertColor.main,
  flexDirection: "column",
  paddingBottom: 40,
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    width: "auto",
  },
  justifyContent: "unset",
}));

const Title = styled(PrimaryText)(({ theme }) => ({
  fontSize: 40,
  fontWeight: 500,
  paddingTop: 40,

  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
  },
}));
const SubTitle = styled(PrimarySubText)(({ theme }) => ({
  paddingBottom: 20,
  textAlign: "center",
  paddingTop: 10,
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    padding: "0px 31.5px 20px 31.5px",
  },
}));
const ContentBox = styled(TextCenterBox)(({ theme }) => ({
  backgroundColor: theme.palette.textSecondary.main,
  width: 607,
  [theme.breakpoints.down("sm")]: {
    height: 100,
    width: 341,
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  // background: "red",
  backgroundImage: `url(${expertImage})`,
  height: 213,
  width: 213,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  [theme.breakpoints.down("sm")]: {
    height: 100,
    width: 100,
  },
}));
const ContentBoxTitle = styled(PrimaryText)(({ theme }) => ({
  fontWeight: 500,
  fontSize: 25,
  paddingBottom: 10,
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
  },
}));

const ContentSubBox = styled(TextCenterBox)(({ theme }) => ({
  height: 213,
  width: 394,
  backgroundColor: theme.palette.textSecondary.main,
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    height: 100,
    width: 241,
  },
}));

const SubContainerBox = styled(TextCenterBox)(({ theme }) => ({
  height: 49,
  width: 274,
  border: `1px solid ${theme.palette.primary.main}`,
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    height: 32,
    width: 149,
  },
}));
const SubContainerBoxText = styled(PrimarySubText)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: 10,
  },
}));
export const ExpertSection = () => {
  return (
    <ExpertSectionMainBox>
      <Title variant="primaryTitle" color={"secondary"}>
        Is this the best solution for me?
      </Title>
      <SubTitle variant="secondaryText" color={"textPrimary"}>
        Take our expert doctor's assessment to find out if this is the right solution for
      </SubTitle>
      <ContentBox>
        <ImageBox />
        <ContentSubBox>
          <ContentBoxTitle variant="primaryTitle" color={"secondary"}>
            Talk to our experts
          </ContentBoxTitle>
          <SubContainerBox>
            <SubContainerBoxText variant="secondaryText" color={"primary"}>
              Take Quick Assessment
            </SubContainerBoxText>
          </SubContainerBox>
        </ContentSubBox>
      </ContentBox>
    </ExpertSectionMainBox>
  );
};
