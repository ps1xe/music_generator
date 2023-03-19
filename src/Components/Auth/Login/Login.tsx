import { ChangeEvent, useState, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../../redux/actions/auth.actions";
import "../AuthStyle.css"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState(false);
    const dispatch = useDispatch();


    const emailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const passwordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const checkPasswordActive = (event: ChangeEvent<HTMLInputElement>) => {
        setCheckPassword(!checkPassword);
    }

    const handleSubmit = (event: MouseEvent<HTMLElement>) => {
        if (!email.trim() || !password.trim()) {
            event.preventDefault();
            return;
        }

        dispatch(login({ email, password }));

        setEmail('');
        setPassword('');
        event.preventDefault();
    }


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
                            <div id="emailHelp" className="form-text" style={{ color: "#c9ced6" }}>We'll never share your Login with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" style={{ color: "#c9ced6" }}>Password</label>
                            <input onChange={passwordChange} type={checkPassword ? "text" : "password"} className="form-control" />
                        </div>
                        <div className="mb-3 form-check">
                            <input onChange={checkPasswordActive} type="checkbox" className="form-check-input" />
                            <label className="form-check-label" style={{ color: "#c9ced6" }}>Check me out</label>
                        </div>
                        <button onClick={handleSubmit} style={{ width: "100%" }} type="submit" className="btn btn-success " >Sign In</button>
                    </form>
                    <div className="alert alert-dark" role="alert" style={{ background: "#0c1019", color: "#c9ced6", margin: "auto", marginTop: "4%" }}>New user?⠀
                        <Link to="/reg">Create an account.</Link>
                    </div>
                </div>
            </div>

        </>
    );

}
export default Login;