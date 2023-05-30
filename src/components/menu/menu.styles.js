import { styled, Box, Drawer, MenuItem } from "@mui/material";
import { GetInTouchButton } from "../common/buttons/button";
export const ContainerBox = styled(Box)(({ theme }) => ({
  gap: 25,
  display: "flex",
  flexDirection: "column",
  paddingTop: "50%",
  paddingLeft: "10%",
  paddingRight: "10%",
}));

export const StyledMenuDrawer = styled(Drawer)(({ theme, color }) => ({
  ".MuiDrawer-paper": {
    width: 250,
    // background: "#87c9d9",

    background: "linear-gradient(180deg, #FFFFFF 0%, #0D1C70 0.01%, #2FC1B2 100%)",
  },
}));
export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: 15,
  cursor: "pointer",
  fontFamily: theme.fontFamily.Rubik,
  paddingLeft: 10,
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  minHeight: "auto",

  ":focus": {
    backgroundColor: `${theme.palette.menuItem.main}`,
    paddingTop: "10px",
    paddingBottom: "10px",
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    color: `${theme.palette.primary.contrastText}`,
  },
}));
export const GetInTouchButtonHeader = styled(GetInTouchButton)(({ theme, position }) => ({
  height: 54,
  width: 160,
}));
