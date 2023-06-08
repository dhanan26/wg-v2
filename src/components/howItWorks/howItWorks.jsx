import { Box, Typography } from "@mui/material";
import { useState } from "react";
import arrowRight from "../../assets/icons/arrow-right_filled.svg";
import CloseIcon from "../../assets/icons/Close.svg";
import { Icon } from "../common/icon/icon";
import { SubText, Title, MainBox } from "./howItWorks.styles";

export const HowItWorks = ({ open, onClose, individualData }) => {

  return (
    <>
      <MainBox open={open} onClose={onClose}>
        <Title>Approach of the specialty</Title>
        <SubText variant={"primaryText"}>
          {individualData?.specialty?.description}
        </SubText>
        <Title>How it works</Title>
        {individualData?.howItWorks.lineOne && (
          <SubText variant={"primaryText"}>
            <Icon src={arrowRight} className={"arrow-right_filled"} />
            {individualData?.howItWorks.lineOne}

            <br />
            <br />
          </SubText>
        )}

        {individualData?.howItWorks.lineTwo && (
          <SubText variant={"primaryText"}>
            <Icon src={arrowRight} className={"arrow-right_filled"} />
            {individualData?.howItWorks.lineTwo}

            <br />
            <br />
          </SubText>
        )}

        {individualData?.howItWorks.lineThree && (
          <SubText variant={"primaryText"}>
            <Icon src={arrowRight} className={"arrow-right_filled"} />
            {individualData?.howItWorks.lineThree}

            <br />
            <br />
          </SubText>
        )}

        {individualData?.howItWorks.lineFour && (
          <SubText variant={"primaryText"}>
            <Icon src={arrowRight} className={"arrow-right_filled"} />
            {individualData?.howItWorks.lineFour}

            <br />
            <br />
          </SubText>
        )}
      </MainBox>
    </>
  );
};
