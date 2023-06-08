import { Select, styled, FormControl, MenuItem, Stack, InputLabel, Menu } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { MainHeaderText } from "../../layouts/header/header.styles";
import DownArrow from "../../../assets/icons/down-arrow-blue.svg";
// import DownArrowGreen from '../../../assets/icons/down-arrow-green.svg'
import { Icon } from "../icon/icon";
const StyledDropDown = styled(Select)(({ theme, approchType }) => ({
  height: 39,
  width: 207,

  borderRadius: 2,
  textTransform: "none",
  boxShadow: "none",
  backgroundColor: approchType === "Pain" ? theme?.palette.buttonSecondary.main : theme?.palette.wellnessColor.main,
  ".MuiSelect-icon": {
    color: theme.palette.textSecondary.main,
    fontSize: 30,
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
  },
  ".MuiSelect-select": {
    color: theme.palette.textSecondary.main,
    paddingTop: "15px",
    paddingRight: "40px",
    fontFamily: theme.fontFamily.primary,
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: 0,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    width: 126,
  },
  [theme.breakpoints.down("xs")]: {
    width: 100,
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme, approchType }) => ({
  borderRadius: "none",
  fontSize: 14,
  fontFamily: theme.fontFamily.primary,
  justifyContent: "center",
  ":focus": {
    backgroundColor: approchType === "Pain" ? theme?.palette.buttonSecondary.main : theme?.palette.wellnessColor.main,
    color: theme.palette.textSecondary.main,
  },
}));

export const ButtonDropdown = ({ items, defaultValue, approchType }) => {
  console.log("🚀 ~ file: dropdowns.jsx:51 ~ ButtonDropdown ~ items:", approchType);
  return (
    <FormControl>
      <StyledDropDown
        approchType={approchType}
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: 0,
            },
          },
        }}
        IconComponent={ExpandMoreIcon}
        defaultValue={defaultValue}
      >
        {items?.map((item) => (
          <StyledMenuItem key={item} value={item?._id} approchType={approchType}>
            {item?.name}
          </StyledMenuItem>
        ))}
      </StyledDropDown>
    </FormControl>
  );
};

const StyledExpertDropdown = styled(StyledDropDown)(({ theme }) => ({
  width: 207,
  height: 42,
  backgroundColor: theme.palette.textSecondary.main,
  ".MuiSelect-icon": {
    color: theme.palette.textPrimary.main,
  },
  ".MuiSelect-select": {
    color: theme.palette.textPrimary.main,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    width: 176,
  },
}));

export const ExpertDropdown = ({ items, placeholder }) => {
  return (
    <FormControl>
      <StyledExpertDropdown
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: 0,
            },
          },
        }}
        IconComponent={ExpandMoreIcon}
        placeholder="hi"
      >
        {items?.map((item) => (
          <StyledMenuItem key={item} value={item}>
            {item}
          </StyledMenuItem>
        ))}
      </StyledExpertDropdown>
    </FormControl>
  );
};

export const AboutUsDropDown = ({ label, items }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <span onClick={handleClick}>
        {label}
        <Icon src={DownArrow} className={"down-arrow"} />
      </span>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {items.map((ele, index) => {
          return (
            <MenuItem key={index} onClick={handleClose}>
              {ele}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
