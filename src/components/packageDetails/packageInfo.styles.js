import { styled, Box, Typography } from "@mui/material";
export const Container = styled(Box)(() => ({
  display: "flex",
  gap: "1rem",
  flexDirection: "column",
}));

// header ---------------------------------------------

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  padding: "0.5rem 1rem",
  justifyContent: "space-between",

  div: {
    display: "flex",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-end",
    },
  },
}));

export const HeaderMainSection = styled(Box)(() => ({
  display: "flex",
}));

export const HeaderImage = styled(Box)(({ theme }) => ({
  img: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    border: `3px solid ${theme.palette.primary.main}`,
    boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
  },
}));

export const HeaderInfo = styled(Box)(({ theme }) => ({
  padding: "0.5rem 1rem",
  fontFamily: theme.typography.secondaryText.fontFamily,
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  div: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "0.5rem",
    p: {
      margin: "unset",
      fontWeight: "500",
    },
  },
  h4: {
    fontWeight: "700",
    margin: "unset",
    fontSize: "0.875rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.6rem",
    },
  },
  h2: {
    fontWeight: "500",
    margin: "unset",
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
}));

export const SpecialtyBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.packageInfo.chipColor,
  padding: "0.25rem 0.5rem",
  fontSize: "0.8rem",
  color: "white",

  [theme.breakpoints.down("sm")]: {
    padding: "0.1rem 0.25rem",
  },
}));

export const HeaderAwards = styled(Box)(() => ({
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
  minWidth: "calc(66px + 66px + 1rem)",
  img: {
    height: "88px",
    width: "66px",
  },
}));

// description ---------------------------------------------
export const DescriptionContainer = styled(Box)(({ theme }) => ({
  color: theme.palette.textPrimary.main,
  padding: "0.5rem 1rem 0rem 1rem",
  h3: {
    fontFamily: theme.typography.primaryTitle.fontFamily,
    fontWeight: 500,
    fontSize: "1rem",
    margin: "unset",
  },
  p: {
    fontFamily: theme.typography.secondaryText.fontFamily,
    fontWeight: 400,
    fontSize: "0.8rem",
  },
  div: {
    fontFamily: theme.typography.secondaryText.fontFamily,
    fontSize: "0.8rem",
    display: "flex",
    flexWrap: "wrap",
    gap: "0.8rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },

    b: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
}));

export const GenderContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row !important",
  b: {
    display: "block !important",
  },
}));

export const SplitContainer = styled(Box)(
  ({ theme, backgroundColor, reverse }) => ({
    backgroundColor: backgroundColor,
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: reverse ? "column" : "column-reverse",
    },
  })
);

export const FlexBox = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: "0rem 1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  h3: {
    fontFamily: theme.typography.primaryTitle.fontFamily,
    fontSize: "1rem",
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      fontWeight: 600,
      margin: "unset",
      marginBottom: "0.5rem",
    },
  },
  ul: {
    gap: "1rem",
  },
  li: {
    listStyle: "none",
    display: "flex",
    gap: "0.4rem",
    alignItems: "flex-start",
    fontFamily: theme.typography.secondaryText.fontFamily,
    fontSize: "10px",
    fontWeight: 400,
    margin: "0 0 10px 0",
  },
  div: {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
  },
  span: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    fontFamily: theme.typography.secondaryText.fontFamily,
    fontSize: "0.9rem",
    fontWeight: 400,
    gap: "0.5rem",
    margin: "0 0 10px 0",
    minWidth: 60,
  },
}));

export const SpecialtyMainBox = styled(Box)(({ theme }) => ({
  h3: {
    fontFamily: theme.typography.primaryTitle.fontFamily,
  },
  span: {
    fontFamily: theme.typography.secondaryText.fontFamily,
    fontSize: "0.625rem",
  },
}));

export const AmenityMainBox = styled(Box)(({ theme }) => ({
  h3: {
    fontFamily: theme.typography.primaryTitle.fontFamily,
  },
  span: {
    fontFamily: theme.typography.secondaryText.fontFamily,
    fontSize: "0.625rem",
  },
}));
