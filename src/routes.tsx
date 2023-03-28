import About from "./Components/About/About"
import Contacs from "./Components/Contacs/Contacs"
import Login from "./Components/Auth/Login/Login"
import Main from "./Components/Main/Main"
import Registration from "./Components/Auth/Registration/Registration"
import { ConstsRoutes } from "./utils/consts"
import Home from "./Components/Home/Home"
import { GetLinkToResetPassword } from "./Components/Auth/GetLinkToResetPassword/GetLinkToResetPassword"
import { Settings } from "./Components/Settings/Settings"
import { ResetPassword } from "./Components/Auth/ResetPassword/ResetPassword"


export const authRoutes = [

    {
        path: ConstsRoutes.HOME_ROUTE,
        Component: Home
    },

    {
        path: ConstsRoutes.SETTINGS_ROUTE,
        Component: Settings
    }


]

export const publicRoutes = [
    {
        path: ConstsRoutes.GET_LINK_TO_RESET_PASSWORD,
        Component: GetLinkToResetPassword
    },
    {
        path: ConstsRoutes.RESET_PASSWORD,
        Component: ResetPassword
    },

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