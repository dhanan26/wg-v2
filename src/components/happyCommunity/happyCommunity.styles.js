import { TextCenterBox } from "../common/containers/containers";
import { PrimaryText, PrimarySubText } from "../common/typographies/typographies";
import { GridBox } from "../common/containers/containers";
import { styled, Box } from "@mui/material";
// happy community main box/container styles

export const HappyCommunityBox = styled(TextCenterBox)(({ theme }) => ({
  height: 626,
  backgroundColor: theme.palette.cardActive.main,
  [theme.breakpoints.down(`smd`)]: {
    height: 448,
  },
}));

// happy community title section styles

export const HappyCommunityTitleBox = styled(TextCenterBox)(({ theme }) => ({
  height: 117,
  [theme.breakpoints.down("lg")]: {
    height: 115,
  },
  flexDirection: "column",
  textAlign: "center",
  gap: 18,
}));

export const HappyCommunityTitle = styled(PrimaryText)(({ theme }) => ({
  [theme.breakpoints.down("smd")]: {
    fontSize: 20,
  },
}));

export const HappyCommunitySubTitle = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 14,
  [theme.breakpoints.down("smd")]: {
    fontSize: 12,
  },
  fontWeight: 400,
  fontFamily: theme?.fontFamily.Rubik,
}));

// happy community images section styles

export const HappyCommunityImageBox = styled(GridBox)(({ theme }) => ({
  gridTemplateColumns: "repeat(3, 1fr)",
  [theme.breakpoints.down("smd")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
    rowGap: 35,
    columnGap: 20,
  },
  gap: 43,
}));

export const ItemStyledBox = styled(Box)(({ theme }) => ({
  p: 1,
  borderRadius: "3px",
  [theme.breakpoints.down("smd")]: {
    width: "100px",
    height: "100px",
  },
  width: "158px",
  height: "158px",
}));

// happy community footer section styles

export const HappyCommunityFooterBox = styled(GridBox)(({ theme }) => ({
  gridTemplateColumns: "repeat(4, 1fr)",
  columnGap: 30,
}));

export const FooterStyledBox = styled(Box)(({ theme }) => ({}));

export const HappyCommunitySubText = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 14,
  [theme.breakpoints.down("smd")]: {
    fontSize: 10,
  },
  fontWeight: 500,
  fontFamily: theme?.fontFamily.primary,
  textAlign: "center",
  marginTop: "15px",
}));
