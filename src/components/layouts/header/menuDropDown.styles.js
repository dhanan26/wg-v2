import { styled, Menu } from "@mui/material";
export const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiButtonBase-root": {
    display: "flex",
    justifyContent: "space-between",
  },
}));
