import { styled, Box } from "@mui/material";
export const PackageDetailsMainBox = styled(Box)(({ theme }) => ({
  //   backgroundColor: "yellow",
  top: 0,
}));

export const AboutUsContainer = styled(Box)(({ theme }) => ({
  //   display: "flex",
  //   flexDirection: "column",
}));

export const AboutUsMainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
}));

export const ImageBox = styled(Box)(({ theme, imageUrl }) => ({
  fontFamily: theme.typography.secondaryText.fontFamily,
  height: 141,
  width: "100%",
  position: "relative",
  borderBottom: `5px solid #fff`,
  "& div": {
    top: -10,
    borderRadius: "50%",
    height: 141,
    width: 141,
    border: `3px solid ${theme.palette.avatar.borderColor}`,
    boxShadow: `0px 4px 4px ${theme.palette.avatar.borderColor}80`,
    flexDirection: "column",
  },
  "& img": {
    borderRadius: "50%",
    height: "100%",
    width: "100",
  },
  "& span": {
    "& img": {
      marginTop: "-15px",
      marginLeft: "40%",
      height: 32.18,
      width: 32.18,
      border: "none",
      boxShadow: "none",
      borderRadius: "none",
    },
    "& p": {
      marginTop: "-10px",
      textAlign: "center",
      color: theme.palette.secondary.main,
      fontSize: "12px",
    },
  },
}));

export const AboutUsInfoBox = styled(Box)(({ theme }) => ({
  paddingTop: 30,

  "& h1": {
    color: theme.palette.secondary.purpleBaloon,
    fontSize: 30,
    fontWeight: 500,
    fontFamily: theme?.fontFamily.primary,
    textTransform: "uppercase",
    lineHeight: 1,
    "& span": {
      fontSize: 16,
      fontFamily: theme?.fontFamily.Rubik,
      textTransform: "capitalize",
    },
  },

  "& p": {
    fontSize: 16,
    fontWeight: 400,
    fontFamily: theme?.fontFamily.Rubik,
    "& span": {
      marginRight: 10,
    },
  },
}));

export const ViewImageBox = styled(Box)(({ theme }) => ({
  width: "80%",
}));
