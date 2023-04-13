import DefaultNavbar from "../Header/DefaultNavbar";
import "./About.css"
import "../Contacs/Contacs.css"
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions/users.actions";

const About = () => {
    document.body.style.backgroundColor = 'black';
    const dispatch = useDispatch();
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => { dispatch(getProfile()) }, [dispatch]);

    const responseUser = useSelector((state: any) => state.responseUser)
    useMemo(() => {
        if (responseUser === 'Complete') {
            setIsAuth(true)
        }
    }, [responseUser]);
    return (

        <>
            <DefaultNavbar isAuth={isAuth} />
            <div className="about">

                <div style={{ display: "flex", alignItems: "center" }}>

                    <div className="about-header">
                        <div style={{ marginTop: "0" }} className="contact-line"></div>
                        Веб-сервис для генерации музыкальной композиции
                        <div style={{ fontSize: "20px", paddingTop: "50px" }}>Данный веб-сайт был разработан в рамках дипломной работы</div>
                        <div style={{ marginTop: "3%" }} className="contact-line"></div>
                    </div>
                    <img className="about-preview-img" src="https://victorzhou.com/media/nn-series/network.svg" alt=""></img>
                </div>

                <div className="boxinfo" style={{ paddingTop: "20vh" }} data-aos="zoom-out-up">
                    <img className="pictures-inf" src="https://maxilla.s3.amazonaws.com/web/wp-content/uploads/2021/01/WT100-08-1024x576.png" alt="" />
                    <div className="boxinfo-boxtext">
                        <div className="boxinfo-header"> What the app does?</div>
                        <div className="boxinfo-content">An instrument that turns the user into both a composer and a conductor of an improvising ensemble:
                            everyone plays well, in harmony, someone is a soloist,
                            and the rest accompany and the leader can order someone to join the game at any moment. It's great!!!</div>
                    </div>
                </div>

                <div className="boxinfo" data-aos="zoom-out-up">
                    <img className="pictures-inf" src="https://maxilla.s3.amazonaws.com/web/wp-content/uploads/2021/01/WT100-18-1024x576.jpg" />
                    <div className="boxinfo-boxtext">
                        <div className="boxinfo-header"> What the app does?</div>
                        <div className="boxinfo-content">An instrument that turns the user into both a composer and a conductor of an improvising ensemble:
                            everyone plays well, in harmony, someone is a soloist,
                            and the rest accompany and the leader can order someone to join the game at any moment. It's great!!!</div>
                    </div>

                </div>

                <div className="boxinfo" data-aos="zoom-out-up">
                    <img className="pictures-inf" src="https://maxilla.s3.amazonaws.com/web/wp-content/uploads/2021/01/WT100-13-1024x576.png" />
                    <div className="boxinfo-boxtext">
                        <div className="boxinfo-header"> What the app does?</div>
                        <div className="boxinfo-content">An instrument that turns the user into both a composer and a conductor of an improvising ensemble:
                            everyone plays well, in harmony, someone is a soloist,
                            and the rest accompany and the leader can order someone to join the game at any moment. It's great!!!</div>
                    </div>
                </div>

            </div>
        </>


    );
}
export default About;