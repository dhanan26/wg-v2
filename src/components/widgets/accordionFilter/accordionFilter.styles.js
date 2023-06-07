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
  },
  "& .Mui-expanded": {
    border: "none",
    maxHeight: 50,
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
    marginLeft: 90,
  },
}));

export const FilterOptionBox = styled(Box)(({ theme }) => ({
  border: "1px solid black",
  height: "auto",
  alignItems: "center",
}));

export const FilterOptionText = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 14,
  minWidth: 90,
  textAlign: "left",
  marginLeft: 15,
  fontFamily: theme.fontFamily.Inter,
}));

export const FilterTitle = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 16,
  minWidth: 90,
  textAlign: "left",
  fontFamily: theme.fontFamily.Inter,
  color: theme.palette.primary.main,
}));

export const CustomExpandIcon = styled(ExpandMoreIcon)(({ theme }) => ({
  fontSize: 30,
  color: theme.palette.primary.main,
}));
