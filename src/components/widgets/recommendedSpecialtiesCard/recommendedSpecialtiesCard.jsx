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
  CustomTooltip,
} from "./recommendedSpecialitiesCard.styles";
import { useState, useContext } from "react";
import { HowItWorks } from "../../howItWorks/howItWorks";
import Tooltip from "@mui/material/Tooltip";

export const RecommendedSpecialtiesCard = (data) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const individualData = data?.specialtiesData;


  const openDialog = () => {
    setDialogOpen(true);
  };
  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <StyledSpecialtiesCard>
      <SpecialtiesImage>
        <Icon
          src={
            individualData?.specialty?.specialtyImage?.specialtyImageUrl
              ?.previewUrl
          }
          className="recommended_specialties_icon"
        />
      </SpecialtiesImage>
      <SpecialtiesContent>
        <SpecialtiesTextBox>
          <SpecialtiesMainText variant="primaryTitle" color="textPrimary">
            {individualData?.specialty?.name}
          </SpecialtiesMainText>
          <SpecialtiesSubText color="textPrimary">
            {individualData?.specialty.specialtyType.name}
          </SpecialtiesSubText>
        </SpecialtiesTextBox>
        <SpecialtiesFooter>
          <SpecialtiesFooterText>
            <Icon src={TimeIcon} className="timeIcon" />
            <SpecialtiesSubText color="textPrimary">
              {individualData?.duration}
            </SpecialtiesSubText>
            <SpecialtiesSubText color="textPrimary">mins</SpecialtiesSubText>
          </SpecialtiesFooterText>
          <SpecialtiesFooterText>
            <Tooltip
              title={
                <HowItWorks
                  open={isDialogOpen}
                  onClose={closeDialog}
                  individualData={individualData}
                />
              }
              placement="bottom-start"
              arrow
            >
              <SpecialtiesSubText onMouseEnter={openDialog} color="textPrimary">
                How it works
              </SpecialtiesSubText>
            </Tooltip>
          </SpecialtiesFooterText>
        </SpecialtiesFooter>
      </SpecialtiesContent>
    </StyledSpecialtiesCard>
  );
};
