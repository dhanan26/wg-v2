import { Button } from "@mui/material";
import { useState } from "react";
import arrowRight from "../../assets/icons/arrow-right_filled.svg";
import CloseIcon from "../../assets/icons/Close.svg";
import { Icon } from "../common/icon/icon";
import {
  BootstrapDialog,
  StyledDialogTitle,
  CustomeTitle,
  StyledDialogContent,
  SubText,
  Title,
} from "./howItWorks.styles";

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
