import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { Main } from "../pages/main";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "",
                element:<Home/>
            },
        ]
    }
])