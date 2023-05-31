import { styled, Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  background: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.main}80)`,
  height: "100%",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",

  div: {
    display: "flex",
    gap: "1rem",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "0.875rem",
  },
}));

export const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  div: {
    display: "flex",
    flexDirection: "column",
    alignItem: "center",

    h1: {
      fontFamily: theme.typography.primaryTitle.fontFamily,
      fontSize: "1.2rem",
      margin: "unset",
    },

    h3: {
      fontFamily: theme.typography.primaryTitle.fontFamily,
      fontSize: "1rem",
      fontWeight: 500,
      margin: "unset",
      marginBottom: "0.5rem",
    },
  },
}));
