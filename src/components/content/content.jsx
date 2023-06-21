import {  useMediaQuery,Box,Grid } from "@mui/material";

import { StyledSwitch } from "../common/switch";
import { PrimarySubText } from "../common/typographies/typographies";
import { Filter } from "../filters";
import { RecommendedSpecialties } from "../recommendedSpecialties";
import { EnquiryForm as WebEnquiryForm } from "../enquiryForm/web/";
import { EnquiryForm as MobileEnquiryForm } from "../enquiryForm/mobile/";

import { PackageCard } from "../widgets/packageCard";
import { PackageDetails } from "../packageDetails";
import { useState,useCallback, useRef,useEffect  } from "react";

//styles
import{MainContentContainer,FilterContainer,PartnerContainer,SortByContainer,VerticalLine,SortByText, CustomGrid} from "./content.styles"

export const Content = () => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");

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


        {/* <PackageDetails /> */}
      </PartnerContainer>
    </MainContentContainer>
  );
};



export const PackageSection = ()=>{
  const [showPackageDetails, setShowPackageDetails] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [packageDetailsModalOpen, setPackageDetailsModalOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [cardsPerRow,setCardsPerRow] = useState(5)
  const [lgValue,setLgValue]= useState(3)


  const [state, setState] = useState([
    { name: "card 1", height: 300, isIndividual: false },
    { name: "card 2", height: 300, isIndividual: true },
    { name: "card 3", height: 300, isIndividual: false },
    { name: "card 4", height: 300, isIndividual: false },
    { name: "card 5", height: 300, isIndividual: true },
    { name: "card 6", height: 300, isIndividual: false },
    { name: "card 1", height: 300, isIndividual: false },
    { name: "card 2", height: 300, isIndividual: true },
    { name: "card 3", height: 300, isIndividual: false },
    { name: "card 4", height: 300, isIndividual: false },
  ]);
  
  const [currentRowIndex, setcurrentRowIndex] = useState(cardsPerRow);

  const calulateRowIndex = (index) => {
    const rowIndex = Math.floor(index / cardsPerRow);
    const calulatedRowIndex = state?.length<cardsPerRow*(rowIndex+1)?state?.length:cardsPerRow*(rowIndex+1)
    setcurrentRowIndex(calulatedRowIndex)
  }

  const isSmallScreen = useMediaQuery("(max-width:900px)");
  // const isbigScreen = useMediaQuery("(max-width:1800px)");
  // if(isbigScreen){
  //   setLgValue(2.3)
  // }


  useEffect(() => {
    // Event listener for window resize
    const handleResize = () => {
      // Logic to handle window resize
      console.log('Window resized');
      setShowPackageDetails(false)
      setShowEnquiry(false)
      setPackageDetailsModalOpen(false)
      setEnquiryModalOpen(false)
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

   return(
    <Grid container >
    {
      state?.map((each,index)=>{
       
        return(
          <>
          <CustomGrid item xs={6} sm={6} md={3} lg={lgValue} key={index}>
          <PackageCard
            packageData={{
              imgUrl: "https://picsum.photos/300",
              logoUrl: "https://picsum.photos/200",
              awards: ["https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200"],
              name: "Taj Jiva Spa",
              description: "Hath yoga package",
            }}
            isIndividual={each?.isIndividual}
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
            setShowPackageDetails={setShowPackageDetails}
            setPackageDetailsModalOpen={setPackageDetailsModalOpen}
            setShowEnquiry={setShowEnquiry}
            setEnquiryModalOpen={setEnquiryModalOpen}
            index={index}
          />

          </CustomGrid>
            {/* Check if it's the last card in the first row */}
            {index === currentRowIndex - 1 && (
                showPackageDetails && <Grid item md={12} lg={12}  > 
                <PackageDetails setPackageDetailsModalOpen={setPackageDetailsModalOpen} packageDetailsModalOpen={packageDetailsModalOpen}/>
                </Grid> 
            )} 

             {/* Check if it's the last card in the first row */}
             {index === currentRowIndex - 1 && showEnquiry &&(
                 isSmallScreen? <MobileEnquiryForm setOpen={setEnquiryModalOpen} open={enquiryModalOpen} />  :<Grid item md={12} lg={12}  >  <WebEnquiryForm/></Grid>
                // 
            )}


            </>

  
        )

      })
      
    }
    

    </Grid>
   )
}
