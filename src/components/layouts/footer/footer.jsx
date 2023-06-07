import LogoImage from "../../../assets/images/footer-logo.svg";

import facebook from "../../../assets/icons/social/facebook.svg";
import instagram from "../../../assets/icons/social/instagram.svg";
import twitter from "../../../assets/icons/social/twitter.svg";
import youtube from "../../../assets/icons/social/youtube.svg";

import { Container, InnerFooter, Logo, SocialContainer, SocialLink } from "./footer.styles";


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
