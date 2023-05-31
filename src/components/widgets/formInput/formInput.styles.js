import { Box, TextField, styled } from "@mui/material";

export const FormInputBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  flex: 1,
  "& span": {
    fontFamily: theme.typography.primaryTitle.fontFamily,
  },
}));

export const FormTextInput = styled(TextField)(() => ({
  background: "white",
  border: "none",
  "& MuiFormControl-root:": {},
}));
