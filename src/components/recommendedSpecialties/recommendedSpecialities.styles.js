import { styled, Box } from "@mui/material";
import { PrimaryText } from "../common/typographies/typographies";
export const RecommendedSpecialtiesContainer = styled(Box)(({ theme }) => ({
  marginTop: 10,
  marginLeft: 10,
}));

export const RecommendedSpecialtiesTitle = styled(PrimaryText)(({ theme }) => ({
  fontSize: 20,
}));

export const LinearGradientBox = styled(Box)(({ theme }) => ({
  height: 111,
  background: "linear-gradient(to right bottom, #BEBEBE, #E0E0E078)",
  width: "95%",
  position: "relative",
  marginTop: "-90px",
  marginLeft: "-10px",
}));

export const SwiperContainer = styled(Box)(({ theme }) => ({
  marginLeft: 5,
}));
