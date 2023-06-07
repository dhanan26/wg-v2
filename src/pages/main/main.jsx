
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
   
    const programId = params.get("id");
    const approchTypeId = params.get("approch_id");
    const {customUseQuery}=useRequestProcessor();
    const {data:programData,isLoading:isProgramLoading,isError:isProgramError,error:programError} = customUseQuery(['programDetails',programId], ()=>getProgramDataById(programId),{enabled:true, refetchOnWindowFocus: false })
    console.log("🚀 ~ file: main.jsx:20 ~ Main ~ data:", programData)
    const programValue = programData?.data
    return (
        <>  
            <MainContext.Provider value={{programValue,isProgramLoading,isProgramError,programError}}>
            <Header />
            <Outlet />
            <Footer/>
            </MainContext.Provider>
        </>
    )
}