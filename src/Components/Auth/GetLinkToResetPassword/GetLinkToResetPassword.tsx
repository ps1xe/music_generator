import { ChangeEvent, useState, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLinkToResetPassword, zeroingError } from "../../../redux/actions/auth.actions";
import "../AuthStyle.css"


export const GetLinkToResetPassword = () => {

    const [email, setEmail] = useState('');
    const [isEmail, setIsEmail] = useState(true);
    const dispatch = useDispatch();

    document.body.style.backgroundColor = '#151515';

    const emailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        setIsEmail(emailRegex.test(event.target.value));
        if (event.target.value === "") setIsEmail(true);
        dispatch(zeroingError())
    }


    const handleSubmit = (event: MouseEvent<HTMLElement>) => {
        if (!email.trim() || !isEmail) {
            event.preventDefault();
            return;
        }

        dispatch(getLinkToResetPassword({ email }))


        setEmail('');
        event.preventDefault();
    }

    const stateError = useSelector((state: any) => state.authError);

    return (
        <>
            <div className="recovery-password-body">
                <div className="recovery-password-box">
                    <Link style={{ color: "black", paddingLeft: "15px", paddingTop: "15px" }} to="/login"><svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.707 6.707a1 1 0 0 1 1.414 0L12 10.586l3.879-3.879a1 1 0 1 1 1.414 1.414L13.414 12l3.879 3.879a1 1 0 1 1-1.414 1.414L12 13.414l-3.879 3.879a1 1 0 1 1-1.414-1.414L10.586 12 6.707 8.121a1 1 0 0 1 0-1.414z" fill="currentColor" />
                    </svg>
                    </Link>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                        <div className="recovery-password-title">Восстановление пароля</div>
                    </div>
                    <form className="recovery-password-form">
                        <div className="mb-3">
                            <label className="form-label" style={{ color: "#686a6d" }}>Email</label>
                            <input onChange={emailChange} type="email" className="form-control" aria-describedby="emailHelp" />
                        </div>
                        {!isEmail ? <div className="error-auth">Не существует такого email</div> : <div></div>}
                        {stateError !== '' && stateError !== 'Complete' ? <div className="error-auth">{stateError}</div> : <div style={{display: "none"}}></div>}
                        {stateError === 'Complete' ? <div className="complete-auth">Письмо отправленно</div> : <div style={{display: "none"}}></div>}
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button onClick={handleSubmit} type="submit" className="login-button" >Получить ссылку</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </>
    );
}