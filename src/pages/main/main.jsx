import { useState } from "react";

import { Outlet } from "react-router-dom";
import { Header } from "../../components/layouts/header";
import { Footer } from "../../components/layouts/footer";
import { createContext, useEffect } from "react";
import { useRequestProcessor } from "../../services/requestProcessor";
import { useSearchParams } from "react-router-dom";

import {
  getProgramDataById,
  getPackageDetails,
  getAllPackagesApi
} from "../../services/apis/apis";

export const MainContext = createContext();

export const Main = () => {
  const [params,setParams] = useSearchParams();
  const { customUseQuery, customUseMutate } = useRequestProcessor();
  const programId = params.get("id");
  const approachId = params.get("approach_id");

  const [filterList, setFilterList] = useState({
    programName:[programId],
    approachType:[approachId],
    specialties:[],
    gender:[],
    sessionDuration:[],
    conditions:[],
    consultation:[],
    symptoms:[],
    healthGoals:[],
    parameterIcons:[],
    city:[],
    partnerId:[],
    partnerType:[],
    age:{
      min:0,
      max:100
    },
    // isFreeCancellation:false,
    // fullyRefundable:false,
    // cashlessInsurance:false,
  })

  const [programName, setProgramName] = useState("");

 
 
  //program api call
  const {
    data: programData,
    isLoading: isProgramLoading,
    isError: isProgramError,
    error: programError,
    refetch:refetchProgramQuery
  } = customUseQuery(
    ["programDetails", programId],
    () => getProgramDataById(programId),
    { enabled: true, refetchOnWindowFocus: false }
  );
  console.log("🚀 ~ file: main.jsx:22 ~ Main ~ programData:", programData);
  const approchType = programData?.approachType[0]?.name;
  //program api call end

  //popular package api call
  const {
    data: popularPackageData,
    isLoading: isPopularPackageLoading,
    isError: isPopularPackageError,
    error: populatPackageError,
    mutate: getMostPopularPackage,
  } = customUseMutate("packageDetails", (data) => getPackageDetails(data));
    console.log("🚀 ~ file: main.jsx:46 ~ Main ~ popularPackageData:", popularPackageData)
  //popular package api call end


  //package api call
  const {
    data: packageData,
    isLoading: isPackageLoading,
    isError: isPackageError,
    error: packageError,
    mutate: getAllPackages,
  } = customUseMutate("allPackages", async(data) => await getAllPackagesApi(data));

    console.log("🚀 ~ file: main.jsx:46 ~ Main ~ packageData-1:", packageData)
  //package api call end   
  

  useEffect(() => {
    getMostPopularPackage({
      approachId:approachId,
      programId:programId,
      subProgramId: "",
    });
  }, []);

  useEffect(()=>{
    getAllPackages(filterList)
  },[filterList,params])


 // adding ids to the filter list state
  const addIdtoFilterList = (id,state) => {
    if(filterList[state]?.includes(id)){
      setFilterList( (prev)=>({...prev,[state]:prev[state].filter((item)=>item!==id)}));
    }
    else{
      setFilterList((prev)=>({...prev,[state]:[...prev[state],id]}));
    }  
  }
  //////



  

  const commonData = {
    programData,
    isProgramLoading,
    isProgramError,
    programError,
    approchType,
    programName,
    refetchProgramQuery,
    setParams,
    setFilterList,
    addIdtoFilterList,
    filterList,
    popularPackageData: {
      popularPackageData,
      specialties: popularPackageData?.specialties,
      parameterIcons: popularPackageData?.parameterIcons,
      popularPackages: popularPackageData?.packages,
      isPopularPackageLoading,
      isPopularPackageError,
      populatPackageError,
    },
    packagesData:{
      getAllPackages,
      packageData,
      isPackageLoading,
      isPackageError,
      packageError,
    }
  };

  return (
    <>
      <MainContext.Provider value={commonData}>
        <Header
          getMostPopularPackage={getMostPopularPackage}
          setProgramName={setProgramName}
        />
        <Outlet />
        <Footer />
      </MainContext.Provider>
    </>
  );
};
