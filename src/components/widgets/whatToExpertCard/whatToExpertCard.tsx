import Avatar from "@mui/material/Avatar";
import { Stack, styled, Box, useMediaQuery } from "@mui/material";
import { PrimaryText, PrimarySubText } from "../../common/typographies/typographies";
import { TextCenterBox } from "../../common/containers/containers";

const WhatToExpectContainer = styled(TextCenterBox)(({ theme }) => ({
  width: 278,
  minHeight: 144,
  backgroundColor: theme.palette.cardActive.main,
  flexDirection: "column",
  display: "flex",
  justifyContent: "none",
  //   gap: 10,
}));

const Title = styled(PrimaryText)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 500,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  heigth: 56,
  width: 56,
  padding: 0,
  gap: 0,
  marginTop: 0,
}));
const SubText = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 400,
  wordBreak: "break-word",
}));
export const WhatToExpertCard = ({ data }) => {
  return (
    <WhatToExpectContainer>
      <StyledAvatar alt="Remy Sharp" src={data?.avatar} sizes="larger" />
      <Title color={"textPrimary"}>{data?.mainText}</Title>
      <SubText variant="secondaryText" color={"textPrimary"}>
        {data?.subText}
      </SubText>
    </WhatToExpectContainer>
  );
};
