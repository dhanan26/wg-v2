import { Stack, styled, Box, useMediaQuery } from "@mui/material";
import { TextCenterBox } from "../common/containers/containers";
import { PrimaryText } from "../common/typographies/typographies";
import { AccordionFilter } from "../widgets/accordionFilter";

const FilterMainBox = styled(Box)(({ theme }) => ({
  width: 253,
  height: "100vh",
}));

export const Filter = () => {
  return (
    <FilterMainBox>
      <WGTreasures />
    </FilterMainBox>
  );
};

const WGTreasures = () => {
  const WGTreasuresBox = styled(Box)(({ theme }) => ({
    width: "auto",
    height: "100vh",
    marginTop: 20,
  }));

  const Title = styled(PrimaryText)(({ theme }) => ({
    fontWeight: 600,
    fontSize: 16,
  }));

  const TitleBox = styled(TextCenterBox)(({ theme }) => ({
    marginBottom: 20,
  }));

  return (
    <WGTreasuresBox>
      <TitleBox>
        <Title variant="primaryText" color="textPrimary">
          WG Treasures
        </Title>
      </TitleBox>
      <AccordionFilter
        filterTitle={"Traditional Medicine1"}
        filterOptions={["Acupuncture", "Ayurveda", "Acupuncture"]}
        aria-controls="panel1a-content"
        id="panel1a-header"
      />

      <AccordionFilter
        filterTitle={"Traditional Medicine2"}
        filterOptions={["Acupuncture", "Ayurveda", "Acupuncture"]}
        aria-controls="panel2a-content"
        id="panel2a-header"
      />
    </WGTreasuresBox>
  );
};
