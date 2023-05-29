import {
  Stack,
  styled,
  Typography,
  useTheme,
  Modal,
  Box,
  ListItem,
  List,
  ListItemText,
  Drawer,
  Button,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "../../assets/icons/Close.svg";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import { Icon } from "../common/icon/icon";
import { GetInTouchButton } from "../common/buttons/button";
import headSetIconWhite from "../../assets/icons/headSetWhite.svg";
import { theme } from "../../utils/theme";

const ContainerBox = styled(Box)(({ theme }) => ({
  gap: 25,
  display: "flex",
  flexDirection: "column",
  paddingTop: "50%",
  paddingLeft: "10%",
  paddingRight: "10%",
}));

const GetInTouchButtonHeader = styled(GetInTouchButton)(({ theme, position }) => ({
  height: 54,
  width: 160,
}));
export const StyledMenuDrawer = styled(Drawer)(({ theme, color }) => ({
  ".MuiDrawer-paper": {
    width: 250,
    // background: "#87c9d9",

    background: "linear-gradient(180deg, #FFFFFF 0%, #0D1C70 0.01%, #2FC1B2 100%)",
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
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
export const Menu = ({}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const data = [
    {
      label: "Pain Program",
    },
    {
      label: "Wellness Program",
    },
    {
      label: "Blog",
    },
    {
      label: "Our Story",
    },
  ];
  return (
    <>
      <MenuSharpIcon onClick={() => setDrawerOpen(true)} />
      <StyledMenuDrawer anchor={"right"} open={drawerOpen}>
        <Icon
          src={CloseIcon}
          className={"menu_close_icon"}
          onClick={() => {
            setDrawerOpen(false);
          }}
        />

        <ContainerBox>
          {data.map((item, index) => {
            return (
              <StyledMenuItem disableRipple key={index}>
                {item.label}
              </StyledMenuItem>
            );
          })}

          <GetInTouchButtonHeader
            variant="contained"
            color="buttonPrimary"
            startIcon={<Icon src={headSetIconWhite} className={"header_icon"} />}
          >
            Get in touch{" "}
          </GetInTouchButtonHeader>
        </ContainerBox>
      </StyledMenuDrawer>
    </>
  );
};
