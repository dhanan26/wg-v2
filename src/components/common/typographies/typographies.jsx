import { Link, Typography, styled } from "@mui/material";

export const PrimaryText = styled(Typography)(({ theme, color, uppercase = "false" }) => ({
  color: theme?.palette?.[color]?.main ? theme?.palette?.[color]?.main : theme.palette.primary.main,
  textAlign: "center",
  textTransform: uppercase === "true" ? "uppercase" : "none",
}));

export const PrimarySubText = styled(Typography)(({ theme, color }) => ({
  color: theme?.palette?.[color]?.main ? theme?.palette?.[color]?.main : theme.palette.primary.main,
  fontSize: "16px",
  fontWeight: 400,
  textAlign: "center",
}));

export const AnchorText = styled(Link)(() => ({
  fontSize: "1rem",
  textDecoration: "none",
}));
