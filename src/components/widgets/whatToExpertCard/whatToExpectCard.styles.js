import { styled } from "@mui/material";
import { TextCenterBox } from "../../common/containers/containers";
import { PrimarySubText, PrimaryText } from "../../common/typographies/typographies";
import Avatar from "@mui/material/Avatar";

export const WhatToExpectContainer = styled(TextCenterBox)(({ theme,approchType }) => ({
  width: 278,
  minHeight: 144,
  backgroundColor:approchType === "Pain"? theme.palette.cardActive.main:theme.palette.wellnessColor.main,
  flexDirection: "column",
  justifyContent: "flex-start",
  [theme.breakpoints.down("md")]: {
    width: 180,
    height: "auto",
  },
  [theme.breakpoints.down("smd")]: {
    width: 180,
    height: "auto",
  },
  // [theme.breakpoints.down("lg")]: {
  //   width: 225,
  // },
  [theme.breakpoints.down("sm")]: {
    width: 250,
    height: "auto",
  },
}));

export const Title = styled(PrimaryText)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 500,
  paddingTop: 10,
}));

export const SubText = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 400,
  wordBreak: "break-word",
  textAlign: "center",
  paddingTop: 10,
}));
export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  borderRadius: "100%",
  padding: 0,
  gap: 0,
  marginTop: 0,
}));
