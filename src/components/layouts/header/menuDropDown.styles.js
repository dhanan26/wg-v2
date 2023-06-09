import { styled, Menu, MenuItem, Popover } from "@mui/material";
export const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiButtonBase-root": {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  // ":hover": {
  //   display: "none",
  // },
}));
export const StyledPopover = styled(Popover)(({ theme }) => ({
  display: "none",
  position: "absolute",
}));
