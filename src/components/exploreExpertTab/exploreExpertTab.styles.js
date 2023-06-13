import { styled, Box, Dialog, DialogContent, Tab, tabClasses, Tabs, OutlinedInput,TextField } from "@mui/material";

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
    width: 207,
    
    [theme.breakpoints.down("sm")]: {
      width:365

    }
  },
 
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  width: "auto",
  background: "red",
}));
