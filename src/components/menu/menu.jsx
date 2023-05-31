import { useState } from "react";
import CloseIcon from "../../assets/icons/Close.svg";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import { Icon } from "../common/icon/icon";
import headSetIconWhite from "../../assets/icons/headSetWhite.svg";

import { ContainerBox, StyledMenuDrawer, StyledMenuItem, GetInTouchButtonHeader } from "./menu.styles";

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
