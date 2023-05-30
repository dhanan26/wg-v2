import { styled, Box } from "@mui/material";
import { PrimaryText, PrimarySubText } from "../common/typographies/typographies";
import { PrimaryButton, SecondaryButton } from "../common/buttons/button";
export const BannerBox = styled(Box)(({ theme, image }) => ({
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

export const BannerMainText = styled(PrimaryText)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: 22,
  },
}));
export const BannerSubText = styled(PrimarySubText)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    padding: "0 1rem 0 1rem",
  },
}));
export const BannerFooter = styled(Box)(({ theme }) => ({
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
export const SubProgramBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: 10,
  alignItems: "center",
}));

export const SubProgramButton = styled(PrimaryButton)(() => ({}));

export const RecommendationButton = styled(SecondaryButton)(({ theme }) => ({
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

export const TalkToExpertButton = styled(SecondaryButton)(({ theme }) => ({
  ".MuiButton-startIcon": {
    margin: 0,
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: 0,
    width: 42,
  },
}));

export const RecommendationBox = styled(SecondaryButton)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: 16,
  [theme.breakpoints.down("sm")]: {
    gap: 10,
  },
}));
