import { Tab, Tabs, Box, Typography } from "@mui/material";
import { GetInTouchButtonExplore } from "../expoloreExpert/exporeExpert.styles";
import { useState } from "react";
import { StyledDialog, StyledDialogContent, StyledTab, StyledTabs } from "./exploreExpertTab.styles";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ backgroundColor: "white" }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
export const ExploreExpertTab = () => {
  const [value, setValue] = useState(0);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <GetInTouchButtonExplore disableFocusRipple disableRipple variant="contained" onClick={handleClickOpen}>
        Click
      </GetInTouchButtonExplore>
      <StyledDialog open={open} onClose={handleClose}>
        <StyledDialogContent>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <StyledTabs
              disableFocusRipple
              orientation="vertical"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              indicatorColor="none"
              sx={{ borderRight: 1, backgroundColor: "lightGrey" }}
            >
              <StyledTab label="Item One"></StyledTab>
              <StyledTab label="Item Two"></StyledTab>
              <StyledTab label="Item Three"></StyledTab>
            </StyledTabs>
            <TabPanel value={value} index={0}>
              Item sachin
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Box>
        </StyledDialogContent>
      </StyledDialog>
    </>
  );
};
