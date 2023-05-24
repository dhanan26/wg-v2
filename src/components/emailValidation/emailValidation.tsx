import { DialogContent, Dialog, Button, styled, TextField, Box } from "@mui/material";
import { useState } from "react";
import { PrimaryButton, SecondaryButton } from "../../components/common/buttons/button";
import { PrimarySubText } from "../../components/common/typographies/typographies";
import CloseIcon from "../../assets/icons/Close.svg";
import ArrowIcon from "../../assets/icons/StyledArrow.svg";
import { Icon } from "../../components/common/icon/icon";

const HeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));
const SubHeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "unset",
  gap: 5,
}));
const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 10,
}));
const StyledButton = styled(SecondaryButton)(({ theme }) => ({
  height: 55,
  lineHeight: 0,
  fontSize: 16,
  fontWeight: 700,
  paddingTop: 12,
  paddingBottom: 12,
  paddingLeft: 22,
  paddingRight: 22,
  [theme.breakpoints.down("sm")]: {
    width: 142,
  },
  [theme.breakpoints.down("xs")]: {
    width: 142,
    fontSize: 14,
  },
}));
const StyleedDialogContent = styled(DialogContent)(({ theme }) => ({
  background: "linear-gradient(180deg, rgba(105, 198, 172, 0.82) 0%, rgba(105, 198, 172, 0.5002) 100%)",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  height: "auto",
}));
const StyledTextField = styled(TextField)(({ theme }) => ({
  borderRadius: 4,
  input: {
    background: theme.palette.primary.contrastText,
    borderRadius: 4,
  },
}));
const SubTitle = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 15,
  fontWeight: 700,
  color: theme.palette.primary.contrastText,
  textAlign: "left",
  paddingBottom: 18,
}));
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
