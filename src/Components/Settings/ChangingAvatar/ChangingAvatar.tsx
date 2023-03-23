import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { changingAvatar, getProfile } from "../../../redux/actions/users.actions";

export const ChangingAvatar = () => {
    const dispatch = useDispatch();
    const [newAvatar, setNewAvatar] = useState(null);

    useEffect(() => { dispatch(getProfile()) });
    const stateProfile = useSelector((state: any) => state.profile)

    const changeNewAvatar = (event: any) => {
        setNewAvatar(event.target.files[0]);
    }

    const submit = (event: any) => {

        const formData = new FormData();
        if (newAvatar) {
            formData.append('file', newAvatar);
        }
        
        dispatch(changingAvatar(formData))
    }


    return (
        <>
            <div style={{ background: "white" }}>
                <div>AVATAR</div>
                <img alt="" style={{ width: "184px", height: "184px" }} src={stateProfile.avatar}></img>
                <form encType="multipart/form-data" onSubmit={submit}>
                    <input onChange={changeNewAvatar} type="file" name="file" className="custom-file-input" />
                    {newAvatar && (
                        <img alt="" style={{ width: "184px", height: "184px" }} src={URL.createObjectURL(newAvatar)}></img>
                    )}
                    <button type="submit" className="btn btn-success" >Сохранить</button>
                </form>

            </div>
        </>
    );

}