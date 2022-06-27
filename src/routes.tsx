import About from "./Components/About/About"
import Contacs from "./Components/Contacs/Contacs"
import Login from "./Components/Auth/Login/Login"
import Main from "./Components/Main/Main"
import Registration from "./Components/Auth/Registration/Registration"
import { ConstsRoutes } from "./utils/consts"
import Home from "./Components/Home/Home"


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

    {
        path: ConstsRoutes.LOGIN_ROUTE,
        Component: Login
    },

    {
        path: ConstsRoutes.REGISTRATION_ROUTE,
        Component: Registration
    },

]