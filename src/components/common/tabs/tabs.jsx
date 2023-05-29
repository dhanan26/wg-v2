import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Box, Typography, useTheme } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const TabsComponent = ({ tabs, value, setValue }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const CustomTab = styled(Tab)(({ theme, index }) => ({
    backgroundColor: "#F2F2F2",
    fontFamily: theme.fontFamily.Inter,
    textTransform: "capitalize",
    padding: "5px 20px 5px 20px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "1px",
    },
    ...(index === 0 ? { marginRight: "50px" } : { marginRight: "1px" }),
    fontSize: "14px",
    fontWeight: 400,
  }));

  const CustomTabs = styled(Tabs)(({ theme, index }) => ({
    padding: "15px 15px 0px 15px",
  }));

  return (
    <>
      <CustomTabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        {tabs.map((tab, index) => (
          <CustomTab
            index={index}
            disableRipple
            label={tab.label}
            {...a11yProps(index)}
            key={index}
          />
        ))}
      </CustomTabs>
      {tabs.map((tab, index) => (
        <TabPanel value={value} index={index} key={index}>
          {tab.content}
        </TabPanel>
      ))}
    </>
  );
};

TabsComponent.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};
