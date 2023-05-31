import { styled, Box } from "@mui/material";
import { PrimaryText } from "../common/typographies/typographies";
import { TextCenterBox } from "../common/containers/containers";
export const FilterMainBox = styled(Box)(({ theme }) => ({
  width: 253,
  height: "100vh",
}));

export const WGTreasuresBox = styled(Box)(({ theme }) => ({
  width: "auto",
  height: "100vh",
  marginTop: 20,
}));

export const Title = styled(PrimaryText)(({ theme }) => ({
  fontWeight: 600,
  fontSize: 16,
}));

export const TitleBox = styled(TextCenterBox)(({ theme }) => ({
  marginBottom: 20,
}));
