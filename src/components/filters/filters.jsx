import {
  AccordionFilter,
  CommonAccordionFilter,
  SliderAccordionFilter,
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
import { SliderContainer } from "../slider";
export const Filter = () => {
  const { filterList,setFilterList } = useContext(MainContext);
 
  return (
    <FilterMainBox>
      <WGTreasures />
      <WGRating />
      <ConsultationFilter />
      <LocationFilter />
      <TypeOfCenterFilter />
      <SelectByPartner />
      <Condition />
      <DurationFilter />
      <PriceFilter />
    </FilterMainBox>
  );
};



const WGTreasures = ({}) => {
  const { popularPackageData } = useContext(MainContext);
  console.log(
    "🚀 ~ file: filters.jsx:38 ~ WGTreasures ~ popularPackageData:",
    popularPackageData
  );
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
            option.push({name:specialtyOptionData?.name,id:specialtyOptionData?._id});
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
  const consultationOption = [];
  {
    consultation?.map((consultationData) => {
      consultationOption.push(consultationData?.value);
    });
  }

  return (
    <>
      <Box>
        <CommonAccordionFilter
          filterTitle="CONSULTATION"
          filterOptions={consultationOption}
          aria-controls="panel1a-content"
          id="panel1a-header"  
          passId={false}
          name="consultation"
                />
      </Box>
    </>
  );
};

const LocationFilter = () => {
  const { popularPackageData } = useContext(MainContext);
  const location = popularPackageData?.popularPackageData?.city;

  return (
    <>
      <Box>
        <CommonAccordionFilter
          filterTitle="LOCATION"
          filterOptions={location}
          aria-controls="panel1a-content"
          id="panel1a-header"
          passId={false}
          name="city"
        />
      </Box>
    </>
  );
};

const TypeOfCenterFilter = () => {
  const { popularPackageData } = useContext(MainContext);
  const center = popularPackageData?.popularPackageData?.partnerTypes;


  return (
    <>
      <Box>
        <CommonAccordionFilter
          filterTitle="TYPE OF CENTER"
          filterOptions={center}
          aria-controls="panel1a-content"
          id="panel1a-header"
          passId={true}
          name="partnerType"
        />
      </Box>
    </>
  );
};

const SelectByPartner = () => {
  const { popularPackageData } = useContext(MainContext);
  const partner = popularPackageData?.popularPackageData?.partners;

 
  return (
    <>
      <Box>
        <CommonAccordionFilter
          filterTitle="SELECT BY PARTNER"
          filterOptions={partner}
          aria-controls="panel1a-content"
          id="panel1a-header"
          passId={true}
          name="partnerId"
        />
      </Box>
    </>
  );
};

const Condition = () => {
  const { popularPackageData } = useContext(MainContext);
  const condition = popularPackageData?.popularPackageData?.conditions;



  return (
    <>
      <Box>
        <CommonAccordionFilter
          filterTitle="CONDITION"
          filterOptions={condition}
          aria-controls="panel1a-content"
          id="panel1a-header"
          passId={true}
          name="conditions"
        />
      </Box>
    </>
  );
};

const DurationFilter = () => {
  const { popularPackageData } = useContext(MainContext);
  console.log(
    "🚀 ~ file: filters.jsx:250 ~ AgeFilter ~ popularPackageData:",
    popularPackageData
  );
  const duration = popularPackageData?.popularPackageData?.duration;

  return (
    <>
      <Box>
        <SliderAccordionFilter
          filterTitle="TREATMENT DURATION"
          filterOptions={
            <SliderContainer
              max={duration?.max}
              min={duration?.min}
              label="mins"
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        />
      </Box>
    </>
  );
};

const PriceFilter = () => {
  const { popularPackageData } = useContext(MainContext);
  console.log(
    "🚀 ~ file: filters.jsx:250 ~ AgeFilter ~ popularPackageData:",
    popularPackageData
  );
  const price = popularPackageData?.popularPackageData?.price;

  return (
    <>
      <Box>
        <SliderAccordionFilter
          filterTitle="PRICE"
          filterOptions={
            <SliderContainer max={price?.max} min={price?.min} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        />
      </Box>
    </>
  );
};
