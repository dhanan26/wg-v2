import { DialogContent, Dialog, Button, styled, TextField, Box, DialogTitle } from "@mui/material";
import { useState } from "react";
import { PrimarySubText } from "../common/typographies/typographies";
import { PrimaryText } from "../common/typographies/typographies";
import arrowRight from "../../assets/icons/arrow-right_filled.svg";
import CloseIcon from "../../assets/icons/Close.svg";
import { Icon } from "../common/icon/icon";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  height: "auto",
  width: "auto",
}));
const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: 40,
  padding: 0,
}));

const CustomeTitle = styled(PrimarySubText)(({ theme }) => ({
  fontFamily: "rubik",
  fontWeight: 700,
  fontSize: 15,
  textAlign: "center",
  color: theme.palette.primary.contrastText,
  position: "relative",
}));
const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: 0,
  marginTop: 10,
  marginLeft: 16,
  marginRight: 16,
  marginBottom: 33,
  "&.MuiDialogContent-root": {
    overflowY: "unset",
  },
}));

const SubText = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 12,
  fontFamily: theme.fontFamily.Inter,
  [theme.breakpoints.down("sm")]: {
    paddingBottom: 13,
  },
}));

const Title = styled(PrimaryText)(({ theme }) => ({
  fontSize: 15,
  fontWeight: 700,
  fontFamily: theme.fontFamily.Rubik,
  textAlign: "start",
  paddingTop: 15,
  paddingBottom: 13,
}));

export const HowItWorks = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog onClose={handleClose} open={open}>
        <StyledDialogTitle>
          <CustomeTitle>Approach of the specialty</CustomeTitle>
          <Icon src={CloseIcon} className={"how-it-works"} onClick={handleClose}></Icon>
        </StyledDialogTitle>

        <StyledDialogContent>
          <SubText variant={"primaryText"} color={"secondary"}>
            Acupressure is a traditional Chinese medicine therapy in which pressure is applied to a specific point on
            the body
          </SubText>
          <Title color={"primary"}>How it works</Title>
          <SubText variant={"primaryText"} color={"secondary"} sx={{ paddingRight: "23px" }}>
            <Icon
              src={arrowRight}
              className={"arrow-right_filled"}
              onClick={() => {
                console.log("hi");
              }}
            ></Icon>
            A message which appears when a cursor is positioned over an icon.
          </SubText>
          <br />
          <SubText variant={"primaryText"} color={"secondary"}>
            <Icon
              src={arrowRight}
              className={"arrow-right_filled"}
              onClick={() => {
                console.log("hi");
              }}
            ></Icon>
            A message which appears when a cursor is positioned over an icon.
          </SubText>
        </StyledDialogContent>
      </BootstrapDialog>
    </>
  );
};
