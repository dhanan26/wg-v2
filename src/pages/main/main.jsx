
import { Outlet } from "react-router-dom"
import { Header } from "../../components/layouts/header"
import { Footer } from "../../components/layouts/footer"
import { createContext,useEffect } from "react"
import { useRequestProcessor } from "../../services/requestProcessor"
import { useSearchParams } from "react-router-dom"

import { getProgramDataById,getPackageDetails } from "../../services/apis/apis"

export const MainContext = createContext();


export const Main = () => {
    const [params]= useSearchParams()
    const {customUseQuery,customUseMutate}=useRequestProcessor();
   
    const programId = params.get("id");
    const approchTypeId = params.get("approch_id");

    const {data:programData,isLoading:isProgramLoading,isError:isProgramError,error:programError} = customUseQuery(['programDetails',programId], ()=>getProgramDataById(programId),{enabled:true, refetchOnWindowFocus: false })
    console.log("🚀 ~ file: main.jsx:22 ~ Main ~ programData:", programData)
    const approchType = programData?.approachType[0]?.name

    const {data:packageData,isLoading:isPackageLoading,isError:isPackageError,error:packageError,mutate:mutatePackage}=customUseMutate('packageDetails',()=>getPackageDetails({approchId:approchTypeId,programId:programId}))

    //  mutatePackage({approchId:approchTypeId,programId:programId})

    useEffect(()=>{

    },[])

    return (
        <>  
            <MainContext.Provider value={{programData,isProgramLoading,isProgramError,programError,approchType}}>
            <Header />
            <Outlet />
            <Footer/>
            </MainContext.Provider>
        </>
    )
}