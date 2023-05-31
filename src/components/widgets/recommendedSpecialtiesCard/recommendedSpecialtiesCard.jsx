import { Icon } from "../../common/icon/icon";
import TimeIcon from "../../../assets/icons/TimeIcon.svg";
import AyurvedaIcon from "../../../assets/icons/ayurveda.svg";
import {
  StyledSpecialtiesCard,
  SpecialtiesImage,
  SpecialtiesContent,
  SpecialtiesTextBox,
  SpecialtiesMainText,
  SpecialtiesSubText,
  SpecialtiesFooter,
  SpecialtiesFooterText,
} from "./recommendedSpecialitiesCard.styles";

export const RecommendedSpecialtiesCard = () => {
  return (
    <StyledSpecialtiesCard>
      <SpecialtiesImage>
        <Icon src={AyurvedaIcon} className="recommended_specialties_icon" />
      </SpecialtiesImage>
      <SpecialtiesContent>
        <SpecialtiesTextBox>
          <SpecialtiesMainText variant="primaryTitle" color="textPrimary">
            Naturopathy
          </SpecialtiesMainText>
          <SpecialtiesSubText color="textPrimary">Traditional Medicine</SpecialtiesSubText>
        </SpecialtiesTextBox>
        <SpecialtiesFooter>
          <SpecialtiesFooterText>
            <Icon src={TimeIcon} className="timeIcon" />
            <SpecialtiesSubText color="textPrimary">15</SpecialtiesSubText>
            <SpecialtiesSubText color="textPrimary">mins</SpecialtiesSubText>
          </SpecialtiesFooterText>
          <SpecialtiesFooterText>
            <SpecialtiesSubText color="textPrimary">How it works</SpecialtiesSubText>
          </SpecialtiesFooterText>
        </SpecialtiesFooter>
      </SpecialtiesContent>
    </StyledSpecialtiesCard>
  );
};
