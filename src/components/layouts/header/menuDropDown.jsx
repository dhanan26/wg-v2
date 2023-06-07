import { Button, Menu, MenuItem, ListItemIcon, Box, Paper, Popover, Typography } from "@mui/material";
import { useState } from "react";
import { ExpandMore as ExpandMoreIcon, Login, TrendingUpOutlined } from "@mui/icons-material";
import ExpandIcon from "../../../assets/icons/arrow-right_filled.svg";
import { Icon } from "../../common/icon/icon";
import { MainHeaderText } from "./header.styles";
import jsonData from "../../../pages/temp/programs.json";
const menuItems = [
  {
    title: "Menu 1",
    submenu: [{ title: "sachin" }, { title: "Submenu 1-2" }, { title: "Submenu 1-3" }],
  },
  {
    title: "Menu 2",
    submenu: [{ title: "ragul" }, { title: "Submenu 2-2" }],
  },
  {
    title: "Menu 3",
    submenu: [{ title: "Submenu" }, { title: "Submenu 3-2" }, { title: "Submenu 3-3" }, { title: "Submenu 3-4" }],
  },
];

export const NestedMenu = ({ label, name }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElSubMenu, setAnchorElSubMenu] = useState(null);
  const [show, setShow] = useState(false);

  const open = Boolean(anchorEl);

  const openSubMenu = Boolean(anchorElSubMenu);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setAnchorElSubMenu(null);
  };
  const handleSubMenu = (e, index) => {
    console.log(index, "hi");
    setShow(true);
    setSelectedMenuItem(index);

    setAnchorElSubMenu(e.currentTarget);
  };

  const handleCloseSubMenu = () => {
    setAnchorElSubMenu(null);
    setSelectedMenuItem(null);
  };

  return (
    <Box>
      <MainHeaderText onClick={handleClick}>{label}</MainHeaderText>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {jsonData.map((item, index) => {
          return (
            <div>
              {item.approachType.map((ele, indexNo) => {
                return (
                  <>
                    {label === "Wellness Program" && ele.name === "Wellness" && (
                      <MenuItem key={index} onClick={(e) => handleSubMenu(e, index)}>
                        {item.name}
                      </MenuItem>
                    )}
                    {label === "Pain Program" && ele.name === "Pain" && (
                      <MenuItem key={index} onClick={(e) => handleSubMenu(e, index)}>
                        {item.name}
                      </MenuItem>
                    )}
                  </>
                );
              })}
              {selectedMenuItem === index && (
                <Popover
                  open={Boolean(anchorElSubMenu)}
                  anchorEl={anchorElSubMenu}
                  onClose={handleCloseSubMenu}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  {item.subProgramId.map((ele, index) => {
                    return <MenuItem key={index}>{ele.name}</MenuItem>;
                  })}
                </Popover>
              )}
            </div>
          );
        })}
      </Menu>
    </Box>
  );
};
