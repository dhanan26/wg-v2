import { styled, Typography } from "@mui/material";
import { NavigationBox } from "../../common/box/box";
import { NavigationContainer } from "../../common/containers/containers";
import { GetInTouchButton } from "../../common/buttons/button";
export const MainNavigationBox = styled(NavigationBox)(({ theme, position }) => ({
  height: 84,
  backgroundColor: "white",
  alignItems: "none",
}));

export const TopNavigationBox = styled(NavigationBox)(({ theme, position }) => ({
  "@media(max-width:600px)": {
    height: 20,
  },
}));

export const MainNavigationContainer = styled(NavigationContainer)(({ theme, position }) => ({
  justifyContent: "space-between",
  alignItems: "center",
  ".MuiContainer-root": {
    paddingLeft: 0,
  },
}));

export const TopNavigationContainer = styled(NavigationContainer)(({ theme, position }) => ({
  justifyContent: "flex-end",
  "@media(max-width:1200px)": {
    justifyContent: "center",
  },
}));

export const GetInTouchButtonHeader = styled(GetInTouchButton)(({ theme, position }) => ({
  height: 54,
  width: 160,
}));

export const MainHeaderText = styled(Typography)(({ theme, position }) => ({
  fontSize: 15,
  cursor: "pointer",
  fontFamily: theme.fontFamily.Rubik,
}));
