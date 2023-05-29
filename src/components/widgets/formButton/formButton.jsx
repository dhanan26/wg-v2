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

export const FormButton = ({ handleSubmit }) => (
  <FormButtonContainer disableRipple disableElevation variant="contained" fullWidth onClick={handleSubmit}>
    Submit
  </FormButtonContainer>
);
