import styled from "@emotion/styled";
import { Box, useMediaQuery } from "@mui/material";
import { TabsComponent } from "../../components/common/tabs";
import { PhotoTab } from "./photoTab";
import { Team } from "./teamTab";
import { TermsAndCondition } from "./termsAndConditionTab";
const PackageDetailsMainBox = styled(Box)(({ theme }) => ({
  padding: "0px 0px 0px 0px",
  backgroundColor: "white",
}));

const tab = [
  { label: "Package Details", content: "Package Details Tab Section" },
  { label: "About Us", content: "About Us Tab Section" },
  { label: "Team", content: <Team /> },
  { label: "Photos", content: <PhotoTab /> },
  { label: "Terms & Conditions", content: <TermsAndCondition /> },
];

export const PackageDetails = () => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  return (
    <PackageDetailsMainBox>
      {!isSmallScreen && (
        <>
          <TabsComponent tabs={tab} />
        </>
      )}
    </PackageDetailsMainBox>
  );
};
