import { MenuItem, Box, Popover } from "@mui/material";
import { useEffect, useState } from "react";
import ExpandIcon from "../../../assets/icons/down-arrow-thin.svg";
import { Icon } from "../../common/icon/icon";
import { MainHeaderText } from "./header.styles";
import jsonData from "../../../pages/temp/programs.json";
import { StyledMenu, StyledMenuItem } from "./menuDropDown.styles";

export const NestedMenu = ({ label, name }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElSubMenu, setAnchorElSubMenu] = useState(null);

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
  const handleSubMenu = (e, index, indexNo) => {
    console.log(e, index, "enter");
    setSelectedMenuItem(index);
    const Temp = index;
    if (index !== Temp) {
      handleCloseSubMenu(index);
      setAnchorElSubMenu(e.currentTarget);
    } else {
      setSelectedMenuItem();
      setAnchorElSubMenu();
    }
  };

  const handleCloseSubMenu = (index) => {
    console.log(index, "leave");
    setSelectedMenuItem(null);
  };

  return (
    <Box>
      <MainHeaderText onMouseEnter={handleClick}>{label}</MainHeaderText>
      <StyledMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {jsonData.map((item, index) => {
          return (
            <div>
              {item.approachType.map((ele, indexNo) => {
                return (
                  <>
                    {label === "Wellness Program" && ele.name === "Wellness" && (
                      <StyledMenuItem key={index} onMouseEnter={(e) => handleSubMenu(e, index)}>
                        {item.name}
                        {item.subProgramId && <Icon src={ExpandIcon} className="menu-arrow-right_filled" />}
                      </StyledMenuItem>
                    )}
                    {label === "Pain Program" && ele.name === "Pain" && (
                      <MenuItem key={index}>
                        {item.name}
                        {item.subProgramId && (
                          <Icon
                            src={ExpandIcon}
                            className={"menu-arrow-right_filled"}
                            onClick={(e) => handleSubMenu(e, index)}
                          ></Icon>
                        )}
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
                  PaperProps={{ onMouseLeave: handleCloseSubMenu }}
                  onMouseLeave={handleCloseSubMenu}
                >
                  {item.subProgramId.map((ele, index) => {
                    return <MenuItem key={index}>{ele.name}</MenuItem>;
                  })}
                </Popover>
              )}
            </div>
          );
        })}
      </StyledMenu>
    </Box>
  );
};
