import { styled, Box } from "@mui/material";
import { TextCenterBox } from "../../common/containers/containers";
import RecommendedSpecialtiesImg from "../../../assets/images/recommended_specialties.jpg";
import { PrimarySubText } from "../../common/typographies/typographies";
export const StyledSpecialtiesCard = styled(Box)(({ theme }) => ({
  height: 103,
  width: 251,
  display: "flex",
  flexDirection: "row",
  borderBottom: "5px solid green",
  borderTop: "1px solid green",
  borderRight: "1px solid green",
}));

export const SpecialtiesImage = styled(TextCenterBox)(({ theme, image }) => ({
  height: 103,
  width: 81,
  backgroundImage: `url(${RecommendedSpecialtiesImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}));

export const SpecialtiesContent = styled(Box)(({ theme }) => ({
  height: 103,
  width: 170,
  backgroundColor: theme.palette.textSecondary.main,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
}));

export const SpecialtiesTextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 5,
  paddingLeft: 7,
  paddingTop: 16,
}));

export const SpecialtiesMainText = styled(PrimarySubText)(({ theme }) => ({
  fontWeight: 500,
  textAlign: "left",
}));

export const SpecialtiesSubText = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 10,
  fontWeight: 400,
  fontFamily: theme.fontFamily.Rubik,
  textAlign: "left",
}));

export const SpecialtiesFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  marginTop: 20,
}));

export const SpecialtiesFooterText = styled(Box)(({ theme }) => ({
  margin: 5,
  display: "flex",
  flexDirection: "row",
  gap: 2,
}));
