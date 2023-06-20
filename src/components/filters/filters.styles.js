import { styled, Box, FormControlLabel } from "@mui/material";
import { PrimaryText } from "../common/typographies/typographies";
import { TextCenterBox } from "../common/containers/containers";
export const FilterMainBox = styled(Box)(({ theme }) => ({
  width: 253,
  height: "100vh",
}));

export const WGTreasuresBox = styled(Box)(({ theme }) => ({
  width: "auto",
  // height: "100vh",
  marginTop: 20,
  marginBottom: 20,
}));

export const Title = styled(PrimaryText)(({ theme }) => ({
  fontWeight: 600,
  fontSize: 16,
  textAlign: "left",
}));

export const TitleBox = styled(Box)(({ theme }) => ({
  marginBottom: 20,
  marginLeft: 2,
  textAlign: "left",
}));

export const RatingTitleBox = styled(Box)(({ theme }) => ({
  lineHeight: "32px",
  textAlign: "center",
  padding: "7px 0px 7px 0px",
}));

export const RatingTitle = styled(PrimaryText)(({ theme }) => ({
  fontWeight: 600,
  fontSize: 16,
  textAlign: "center",
  fontFamily: theme.fontFamily.Inter,
}));

export const RatingBox = styled(Box)(({ theme }) => ({
  width: "auto",
  backgroundColor: "#E3EDFC",
  padding: "0px 5px 10px 5px",
  marginBottom: "20px",
}));

export const RatingCriteriaBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
}));

export const RatingFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  justifyContent: "center",
  marginLeft: 0,
  marginRight: 0,
  borderBottomStyle: "solid",
  borderBottomWidth: "thin",
  borderColor: "#D3D3D3",
  padding: "10px 0px 10px 0px",
}));

export const RatingLabelBox = styled(Box)(({ theme }) => ({
  div: {
    width: "180px",
    span: {
      fontSize: 16,
      fontWeight: 400,
      fontFamily: theme.fontFamily.Inter,
      textTransform: "capitalize",
      padding: "0px 0px 0px 10px",
    },
  },
}));
