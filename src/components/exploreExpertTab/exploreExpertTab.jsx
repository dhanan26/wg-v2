import {
  Tab,
  Tabs,
  Box,
  Typography,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  useMediaQuery,
  Popover,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useState, useRef } from "react";
import {
  StyledDialog,
  StyledDialogContent,
  StyledTab,
  StyledTabs,
  StyledTextField,
  StyledBox,
  StyledInputLabel,
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
const tabItems = [
  "Australia",
  "Bedarra Island",
  "Byron Bay",
  "Lord Howe Island",
  "Sydney",
];
export const ExploreExpertTab = () => {
  const [value, setValue] = useState(0);
  const [selectedTab, setSelectedTab] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const spanRef = useRef();
  const [tabOneArray, setTabOneArray] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    setAnchorEl(spanRef.current);
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
  const [checkboxState, setCheckboxState] = useState([]);

  const handleCheckboxChange = (event) => {
    // const data = e.target.value;
    // if (tabOneArray.includes(data)) {
    //   console.log(data, tabOneArray, " is already present ");
    // } else {
    //   setTabOneArray(data);
    // }

    const currentTab = tabLabels[value];
    const updatedCheckboxState = {
      ...checkboxState,
      [currentTab]: {
        ...checkboxState[currentTab],
        [event.target.value]: event.target.checked,
      },
    };
    console.log(updatedCheckboxState, "updatedCheckboxState");
    setCheckboxState(updatedCheckboxState);
  };

  const isSmallScreen = useMediaQuery("(max-width:800px)");
  return (
    <>
      {!isSmallScreen ? (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <StyledInputLabel sx={{ textAlign: "center" }}>
            Condition / Symptom / Health Goal
          </StyledInputLabel>
          <StyledTextField onClick={handleClickOpen} ref={spanRef} />
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <StyledInputLabel sx={{ textAlign: "center" }}>
            Condition / Symptom / Health Goal
          </StyledInputLabel>
          <StyledTextField onClick={handleClickOpen} fullWidth ref={spanRef} />
        </Box>
      )}
      <Popover
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ flexGrow: 1, display: "flex" }}>
          <StyledTabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            indicatorColor="none"
            sx={{
              borderRight: 1,
              backgroundColor: "lightGrey",
              paddingTop: "10px",
            }}
          >
            {tabLabels.map((label, index) => {
              return (
                <StyledTab
                  key={index}
                  label={label}
                  onClick={() => handleTab(index)}
                ></StyledTab>
              );
            })}
          </StyledTabs>

          <TabPanel value={value} index={0}>
            <FormGroup>
              {tabItems.map((item, TabPanelIndex) => {
                const currentTabLabel = tabLabels[value]; // Access the label of the current tab

                const isChecked =
                  checkboxState[currentTabLabel] &&
                  checkboxState[currentTabLabel][item];

                return (
                  <FormControlLabel
                    key={TabPanelIndex}
                    control={
                      <Checkbox
                        value={item}
                        onChange={(e) => handleCheckboxChange(e)}
                        color="primary"
                        checked={isChecked}
                      />
                    }
                    label={item}
                  />
                );
              })}
            </FormGroup>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <FormGroup>
              {tabItems.map((item, TabPanelIndex) => {
                const currentTabLabel = tabLabels[value]; // Access the label of the current tab

                const isChecked =
                  checkboxState[currentTabLabel] &&
                  checkboxState[currentTabLabel][item];
                return (
                  <FormControlLabel
                    key={TabPanelIndex}
                    control={
                      <Checkbox
                        value={item}
                        onChange={(e) => handleCheckboxChange(e)}
                        color="primary"
                        checked={isChecked}
                      />
                    }
                    label={item}
                  />
                );
              })}
            </FormGroup>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <FormControl>
              <FormGroup>
                {tabItems.map((item, TabPanelIndex) => {
                  const currentTabLabel = tabLabels[value]; // Access the label of the current tab

                  const isChecked =
                    checkboxState[currentTabLabel] &&
                    checkboxState[currentTabLabel][item];
                  return (
                    <FormControlLabel
                      key={TabPanelIndex}
                      control={
                        <Checkbox
                          value={item}
                          onChange={(e) => handleCheckboxChange(e)}
                          color="primary"
                          checked={isChecked}
                        />
                      }
                      label={item}
                    />
                  );
                })}
              </FormGroup>
            </FormControl>
          </TabPanel>
        </Box>
      </Popover>
    </>
  );
};
