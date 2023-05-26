import { styled, Box, useMediaQuery, Grid } from "@mui/material";

import { StyledSwitch } from "../common/switch";
import { PrimarySubText } from "../common/typographies/typographies";
import { Filter } from "../filters";
import { RecommendedSpecialties } from "../recommendedSpecialties";
import { EnquiryForm as WebEnquiryForm } from "../enquiryForm/web/";
import { EnquiryForm as MobileEnquiryForm } from "../enquiryForm/mobile/";

import { PackageCard } from "../widgets/packageCard";
import { PackageDetails } from "../packageDetails";
import { useState } from "react";

const MainContentContainer = styled((props) => <Grid container {...props} />)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  minHeight: "100vh",
  paddingLeft: 80,
  paddingRight: 36,
}));

const FilterContainer = styled((props) => <Grid item {...props} md={2.5} sm={0} />)(({ theme }) => ({
  paddingRight: 24,
  [theme.breakpoints.down("md")]: {
    paddingLeft: 10,
  },
}));

const PartnerContainer = styled((props) => <Grid item {...props} md={9.5} sm={12} xs={12} />)(() => ({
  // backgroundColor: "red",
}));

const SortByContainer = styled(Box)(() => ({
  height: 20,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: 10,
  margin: 20,
}));

const VerticalLine = styled(Box)(() => ({
  borderLeft: "1px solid black",
  height: 25,
}));

const SortByText = styled(PrimarySubText)(() => ({
  fontSize: 12,
}));

export const Content = () => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const isVerySmallScreen = useMediaQuery("(max-width:450px)");

  const [enquiryModal, setEnquiryModal] = useState(true);

  return (
    <MainContentContainer>
      {!isSmallScreen && (
        <FilterContainer>
          <Filter />
        </FilterContainer>
      )}

      <PartnerContainer>
        <SortByContainer>
          <SortByText variant="secondaryTitle" color={"textPrimary"}>
            Sort By
          </SortByText>
          <VerticalLine />
          <SortByText variant="secondaryTitle" color={"textPrimary"}>
            Price
          </SortByText>
          <StyledSwitch defaultChecked />
          <SortByText variant="secondaryTitle" color={"primary"}>
            Duration
          </SortByText>
        </SortByContainer>
        <RecommendedSpecialties />
        {/* remove this, added for testing */}
        <div style={{ display: "flex" }}>
          <PackageCard
            packageData={{
              imgUrl: "https://picsum.photos/300",
              logoUrl: "https://picsum.photos/200",
              awards: ["https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200"],
              name: "Taj Jiva Spa",
              description: "Hath yoga package",
            }}
            type={"Back pain"}
            cost={{
              basePrice: 10000,
              price: 1000,
              discount: undefined,
            }}
            details={{
              sessions: 20,
              days: 9,
            }}
          />
          <PackageCard
            isIndividual
            individualData={{
              imgUrl: "https://picsum.photos/200",
              isVerified: true,
              name: "Dr Ramses",
              exp: 27,
              description: "BDS MDS - Naturopathy Ayurveda Hath yoga package",
            }}
            type="Back Pain"
            cost={{
              basePrice: 10000,
              price: 7000,
              discount: 30,
            }}
            details={{
              sessions: 10,
              days: 1,
            }}
          />
        </div>
        {isVerySmallScreen ? (
          <MobileEnquiryForm name="Hotel whatever from Shivajinagar" open={enquiryModal} setOpen={setEnquiryModal} />
        ) : (
          <WebEnquiryForm name="Hotel whatever from ShivajiNagar" />
        )}
        <PackageDetails />
      </PartnerContainer>
    </MainContentContainer>
  );
};
