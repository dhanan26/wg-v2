import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { TextCenterBox, GridBox } from "../common/containers/containers";
import {
  PrimarySubText,
  PrimaryText,
} from "../common/typographies/typographies";
import ImageListItem from "@mui/material/ImageListItem";
import { imageData, footerData } from "../../data/happyCommunityData";

// happy community main box/container styles

const HappyCommunityBox = styled(TextCenterBox)(({ theme }) => ({
  height: 626,
  backgroundColor: theme.palette.cardActive.main,
  [theme.breakpoints.down(`smd`)]: {
    height: 448,
  },
}));

// happy community title section styles

const HappyCommunityTitleBox = styled(TextCenterBox)(({ theme }) => ({
  height: 117,
  [theme.breakpoints.down("lg")]: {
    height: 115,
  },
  flexDirection: "column",
  textAlign: "center",
  gap: 18,
}));

const HappyCommunityTitle = styled(PrimaryText)(({ theme }) => ({
  [theme.breakpoints.down("smd")]: {
    fontSize: 20,
  },
}));

const HappyCommunitySubTitle = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 14,
  [theme.breakpoints.down("smd")]: {
    fontSize: 12,
  },
  fontWeight: 400,
  fontFamily: theme?.fontFamily.Rubik,
}));

// happy community images section styles

const HappyCommunityImageBox = styled(GridBox)(({ theme }) => ({
  gridTemplateColumns: "repeat(3, 1fr)",
  [theme.breakpoints.down("smd")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
    rowGap: 35,
    columnGap: 20,
  },
  gap: 43,
}));

const ItemStyledBox = styled(Box)(({ theme }) => ({
  p: 1,
  borderRadius: "3px",
  [theme.breakpoints.down("smd")]: {
    width: "100px",
    height: "100px",
  },
  width: "158px",
  height: "158px",
}));

const Item = (props) => {
  const { sx, ...other } = props;
  return <ItemStyledBox sx={sx} {...other} />;
};

// happy community footer section styles

const HappyCommunityFooterBox = styled(GridBox)(({ theme }) => ({
  gridTemplateColumns: "repeat(4, 1fr)",
  columnGap: 30,
}));

const FooterStyledBox = styled(Box)(({ theme }) => ({

}));

const FooterContainer = (props) => {
  const { sx, ...other } = props;
  return <FooterStyledBox sx={sx} {...other} />;
};

const HappyCommunitySubText = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 14,
  [theme.breakpoints.down("smd")]: {
    fontSize: 10,
  },
  fontWeight: 500,
  fontFamily: theme?.fontFamily.primary,
  textAlign: "center",
  marginTop: "15px",
}));

export const HappyCommunity = () => {
  return (
    <>
      <HappyCommunityBox>
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
                <HappyCommunitySubText color="textPrimary">
                  {item.subText}
                </HappyCommunitySubText>
              </FooterContainer>
            ))}
          </HappyCommunityFooterBox>
        </HappyCommunityTitleBox>
      </HappyCommunityBox>
    </>
  );
};
