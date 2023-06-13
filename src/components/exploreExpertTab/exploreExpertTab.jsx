import { Tab, Tabs, Box, Typography, Button, FormGroup, FormControlLabel, Checkbox ,useMediaQuery, ListItem, Popover} from "@mui/material";
import { useState ,useRef} from "react";
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
  const [show,setShow]=useState(false)
  const [selectedTab, setSelectedTab] = useState("");
 
  const [anchorEl, setAnchorEl] = useState(null);
  const spanRef = useRef();
const [checked,setChecked]=useState(false)
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    setShow(true)
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

  const handleCheckboxChange = () => {
    setChecked(!checked);
    console.log(item,"sd");
  };
  const isSmallScreen = useMediaQuery("(max-width:800px)");

  const onSubmit =(data => {
    console.log("Submitted:", data);
  }, []);
  return (
    <>
     {!isSmallScreen ? (<StyledTextField onClick={handleClickOpen}  ref={spanRef}  />):(
      <StyledTextField onClick={handleClickOpen} fullWidth ref={spanRef} />
     )}
   {/* {show  && <Card >
<CardContent> <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography></CardContent>
    
     </Card>} */}
      <Popover open={open} onClose={handleClose} anchorEl={anchorEl}  anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <StyledTabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              indicatorColor="none"
              sx={{ borderRight: 1, backgroundColor: "lightGrey" ,paddingTop:"10px"}}
            >
              {tabLabels.map((label, index) => {
                return <StyledTab key={index} label={label} onClick={() => handleTab(index)}></StyledTab>;
              })}
            </StyledTabs>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            <TabPanel value={value} index={0}>
              {/* <FormControl> */}
              <FormGroup>
                {tabItems.map((item, TabPanelIndex) => {
                  return (
                    <FormControlLabel
                      key={TabPanelIndex}
                      control={<Checkbox value={item}  checked={checked} onChange={handleCheckboxChange} color="primary" />}
                      label={item}
                    />
                  );
                })}
              </FormGroup>
              {/* </FormControl> */}
             
              
          
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
            <FormGroup>
            {tabItems.map((item, TabPanelIndex) => {
return(


            <FormControlLabel
                key={TabPanelIndex}
                control={
                  <input
                    type="checkbox"
                    value={item}
                    name={`Item Three[${item}]`}
                  />
                }
                label={item}
              />
         )   })}
              </FormGroup>
            </TabPanel>
{/* </form> */}
          </Box>
      </Popover>
    </>
  );
};
