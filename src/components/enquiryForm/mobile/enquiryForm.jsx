import { Box, Dialog,  IconButton, Slide, styled, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { FormInput } from "../../widgets/formInput";
import { FormButton } from "../../widgets/formButton";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Container = styled(Box)(({ theme }) => ({
  background: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.main}80)`,
  height: "100%",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",

  div: {
    display: "flex",
    gap: "1rem",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "0.875rem",
  },
}));

const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  div: {
    display: "flex",
    flexDirection: "column",
    alignItem: "center",

    h1: {
      fontFamily: theme.typography.primaryTitle.fontFamily,
      fontSize: "1.2rem",
      margin: "unset",
    },

    h3: {
      fontFamily: theme.typography.primaryTitle.fontFamily,
      fontSize: "1rem",
      fontWeight: 500,
      margin: "unset",
      marginBottom: "0.5rem",
    },
  },
}));

export const EnquiryForm = ({ name, open, setOpen }) => {
  const isVerySmallScreen = useMediaQuery("(max-width:360px)");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    // handle submit
  };

  return (
    <Dialog open={open} fullScreen={isVerySmallScreen} TransitionComponent={Transition}>
      <Container>
        <Header>
          <div>
            <h1>ENQUIRY FOR</h1>
            <h3>{name}</h3>
          </div>
          <div>
            <IconButton onClick={() => setOpen((prev) => !prev)}>
              <CloseIcon color="white" sx={{ color: "white", fontSize: 35 }} />
            </IconButton>
          </div>
        </Header>
        <form>
          <div>
            <FormInput label="Name" placeholder={"John doe"} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <FormInput label="Phone" placeholder={"+91 9876543221"} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          </div>
          <FormInput label="Email" placeholder={"example@exmaple.com"} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <FormInput
            label="Leave a message"
            placeholder={"Please Leave your message here..."}
            multiline
            minRows={6}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <FormButton handleSubmit={handleSubmit} />
        </form>
      </Container>
    </Dialog>
  );
};
