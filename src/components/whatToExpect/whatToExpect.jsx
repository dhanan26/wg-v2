import { WhatToExpertCard } from "../widgets/whatToExpertCard/whatToExpertCard";
import image1 from "../../assets/images/whatToExpect1.jpg";
import { WhatToExpectBox, Title, SubText, WhatToExpectContainerBox } from "./whatToExpect.styles";

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
        {Expectdata?.map((data, index) => {
          return <WhatToExpertCard data={data} key={index} />;
        })}
      </WhatToExpectContainerBox>
    </WhatToExpectBox>
  );
};
