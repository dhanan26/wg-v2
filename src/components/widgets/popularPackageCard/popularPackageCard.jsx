import cardImage from "../../../assets/images/popularPackage3.jpeg";

import {
  StyledPopularPackageCard,
  StyledCardMedia,
  StyledCardContent,
  CardTitle,
  CardSubText,
  StyledTitleBox,
  CardMediaSubText,
  CardMediaButton,
  StyledStack,
} from "./popularPackageCard.styles";

const name = "Instant Back Pain Release";

export const PopularPackageCard = ({ active, data }) => {
  return (
    <StyledPopularPackageCard active={active}>
      <StyledCardContent>
        <StyledTitleBox>
          <CardTitle variant="primaryTitle" color="textPrimary" uppercase={"true"}>
            {data?.name}
          </CardTitle>
          {/* <CardTitle variant="primaryTitle" color="textPrimary" uppercase={"true"}>
            Back Pain{" "}
          </CardTitle> */}
        </StyledTitleBox>
        <CardSubText variant="secondaryTitle" color="textPrimary">
          {data?.subTitle}
        </CardSubText>
      </StyledCardContent>
      <StyledCardMedia image={data?.packageImage?.packageImageUrl?.previewUrl}>
        <StyledStack>
          <CardMediaSubText variant="secondaryTitle" color="textSecondary">
            99 Experts | Starting from ₹ 1000
          </CardMediaSubText>
          <CardMediaButton variant="contained" color="buttonPrimary">
            +Explore
          </CardMediaButton>
        </StyledStack>
      </StyledCardMedia>
    </StyledPopularPackageCard>
  );
};
