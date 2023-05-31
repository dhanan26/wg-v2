import { Stack, styled, Box } from "@mui/material";

import { Icon } from "../common/icon/icon";
import headSetIconWhite from "../../assets/icons/headSetWhite.svg";
import { ExpertDropdown } from "../common/dropdowns/dropdowns";

import {
  ExploreExpertBox,
  InputContainer,
  Title,
  ButtonContainer,
  MainContainer,
  GetInTouchButtonExplore,
  SearchButton,
  DropDownTitleBox,
  DropDownTitle,
} from "./exporeExpert.styles";

const gender = ["male", "female", "others"];

const ExploreDropdownBox = ({ placeholder, label }) => {
  return (
    <Stack>
      <DropDownTitleBox>
        <DropDownTitle>{label}</DropDownTitle>
      </DropDownTitleBox>
      <ExpertDropdown items={gender} placeholder={placeholder} />
    </Stack>
  );
};

export const ExploreExpert = () => {
  return (
    <ExploreExpertBox>
      <Title variant="primaryTitle" color="secondary">
        Explore Experts For Upper Back Treatment
      </Title>
      <MainContainer>
        <InputContainer>
          <ExploreDropdownBox placeholder={"select age"} label={"Age"} />
          <ExploreDropdownBox placeholder={"select age"} label={"Gender"} />
        </InputContainer>
        <ButtonContainer>
          <SearchButton variant="contained" color="buttonSecondary">
            Search
          </SearchButton>
          <GetInTouchButtonExplore
            variant="contained"
            color="buttonPrimary"
            startIcon={<Icon src={headSetIconWhite} className={"header_icon"} />}
          >
            Get in touch
          </GetInTouchButtonExplore>
        </ButtonContainer>
      </MainContainer>
    </ExploreExpertBox>
  );
};
