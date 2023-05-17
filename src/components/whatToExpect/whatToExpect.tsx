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
}));

const Title = styled(PrimaryText)(({ theme }) => ({
  fontSize: 40,
  fontWeight: 400,
}));

const SubText = styled(PrimarySubText)(({ theme }) => ({
  textAlign: "center",
  paddingBottom: 20,
}));

const Expectdata = [
  {
    mainText: "Before the session",
    subText:
      "Improved nutrition and immunity with supplements, healthier healthier healthierhealthierhealthierhealthierhealthierhealthierhealthierscalp with reguksdnfksndfknksdmalsdmlamslmlar  condsdnkksdnfkitioning condsdnkksdnfkitioningcondsdnkksdnfkitioning. ",
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
  gap: 60,
  height: "auto",
  justifyContent: "none",
}));
export const WhatToExpect = () => {
  return (
    <WhatToExpectBox>
      <Title color={"secondary"}>What to expect?</Title>
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
