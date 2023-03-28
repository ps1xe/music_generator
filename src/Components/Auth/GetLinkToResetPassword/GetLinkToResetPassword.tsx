import { ChangeEvent, useState, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLinkToResetPassword, zeroingError } from "../../../redux/actions/auth.actions";
import "../AuthStyle.css"


export const GetLinkToResetPassword = () => {

    const [email, setEmail] = useState('');
    const [isEmail, setIsEmail] = useState(true);
    const dispatch = useDispatch();


    const emailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        setIsEmail(emailRegex.test(event.target.value));
        dispatch(zeroingError())
    }


    const handleSubmit = (event: MouseEvent<HTMLElement>) => {
        if (!email.trim()) {
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
            <form style={{ margin: "auto" }}>
                <div className="mb-3">
                    <label className="form-label" style={{ color: "#c9ced6" }}>Email</label>
                    <input onChange={emailChange} type="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                {!isEmail ? <div className="error-auth">Не существует такого email</div> : <div></div>}
                <button onClick={handleSubmit} style={{ width: "100%", marginTop: "8%" }} type="submit" className="btn btn-success " >Recovery password</button>
            </form>

            {stateError !== '' ? <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }} className="error-auth">{stateError}</div> : <div className="error-auth"></div>}
        </>
    );
}