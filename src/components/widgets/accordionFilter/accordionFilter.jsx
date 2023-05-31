import { Stack, styled, Box, Checkbox, FormControlLabel } from "@mui/material";

import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  CustomFormControlLabel,
  FilterOptionBox,
  FilterOptionText,
  FilterTitle,
  CustomExpandIcon,
} from "./accordionFilter.styles";

const StyledCheckbox = styled((props) => <Checkbox disableRipple size="medium" />)(({ theme }) => ({
  "& .MuiCheckbox-root": {
    width: 25,
    height: 23,
  },
}));

export const AccordionFilter = ({ filterOptions = [], filterTitle, props }) => {
  return (
    <Box>
      <StyledAccordion>
        <StyledAccordionSummary expandIcon={<CustomExpandIcon />} {...props}>
          <FilterTitle color="textPrimary">{filterTitle}</FilterTitle>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          {filterOptions?.map((filterOption) => {
            return (
              <FilterOptionBox>
                <CustomFormControlLabel
                  labelPlacement="start"
                  label={<FilterOptionText color={"textPrimary"}>{filterOption}</FilterOptionText>}
                  control={<StyledCheckbox checked={true} name={filterOption} />}
                />
              </FilterOptionBox>
            );
          })}
        </StyledAccordionDetails>
      </StyledAccordion>
    </Box>
  );
};
