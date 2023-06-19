import {
  Stack,
  styled,
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import * as React from "react";
import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  CustomFormControlLabel,
  FilterOptionBox,
  FilterOptionText,
  FilterTitle,
  CustomExpandIcon,
  CommonStyledAccordion,
  CommonAccordionSummary,
  CommonFilterTitle,
} from "./accordionFilter.styles";
import { useState } from "react";

const StyledCheckbox = styled((props) => (
  <Checkbox disableRipple size="medium" />
))(({ theme }) => ({
  justifyContent: "right",
  "& .MuiCheckbox-root": {
    width: 25,
    height: 23,
  },
}));

export const AccordionFilter = ({
  filterOptions = [],
  filterTitle,
  props,
  count,
}) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Box>
      <StyledAccordion>
        <StyledAccordionSummary expandIcon={<CustomExpandIcon />} {...props}>
          <FilterTitle color="textPrimary">
            {filterTitle} ({count})
          </FilterTitle>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          {filterOptions?.map((filterOption) => {
            return (
              <FilterOptionBox>
                <CustomFormControlLabel
                  labelPlacement="start"
                  label={
                    <FilterOptionText color={"textPrimary"}>
                      {filterOption}
                    </FilterOptionText>
                  }
                  control={
                    <StyledCheckbox
                      checked={true}
                      name={filterOption}
                      onChange={handleChange}
                    />
                  }
                />
              </FilterOptionBox>
            );
          })}
        </StyledAccordionDetails>
      </StyledAccordion>
    </Box>
  );
};

export const CommonAccordionFilter = ({
  filterOptions = [],
  filterTitle,
  props,
  count,
}) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Box>
      <CommonStyledAccordion>
        <CommonAccordionSummary expandIcon={<CustomExpandIcon />} {...props}>
          <CommonFilterTitle>{filterTitle}</CommonFilterTitle>
        </CommonAccordionSummary>
        <StyledAccordionDetails>
          {filterOptions?.map((filterOption) => {
            return (
              <FilterOptionBox>
                <CustomFormControlLabel
                  labelPlacement="start"
                  label={
                    <FilterOptionText color={"textPrimary"}>
                      {filterOption}
                    </FilterOptionText>
                  }
                  control={
                    <StyledCheckbox
                      checked={true}
                      name={filterOption}
                      onChange={handleChange}
                    />
                  }
                />
              </FilterOptionBox>
            );
          })}
        </StyledAccordionDetails>
      </CommonStyledAccordion>
    </Box>
  );
};

export const SliderAccordionFilter = ({
  filterOptions,
  filterTitle,
  props,
  count,
}) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Box>
      <SliderAccordion>
        <CommonAccordionSummary expandIcon={<CustomExpandIcon />} {...props}>
          <CommonFilterTitle>{filterTitle}</CommonFilterTitle>
        </CommonAccordionSummary>
        <StyledAccordionDetails>{filterOptions}</StyledAccordionDetails>
      </SliderAccordion>
    </Box>
  );
};
