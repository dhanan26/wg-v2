import { styled, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { PrimarySubText, PrimaryText } from "../common/typographies/typographies";
export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  height: "auto",
  width: "auto",
}));

export const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: 40,
  padding: 0,
}));

export const CustomeTitle = styled(PrimarySubText)(({ theme }) => ({
  fontFamily: "rubik",
  fontWeight: 700,
  fontSize: 15,
  textAlign: "center",
  color: theme.palette.primary.contrastText,
  position: "relative",
}));

export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: 0,
  marginTop: 10,
  marginLeft: 16,
  marginRight: 16,
  marginBottom: 33,
  "&.MuiDialogContent-root": {
    overflowY: "unset",
  },
}));

export const SubText = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 12,
  fontFamily: theme.fontFamily.Inter,
  [theme.breakpoints.down("sm")]: {
    paddingBottom: 13,
  },
}));

export const Title = styled(PrimaryText)(({ theme }) => ({
  fontSize: 15,
  fontWeight: 700,
  fontFamily: theme.fontFamily.Rubik,
  textAlign: "start",
  paddingTop: 15,
  paddingBottom: 13,
}));
