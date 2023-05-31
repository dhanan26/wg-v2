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

export const ExpertSection = () => {
  return (
    <ExpertSectionMainBox>
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
