import {
  styled,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  Box,
} from "@mui/material";
import { PrimarySubText } from "../../common/typographies/typographies";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  height: "auto",
  "&.MuiAccordion-root:before": {
    backgroundColor: "white",
    maxHeight: 49,
  },
  "& .Mui-expanded": {
    border: "none",
    maxHeight: 49,
    minHeight: 0,
  },
}));

export const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: 0,
}));

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  border: "1px solid black",
  paddingRight: "0.3rem",
}));

export const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  "& .MuiCheckbox-root": {
    marginLeft: 30,
    // marginRight: 10
  },
}));

export const FilterOptionBox = styled(Box)(({ theme }) => ({
  border: "1px solid black",
  height: "auto",
  textAlign: "left",
}));

export const FilterOptionText = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 14,
  width: 150,
  textAlign: "left",
  marginLeft: 15,
  fontFamily: theme.fontFamily.Inter,
}));

export const FilterTitle = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 16,
  minWidth: 90,
  textAlign: "left",
  fontFamily: theme.fontFamily.Inter,
  color: theme.palette.filterColor.color,
  textTransform: "Capitalize",
}));

export const CustomExpandIcon = styled(ExpandMoreIcon)(({ theme }) => ({
  fontSize: 30,
  color: theme.palette.filterColor.color,
}));

export const CommonStyledAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  height: "auto",
  border: "none !important",
  margin: "10px",
  "&.MuiAccordion-root": {
    border: "none !important",
  },
  "&.MuiAccordion-root:before": {
    backgroundColor: "red",
    maxHeight: 49,
    border: "none !important",
    display: "none",
  },
  "& .Mui-expanded": {
    maxHeight: 49,
    minHeight: 0,
    border: "none",
  },
}));

export const CommonAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  border: "none",
  paddingRight: "0.3rem",
}));

export const CommonFilterTitle = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 16,
  minWidth: 90,
  textAlign: "left",
  fontFamily: theme.fontFamily.Inter,
  color: theme.palette.primary.black,
  textTransform: "Capitalize",
  fontWeight: 600,
}));
