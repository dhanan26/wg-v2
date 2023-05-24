import { Box, Button, TextField, styled } from "@mui/material";
import { useState } from "react";

const Container = styled(Box)(({ theme }) => ({
  background: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.main}80)`,
  paddingBottom: "2rem",
  fontFamily: theme.fontFamily.primary,
  padding: "1rem 2.063rem",

  "& h2": {
    fonSize: theme.typography.primaryText,
    fontWeight: 900,
    margin: "unset",
  },
  "& p": {
    fontSize: 14,
    fontWeight: 500,
  },
}));

const FormContainer = styled(Box)(({theme}) => ({
  display: "flex",
  gap: "2rem",
  flexWrap: "wrap",
  marginBottom: "1rem",
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
  }
}));

const FormButton = styled(Button)(({ theme }) => ({
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

export const EnquiryForm = ({ name }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    // handle submit
    console.log(form);
  }

  return (
    <Container>
      <h2>Enquiry For</h2>
      <p>{name}</p>
      <form>
        <FormContainer>
          <FormInput
            label="Name"
            placeholder={"John Carter"}
            value={form.name}
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
            }}
          />
          <FormInput
            label="Phone"
            placeholder={"(+91) 924 - 789567"}
            value={form.phone}
            onChange={(e) => {
              setForm({ ...form, phone: e.target.value });
            }}
          />
          <FormInput
            label="Email"
            placeholder={"example@email.com"}
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
          />
        </FormContainer>
        <FormInput
          label="Leave a message"
          placeholder={"Please Leave your message here..."}
          multiline
          value={form.message}
          onChange={(e) => {
            setForm({ ...form, message: e.target.value });
          }}
        />
      </form>
      <FormButton disableRipple disableElevation variant="contained" fullWidth onClick={handleSubmit}>
        Submit
      </FormButton>
    </Container>
  );
};

const FormInputBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  flex: 1,
}));

const FormTextInput = styled(TextField)(() => ({
  background: "white",
  border: "none",
  "& MuiFormControl-root:": {},
}));

const FormInput = ({ label, placeholder, multiline = false, value, onChange }) => {
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
        minRows={4}
        fullWidth
        size="small"
        placeholder={placeholder}
      />
    </FormInputBox>
  );
};
