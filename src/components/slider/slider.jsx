import { Box, TextField, Button, Chip, Autocomplete } from "@mui/material";
import { StyledSlider } from "./slider.styles";
import { useState } from "react";
function valuetext(value) {
  return `${value}hrs`;
}

export const DurationSliderContainer = (value) => {
  const [chips, setChips] = useState([]);

  function valueLabelFormat(value) {
   
    let toolTipDuartion = value
    let toolTipLabel = "mins"

    while (toolTipDuartion > 59 ) {
      toolTipDuartion = Math.floor(toolTipDuartion / 60);
      toolTipLabel = "hrs";
    }

    return `${toolTipDuartion} ${toolTipLabel}`;
  }

  const marks = [
    {
      value: value.min,
      label: `${value?.min > 59 ? Math.floor(value?.min / 60) : value?.min} ${
        value?.min > 59 ? "hrs" : "mins"
      }`,
    },
    {
      value: value.max,
      label: `${value?.max > 59 ? Math.floor(value?.max / 60) : value?.max} ${
        value?.max > 59 ? "hrs" : "mins"
      }`,
    },
  ];
  const handleClick = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value, "enter key clicked");
      setChips([...chips, e.target.value]);
    }
    console.log(chips);
  };
  return (
    <>
      <Box
        sx={{
          width: 250,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledSlider
          aria-label="Custom marks"
          valueLabelDisplay="auto"
          marks={marks}
          defaultValue={value?.min}
          min={value?.min}
          max={value?.max}
          style={{ width: 200 }}
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
        />
      </Box>
      {/* <Autocomplete
        multiple
        freeSolo
        renderTags={(value, getTagProps) =>
          chips.map((option, index) => <Chip variant="outlined" label={option} {...getTagProps({ index })} />)
        }
        renderInput={(params) => <TextField {...params} variant="filled" label="freeSolo" placeholder="Favorites" />}
      /> */}
    </>
  );
};

export const PriceSliderContainer = (value) => {
  const [chips, setChips] = useState([]);

  function valueLabelFormat(value) {
    return `₹ ${value}`;
  }

  const marks = [
    {
      value: value.min,
      label: `₹ ${value.min}`,
    },

    {
      value: value.max,
      label: `₹ ${value.max}`,
    },
  ];
  const handleClick = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value, "enter key clicked");
      setChips([...chips, e.target.value]);
    }
    console.log(chips);
  };
  return (
    <>
      <Box
        sx={{
          width: 250,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledSlider
          aria-label="Custom marks"
          valueLabelDisplay="auto"
          marks={marks}
          defaultValue={value?.min}
          min={value?.min}
          max={value?.max}
          style={{ width: 200 }}
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
        />
      </Box>
      {/* <Autocomplete
        multiple
        freeSolo
        renderTags={(value, getTagProps) =>
          chips.map((option, index) => <Chip variant="outlined" label={option} {...getTagProps({ index })} />)
        }
        renderInput={(params) => <TextField {...params} variant="filled" label="freeSolo" placeholder="Favorites" />}
      /> */}
    </>
  );
};
