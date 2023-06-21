import {
  styled,
  Box,
  Dialog,
  DialogContent,
  Tab,
  tabClasses,
  Tabs,
  OutlinedInput,
  InputLabel,
} from "@mui/material";

export const StyledDialog = styled(Dialog)(({ theme }) => ({}));
export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  width: "auto",
}));

export const StyledTab = styled(Tab)`
  &.${tabClasses.selected} {
    background-color: #fff;
  },
  
`;

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  " &.MuiTabs - indicator": {
    display: "none",
  },
  "&.MuiTabs-root": {
    borderRight: 0,
    width: "auto",
    // backgroundColor: "red",
  },
  height: "auto",
  width: "auto",
  "&.MuiButtonBase-root": {
    width: "auto",
  },
}));

export const StyledTextField = styled(OutlinedInput)(({ theme }) => ({
  "&.MuiOutlinedInput-root": {
    height: 42,
    width: 307,

    [theme.breakpoints.down("sm")]: {
      width: 365,
    },
  },
}));

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  textAlign: "center",
  marginBottom: 10,
  color: theme.palette.textPrimary.main,
  fontFamily: theme.fontFamily.secondary,
  fontWeight: 400,
  fontSize: 14,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 0,
  },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  width: "auto",
  background: "red",
}));
