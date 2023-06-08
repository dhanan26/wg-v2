import { TextCenterBox } from "../common/containers/containers";
import { PrimaryText, PrimarySubText } from "../common/typographies/typographies";
import { styled, Box, Dialog, DialogContent } from "@mui/material";
import { GetInTouchButton, SecondaryButton } from "../common/buttons/button";

export const ExploreExpertBox = styled(TextCenterBox)(({ theme, approchType }) => ({
  minHeight: 180,
  backgroundColor: approchType === "Pain" ? theme.palette.cardActive.main : theme?.palette?.wellnessColor.main,
  flexDirection: "column",
  padding: "1rem 0 1rem 0",
  justifyContent: "space-evenly",
}));

export const Title = styled(PrimaryText)(({ theme }) => ({
  fontSize: 30,
  [theme.breakpoints.down("smd")]: {
    fontSize: 25,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
  },
}));

export const InputContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "14px",
  marginTop: 20,
  [theme.breakpoints.down(365)]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "14px",
  marginTop: 48,
  [theme.breakpoints.down("smd")]: {
    marginTop: 0,
  },
  [theme.breakpoints.down(365)]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const SBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("smd")]: {
    width: "auto",
    display: "flex",

    justifyContent: "space-between",
  },
}));
export const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "14px",
  [theme.breakpoints.down("smd")]: {
    flexDirection: "column",
  },
}));

export const GetInTouchButtonExplore = styled(GetInTouchButton)(({ theme }) => ({
  width: 176,
  height: 42,
  [theme.breakpoints.down("smd")]: {
    width: 207,
  },
  [theme.breakpoints.down("sm")]: {
    width: 176,
  },
}));

export const SearchButton = styled(SecondaryButton)(({ theme }) => ({
  width: 114,
  height: 42,
  [theme.breakpoints.down("smd")]: {
    width: 207,
  },
  [theme.breakpoints.down("sm")]: {
    width: 176,
  },
}));

export const DropDownTitleBox = styled(TextCenterBox)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start",
    width: "100%",
  },
}));

export const DropDownTitle = styled(PrimarySubText)(({ theme }) => ({
  marginBottom: 10,
  color: theme.palette.textPrimary.main,
  fontFamily: theme.fontFamily.secondary,
  fontWeight: 400,
  fontSize: 14,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 0,
  },
}));

export const AlignedBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "end",
}));
