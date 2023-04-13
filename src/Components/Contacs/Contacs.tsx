import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions/users.actions";
import DefaultNavbar from "../Header/DefaultNavbar";
import "./Contacs.css"

const Contacs = () => {

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
            <DefaultNavbar
                theme={"white"}
                isAuth={isAuth}
            />
            <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div className="contact-line"></div>
                <div className="contact-box">
                    <div>
                        <div className="contact-header">КОНТАКТЫ</div>
                        <div className="text-before-title">С радостью отвечу на все ваши вопросы. Напишите мне в любое время, как только смогу, уделю вам внимание.</div>
                    </div>
                    <div className="contact-content">
                        <div className="job-title">РАЗРАБОТЧИК <svg style={{ marginBottom: "7px" }} viewBox="0 0 30 30" width="30px" height="30px" fill="#a775fe"><path d="M24 8L24 6 22 6 22 4 20 4 20 6 18 6 18 8 17 8 16 8 16 10 14 10 14 8 13 8 12 8 12 6 10 6 10 4 8 4 8 6 6 6 6 8 4 8 4 10 4 18 6 18 6 20 8 20 8 22 10 22 10 24 12 24 12 26 15 26 18 26 18 24 20 24 20 22 22 22 22 20 24 20 24 18 26 18 26 10 26 8z" /></svg>

                        </div>
                        <div className="contact-link">Герасимов Евгений</div>
                        <div className="link-decoration"></div>
                        <div className="contact-link">beherit.music.generator@gmail.com</div>
                        <div className="link-decoration"></div>
                        <a href="https://github.com/ps1xe" className="contact-link">@ps1xe</a>
                        <div className="link-decoration"></div>

                    </div>
                </div >
                <div style={{ marginTop: "0", marginBottom: "80px" }} className="contact-line"></div>
            </div>
        </>
    );
}
export default Contacs;