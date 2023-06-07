import { WhatToExpectContainer, Title, SubText, StyledAvatar } from "./whatToExpectCard.styles";
export const WhatToExpertCard = ({ data ,approchType}) => {
  return (
    <WhatToExpectContainer approchType={approchType} >
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
