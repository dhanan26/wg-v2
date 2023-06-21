import { Box, TextField, Button, Chip, Autocomplete } from "@mui/material";
import { TimeSlider } from "./slider.styles";
import { useState } from "react";
function valuetext(value) {
  return `${value}hrs`;
}

export const SliderContainer = (value) => {
  const [chips, setChips] = useState([]);
  const marks = [
    {
      value: value.min,
      label: `${value.label ? "" : "₹"} ${value.min} ${value.label ? value.label : ""}`,
    },

    {
      value: value.max,
      label: `${value.label ? "" : "₹"} ${value.max} ${value.label ? value.label : ""}`,
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
        <TimeSlider
          aria-label="Custom marks"
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          marks={marks}
          defaultValue={value?.min}
          min={value?.min}
          max={value?.max}
          style={{ width: 200 }}
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
