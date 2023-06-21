import {  useMediaQuery,Box,Grid } from "@mui/material";

import { StyledSwitch } from "../common/switch";
import { PrimarySubText } from "../common/typographies/typographies";
import { Filter } from "../filters";
import { RecommendedSpecialties } from "../recommendedSpecialties";
import { EnquiryForm as WebEnquiryForm } from "../enquiryForm/web/";
import { EnquiryForm as MobileEnquiryForm } from "../enquiryForm/mobile/";

import { PackageCard } from "../widgets/packageCard";
import { PackageDetails } from "../packageDetails";
import { useState,useCallback, useRef,useEffect,useContext  } from "react";
import { MainContext } from "../../pages/main/main";

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
 
        <PackageSection/>
      </PartnerContainer>
    </MainContentContainer>
  );
};



export const PackageSection = ()=>{
  const { packagesData } = useContext(MainContext);
  console.log("🚀 ~ file: content.jsx:102 ~ PackageSection ~ packageData:", packagesData)
  const [showPackageDetails, setShowPackageDetails] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [packageDetailsModalOpen, setPackageDetailsModalOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [cardsPerRow,setCardsPerRow] = useState(4)
  const [lgValue,setLgValue]= useState(3)


  
  const [currentRowIndex, setcurrentRowIndex] = useState(cardsPerRow);

  const calulateRowIndex = (index) => {
    const rowIndex = Math.floor(index / cardsPerRow);
    const calulatedRowIndex = packagesData?.packageData?.length<cardsPerRow*(rowIndex+1)? packagesData?.packageData?.length:cardsPerRow*(rowIndex+1)
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
      packagesData?.packageData?.map((eachPackageData,index)=>{
       
        return(
          <>
          <CustomGrid item xs={6} sm={6} md={3} lg={lgValue} key={index}>
          <PackageCard
            packageData={eachPackageData}
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
                <PackageDetails setPackageDetailsModalOpen={setPackageDetailsModalOpen} packageDetailsModalOpen={packageDetailsModalOpen}  packageData={eachPackageData}/>
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
