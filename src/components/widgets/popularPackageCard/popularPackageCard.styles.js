import { styled, Card, CardMedia, CardContent, Box } from "@mui/material";
import { PrimaryText, PrimarySubText } from "../../common/typographies/typographies";
import { SecondaryButton } from "../../common/buttons/button";
export const StyledPopularPackageCard = styled(Card)(({ theme, active }) => ({
  height: 339,
  width: 293,
  borderRadius: 2,
  boxShadow: "none",
  backgroundColor: active ? theme.palette.cardActive.main : "none",
  cursor: "pointer",
  [theme.breakpoints.down("mlg")]: {
    height: 270,
    width: 232,
  },
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 218,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  [theme.breakpoints.down("mlg")]: {
    height: 194,
  },
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  height: 100,
  [theme.breakpoints.down("mlg")]: {
    height: 76,
  },
}));

export const CardTitle = styled(PrimaryText)(({ theme }) => ({
  fontSize: 25,
  textAlign: "left",
  [theme.breakpoints.down("mlg")]: {
    fontSize: 20,
  },
}));

export const CardSubText = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 14,
  textAlign: "left",
  [theme.breakpoints.down("mlg")]: {
    fontSize: 10,
  },
}));

export const StyledTitleBox = styled(Box)(({ theme }) => ({
  paddingTop: 3,
  paddingLeft: 1,
  display: "flex",
  flexDirection: "column",
  gap: 4,
  marginBottom: 20,
  [theme.breakpoints.down("mlg")]: {
    flexDirection: "row",
    marginBottom: 20,
  },
}));

export const CardMediaSubText = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 10,
  textAlign: "left",
  [theme.breakpoints.down("mlg")]: {
    fontSize: 8,
  },
}));

export const CardMediaButton = styled(SecondaryButton)(({ theme }) => ({
  width: 63,
  height: 28,
  fontSize: 12,
  [theme.breakpoints.down("mlg")]: {
    width: 55,
    height: 25,
  },
}));

export const StyledStack = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginBottom: 20,
  marginLeft: 5,
  marginRight: 5,
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("mlg")]: {
    marginBottom: 40,
  },
}));
