import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { Main } from "../pages/main";
import { Temp } from "../pages/temp/temp";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "",
                element:<Home/>
            },
            {
                path: "temp",
                element:<Temp/>
            },
        ]
    }
])