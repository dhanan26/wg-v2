import { AccordionFilter } from "../widgets/accordionFilter";
import { FilterMainBox, WGTreasuresBox, Title, TitleBox } from "./filters.styles";

export const Filter = () => {
  return (
    <FilterMainBox>
      <WGTreasures />
    </FilterMainBox>
  );
};

const WGTreasures = () => {
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
