import { styled, Box, Link } from "@mui/material";
import Background from "../../assets/images/footer-image.jpg";
export const Container = styled(Box)(() => ({
  fontFamily: "'Aquawax', Courier, monospace;",
  height: 300,
  boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.5);",
  backgroundImage: "url(" + Background + ")",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2.5rem",
}));

export const InnerFooter = styled(Box)(({ theme }) => ({
  minHeight: 30,
  fontFamily: "Rubik",
  background: theme.palette.primary.main,
  width: "auto",
  textAlign: "center",
  color: theme.palette.buttonPrimary.contrastText,
  fontSize: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 1rem 0 1rem",
  gap: "0.5rem",
  flexWrap: "wrap",
}));

export const Logo = styled(Box)(() => ({}));

export const SocialContainer = styled(Box)(() => ({
  display: "flex",
  gap: "3.313rem",
  padding: "0 1rem 0 1rem",
  flexWrap: "wrap",
  justifyContent: "center",
}));

export const SocialLink = styled(Link)(() => ({
  height: 24,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  textDecoration: "none",
  cursor: "pointer",
}));
