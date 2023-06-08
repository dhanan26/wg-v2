import {  useMediaQuery,Box,Grid } from "@mui/material";

import { StyledSwitch } from "../common/switch";
import { PrimarySubText } from "../common/typographies/typographies";
import { Filter } from "../filters";
import { RecommendedSpecialties } from "../recommendedSpecialties";
import { EnquiryForm as WebEnquiryForm } from "../enquiryForm/web/";
import { EnquiryForm as MobileEnquiryForm } from "../enquiryForm/mobile/";

import { PackageCard } from "../widgets/packageCard";
import { PackageDetails } from "../packageDetails";
import { useState,useCallback, useRef,  } from "react";

//styles
import{MainContentContainer,FilterContainer,PartnerContainer,SortByContainer,VerticalLine,SortByText} from "./content.styles"

export const Content = () => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const isVerySmallScreen = useMediaQuery("(max-width:450px)");

   
  

  const [enquiryModal, setEnquiryModal] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);



 

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
        {/* <div style={{ display: "flex" }}>
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
        </div> */}

        <PackageSection/>

         {isVerySmallScreen ?<MobileEnquiryForm name="Hotel whatever from Shivajinagar" open={enquiryModalOpen} setOpen={setEnquiryModal} />:
         <WebEnquiryForm name="Hotel whatever from ShivajiNagar" />}

        {/* <PackageDetails /> */}
      </PartnerContainer>
    </MainContentContainer>
  );
};



export const PackageSection = ()=>{
  const [showDivider, setShowDivider] = useState(false);

  const [state, setState] = useState([
    { name: "card 1", height: 300, active: false },
    { name: "card 2", height: 300, active: false },
    { name: "card 3", height: 300, active: false },
    { name: "card 4", height: 300, active: false },
    { name: "card 5", height: 300, active: false },
    { name: "card 6", height: 300, active: false },
    { name: "card 1", height: 300, active: false },
    { name: "card 2", height: 300, active: false },
    { name: "card 3", height: 300, active: false },
    { name: "card 4", height: 300, active: false },
  ]);
  
  const handleButtonClick = () => {
    setShowDivider(true);
  };
  
  const cardsPerRow = 4
  const [currentRowIndex, setcurrentRowIndex] = useState(cardsPerRow);

  const calulateRowIndex = (index) => {
    console.log("🚀 ~ file: content.jsx:136 ~ calulateRowIndex ~ index:", index)
    const rowIndex = Math.floor(index / cardsPerRow);
    console.log("🚀 ~ file: content.jsx:138 ~ calulateRowIndex ~ rowIndex:", rowIndex)
    setcurrentRowIndex(cardsPerRow*(rowIndex+1))
    console.log("🚀 ~ file: content.jsx:139 ~ calulateRowIndex ~ cardsPerRow*rowIndex):", cardsPerRow*rowIndex+1)
  }


   return(
    <Grid container>
    {
      state?.map((each,index)=>{
       
        return(
          <>
          <Grid item xs={6} sm={6} md={3} key={index}>
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
            calulateRowIndex={calulateRowIndex}
            index={index}
          />

        
       

          </Grid>
            {/* Check if it's the last card in the first row */}
            {index === currentRowIndex - 1 && (
              <div className="divider">
                {/* Insert your content for the divider */}
                <PackageDetails/>
              </div>
            )}
            </>
  
        )

      })
    }

    </Grid>
   )
}
