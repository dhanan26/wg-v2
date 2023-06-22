import {
  Stack,
  styled,
  Box,
  Button,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";

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
  AlignedBox,
  SBox,
} from "./exporeExpert.styles";
import { ExploreExpertTab } from "../exploreExpertTab";

import { useContext } from "react";
import { MainContext } from "../../pages/main/main";


const ExploreDropdownBox = ({ placeholder, label ,options }) => {
  return (
    <Stack>
      <DropDownTitleBox>
        <DropDownTitle>{label}</DropDownTitle>
      </DropDownTitleBox>
      <ExpertDropdown items={options} placeholder={placeholder} label={label} />
    </Stack>
  );
};

const ageOptions = ["0-10", "10-20", "20-30", "30-40", "40-50", "50-60","60-70","70-80","80-90","90-100"]
const genderOptions = ["Male", "Female", "Other"]

export const ExploreExpert = () => {
  const { approchType } = useContext(MainContext);
  return (
    <ExploreExpertBox approchType={approchType}>
      <Title variant="primaryTitle" color="secondary">
        Explore Experts For Upper Back Treatment
      </Title>
      <MainContainer>
        <InputContainer>
          <ExploreDropdownBox placeholder={"select age"} options={ageOptions} label={"Age"} />
          <ExploreDropdownBox placeholder={"select Gender"} options={genderOptions} label={"Gender"} />
        </InputContainer>
        <SBox>
          <ExploreExpertTab />
        </SBox>
        <AlignedBox>
          <ButtonContainer>
            <SearchButton variant="contained" color="buttonSecondary">
              Search
            </SearchButton>
            <GetInTouchButtonExplore
              variant="contained"
              color="buttonPrimary"
              startIcon={
                <Icon src={headSetIconWhite} className={"header_icon"} />
              }
            >
              Get in touch
            </GetInTouchButtonExplore>
          </ButtonContainer>
        </AlignedBox>
      </MainContainer>
    </ExploreExpertBox>
  );
};
