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
} from "../../services/apis/apis";

export const MainContext = createContext();

export const Main = () => {
  const [params] = useSearchParams();
  const { customUseQuery, customUseMutate } = useRequestProcessor();

  const [programName, setProgramName] = useState("");

  const programId = params.get("id");
  const approachId = params.get("approach_id");

  const {
    data: programData,
    isLoading: isProgramLoading,
    isError: isProgramError,
    error: programError,
  } = customUseQuery(
    ["programDetails", programId],
    () => getProgramDataById(programId),
    { enabled: true, refetchOnWindowFocus: false }
  );
  console.log("🚀 ~ file: main.jsx:22 ~ Main ~ programData:", programData);
  const approchType = programData?.approachType[0]?.name;

  const {
    data: popularPackageData,
    isLoading: isPopularPackageLoading,
    isError: isPopularPackageError,
    error: populatPackageError,
    mutate: getMostPopularPackage,
  } = customUseMutate("packageDetails", (data) => getPackageDetails(data));
    console.log("🚀 ~ file: main.jsx:46 ~ Main ~ popularPackageData:", popularPackageData)
  

  useEffect(() => {
    getMostPopularPackage({
      approachId: "63c53d1c109d7e7dba9c010c",
      programId: "63da2d17f1623c6748db9c01",
      subProgramId: "",
    });
  }, []);

  const commonData = {
    programData,
    isProgramLoading,
    isProgramError,
    programError,
    approchType,
    programName,
    popularPackageData: {
      popularPackageData,
      specialties: popularPackageData?.specialties,
      parameterIcons: popularPackageData?.parameterIcons,
      popularPackages: popularPackageData?.packages,
      isPopularPackageLoading,
      isPopularPackageError,
      populatPackageError,
    },
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
