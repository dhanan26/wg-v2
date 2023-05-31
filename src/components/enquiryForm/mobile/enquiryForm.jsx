import { Box, Dialog, IconButton, Slide, styled, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { FormInput } from "../../widgets/formInput";
import { FormButton } from "../../widgets/formButton";
import CloseIcon from "@mui/icons-material/Close";
import { Container, Header } from "./enquiryFormMobile.styles";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
            <FormInput
              label="Name"
              placeholder={"John doe"}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <FormInput
              label="Phone"
              placeholder={"+91 9876543221"}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          <FormInput
            label="Email"
            placeholder={"example@exmaple.com"}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
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
