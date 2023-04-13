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
    const [maxLenUsernameSatisfied, setMaxLenUsernameSatisfied] = useState(true);
    const [isEmail, setIsEmail] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    document.body.style.backgroundColor = '#e7e8ea';


    const checkPasswordStrength = (password: string) => {

        if (password === "") {
            return { valid: true, message: "Пароль не введен" };
        }


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
        if (event.target.value === "") setIsEmail(true);
        dispatch(zeroingError())
    }

    const passwordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
        event.target.value !== repetePassword ? setPasswordComparison(false) : setPasswordComparison(true);
        dispatch(zeroingError())
    }

    const usernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
        if (event.target.value.length > 10) setMaxLenUsernameSatisfied(false);
        else setMaxLenUsernameSatisfied(true);
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
        if(!maxLenUsernameSatisfied){
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
            <div style={{ background: "black" }}>
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
                            <label className="form-label" style={{ color: "#686a6d" }}>Email</label>
                            <input onChange={emailChange} type="email" className="form-control" aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" style={{ color: "#686a6d" }}>Имя пользователя</label>
                            <input onChange={usernameChange} type="text" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" style={{ color: "#686a6d" }}>Пароль</label>
                            <input onChange={passwordChange} type="password" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" style={{ color: "#686a6d" }}>Повторите пароль</label>
                            <input onChange={repetePasswordChange} type="password" className="form-control" />
                        </div>

                        <button onClick={handleSubmit} style={{ width: "100%" }} type="submit" className="reg-button" >Продолжить</button>
                    </form>
                    <div role="alert" style={{ background: "rgba(255, 255, 255, 0)", color: "#c9ced6", margin: "auto", marginTop: "13%", display: "flex", justifyContent: "space-between" }}>
                        <Link className="auth-button-login" to="/login">Вход</Link>
                        <Link className="auth-button-req" to="/password-recovery">Забыли пароль?</Link>
                    </div>
                </div>


                {(!isEmail || !maxLenUsernameSatisfied || !passwordComparison || stateAuth !== "" || !checkPasswordStrength(password).valid) ? (<div className="error-block">
                    <svg className="alert-img" height="35px" width="35px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 506.4 506.4" >
                        <circle style={{ fill: '#DF5C4E' }} cx="253.2" cy="253.2" r="249.2" />
                        <g>
                            <path style={{ fill: '#F4EFEF' }} d="M253.2,332.4c-10.8,0-20-8.8-20-19.6v-174c0-10.8,9.2-19.6,20-19.6s20,8.8,20,19.6v174
		C273.2,323.6,264,332.4,253.2,332.4z"/>
                            <path style={{ fill: '#F4EFEF' }} d="M253.2,395.6c-5.2,0-10.4-2-14-5.6s-5.6-8.8-5.6-14s2-10.4,5.6-14s8.8-6,14-6s10.4,2,14,6
		c3.6,3.6,6,8.8,6,14s-2,10.4-6,14C263.6,393.6,258.4,395.6,253.2,395.6z"/>
                        </g>
                        <path d="M253.2,506.4C113.6,506.4,0,392.8,0,253.2S113.6,0,253.2,0s253.2,113.6,253.2,253.2S392.8,506.4,253.2,506.4z M253.2,8
	C118,8,8,118,8,253.2s110,245.2,245.2,245.2s245.2-110,245.2-245.2S388.4,8,253.2,8z"/>
                        <path d="M249.2,336.4c-13.2,0-24-10.8-24-23.6v-174c0-13.2,10.8-23.6,24-23.6s24,10.8,24,23.6v174
	C273.2,325.6,262.4,336.4,249.2,336.4z M249.2,122.8c-8.8,0-16,7.2-16,15.6v174c0,8.8,7.2,15.6,16,15.6s16-7.2,16-15.6v-174
	C265.2,130,258,122.8,249.2,122.8z"/>
                        <path d="M249.2,399.6c-6.4,0-12.4-2.4-16.8-6.8c-4.4-4.4-6.8-10.4-6.8-16.8s2.4-12.4,6.8-16.8c4.4-4.4,10.8-6.8,16.8-6.8
	c6.4,0,12.4,2.4,16.8,6.8c4.4,4.4,6.8,10.4,6.8,16.8s-2.4,12.4-7.2,16.8C261.6,397.2,255.6,399.6,249.2,399.6z M249.2,360
	c-4,0-8.4,1.6-11.2,4.8c-2.8,2.8-4.4,6.8-4.4,11.2c0,4,1.6,8.4,4.8,11.2c2.8,2.8,7.2,4.8,11.2,4.8s8.4-1.6,11.2-4.8
	c2.8-2.8,4.8-7.2,4.8-11.2s-1.6-8.4-4.8-11.2C257.2,361.6,253.2,360,249.2,360z"/>
                    </svg>
                    <div className="alert-block" style={{ display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center", width: "95%" }}>
                        {!isEmail ? <div className="error-auth">Не существует такого email</div> : <div style={{ display: "none" }}></div>}
                        {!maxLenUsernameSatisfied ? (<div className="error-auth">Максимальная длина имени пользователя - 10</div>) : <div style={{ display: "none" }}></div>}
                        {passwordComparison ? <div style={{ display: "none" }}></div> : <div className="error-auth">Пароли не совпадают!!!</div>}
                        {(stateAuth !== '' && passwordComparison && isEmail) ? (<div className="error-auth">{stateAuth}</div>) : <div style={{ display: "none" }}></div>}
                        {!checkPasswordStrength(password).valid && password !== '' ? <div className="error-auth">{checkPasswordStrength(password).message}</div> : <div style={{ display: "none" }}></div>}
                    </div>
                </div>) : <div style={{ height: "80px", marginTop: "3%", position: "relative" }}></div>}
            </div>

        </>
    );


}
export default Registration;