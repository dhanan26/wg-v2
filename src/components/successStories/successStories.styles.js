import { styled, Box, Typography } from "@mui/material";
export const Container = styled(Box)(() => ({
  fontFamily: "'Aquawax', Courier, monospace;",
  margin: "2rem 0 2rem 0",
}));

export const Header = styled(Typography)(({ theme }) => ({
  fontFamily: "'Aquawax', Courier, monospace;",
  fontSize: "2.5rem",
  color: theme.palette.secondary.main,
  fontWeight: 500,
  textAlign: "center",
}));

export const SubHeader = styled(Typography)(({ theme }) => ({
  fontFamily: "'Rubik', Courier, monospace;",
  fontSize: "1rem",
  color: theme.palette.textPrimary.main,
  fontWeight: 400,
  textAlign: "center",
  padding: "0 1rem 0 1rem",
}));

export const SwiperContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  marginTop: "1rem",
  width: "calc(100% - 6.25rem - 6.25rem)",
  paddingLeft: "6.25rem",
  paddingRight: "6.25rem",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "2.5rem",
    paddingRight: "2.5rem",
    width: "calc(100% - 5rem)",
  },
}));

export const SwiperButton = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "6.25rem",
  position: "absolute",
  top: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "2.5rem",
  },
}));

export const CardContainer = styled(Box)(({ theme,approchType }) => ({
  fontFamily: "'Aquawax', Courier, monospace;",
  minHeight: 300,
  width: "calc(100% - 2rem)",
  display: "flex",
  flexDirection: "column",
  background: approchType==="Pain"? theme.palette.cardActive.main:"#ACE6CF",
  padding: "0 1rem 0 1rem",
  [theme.breakpoints.down("xs")]: {
    padding: "0 0.2rem 0 0.2rem",
    width: "calc(100% - 0.4rem)",
  },
}));

export const CardHeroContainer = styled(Box)(() => ({
  fontFamily: "'Aquawax', Courier, monospace;",
  width: "100%",
  display: "flex",
}));

export const CardHeroProfile = styled(Box)(() => ({
  fontFamily: "'Aquawax', Courier, monospace;",
  height: "calc(100% - 1rem)",
  width: 120,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.5rem",
}));

export const CardHeroProfileImage = styled(Box)(({ theme }) => ({
  fontFamily: "'Aquawax', Courier, monospace;",
  aspectRatio: "1/1",
  width: 114,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "50%",
  backgroundSize: "contain",
  [theme.breakpoints.down("sm")]: {
    width: 90,
  },
  [theme.breakpoints.down("xs")]: {
    width: 57,
  },
}));

export const CardHeroInfo = styled(Box)(() => ({
  fontFamily: "'Aquawax', Courier, monospace;",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const CardInfoTitle = styled(Box)(({ theme }) => ({
  fontFamily: "'Aquawax', Courier, monospace;",
  height: "calc(100% - 1rem)",
  width: "calc(100% - 1rem)",
  padding: "0.5rem",
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  "& span": {
    fontSize: "1rem",
    color: theme.palette.secondary.main,
  },
  "& img": {
    height: 57,
    width: 57,
    borderRadius: "50%",
  },
  "& span:last-child": {
    fontSize: "0.875rem",
    color: theme.palette.secondary.darker,
  },
}));

export const CardInfoTypes = styled(Box)(({ theme }) => ({
  fontFamily: "'Rubik', Courier, monospace;",
  height: "calc(100% - 1rem)",
  width: "calc(100% - 1rem)",
  padding: "0.5rem",
  display: "flex",
  alignItems: "end",
  justifyContent: "start",
  gap: "0.5rem",
  flexWrap: "wrap",
  [theme.breakpoints.down("xs")]: {
    display: "none",
  },
  "& div": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    color: theme.palette.secondary.darker,
    fontSize: "0.75rem",
    "& img": {
      height: 24,
      width: 24,
    },
  },
}));

export const CardInfoTypesMobile = styled(Box)(({ theme }) => ({
  fontFamily: "'Rubik', Courier, monospace;",
  display: "none",
  height: "calc(100% - 1rem)",
  width: "calc(100% - 1rem)",
  padding: "0.5rem",
  alignItems: "end",
  justifyContent: "start",
  gap: "0.5rem",
  flexWrap: "wrap",
  [theme.breakpoints.down("xs")]: {
    display: "flex",
  },
  "& div": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    color: theme.palette.secondary.darker,
    fontSize: "0.75rem",
    "& img": {
      height: 24,
      width: 24,
    },
  },
}));

export const CardBody = styled(Box)(({ theme }) => ({
  fontFamily: "Rubik, Courier, monospace;",
  height: "100%",
  flex: 1,
  padding: "0.5rem",
  fontSize: "0.875rem",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  color: theme.palette.secondary.darker,
  "& span": {
    lineHeight: "2rem",
    [theme.breakpoints.down(980)]: {
      lineHeight: "1rem",
    },
  },
  "& span:last-child": {
    fontSize: "0.75rem",
  },
}));
