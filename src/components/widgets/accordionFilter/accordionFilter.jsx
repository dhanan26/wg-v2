import { Stack, styled, Box, useMediaQuery, Accordion, AccordionSummary, AccordionDetails, Typography, Checkbox, FormControlLabel, } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PrimarySubText } from "../../common/typographies/typographies";


const StyledAccordion = styled(Accordion)(({ theme }) => ({
    boxShadow: 'none',
    height: 50,
    "&.MuiAccordion-root:before": {
        backgroundColor: "white"
    },
    "& .Mui-expanded": {
        border: "none",
        maxHeight: 50,
        minHeight: 0,
    }


}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    padding: 0
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    border: "1px solid black",
}));


const StyledCheckbox = styled((props) => (<Checkbox disableRipple size="medium" />))(({ theme }) => ({
    "& .MuiCheckbox-root": {
        width: 25,
        height: 23
    }
}));


const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    "& .MuiCheckbox-root": {
        marginLeft: 90
    }
}));


const FilterOptionBox = styled(Box)(({ theme }) => ({
    border: '1px solid black',
    height: 50,
    alignItems: "center",
}));

const FilterOptionText = styled(PrimarySubText)(({ theme }) => ({
    fontSize: 14,
    minWidth: 90,
    textAlign: "left",
    marginLeft: 15,
    fontFamily: theme.fontFamily.Inter
}));

const FilterTitle = styled(PrimarySubText)(({ theme }) => ({
    fontSize: 16,
    minWidth: 90,
    textAlign: "left",
    fontFamily: theme.fontFamily.Inter,
    color: theme.palette.primary.main

}));

const CustomExpandIcon = styled(ExpandMoreIcon)(({ theme }) => ({
    fontSize: 30,
    color: theme.palette.primary.main,
}));





export const AccordionFilter = ({ filterOptions = [], filterTitle, props }) => {
    return (
        <Box>
            <StyledAccordion  >
                <StyledAccordionSummary
                    expandIcon={<CustomExpandIcon />}
                    {...props}
                >
                    <FilterTitle color="textPrimary" >{filterTitle}</FilterTitle>
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                    {
                        filterOptions?.map((filterOption) => {
                            return (
                                <FilterOptionBox>
                                    <CustomFormControlLabel
                                        labelPlacement="start"
                                        label={<FilterOptionText color={"textPrimary"}  >{filterOption}</FilterOptionText>}
                                        control={
                                            <StyledCheckbox checked={true} name={filterOption} />
                                        }
                                    />
                                </FilterOptionBox>
                            )
                        })
                    }
                </StyledAccordionDetails>
            </StyledAccordion>
        </Box>
    )
}