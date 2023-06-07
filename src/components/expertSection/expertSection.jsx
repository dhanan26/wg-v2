import {
  ExpertSectionMainBox,
  Title,
  SubTitle,
  ContentBox,
  ImageBox,
  ContentBoxTitle,
  ContentSubBox,
  SubContainerBox,
  SubContainerBoxText,
} from "./expertSection.styles";

import { useContext } from "react";
import { MainContext } from "../../pages/main/main";

export const ExpertSection = () => {
  const {approchType} = useContext(MainContext);
  return (
    <ExpertSectionMainBox approchType={approchType} >
      <Title variant="primaryTitle" color={"secondary"}>
        Is this the best solution for me?
      </Title>
      <SubTitle variant="secondaryText" color={"textPrimary"}>
        Take our expert doctor's assessment to find out if this is the right solution for
      </SubTitle>
      <ContentBox>
        <ImageBox />
        <ContentSubBox>
          <ContentBoxTitle variant="primaryTitle" color={"secondary"}>
            Talk to our experts
          </ContentBoxTitle>
          <SubContainerBox>
            <SubContainerBoxText variant="secondaryText" color={"primary"}>
              Take Quick Assessment
            </SubContainerBoxText>
          </SubContainerBox>
        </ContentSubBox>
      </ContentBox>
    </ExpertSectionMainBox>
  );
};
