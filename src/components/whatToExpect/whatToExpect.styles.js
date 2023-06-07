import { styled, Box } from "@mui/material";
import { TextCenterBox } from "../common/containers/containers";
import { PrimaryText, PrimarySubText } from "../common/typographies/typographies";
export const WhatToExpectBox = styled(TextCenterBox)(({ theme ,approchType}) => ({
  height: "auto",
  width: "auto",
  flexDirection: "column",
  fontWeight: 500,
  backgroundColor:approchType === "Pain"? theme.palette.cardActive.main:theme.palette.wellnessColor.main,
  paddingBottom: 40,
}));

export const Title = styled(PrimaryText)(({ theme }) => ({
  fontSize: 40,
  fontWeight: 400,
  paddingTop: 40,
  paddingBottom: 10,
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
  },
}));

export const SubText = styled(PrimarySubText)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    padding: "0px 29px 0px 29px",
  },
}));

export const WhatToExpectContainerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 50,
  height: "auto",
  paddingTop: 20,
  [theme.breakpoints.down("lg")]: {
    gap: 40,
  },
  [theme.breakpoints.down("md")]: {
    gap: 30,
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    height: "auto",
    width: "auto",
    gap: 30,
  },
}));
