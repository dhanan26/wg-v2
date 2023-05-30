import { DialogContent, Dialog, Button, styled, TextField, Box } from "@mui/material";
import { useState } from "react";
import { PrimaryButton, SecondaryButton } from "../common/buttons/button";
import { PrimarySubText } from "../common/typographies/typographies";
import CloseIcon from "../../assets/icons/Close.svg";
import ArrowIcon from "../../assets/icons/StyledArrow.svg";
import { Icon } from "../common/icon/icon";
import { HeaderBox, SubHeaderBox, ContentBox, StyleedDialogContent } from "./emailValidation.styles";

export const SubContainerBox = () => {
  return (
    <SubHeaderBox>
      <SubTitle variant="secondaryText">Send to me / others</SubTitle>
      <Icon src={ArrowIcon} className={"styled_arrow_icon"} />
    </SubHeaderBox>
  );
};
export const ContainerBox = ({ handleClose }) => {
  return (
    <HeaderBox>
      <SubContainerBox onClick={handleClose} />
      <Icon src={CloseIcon} className={"heart_icon"} onClick={handleClose} />
    </HeaderBox>
  );
};
export const EmailValidation = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [disable, setDisable] = useState(true);
  const [validEmail, setValidEmail] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const submit = () => {
    console.log(email);
  };
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    const emailRegex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{3}$/;
    const isValidEmail = emailRegex.test(inputValue);
    console.log(isValidEmail, "isValidEmail");

    setValidEmail(isValidEmail);
    if (isValidEmail === false) {
      setDisable(true);
    } else if (isValidEmail === true) {
      setDisable(false);
    }
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <StyleedDialogContent>
          <ContainerBox handleClose={handleClose} />
          <ContentBox>
            <StyledTextField
              error={error}
              placeholder="Email"
              variant="outlined"
              value={email}
              name="email"
              // helperText={error}
              onChange={handleInputChange}
            />
            <StyledButton variant="contained" color="buttonPrimary" onClick={submit} disabled={disable}>
              Send
            </StyledButton>
          </ContentBox>
        </StyleedDialogContent>
      </Dialog>
    </>
  );
};
