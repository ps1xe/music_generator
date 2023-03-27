import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProfile } from "../../redux/actions/users.actions";
import { ChangeNickname } from "./ChangeNickname/ChangeNickname";
import { ChangePassword } from "./ChangePassword/ChangePassword";
import { ChangingAvatar } from "./ChangingAvatar/ChangingAvatar";

export const Settings = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isAuthenticated = useSelector((state: any) => state.isAuthenticated)
    useEffect(() => {
        dispatch(getProfile());
        if (!isAuthenticated) navigate('/login')
    }, [isAuthenticated]);

    return (
        <>
            <Link style={{
                textDecoration: "none",
                width: "50px",
                height: "20px",
                marginBottom: "2%"
            }} to="/home">
                <svg style={{ marginTop: "4px" }} fill="none" stroke="#ffffff" height="50" viewBox="0 0 24 24" width="50"
                    xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd"
                        d="M15.0303 6.46967C15.3232 6.76256 15.3232 7.23744 15.0303 7.53033L10.5607 12L15.0303 
                16.4697C15.3232 16.7626 15.3232 17.2374 15.0303 17.5303C14.7374 17.8232 14.2626 
                17.8232 13.9697 17.5303L8.96967 12.5303C8.82902 12.3897 8.75 12.1989 8.75 12C8.75 11.8011 
                8.82902 11.6103 8.96967 11.4697L13.9697 6.46967C14.2626 6.17678 14.7374 6.17678 15.0303 6.46967Z"
                        fill="black" fillRule="evenodd" /></svg>
            </Link>
            <ChangeNickname />
            <ChangingAvatar />
            <ChangePassword />

        </>
    );
}
