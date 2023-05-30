import { Box, TextField, styled } from "@mui/material";

const FormInputBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  flex: 1,
  "& span": {
    fontFamily: theme.typography.primaryTitle.fontFamily,
  },
}));

const FormTextInput = styled(TextField)(() => ({
  background: "white",
  border: "none",
  "& MuiFormControl-root:": {},
}));

export const FormInput = ({ label, placeholder, multiline = false, value, onChange, minRows = 4, name }) => {
  return (
    <FormInputBox>
      <span>{label}</span>
      <FormTextInput
        value={value}
        onChange={onChange}
        InputProps={{
          disableUnderline: true,
        }}
        sx={{ border: "none", "& fieldset": { border: "none" } }}
        hiddenLabel
        multiline={multiline}
        minRows={minRows}
        fullWidth
        size="small"
        placeholder={placeholder}
        name={name}
      />
    </FormInputBox>
  );
};
