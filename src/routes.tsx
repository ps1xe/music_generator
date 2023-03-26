import About from "./Components/About/About"
import Contacs from "./Components/Contacs/Contacs"
import Login from "./Components/Auth/Login/Login"
import Main from "./Components/Main/Main"
import Registration from "./Components/Auth/Registration/Registration"
import { ConstsRoutes } from "./utils/consts"
import Home from "./Components/Home/Home"
import { ChangePassword } from "./Components/Settings/ChangePassword/ChangePassword"
import { ChangingAvatar } from "./Components/Settings/ChangingAvatar/ChangingAvatar"
import { ChangeNickname } from "./Components/Settings/ChangeNickname/ChangeNickname"
import { GetLinkToResetPassword } from "./Components/Auth/GetLinkToResetPassword/GetLinkToResetPassword"


export const authRoutes = [

    {
        path: ConstsRoutes.HOME_ROUTE,
        Component: Home
    },
    {
        path: ConstsRoutes.GET_LINK_TO_RESET_PASSWORD,
        Component: GetLinkToResetPassword
    },
    {
        path: ConstsRoutes.CHANGE_NICKNAME_ROUTE,
        Component: ChangeNickname
    },
    {
        path: ConstsRoutes.CHANGE_PASSWORD_ROUTE,
        Component: ChangePassword
    },
    {
        path: ConstsRoutes.CHANGING_AVATAR_ROUTE,
        Component: ChangingAvatar
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