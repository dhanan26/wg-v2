import { MenuItem, Box, Popover } from "@mui/material";
import { useState } from "react";
import ExpandIcon from "../../../assets/icons/down-arrow-thin.svg";
import { Icon } from "../../common/icon/icon";
import { MainHeaderText } from "./header.styles";
import jsonData from "../../../pages/temp/programs.json";
import { StyledMenu } from "./menuDropDown.styles";

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
    setShow(true);
    setSelectedMenuItem(index);

    setAnchorElSubMenu(e.currentTarget);
  };

  const handleCloseSubMenu = () => {
    setShow(true);
    setAnchorElSubMenu(null);
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
