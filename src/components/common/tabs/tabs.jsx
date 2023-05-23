import React from "react";
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
        <Box sx={{ p: 3 }}>
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

export const TabsComponent = ({ tabs }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  //   console.log("🚀 ~ file: tabs.jsx:48 ~ TabsComponent ~ theme:", theme)

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {tabs.map((tab, index) => (
          <Tab
          disableRipple
            sx={{
              backgroundColor: "#F2F2F2",
              padding: "5px 20px 5px 20px",
              ...(index === 0 ? { marginRight: "50px" } : { marginRight: "2px" }),
              fontSize: 14,
            }}
            label={tab.label}
            {...a11yProps(index)}
            key={index} 
          />
        ))}
      </Tabs>
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
