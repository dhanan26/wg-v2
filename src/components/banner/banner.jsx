import { StyledMainContainer } from "../common/box/box";
import { Stack, styled, Box, useMediaQuery } from "@mui/material";
import {
  PrimarySubText,
  PrimaryText,
} from "../common/typographies/typographies";
import { TextCenterBox } from "../common/containers/containers";
import { PrimaryButton, SecondaryButton } from "../common/buttons/button";
import { ButtonDropdown } from "../common/dropdowns/dropdowns";
import { getColor } from "../../utils/common";

//icons
import HeadPhoneIcon from "../../assets/icons/HeadPhoneIcon.svg";
import { Icon } from "../common/icon/icon";
import {
  BannerBox,
  BannerMainText,
  BannerSubText,
  BannerFooter,
  SubProgramBox,
  SubProgramButton,
  RecommendationButton,
  TalkToExpertButton,
  RecommendationBox,
} from "./banner.styles";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { MainContext } from "../../pages/main/main";
import { useSearchParams } from "react-router-dom"

export const Banner = ({getMostPopularPackage,setProgramName}) => {
  const [params]= useSearchParams()
  const {programData,approchType} = useContext(MainContext);
  const programId = params.get("id");
  const approachId = params.get("approach_id");
  console.log("🚀 ~ file: banner.jsx:33 ~ Banner ~ programData:", programData)
  const isSmallScreen = useMediaQuery("(max-width:1300px)");
  const bannerData =  programData?.programImage[0]

  const handleSubProgramClick = (subProgramId,name) => {
    setProgramName(name)
    getMostPopularPackage({approachId:approachId,programId:programId,subProgramId})
  }

  return (
    <StyledMainContainer>
      <BannerBox image={bannerData?.programImageUrl?.previewUrl}>
        <TextCenterBox>
          <Stack spacing={1}>
            <BannerMainText variant="secondaryTitle" color="textSecondary">
              {bannerData?.mainText}
            </BannerMainText>
            <BannerSubText variant="secondaryTitle" color="textSecondary">
              {bannerData?.subText}
            </BannerSubText>
          </Stack>
        </TextCenterBox>
        <BannerFooter>
          {isSmallScreen ? (
            <Box>
              <ButtonDropdown items={programData?.subProgramId} defaultValue={programData?.subProgramId[0]?.name} approchType={approchType} onClick={(id,name)=>{handleSubProgramClick(id,name)}} />
            </Box>
          ) : (
            <>
              <SubProgramBox>
                {programData?.subProgramId?.map((subProgram, index) => {
                  return (
                    <SubProgramButton
                      key={index}
                      variant="contained"
                      color={getColor(approchType)}
                      onClick={() => handleSubProgramClick(subProgram?._id,subProgram?.name)}
                    >
                      {subProgram?.name}
                    </SubProgramButton>
                  );
                })}
              </SubProgramBox>
            </>
          )}
          <RecommendationBox>
            <RecommendationButton variant="contained" color="headerButtonMain">
              Recommendations
            </RecommendationButton>
            {isSmallScreen ? (
              <TalkToExpertButton
                variant="contained"
                color="headerButtonSecondary"
                startIcon={
                  <Icon src={HeadPhoneIcon} className={"header_icon"} />
                }
              />
            ) : (
              <SecondaryButton
                variant="contained"
                color="headerButtonSecondary"
              >
                Talk to Expert
              </SecondaryButton>
            )}
          </RecommendationBox>
        </BannerFooter>
      </BannerBox>
    </StyledMainContainer>
  );
};
