import { styled, Box } from "@mui/material";
export const Container = styled(Box)(({ theme }) => ({
  background: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.main}80)`,
  paddingBottom: "2rem",
  fontFamily: theme.fontFamily.primary,
  padding: "1rem 2.063rem",

  "& h2": {
    fonSize: theme.typography.primaryText,
    fontWeight: 900,
    margin: "unset",
  },
  "& p": {
    fontSize: 14,
    fontWeight: 500,
  },
}));

export const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "2rem",
  flexWrap: "wrap",
  marginBottom: "1rem",
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
  },
}));
