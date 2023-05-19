import Avatar from "@mui/material/Avatar";
import { Stack, styled, Box, useMediaQuery } from "@mui/material";
import { PrimaryText, PrimarySubText } from "../../common/typographies/typographies";
import { TextCenterBox } from "../../common/containers/containers";

const WhatToExpectContainer = styled(TextCenterBox)(({ theme }) => ({
  width: 278,
  minHeight: 144,
  backgroundColor: theme.palette.cardActive.main,
  flexDirection: "column",
  justifyContent: "flex-start",
  [theme.breakpoints.down("md")]: {
    width: 180,
    height: "auto",
  },
  [theme.breakpoints.down("smd")]: {
    width: 180,
    height: "auto",
  },
  // [theme.breakpoints.down("lg")]: {
  //   width: 225,
  // },
  [theme.breakpoints.down("sm")]: {
    width: 250,
    height: "auto",
  },
}));

const Title = styled(PrimaryText)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 500,
  paddingTop: 10,
}));

const SubText = styled(PrimarySubText)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 400,
  wordBreak: "break-word",
  textAlign: "center",
  paddingTop: 10,
}));
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  borderRadius: "100%",
  padding: 0,
  gap: 0,
  marginTop: 0,
}));
export const WhatToExpertCard = ({ data }) => {
  return (
    <WhatToExpectContainer>
      <StyledAvatar alt="Remy Sharp" src={data?.avatar} sx={{ height: 59, width: 59 }} />
      <Title variant="primaryTitle" color={"textPrimary"}>
        {data?.mainText}
      </Title>
      <SubText variant="secondaryText" color={"textPrimary"}>
        {data?.subText}
      </SubText>
    </WhatToExpectContainer>
  );
};
