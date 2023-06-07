import { WhatToExpertCard } from "../widgets/whatToExpertCard/whatToExpertCard";
import beforeTheSessionImg from "../../assets/images/whatToExpect1.png";
import afterTheSessionImg from "../../assets/images/whatToExpect2.png";
import completionOftTheSessionImg from "../../assets/images/whatToExpect3.png";
import { WhatToExpectBox, Title, SubText, WhatToExpectContainerBox } from "./whatToExpect.styles";

import { useContext } from "react";
import { MainContext } from "../../pages/main/main";



export const WhatToExpect = () => {
  const {approchType,programData} = useContext(MainContext);

  const Expectdata = [
    {
      mainText: "Before the session",
      subText: programData?.beforeTheSession,
      avatar: `${beforeTheSessionImg}`,
    },
    {
      mainText: "After the session",
      subText:  programData?.afterTheSession,
      avatar: `${afterTheSessionImg}`,
    },
    {
      mainText: "Completion of the session",
      subText:  programData?.completionOfTheSession,
      avatar: `${completionOftTheSessionImg}`,
    },
  ];
  return (
    <WhatToExpectBox approchType={approchType} >
      <Title variant="primaryTitle" color={"secondary"}>
        What to expect?
      </Title>
      <SubText variant="secondaryText" color={"textPrimary"}>
        Lorem ipsum dolor sit amet consectetur. Senectus in etiam risus adipiscing risus arcu nullam quam.
      </SubText>
      <WhatToExpectContainerBox>
        {Expectdata?.map((data, index) => {
          return <WhatToExpertCard data={data} key={index} approchType={approchType} />;
        })}
      </WhatToExpectContainerBox>
    </WhatToExpectBox>
  );
};
