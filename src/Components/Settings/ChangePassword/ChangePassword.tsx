import { ChangeEvent, useState, MouseEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changePassword } from "../../../redux/actions/users.actions";

export const ChangePassword = () => {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const dispatch = useDispatch();

    const changeCurrentPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentPassword(event.target.value);
    }

    const changeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(event.target.value);
    }


    const handleSubmit = (event: MouseEvent<HTMLElement>) => {
        dispatch(changePassword({ currentPassword, newPassword }));
    }

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

                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="formBasicNewPassword">
                    <Form.Label>New password</Form.Label>
                    <Form.Control onChange={changeNewPassword} type="password" placeholder="New password" />
                </Form.Group>

                <Button onClick={handleSubmit} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}