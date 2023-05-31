import { styled, Box } from "@mui/material";
import { TextCenterBox } from "../common/containers/containers";
import { PrimaryText, PrimarySubText } from "../common/typographies/typographies";
export const ApprovedTreatmentBox = styled(TextCenterBox)(({ theme }) => ({
  height: "auto",
  width: "auto",
  flexDirection: "column",
}));

export const Title = styled(PrimaryText)(({ theme }) => ({
  fontSize: 40,
  paddingBottom: 10,
  paddingTop: 30,
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
    padding: "30px 16px 10px 16px",
  },
}));

export const SubText = styled(PrimarySubText)(({ theme }) => ({
  textAlign: "center",
  paddingBottom: 20,
  [theme.breakpoints.down("sm")]: {
    padding: "0px 16px 20px 16px",
  },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  backgroundColor: "red",

  width: "auto",
  height: 227,
  [theme.breakpoints.down("sm")]: {
    height: 100,
    width: "auto",
  },
  [theme.breakpoints.down(400)]: {
    width: 250,
    height: 100,
    margin: 0,
    backgroundColor: "red",
  },
}));
export const ImageBox2 = styled(Box)(({ theme }) => ({
  backgroundColor: "yellow",

  width: "auto",
  height: 227,
  [theme.breakpoints.down("sm")]: {
    height: 100,
    width: "auto",
  },
  [theme.breakpoints.down(400)]: {
    width: 250,
    height: 100,
    margin: 0,
  },
}));

export const ImageBox3 = styled(Box)(({ theme }) => ({
  backgroundColor: "green",

  width: "auto",
  height: 485,
  [theme.breakpoints.down("sm")]: {
    height: 100,
    width: "auto",
  },
  [theme.breakpoints.down(400)]: {
    width: 250,
    height: 100,
    margin: 0,
  },
}));

export const ImageContainerBox = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "calc(100% - 40%)",
  justifyContent: "center",
  marginTop: 20,
  marginLeft: "20%",
  marginRight: "20%",
  paddingBottom: 25,
  [theme.breakpoints.down("sm")]: {
    margin: 0,
    height: "100%",
    // backgroundColor: "blue",
  },
  [theme.breakpoints.down(400)]: {
    width: 250,
    height: "100%",
    margin: 0,
    // backgroundColor: "black",
  },
}));
