import { styled, Box } from "@mui/material";
import { TextCenterBox } from "../common/containers/containers";
import { PrimaryText, PrimarySubText } from "../common/typographies/typographies";
export const WhyUsBox = styled(TextCenterBox)(({ theme }) => ({
  padding: "00px 0px 0px 0px",
  height: 417,

  [theme.breakpoints.down(`smd`)]: {
    height: 434,
  },
}));

export const WhyUsTitleBox = styled(TextCenterBox)(({ theme }) => ({
  flexDirection: "column",
  textAlign: "center",
  rowGap: 10,
}));

export const WhyUsTitle = styled(PrimaryText)(({ theme }) => ({
  padding: "0px 0px 0px 0px",
  fontSize: 40,
  color: theme.palette.primary.main,
  [theme.breakpoints.down("smd")]: {
    fontSize: 20,
    padding: "0px 0px 0px 0px",
  },
}));

export const WhyUsSubTitle = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 16,
  margin: 0,
  [theme.breakpoints.down("smd")]: {
    fontSize: 12,
    padding: "0px 34px 0px 34px",
  },
  fontWeight: 400,
  fontFamily: theme?.fontFamily.Rubik,
}));

export const WhyUsSubText = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 14,
  [theme.breakpoints.down("smd")]: {
    fontSize: 12,
  },
  fontWeight: 400,
  fontFamily: theme?.fontFamily.Rubik,
  textAlign: "center",
  marginTop: "10px",
}));

export const CustomImageBox = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "40px",
  paddingTop: "10px",
  gridTemplateRows: "auto",
  gridTemplateAreas: `"main footer sidebar "`,
  justifyContent: "center",
  [theme.breakpoints.down("smd")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
    columnGap: 15,
    rowGap: 20,
    gridTemplateRows: "auto",
    gridTemplateAreas: `
          "main main sidebar sidebar"
          "footer footer footer footer"`,
  },
}));
