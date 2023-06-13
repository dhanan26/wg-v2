import { MenuItem, Box, Menu } from "@mui/material";
import { useState } from "react";
// import ExpandIcon from "../../../assets/icons/down-arrow-thin.svg";
import { Icon } from "../../common/icon/icon";
import { MainHeaderText } from "./header.styles";
import jsonData from "../../../pages/temp/programs.json";
import { NestedMenuItem } from "mui-nested-menu";
export const NestedMenu = ({ label, name }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [show, setShow] = useState(false);

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setAnchorElSubMenu(null);
  };

  return (
    <Box>
      <MainHeaderText onMouseEnter={handleClick}>{label}</MainHeaderText>
      <Menu
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
                    {label === "Wellness Program" &&
                      ele.name === "Wellness" && (
                        <NestedMenuItem label={item.name} parentMenuOpen={open}>
                          {" "}
                          {item.subProgramId.map((ele, index) => {
                            return <MenuItem key={index}>{ele.name}</MenuItem>;
                          })}
                        </NestedMenuItem>
                      )}
                    {label === "Pain Program" && ele.name === "Pain" && (
                      <NestedMenuItem label={item.name} parentMenuOpen={open}>
                        {" "}
                        {item.subProgramId.map((ele, index) => {
                          return <MenuItem key={index}>{ele.name}</MenuItem>;
                        })}
                      </NestedMenuItem>
                    )}
                  </>
                );
              })}
            </div>
          );
        })}
      </Menu>
    </Box>
  );
};
