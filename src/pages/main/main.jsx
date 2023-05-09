
import { Outlet } from "react-router-dom"
import { Header } from "../../components/layouts/header"

export const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
            <h1>Footer</h1>
        </>
    )
}