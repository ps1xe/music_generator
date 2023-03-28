import { ChangeEvent, useState, MouseEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword, verificationRecoveryToken } from "../../../redux/actions/auth.actions";

export const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [repetePassword, setRepetePassword] = useState('');
    const [passwordComparison, setPasswordComparison] = useState(true);
    const { token } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log(token);

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
            console.log(token)
            dispatch(verificationRecoveryToken(token))
        }
    }, [dispatch])

    useEffect(() => {
        if (!stateValidityRecoveryToken)
            navigate('/login');

    }, [stateValidityRecoveryToken]);

    return (
        <>
            <form>
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
            {passwordComparison ? <div></div> : <div className="error-auth">Password mismatch!!!</div>}
            {!checkPasswordStrength(password).valid && password !== '' ? <div className="error-auth">{checkPasswordStrength(password).message}</div> : <div></div>}
        </>
    );
};
