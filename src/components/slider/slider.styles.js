import { styled, Slider } from "@mui/material";
export const TimeSlider = styled(Slider)(({ theme }) => ({
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
