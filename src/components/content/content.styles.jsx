import { styled, Box, DialogContent, TextField,Grid } from "@mui/material";

import { PrimarySubText } from "../common/typographies/typographies";



export const MainContentContainer = styled((props) => <Grid container {...props} />)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 16,
      paddingRight: 16,
    },
  
    paddingLeft: 80,
    paddingRight: 36,
  }));
  
  export const FilterContainer = styled((props) => <Grid item {...props} md={2.5} sm={0} />)(({ theme }) => ({
    paddingRight: 24,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 10,
    },
  }));
  
export   const PartnerContainer = styled((props) => <Grid item {...props} md={9.5} sm={12} xs={12} />)(() => ({
    // backgroundColor: "red",
  }));
  
 export  const SortByContainer = styled(Box)(() => ({
    height: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    margin: 20,
  }));
  
 export  const VerticalLine = styled(Box)(() => ({
    borderLeft: "1px solid black",
    height: 25,
  }));
  
  export const SortByText = styled(PrimarySubText)(() => ({
    fontSize: 12,
  }));
  