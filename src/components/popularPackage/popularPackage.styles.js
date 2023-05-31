import { styled, Box } from "@mui/material";
import { TextCenterBox } from "../common/containers/containers";
import { PrimaryText, PrimarySubText } from "../common/typographies/typographies";
export const PopularPackageBox = styled(Box)(({ theme }) => ({
  height: 498,
  [theme.breakpoints.down("mlg")]: {
    height: 426,
  },
}));

export const PopularPackageTitleBox = styled(TextCenterBox)(({ theme }) => ({
  height: 117,
  [theme.breakpoints.down("lg")]: {
    height: 115,
  },
  flexDirection: "column",
  textAlign: "center",
  gap: 18,
}));

export const PopularPackageMainTitle = styled(PrimaryText)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    fontSize: 30,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
  },
}));

export const PopularPackageSubTitle = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 16,
  [theme.breakpoints.down("lg")]: {
    fontSize: 14,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
  },
  fontWeight: 400,
  fontFamily: theme?.fontFamily.Rubik,
}));

export const SwiperContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",

  [theme.breakpoints.down("sm")]: {
    width: "90%",
    marginLeft: 20,
  },
  // width: "95%",
  marginLeft: "auto",
  marginRight: "auto",
  "& .swiper-slide": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
