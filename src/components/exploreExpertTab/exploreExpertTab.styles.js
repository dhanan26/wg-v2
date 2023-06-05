import { styled, Box, Dialog, DialogContent, Tab, tabClasses, Tabs } from "@mui/material";

export const StyledDialog = styled(Dialog)(({ theme }) => ({}));
export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({}));

export const StyledTab = styled(Tab)`
  &.${tabClasses.selected} {
    background-color: #fff;
  },
  
`;

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  " & .MuiTabs - indicator": {
    display: "none",
  },
  "&.MuiTabs-root": {
    borderRight: 0,
  },
}));
