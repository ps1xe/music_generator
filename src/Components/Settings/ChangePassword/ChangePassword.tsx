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
            <Form>
                <Form.Group className="mb-3" controlId="formBasicCurrentPassword">
                    <Form.Label>Current password</Form.Label>
                    <Form.Control onChange={changeCurrentPassword} type="password" placeholder="Current password" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNewPassword">
                    <Form.Label>New password</Form.Label>
                    <Form.Control onChange={changeNewPassword} type="password" placeholder="New password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Repeate password</Form.Label>
                    <Form.Control onChange={repetePasswordChange} type="password" placeholder="Repeate password" />
                </Form.Group>



                <Button onClick={handleSubmit} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {(stateChangePassword === '' && passwordComparison) && (<div className="error-change"></div>)}
            {passwordComparison ? <div></div> : <div className="error-change">Password mismatch!!!</div>}
            {(stateChangePassword !== '' && passwordComparison && stateChangePassword !== 'Complete') ? (<div className="error-change">{stateChangePassword}</div>) : <div></div>}
            {(stateChangePassword === 'Complete' && passwordComparison  ) ? (<div className="complete-change">Успешно сохранено</div>) : <div></div>}
        </>
    );
}