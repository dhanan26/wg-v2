import { Tab, Tabs, Box, Typography, Button, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";
import {
  StyledDialog,
  StyledDialogContent,
  StyledTab,
  StyledTabs,
  StyledTextField,
  StyledBox,
} from "./exploreExpertTab.styles";
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
const tabLabels = ["Item One", "Item Two", "Item Three"];
const tabItems = ["Australia", "Bedarra Island", "Byron Bay", "Lord Howe Island", "Sydney"];
export const ExploreExpertTab = () => {
  const [value, setValue] = useState(0);
  const [selectedTab, setSelectedTab] = useState("");
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedCounts, setSelectedCounts] = useState({});

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
  const handleTab = (index) => {
    if (!selectedTab === "") {
      setSelectedTab(tabLabels[index]);
    }
  };

  const handleCheckboxChange = (event) => {};
  return (
    <>
      <StyledTextField onClick={handleClickOpen} />
      <StyledDialog open={open} onClose={handleClose}>
        <StyledDialogContent>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <StyledTabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              indicatorColor="none"
              sx={{ borderRight: 1, backgroundColor: "lightGrey" }}
            >
              {tabLabels.map((label, index) => {
                return <StyledTab key={index} label={label} onClick={() => handleTab(index)}></StyledTab>;
              })}
            </StyledTabs>

            <TabPanel value={value} index={0}>
              <FormGroup>
                {tabItems.map((item, TabPanelIndex) => {
                  return (
                    <FormControlLabel
                      key={TabPanelIndex}
                      control={<Checkbox value={item} onChange={handleCheckboxChange} color="primary" />}
                      label={item}
                    />
                  );
                })}
              </FormGroup>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <FormGroup>
                {tabItems.map((item, TabPanelIndex) => {
                  return (
                    <FormControlLabel
                      key={TabPanelIndex}
                      control={<Checkbox value={item} onChange={handleCheckboxChange} />}
                      label={item}
                    />
                  );
                })}
              </FormGroup>
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
