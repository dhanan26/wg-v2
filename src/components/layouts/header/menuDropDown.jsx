import { MenuItem, Box, Menu } from "@mui/material";
import { useState } from "react";
// import ExpandIcon from "../../../assets/icons/down-arrow-thin.svg";
import { Icon } from "../../common/icon/icon";
import { MainHeaderText } from "./header.styles";
import jsonData from "../../../pages/temp/programs.json";
import { NestedMenuItem } from "mui-nested-menu";
import { useContext } from "react";
import { MainContext } from "../../../pages/main/main";
export const NestedMenu = ({ label, name ,getMostPopularPackage}) => {
  const {refetchProgramQuery,setParams} = useContext(MainContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const [anchorElSubMenu, setAnchorElSubMenu] = useState(null);

  const [show, setShow] = useState(false);

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setAnchorElSubMenu(null);
  };

  const handleClickSubMenu = (subProgramId,programId,approachId) => {
    setParams({id:programId,approach_id:approachId})
    refetchProgramQuery()
    getMostPopularPackage({programId,subProgramId,approachId})
    
  }

  const handleClickMainMenu = (programId,approachId) => {
    setParams({id:programId,approach_id:approachId})
    refetchProgramQuery()
    getMostPopularPackage({programId,subProgramId:"",approachId})
  }

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
                        <NestedMenuItem label={item.name} parentMenuOpen={open} onClick={()=>{handleClickMainMenu(item?._id,item?.approachType[0]?._id)}}>
                          {" "}
                          {item.subProgramId.map((ele, index) => {
                            return <MenuItem key={index} onClick={()=>{handleClickSubMenu(ele?._id,ele?.programId,item?.approachType[0]?._id)}} >{ele.name}</MenuItem>;
                          })}
                        </NestedMenuItem>
                      )}
                    {label === "Pain Program" && ele.name === "Pain" && (
                      <NestedMenuItem label={item.name} parentMenuOpen={open}  onClick={()=>{handleClickMainMenu(item?._id,item?.approachType[0]?._id)}}>
                        {" "}
                        {item.subProgramId.map((ele, index) => {
                          return <MenuItem key={index}  onClick={()=>{handleClickSubMenu(ele?._id,ele?.programId,item?.approachType[0]?._id)}}>{ele.name}</MenuItem>;
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
