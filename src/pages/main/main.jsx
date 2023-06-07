
import { Outlet } from "react-router-dom"
import { Header } from "../../components/layouts/header"
import { Footer } from "../../components/footer"
import { createContext } from "react"
import { useRequestProcessor } from "../../services/requestProcessor"
import { useSearchParams } from "react-router-dom"

import { getProgramDataById } from "../../services/apis/apis"

export const MainContext = createContext();


export const Main = () => {
    const [params]= useSearchParams()
    const {customUseQuery}=useRequestProcessor();
   
    const programId = params.get("id");
    const approchTypeId = params.get("approch_id");

    const {data:programData,isLoading:isProgramLoading,isError:isProgramError,error:programError} = customUseQuery(['programDetails',programId], ()=>getProgramDataById(programId),{enabled:true, refetchOnWindowFocus: false })
    console.log("🚀 ~ file: main.jsx:22 ~ Main ~ programData:", programData)
    const approchType = programData?.approachType[0]?.name

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