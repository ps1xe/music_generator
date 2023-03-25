import { ChangeEvent, useState, MouseEvent } from "react";
import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { changeNickname } from "../../../redux/actions/users.actions";

export const ChangeNickname = () => {
    const dispatch = useDispatch();

    const [nickname, setNickname] = useState('');
    const changeNewNickname = (event: ChangeEvent<HTMLInputElement>) => {
        setNickname(event.target.value);

    }

    const handleSubmit = (event: MouseEvent<HTMLElement>) => {
        dispatch(changeNickname({ newNickname: nickname }));
    }



    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicCurrentPassword">
                    <Form.Label style={{ color: "white" }}>Nickname</Form.Label>
                    <Form.Control onChange={changeNewNickname} type="text" placeholder='New nickname' />

                </Form.Group>
                <Button onClick={handleSubmit} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}