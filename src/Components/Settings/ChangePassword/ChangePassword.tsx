import { ChangeEvent, useState, MouseEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changePassword, zeroingError } from "../../../redux/actions/users.actions";
import './ChangePassword.css';

export const ChangePassword = () => {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatedNewPassword, setRepeatedNewPassword] = useState('');
    const [passwordComparison, setPasswordComparison] = useState(true);
    const dispatch = useDispatch();


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



    const changeCurrentPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentPassword(event.target.value);
        dispatch(zeroingError())
    }

    const changeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(event.target.value);
        event.target.value !== repeatedNewPassword ? setPasswordComparison(false) : setPasswordComparison(true);
        dispatch(zeroingError())
    }


    const repetePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRepeatedNewPassword(event.target.value)
        event.target.value !== newPassword ? setPasswordComparison(false) : setPasswordComparison(true);
        dispatch(zeroingError())
    }

    const handleSubmit = (event: MouseEvent<HTMLElement>) => {
        if (!newPassword.trim() || !currentPassword.trim()) {
            event.preventDefault();
            return;
        }

        if (!passwordComparison) {
            event.preventDefault();
            return;
        }

        dispatch(changePassword({ currentPassword, newPassword }));


        setCurrentPassword('');
        setNewPassword('');
        setRepeatedNewPassword('');
        event.preventDefault();
    }

    const stateChangePassword = useSelector((state: any) => state.passwordChange);

    return (
        <>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Form style={{ width: "60%", marginBottom: "24px" }}>
                    <Form.Group className="mb-4" controlId="formBasicCurrentPassword">
                        <Form.Label style={{ color: "white", fontFamily: "Roboto", fontSize: "20px" }}>Текущий пароль</Form.Label>
                        <Form.Control style={{ background: "0", height: "50px", color: "white", borderRadius: "20px", border: "2px solid #818181" }} onChange={changeCurrentPassword} type="password" placeholder="Текущий пароль" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicNewPassword">
                        <Form.Label style={{ color: "white", fontFamily: "Roboto", fontSize: "20px" }}>Новый пароль</Form.Label>
                        <Form.Control style={{ background: "0", height: "50px", color: "white", borderRadius: "20px", border: "2px solid #818181" }} onChange={changeNewPassword} type="password" placeholder="Новый пароль" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label style={{ color: "white", fontFamily: "Roboto", fontSize: "20px" }}>Повторите пароль</Form.Label>
                        <Form.Control style={{ background: "0", height: "50px", color: "white", borderRadius: "20px", border: "2px solid #818181" }} onChange={repetePasswordChange} type="password" placeholder="Повторите пароль" />
                    </Form.Group>


                    <div style={{ display: "flex", justifyContent: "end" }}>
                        <Button className="save-button" onClick={handleSubmit} variant="primary" type="submit">
                            Сменить пароль
                        </Button>
                    </div>
                </Form>
                {(stateChangePassword === '' && passwordComparison) && (<div className="error-change"></div>)}
                {passwordComparison ? <div></div> : <div className="error-auth">Пароли не совпадают!!!</div>}
                {(stateChangePassword !== '' && passwordComparison && stateChangePassword !== 'Complete') ? (<div className="error-change">{stateChangePassword}</div>) : <div></div>}
                {(stateChangePassword === 'Complete' && passwordComparison) ? (<div className="complete-change">Успешно сохранено</div>) : <div></div>}
                {!checkPasswordStrength(newPassword).valid && newPassword !== '' ? <div className="error-auth">{checkPasswordStrength(newPassword).message}</div> : <div style={{ display: "none" }}></div>}
            </div>
        </>
    );
}