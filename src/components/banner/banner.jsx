import { StyledMainContainer } from "../common/box/box";
import { Stack, styled, Box, useMediaQuery } from "@mui/material";
import {
  PrimarySubText,
  PrimaryText,
} from "../common/typographies/typographies";
import { TextCenterBox } from "../common/containers/containers";
import { PrimaryButton, SecondaryButton } from "../common/buttons/button";
import { ButtonDropdown } from "../common/dropdowns/dropdowns";

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
import { useRequestProcessor } from "../../services/requestProcessor";
import axiosClient from "../../services/apis/axiosClient";
import { useState, useEffect } from "react";

export const Banner = () => {
  const isSmallScreen = useMediaQuery("(max-width:1300px)");
  const { customUseQuery } = useRequestProcessor();

  const [mainText, setMainText] = useState("");
  const [bannerImageUrl, setBannerImageUrl] = useState("");
  const [subText, setSubText] = useState("");

  let bannerData = "";
  let subPrograms = [];

  const {
    data: bannerDataDetails,
    isLoading,
    isError,
  } = customUseQuery(
    "BannerDataDetails",
    () =>
      axiosClient
        .post("/packages/filtersList", {
          request: {
            data: {
              approachId: ["63c53d1c109d7e7dba9c010c"],
              programId: "63da2d17f1623c6748db9c01",
            },
          },
        })
        .then((res) => res.data),
    {
      enabled: true,
    }
  );

  if (isLoading) {
    console.log("Loading...");
  }

  if (isError) {
    console.log(isError);
  }

  if (bannerDataDetails) {
    const programDetails = bannerDataDetails?.data?.programDetails;
    console.log(
      "🚀 ~ file: banner.jsx:72 ~ Banner ~ programDetails:",
      programDetails
    );

    programDetails.map((data) => {
      data.programImage.map((programImageData) => {
        bannerData = programImageData;
      });
    });

    // const programImage = programDetails?.programImage;
    // programImage.map((programImageData) => {
    //   bannerData = programImageData;
    // });

    programDetails.map((data) => {
      data?.subProgramId.map((subProgramData) => {
        subPrograms.push(subProgramData);
      });
    });
  }

  useEffect(() => {
    if (bannerData) {
      setMainText(bannerData.mainText);
      setBannerImageUrl(bannerData.programImageUrl.previewUrl);
      setSubText(bannerData.subText);
    }
  }, [bannerData]);

  return (
    <StyledMainContainer>
      <BannerBox image={bannerImageUrl}>
        <TextCenterBox>
          <Stack spacing={1}>
            <BannerMainText variant="secondaryTitle" color="textSecondary">
              {mainText}
            </BannerMainText>
            <BannerSubText variant="secondaryTitle" color="textSecondary">
              {subText}
            </BannerSubText>
          </Stack>
        </TextCenterBox>
        <BannerFooter>
          {isSmallScreen ? (
            <Box>
              <ButtonDropdown items={subPrograms} defaultValue={"Upper Back"} />
            </Box>
          ) : (
            <>
              <SubProgramBox>
                {subPrograms?.map((subProgram, index) => {
                  return (
                    <SubProgramButton
                      key={index}
                      variant="contained"
                      color="buttonSecondary"
                    >
                      {subProgram.name}
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
