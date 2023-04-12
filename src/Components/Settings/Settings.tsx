import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProfile } from "../../redux/actions/users.actions";
import { ChangePassword } from "./ChangePassword/ChangePassword";
import { ProfileSettings } from "./ProfileSettings/ProfileSettings";
import "./Settings.css"

export const Settings = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showComponent, setShowComponent] = useState('Profile');

    document.body.style.backgroundColor = 'black';

    const handleClick = (componentName: any) => {
        setShowComponent(componentName);
    };

    const responseUser = useSelector((state: any) => state.responseUser)

    useMemo(() => {
        if (responseUser === 'Access error') {
            navigate('/login')
        }
    }, [responseUser]);


    useEffect(() => { dispatch(getProfile()) }, [dispatch]);
    const stateProfile = useSelector((state: any) => state.profile)

    let componentToRender;
    if (showComponent === "Profile") {
        componentToRender =
            <div className="profile-settings">
                <div style={{ display: "flex", alignItems: "center", marginBottom: "55px", marginTop: "5%" }}>
                    <img alt="" className="avatar" src={stateProfile.avatar}></img>
                    <div className="nickname" >{stateProfile.username}</div>
                </div>
                <div style={{ color: "white", fontFamily: "Roboto", fontSize: "22px", marginBottom: "10px" }}>Личный профиль</div>
                <div style={{ color: "#818181", fontFamily: "Roboto", fontSize: "15px", marginBottom: "10px" }}>Измените своё фото и имя профиля</div>
                <div className="separator-line"></div>
                <ProfileSettings />
            </div>;
    }
    else if (showComponent === "ChangePassword") {
        componentToRender = <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>
            <div className="title-change-password">Смените пароль</div>
            <div style={{ width: "60%" }} className="separator-line"></div>
            <ChangePassword />
        </div>;
    }



    return (
        <>
            <div style={{ overflow: "hidden", height: "100vh" }}>

                <div style={{ display: "flex", width: "100%", justifyContent: "space-between", }}>


                    <div className="left-settings-menu">
                        <Link className="left-settings-menu-button" to="/home">
                            <svg width="45px" height="45px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M13 3v2h2v10h-2v2h4V3h-4zm0 8V9H5.4l4.3-4.3-1.4-1.4L1.6 10l6.7 6.7 1.4-1.4L5.4 11H13z"></path> </g> </g></svg>
                        </Link>
                        <button className={"left-settings-menu-button" + (showComponent === "Profile" ? "-active" : "")} onClick={() => handleClick("Profile")}><svg width="38px" height="38px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>profile_round [#1346]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-380.000000, -2119.000000)" fill={showComponent === "Profile" ? "#a775fe" : "#ffffff"}> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M338.083123,1964.99998 C338.083123,1962.79398 336.251842,1960.99998 334,1960.99998 C331.748158,1960.99998 329.916877,1962.79398 329.916877,1964.99998 C329.916877,1967.20599 331.748158,1968.99999 334,1968.99999 C336.251842,1968.99999 338.083123,1967.20599 338.083123,1964.99998 M341.945758,1979 L340.124685,1979 C339.561214,1979 339.103904,1978.552 339.103904,1978 C339.103904,1977.448 339.561214,1977 340.124685,1977 L340.5626,1977 C341.26898,1977 341.790599,1976.303 341.523154,1975.662 C340.286989,1972.69799 337.383888,1970.99999 334,1970.99999 C330.616112,1970.99999 327.713011,1972.69799 326.476846,1975.662 C326.209401,1976.303 326.73102,1977 327.4374,1977 L327.875315,1977 C328.438786,1977 328.896096,1977.448 328.896096,1978 C328.896096,1978.552 328.438786,1979 327.875315,1979 L326.054242,1979 C324.778266,1979 323.773818,1977.857 324.044325,1976.636 C324.787453,1973.27699 327.107688,1970.79799 330.163906,1969.67299 C328.769519,1968.57399 327.875315,1966.88999 327.875315,1964.99998 C327.875315,1961.44898 331.023403,1958.61898 334.733941,1959.04198 C337.422678,1959.34798 339.650022,1961.44698 340.05323,1964.06998 C340.400296,1966.33099 339.456073,1968.39599 337.836094,1969.67299 C340.892312,1970.79799 343.212547,1973.27699 343.955675,1976.636 C344.226182,1977.857 343.221734,1979 341.945758,1979 M337.062342,1978 C337.062342,1978.552 336.605033,1979 336.041562,1979 L331.958438,1979 C331.394967,1979 330.937658,1978.552 330.937658,1978 C330.937658,1977.448 331.394967,1977 331.958438,1977 L336.041562,1977 C336.605033,1977 337.062342,1977.448 337.062342,1978" id="profile_round-[#1346]"> </path> </g> </g> </g> </g></svg></button>
                        <button className={"left-settings-menu-button" + (showComponent === "ChangePassword" ? "-active" : "")} onClick={() => handleClick("ChangePassword")}><svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.9098 11.1203V6.73031C20.9098 5.91031 20.2898 4.98031 19.5198 4.67031L13.9498 2.39031C12.6998 1.88031 11.2898 1.88031 10.0398 2.39031L4.46984 4.67031C3.70984 4.98031 3.08984 5.91031 3.08984 6.73031V11.1203C3.08984 16.0103 6.63984 20.5903 11.4898 21.9303C11.8198 22.0203 12.1798 22.0203 12.5098 21.9303C17.3598 20.5903 20.9098 16.0103 20.9098 11.1203ZM12.7498 12.8703V15.5003C12.7498 15.9103 12.4098 16.2503 11.9998 16.2503C11.5898 16.2503 11.2498 15.9103 11.2498 15.5003V12.8703C10.2398 12.5503 9.49984 11.6103 9.49984 10.5003C9.49984 9.12031 10.6198 8.00031 11.9998 8.00031C13.3798 8.00031 14.4998 9.12031 14.4998 10.5003C14.4998 11.6203 13.7598 12.5503 12.7498 12.8703Z" fill={showComponent === "ChangePassword" ? "#a775fe" : "#ffffff"}></path> </g></svg></button>
                    </div>


                    {componentToRender}

                </div>
            </div>
        </>
    );
}
