import { Stack, styled, Box, useMediaQuery } from "@mui/material";
import { TextCenterBox } from "../common/containers/containers";
import { PrimaryText, PrimarySubText } from "../common/typographies/typographies";
import { WhatToExpertCard } from "../widgets/whatToExpertCard/whatToExpertCard";
import image1 from "../../assets/images/whatToExpect1.jpg";
const WhatToExpectBox = styled(TextCenterBox)(({ theme }) => ({
  height: "auto",
  width: "auto",
  flexDirection: "column",
  fontWeight: 500,
  backgroundColor: theme.palette.cardActive.main,
  paddingBottom: 40,
}));

const Title = styled(PrimaryText)(({ theme }) => ({
  fontSize: 40,
  fontWeight: 400,
  paddingTop: 40,
  paddingBottom: 10,
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
  },
}));

const SubText = styled(PrimarySubText)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    padding: "0px 29px 0px 29px",
  },
}));

const Expectdata = [
  {
    mainText: "Before the session",
    subText: "Improved nutrition and immunity with supplements, healthier healthier healthierhealthierhealthierhea ",
    avatar: `${image1}`,
  },
  {
    mainText: "Before the session",
    subText: "Improved nutrition and immunity with supplements, healthier scalp with regular conditioning. ",
    avatar: `${image1}`,
  },
  {
    mainText: "Before the session",
    subText: "Improved nutrition and immunity with supplements, healthier scalp with regular conditioning. ",
    avatar: `${image1}`,
  },
];
const WhatToExpectContainerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 50,
  height: "auto",
  paddingTop: 20,
  [theme.breakpoints.down("lg")]: {
    gap: 40,
  },
  [theme.breakpoints.down("md")]: {
    gap: 30,
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    height: "auto",
    width: "auto",
    gap: 30,
  },
}));
export const WhatToExpect = () => {
  return (
    <WhatToExpectBox>
      <Title variant="primaryTitle" color={"secondary"}>
        What to expect?
      </Title>
      <SubText variant="secondaryText" color={"textPrimary"}>
        Lorem ipsum dolor sit amet consectetur. Senectus in etiam risus adipiscing risus arcu nullam quam.
      </SubText>
      <WhatToExpectContainerBox>
        {Expectdata?.map((data) => {
          return <WhatToExpertCard data={data} />;
        })}
      </WhatToExpectContainerBox>
    </WhatToExpectBox>
  );
};
