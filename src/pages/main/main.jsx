
import { Outlet } from "react-router-dom"
import { Header } from "../../components/layouts/header"
import { Footer } from "../../components/footer"

export const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    )
}