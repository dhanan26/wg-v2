import ImageListItem from "@mui/material/ImageListItem";
import { imageData, footerData } from "../../data/happyCommunityData";

import {
  HappyCommunityBox,
  HappyCommunityTitleBox,
  HappyCommunityTitle,
  HappyCommunitySubTitle,
  HappyCommunityImageBox,
  ItemStyledBox,
  HappyCommunityFooterBox,
  FooterStyledBox,
  HappyCommunitySubText,
} from "./happyCommunity.styles";

import { useContext } from "react";
import { MainContext } from "../../pages/main/main";


const Item = (props) => {
  const { sx, ...other } = props;
  return <ItemStyledBox sx={sx} {...other} />;
};

const FooterContainer = (props) => {
  const { sx, ...other } = props;
  return <FooterStyledBox sx={sx} {...other} />;
};

export const HappyCommunity = () => {
  const {approchType} = useContext(MainContext);
  return (
    <>
      <HappyCommunityBox approchType={approchType}>
        <HappyCommunityTitleBox>
          <HappyCommunityTitle variant="primaryTitle" color="secondary">
            Our Happy Community
          </HappyCommunityTitle>
          <HappyCommunitySubTitle variant="secondaryTitle" color="textPrimary">
            Lorem ipsum dolor sit amet consectetur. Ante sapien.
          </HappyCommunitySubTitle>

          <HappyCommunityImageBox>
            {imageData.map((item) => (
              <Item sx={{ backgroundColor: "#ACE6CF", padding: "0px" }}>
                <ImageListItem key={item.img}>
                  <img src={item.img} alt={item.title} loading="lazy" />
                </ImageListItem>
              </Item>
            ))}
          </HappyCommunityImageBox>
          <HappyCommunityFooterBox>
            {footerData.map((item) => (
              <FooterContainer>
                <img src={item.img} alt={item.title} loading="lazy" />
                <HappyCommunitySubText color="textPrimary">{item.subText}</HappyCommunitySubText>
              </FooterContainer>
            ))}
          </HappyCommunityFooterBox>
        </HappyCommunityTitleBox>
      </HappyCommunityBox>
    </>
  );
};
