import {
  AccordionFilter,
  CommonAccordionFilter,
} from "../widgets/accordionFilter";
import {
  FilterMainBox,
  WGTreasuresBox,
  Title,
  TitleBox,
  RatingTitleBox,
  RatingTitle,
  RatingBox,
  RatingCriteriaBox,
  RatingFormControlLabel,
  RatingLabelBox,
} from "./filters.styles";
import { useContext } from "react";
import { MainContext } from "../../pages/main/main";
import {
  Box,
  FormControlLabel,
  FormGroup,
  Typography,
  Checkbox,
} from "@mui/material";
export const Filter = () => {
  return (
    <FilterMainBox>
      <WGTreasures />
      <WGRating />
      <ConsultationFilter />
    </FilterMainBox>
  );
};

const WGTreasures = () => {
  const { popularPackageData } = useContext(MainContext);
  console.log("🚀 ~ file: filters.jsx:38 ~ WGTreasures ~ popularPackageData:", popularPackageData)
  const specialties = popularPackageData?.specialties;
  return (
    <WGTreasuresBox>
      <TitleBox>
        <Title variant="primaryText" color="textPrimary">
          WG Treasures
        </Title>
      </TitleBox>
      {specialties?.map((data) => {
        const specialtyOption = data?.specialtyType?.specialty;
        let option = [];
        {
          specialtyOption?.map((specialtyOptionData) => {
            option.push(specialtyOptionData?.name);
          });
        }
        const optionCount = specialtyOption?.length;

        return (
          <AccordionFilter
            filterTitle={data?.specialtyType?.name}
            filterOptions={option}
            aria-controls="panel1a-content"
            id="panel1a-header"
            count={optionCount}
          />
        );
      })}
    </WGTreasuresBox>
  );
};

const WGRating = () => {
  const { popularPackageData } = useContext(MainContext);
  const parameterIcons = popularPackageData?.parameterIcons;

  return (
    <>
      <RatingBox>
        <RatingTitleBox>
          <RatingTitle variant="primaryText" color="textPrimary">
            WG RATING CRITERIA
          </RatingTitle>
        </RatingTitleBox>
        <RatingCriteriaBox>
          <FormGroup>
            {parameterIcons?.map((data) => (
              <RatingFormControlLabel
                key={data?.id}
                control={<Checkbox size="medium" disableRipple />}
                label={<RatingLabel data={data} />}
                labelPlacement="start"
              />
            ))}
          </FormGroup>
        </RatingCriteriaBox>
      </RatingBox>
    </>
  );
};

const RatingLabel = (data) => {
  return (
    <>
      <RatingLabelBox>
        <div>
          <img
            src={data?.data?.parameterImage?.parameterImageUrl.previewUrl}
            alt="icon"
            height={25}
            width={25}
          />
          <span>{data?.data?.name}</span>
        </div>
      </RatingLabelBox>
    </>
  );
};

const ConsultationFilter = () => {
  const { popularPackageData } = useContext(MainContext);  
  const consultation = popularPackageData?.popularPackageData?.consultation;
  const consultationOption = []
  {
    consultation?.map((consultationData)=>{
      consultationOption.push(consultationData?.value)
    })
  }

  return (
    <>
      <Box>
        <CommonAccordionFilter
          filterTitle="Consultation"
          filterOptions={consultationOption}
          aria-controls="panel1a-content"
          id="panel1a-header"
        />
      </Box>
    </>
  );
};
