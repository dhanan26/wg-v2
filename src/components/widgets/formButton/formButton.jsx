import { Button, styled } from "@mui/material";

const FormButtonContainer = styled(Button)(({ theme }) => ({
  background: theme.palette.buttonPrimary.main,
  marginTop: "0.875rem",
  borderRadius: "0",
  height: "2.5rem",
  fontWeight: 900,
  fontSize: "1.125rem",
  ":hover": {
    background: theme.palette.buttonPrimary.main,
  },
}));

export const FormButton = ({ type, disabled }) => (
  <FormButtonContainer disableRipple disableElevation variant="contained" fullWidth type={type} disabled={disabled}>
    Submit
  </FormButtonContainer>
);
