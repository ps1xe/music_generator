import About from "./Components/About/About"
import Contacs from "./Components/Contacs/Contacs"
import Home from "./Components/Home/Home"
import Main from "./Components/Main/Main"
import { ConstsRoutes } from "./utils/consts"


export const authRoutes = [

    {
        path: ConstsRoutes.HOME_ROUTE,
        Component: Home
    }

]

export const publicRoutes = [

    {
        path: ConstsRoutes.MAIN_ROUTE,
        Component: Main
    },

    {
        path: ConstsRoutes.ABOUT_ROUTE,
        Component: About
    },

    {
        path: ConstsRoutes.CONTACS_ROUTE,
        Component: Contacs
    },

]