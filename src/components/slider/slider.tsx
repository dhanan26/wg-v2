import { Box, Slider, styled } from "@mui/material";
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
const TimeSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.slider.main,
  "& .MuiSlider-thumb": {
    height: 21,
    width: 21,
    backgroundColor: theme.palette.slider.pointer,
    boxShadow: "none",

    "&:focus,&:hover, &.Mui-active": {
      boxShadow: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    backgroundColor: theme.palette.slider.labelBackground,
    color: theme.palette.slider.labelText,
    left: 10,
  },
  "&:before": {
    display: "none",
  },
  "& .MuiSlider-track": {
    height: 0.5,
  },
}));
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
