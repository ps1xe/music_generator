import { ChangeEvent, useState, MouseEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registration, zeroingError } from "../../../redux/actions/auth.actions";
import "../AuthStyle.css";

const Registration = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [repetePassword, setRepetePassword] = useState('');
    const [passwordComparison, setPasswordComparison] = useState(true);
    const [isEmail, setIsEmail] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const checkPasswordStrength = (password: string) => {
        if (password.length < 8) {
            return { valid: false, message: "Пароль должен содержать минимум 8 символов" };
        }

        if (!/[A-Z]/.test(password)) {
            return { valid: false, message: "Пароль должен содержать хотя бы одну букву в верхнем регистре" };
        }

        if (!/[a-z]/.test(password)) {
            return { valid: false, message: "Пароль должен содержать хотя бы одну букву в нижнем регистре" };
        }

        if (!/\d/.test(password)) {
            return { valid: false, message: "Пароль должен содержать хотя бы одну цифру" };
        }

        if (!/\W|_/.test(password)) {
            return { valid: false, message: "Пароль должен содержать хотя бы один специальный символ" };
        }

        return { valid: true, message: "Пароль соответствует требованиям сложности" };
    }


    const emailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        setIsEmail(emailRegex.test(event.target.value));
        dispatch(zeroingError())
    }

    const passwordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
        event.target.value !== repetePassword ? setPasswordComparison(false) : setPasswordComparison(true);
        dispatch(zeroingError())
    }

    const usernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
        dispatch(zeroingError())
    }

    const repetePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRepetePassword(event.target.value)
        event.target.value !== password ? setPasswordComparison(false) : setPasswordComparison(true);
        dispatch(zeroingError())
    }

    const handleSubmit = (event: MouseEvent<HTMLElement>) => {
        if (!email.trim() || !password.trim()) {
            event.preventDefault();
            return;
        }
        if (!passwordComparison) {
            event.preventDefault();
            return;
        }

        dispatch(registration({ email, username, password }));

        setEmail('');
        setPassword('');
        setUsername('');
        event.preventDefault();
    }

    const stateAuth = useSelector((state: any) => state.authError);


    useEffect(() => {
        if (stateAuth === 'Complete') {
            navigate('/home');
        }
    }, [stateAuth]);

    return (
        <>
            <div style={{ background: "#0c1019" }}>
                <Link className="exit-form-auth" to="/main">
                    <svg style={{ marginTop: "4px" }} fill="none" stroke="#ffffff" height="50" viewBox="0 0 24 24" width="50"
                        xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd"
                            d="M15.0303 6.46967C15.3232 6.76256 15.3232 7.23744 15.0303 7.53033L10.5607 12L15.0303 
                16.4697C15.3232 16.7626 15.3232 17.2374 15.0303 17.5303C14.7374 17.8232 14.2626 
                17.8232 13.9697 17.5303L8.96967 12.5303C8.82902 12.3897 8.75 12.1989 8.75 12C8.75 11.8011 
                8.82902 11.6103 8.96967 11.4697L13.9697 6.46967C14.2626 6.17678 14.7374 6.17678 15.0303 6.46967Z"
                            fill="black" fillRule="evenodd" /></svg>
                </Link>
            </div>
            <div className="auth-page">
                <div className="auth-block">
                    <form style={{ margin: "auto" }}>
                        <div className="mb-3">
                            <label className="form-label" style={{ color: "#c9ced6" }}>Email</label>
                            <input onChange={emailChange} type="email" className="form-control" aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" style={{ color: "#c9ced6" }}>Username</label>
                            <input onChange={usernameChange} type="text" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" style={{ color: "#c9ced6" }}>Password</label>
                            <input onChange={passwordChange} type="password" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" style={{ color: "#c9ced6" }}>Repete Password</label>
                            <input onChange={repetePasswordChange} type="password" className="form-control" />
                        </div>

                        <button onClick={handleSubmit} style={{ width: "100%" }} type="submit" className="btn btn-success " >Sign Out</button>
                    </form>
                    <div className="alert alert-dark" role="alert" style={{ background: "#0c1019", color: "#c9ced6", margin: "auto", marginTop: "4%" }}>Already have an account?⠀
                        <Link to="/login">Sign In</Link>
                    </div>
                </div>
                {(stateAuth === '' && passwordComparison) && (<div></div>)}
                {!isEmail ? <div className="error-auth">Не существует такого email</div> : <div></div>}
                {passwordComparison ? <div></div> : <div className="error-auth">Password mismatch!!!</div>}
                {(stateAuth !== '' && passwordComparison && isEmail) ? (<div className="error-auth">{stateAuth}</div>) : <div></div>}
                {!checkPasswordStrength(password).valid ? <div className="error-auth">{checkPasswordStrength(password).message}</div> : <div></div>}

            </div>

        </>
    );


}
export default Registration;