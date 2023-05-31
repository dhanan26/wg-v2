import { FormButtonContainer } from "./formButton.styles";
export const FormButton = ({ type, disabled }) => (
  <FormButtonContainer disableRipple disableElevation variant="contained" fullWidth type={type} disabled={disabled}>
    Submit
  </FormButtonContainer>
);
