
import { Outlet } from "react-router-dom"
import { Footer } from "../../components/layouts/footer/footer"
import { Header } from "../../components/layouts/header"

export const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    )
}