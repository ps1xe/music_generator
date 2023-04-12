import { ChangeEvent, useState, MouseEvent, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword, verificationRecoveryToken, zeroingError } from "../../../redux/actions/auth.actions";
import "./ResetPassword.css";

export const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [repetePassword, setRepetePassword] = useState('');
    const [passwordComparison, setPasswordComparison] = useState(true);
    const { token } = useParams();
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


    document.body.style.backgroundColor = 'black';

    const passwordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
        event.target.value !== repetePassword ? setPasswordComparison(false) : setPasswordComparison(true);
    }
    const repetePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRepetePassword(event.target.value)
        event.target.value !== password ? setPasswordComparison(false) : setPasswordComparison(true);
    }


    const handleSubmit = (event: MouseEvent<HTMLElement>) => {
        if (!password.trim()) {
            event.preventDefault();
            return;
        }
        if (checkPasswordStrength(password).valid) {
            if (token)
                dispatch(resetPassword({ token: token, newPassword: password }));
        }
        event.preventDefault();
    }

    const stateValidityRecoveryToken = useSelector((state: any) => state.recoveryTokenValidity)

    useEffect(() => {
        if (token) {
            dispatch(verificationRecoveryToken(token))
        }
    }, [])

    useMemo(() => {
        if (!stateValidityRecoveryToken)
            navigate('/login');

    }, [stateValidityRecoveryToken]);

    const stateAuth = useSelector((state: any) => state.authError);

    useEffect(() => {
        if (stateAuth === 'Complete-reset-password') {
            dispatch(zeroingError())
            navigate('/login');
        }
    }, [stateAuth]);


    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", width: "100%" }}>
                <form style={{ marginBottom: "24px", width: "60%" }}>
                    <div className="mb-3">
                        <label style={{ color: "white", fontFamily: "Roboto", fontSize: "20px" }}>Новый пароль</label>
                        <input style={{ background: "0", height: "50px", color: "white", borderRadius: "20px", border: "2px solid #818181" }} onChange={passwordChange} type="password" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label style={{ color: "white", fontFamily: "Roboto", fontSize: "20px" }}>Повторите пароль</label>
                        <input style={{ background: "0", height: "50px", color: "white", borderRadius: "20px", border: "2px solid #818181" }} onChange={repetePasswordChange} type="password" className="form-control" />
                    </div>
                    <button className="save-button" onClick={handleSubmit} style={{ width: "100%" }} type="submit">Sign Out</button>
                </form>
                {passwordComparison ? <div style={{ display: "none" }}></div> : <div style={{ textAlign: "center", height: "25px"  }} className="error-auth">Пароли не совпадают!!!</div>}
                {!checkPasswordStrength(password).valid && password !== '' ? <div style={{ textAlign: "center", height: "25px"  }} className="error-auth">{checkPasswordStrength(password).message}</div> : <div style={{ display: "none" }}></div>}
                {stateAuth !== '' ? <div style={{ textAlign: "center", height: "25px" }} className="error-auth">{stateAuth}</div> : <div style={{ display: "none" }}></div>}

            </div>
        </>
    );
};
