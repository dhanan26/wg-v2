import { FormInputBox, FormTextInput } from "./formInput.styles";
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
