import { Box, Link, styled } from "@mui/material";
import Background from "../../assets/images/footer-image.jpg";
import LogoImage from "../../assets/images/footer-logo.svg";

import facebook from "../../assets/icons/social/facebook.svg";
import instagram from "../../assets/icons/social/instagram.svg";
import twitter from "../../assets/icons/social/twitter.svg";
import youtube from "../../assets/icons/social/youtube.svg";

const Container = styled(Box)(() => ({
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

const InnerFooter = styled(Box)(() => ({
  minHeight: 30,
  fontFamily: "Rubik",
  background: "#69C6AC",
  width: "auto",
  textAlign: "center",
  color: "#FFFFFF",
  fontSize: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 1rem 0 1rem",
  gap: "0.5rem",
  flexWrap: "wrap",
}));

const Logo = styled(Box)(() => ({}));

const SocialContainer = styled(Box)(() => ({
  display: "flex",
  gap: "3.313rem",
  padding: "0 1rem 0 1rem",
  flexWrap: "wrap",
  justifyContent: "center",
}));

const SocialLink = styled(Link)(() => ({
  height: 24,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  textDecoration: "none",
  cursor: "pointer",
}));

export const Footer = () => {
  return (
    <>
      <Container>
        <Logo>
          <img src={LogoImage} style={{ maxHeight: "100%", maxWidth: "100%" }} />
        </Logo>
        <SocialContainer>
          <SocialLink id="footer-fb-link" href="https://www.facebook.com/PainRelief2022" target="_blank">
            <img src={facebook} height={24} />
          </SocialLink>
          <SocialLink id="footer-yt-link" href="https://www.youtube.com/@wellnessgarden8294" target="_blank">
            <img src={youtube} height={24} />
          </SocialLink>
          <SocialLink id="footer-tw-link" href="" target="_blank">
            <img src={twitter} height={24} />
          </SocialLink>
          <SocialLink id="footer-insta-link" href="https://www.instagram.com/thewellness_garden" target="_blank">
            <img src={instagram} height={24} />
          </SocialLink>
        </SocialContainer>
      </Container>
      <InnerFooter>
        2023. The Wellness Garden | <SocialLink id="footer-rights-links"> All Rights Reserved </SocialLink> |
        <SocialLink id="footer-privacy-link">Privacy Policy</SocialLink> |{" "}
        <SocialLink id="footer-tnc-link">Terms of use</SocialLink> |
        <SocialLink id="footer-sitemap-link">Sitemap</SocialLink>
      </InnerFooter>
    </>
  );
};
