import { styled, Card, Box } from "@mui/material";
export const Container = styled(Card)(({ theme }) => ({
  margin: "2rem 0.5rem",
  //   padding: "0.688rem 0.688rem",
  minWidth: 243,
  maxWidth: 243,
  border: "1px solid #E3EDFC",
  borderRadius: 3,
  minHeight: 327,
  display: "flex",
  overflow: "visible",
  flexDirection: "column",
  gap: "0.5rem",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    minWidth: 170,
    maxWidth: 200,
    width:170
  },


  "& .package-card-top": {
    display: "flex",
    flexDirection: "column",
    gap: "0.313rem",
  },
  "& .package-card-type": {
    clear: "both",
    fontFamily: theme.typography.secondaryText.fontFamily,
    color: theme.palette.buttonSecondary.main,
    padding: " 0 0.688rem",
    fontSize: "1rem",
    [theme.breakpoints.down("mlg")]: {
      fontSize: "0.7rem",

    },
  },
}));

export const DetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "relative",
  padding: "0 0.688rem",
  fontFamily: theme.typography.secondaryText.fontFamily,
  fontSize: "0.85rem",
  fontWeight: 400,
  gap: "0.5rem",
  [theme.breakpoints.down("mlg")]: {
    fontSize: "0.6rem",
  },
}));

export const LikeContainer = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.secondaryText.fontFamily,
  display: "flex",
  margin: "0.5rem 0.5rem",
  justifyContent: "space-between",
  "& div": {
    color: theme.palette.packageCard.button,
    display: "flex",
    alignItems: "center",
    gap: "0.2rem",
    fontSize: "0.8rem",
  },
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.secondaryText.fontFamily,
  display: "flex",
  margin: "0.313rem  0.688rem 0.688rem 0.688rem",
  justifyContent: "space-between",

  "& button": {
    borderRadius: "0",
    fontWeight: 400,
    fontSize: "0.875rem",
    padding: "0.1rem 1rem",
    margin: "unset",
    [theme.breakpoints.down("mlg")]: {
      fontSize: "0.6rem",
    },
  },
  "& button:first-child": {
    color: theme.palette.packageCard.button,
    outline: `1px solid ${theme.palette.packageCard.button}`,
    [theme.breakpoints.down("sm")]: {
      width: "53px",
    },
  },
  "& button:last-child": {
    color: theme.palette.buttonPrimary.contrastText,
    background: theme.palette.buttonPrimary.main,
    outline: `1px solid ${theme.palette.buttonPrimary.main}`,
    [theme.breakpoints.down("mlg")]: {
      width: "62px",
    },
  },
}));

export const HeroContainerPackage = styled(Box)(({ theme, imageUrl }) => ({
  fontFamily: theme.typography.secondaryText.fontFamily,
  height: 138,
  width: "100%",
  backgroundImage: `url(${imageUrl})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderBottom: `5px solid ${theme.palette.avatar.borderColor}`,
  position: "relative",
  "& div": {
    margin: 5,
    position: "absolute",
    top: -15,
    display: "flex",
    gap: 5,
    flexWrap: "wrap",

    "& img": {
      borderRadius: "unset",
      position: "unset",
      height: 45,
      width: 33,
    },
  },

  "& img": {
    position: "absolute",
    borderRadius: "50%",
    bottom: -40 + 11,
    right: 11,
    height: 80,
    width: 80,
    boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
  },
}));
export const HeroContainerIndividual = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.secondaryText.fontFamily,
  height: 128,
  width: "100%",
  position: "relative",
  borderBottom: `5px solid #fff`,
  "& div": {
    position: "absolute",
    top: -15,
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "50%",
    height: 108,
    width: 108,
    border: `3px solid ${theme.palette.avatar.borderColor}`,
    boxShadow: `0px 4px 4px ${theme.palette.avatar.borderColor}80`,
    flexDirection: "column",
    "& img": {
      borderRadius: "50%",
      height: "100%",
      width: "100",
    },
    "& span": {
      "& img": {
        position: "absolute",
        bottom: -15,
        left: "50%",
        transform: "translateX(-50%)",
        height: 32.18,
        width: 32.18,
        border: "none",
        boxShadow: "none",
        borderRadius: "none",
      },

      "& p": {
        textAlign: "center",
        color: theme.palette.secondary.main,
        fontSize: "1rem",
      },
    },
  },
}));

export const BodyContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "relative",
  padding: "0 0.688rem",
  flexDirection: "column",
  "& h3": {
    fontFamily: theme.typography.primaryTitle.fontFamily,
    color: theme.palette.textPrimary.main,
    margin: "unset",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("mlg")]: {
      fontSize: "1rem",
    },

    "& p": {
      fontSize: "0.825rem",
      flexWrap: "wrap",
      color: theme.palette.packageCard.exp,
      [theme.breakpoints.down("mlg")]: {
        fontSize: "0.6rem",
      },
    },
  },

  "& p": {
    margin: "unset",
    fontFamily: theme.typography.secondaryText.fontFamily,
    color: theme.palette.textSecondary.contrast,
    fontSize: "0.825rem",
    [theme.breakpoints.down("mlg")]: {
      fontSize: "0.6rem",
    },
  },
}));

export const CostContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "relative",
  fontFamily: theme.typography.secondaryText.fontFamily,
  gap: "0.5rem",
  margin: "0.2rem 0.688rem",
  "& span": {
    fontWeight: 700,
    fontSize: "1rem",
    margin: "unset !important",
    color: theme.palette.textPrimary.main,
    letterSpacing: "0.02rem",
    [theme.breakpoints.down("mlg")]: {
      fontSize: "0.8rem",
    },
  },
  ".greyed-out-text": {
    color: theme.palette.packageCard.line,
    fontWeight: 400,
    textDecoration: "line-through",
  },

  "& div": {
    color: theme.palette.buttonPrimary.main,
    fontSize: "0.8rem",
    border: `1px solid ${theme.palette.buttonPrimary.main}`,
    display: "flex",
    padding: "0 0.5rem",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    [theme.breakpoints.down("mlg")]: {
      fontSize: "0.6rem",
    },
  },
}));
