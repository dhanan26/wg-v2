import { styled, Box, DialogContent, TextField } from "@mui/material";
import { SecondaryButton } from "../common/buttons/button";
import { PrimarySubText } from "../common/typographies/typographies";
export const HeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

export const SubHeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "unset",
  gap: 5,
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 10,
}));

export const StyledButton = styled(SecondaryButton)(({ theme }) => ({
  height: 55,
  lineHeight: 0,
  fontSize: 16,
  fontWeight: 700,
  paddingTop: 12,
  paddingBottom: 12,
  paddingLeft: 22,
  paddingRight: 22,
  [theme.breakpoints.down("sm")]: {
    width: 142,
  },
  [theme.breakpoints.down("xs")]: {
    width: 142,
    fontSize: 14,
  },
}));

export const StyleedDialogContent = styled(DialogContent)(({ theme }) => ({
  background: "linear-gradient(180deg, rgba(105, 198, 172, 0.82) 0%, rgba(105, 198, 172, 0.5002) 100%)",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  height: "auto",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  borderRadius: 4,
  input: {
    background: theme.palette.primary.contrastText,
    borderRadius: 4,
  },
}));

export const SubTitle = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 15,
  fontWeight: 700,
  color: theme.palette.primary.contrastText,
  textAlign: "left",
  paddingBottom: 18,
}));
