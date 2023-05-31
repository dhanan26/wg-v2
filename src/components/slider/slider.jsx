import { Box } from "@mui/material";
import { TimeSlider } from "./slider.styles";
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
    </>
  );
};
