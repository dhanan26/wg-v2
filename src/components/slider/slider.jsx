import { Box, TextField, Button, Chip, Autocomplete } from "@mui/material";
import { TimeSlider } from "./slider.styles";
import { useState } from "react";
function valuetext(value) {
  return `${value}hrs`;
}
const marks = [
  {
    value: 0,
    label: "30 mins",
  },

  {
    value: 100,
    label: "8 hrs",
  },
];

export const SliderContainer = () => {
  const [chips, setChips] = useState([]);
  const handleClick = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value, "enter key clicked");
      setChips([...chips, e.target.value]);
    }
    console.log(chips);
  };
  return (
    <>
      <Box sx={{ width: 300, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <TimeSlider
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          marks={marks}
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
