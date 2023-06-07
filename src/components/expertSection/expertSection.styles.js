import { styled, Box } from "@mui/material";
import { TextCenterBox } from "../common/containers/containers";
import { PrimaryText, PrimarySubText } from "../common/typographies/typographies";
import expertImage from "../../assets/images/expertsection.jpg";

export const ExpertSectionMainBox = styled(TextCenterBox)(({ theme ,approchType }) => ({
  height: "auto",
  width: "auto",
  backgroundColor: approchType==="Pain"? theme.palette.expertColor.main:theme.palette.cardActive.main,
  flexDirection: "column",
  paddingBottom: 40,
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    width: "auto",
  },
  justifyContent: "unset",
}));

export const Title = styled(PrimaryText)(({ theme }) => ({
  fontSize: 40,
  fontWeight: 500,
  paddingTop: 40,

  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
  },
}));

export const SubTitle = styled(PrimarySubText)(({ theme }) => ({
  paddingBottom: 20,
  textAlign: "center",
  paddingTop: 10,
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    padding: "0px 31.5px 20px 31.5px",
  },
}));

export const ContentBox = styled(TextCenterBox)(({ theme }) => ({
  backgroundColor: theme.palette.textSecondary.main,
  width: 607,
  [theme.breakpoints.down("sm")]: {
    height: 100,
    width: 341,
  },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
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

export const ContentBoxTitle = styled(PrimaryText)(({ theme }) => ({
  fontWeight: 500,
  fontSize: 25,
  paddingBottom: 10,
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
  },
}));

export const ContentSubBox = styled(TextCenterBox)(({ theme }) => ({
  height: 213,
  width: 394,
  backgroundColor: theme.palette.textSecondary.main,
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    height: 100,
    width: 241,
  },
}));

export const SubContainerBox = styled(TextCenterBox)(({ theme }) => ({
  height: 49,
  width: 274,
  border: `1px solid ${theme.palette.primary.main}`,
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    height: 32,
    width: 149,
  },
}));

export const SubContainerBoxText = styled(PrimarySubText)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: 10,
  },
}));
