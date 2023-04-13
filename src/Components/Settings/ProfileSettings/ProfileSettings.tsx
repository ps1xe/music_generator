import { ChangeEvent, useEffect, useRef, useState } from "react";
import ReactCrop, { centerCrop, Crop, makeAspectCrop, PixelCrop } from "react-image-crop";
import { useDispatch, useSelector } from "react-redux"
import { changeNickname, changingAvatar, getProfile } from "../../../redux/actions/users.actions";
import "./ProfileSettings.css";
import 'react-image-crop/dist/ReactCrop.css'
import { Form } from "react-bootstrap";

export const ProfileSettings = () => {
    const dispatch = useDispatch();
    const [newAvatar, setNewAvatar] = useState(null);
    const [crop, setCrop] = useState<Crop>()
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
    const [aspect, setAspect] = useState<number | undefined>(1)
    const imgRef = useRef<HTMLImageElement>(null)
    const [maxLenUsernameSatisfied, setMaxLenUsernameSatisfied] = useState(true);
    const previewCanvasRef = useRef<HTMLCanvasElement>(null)
    const [avatarUrl, setAvatarUrl] = useState('');
    const [nickname, setNickname] = useState('');


    useEffect(() => { dispatch(getProfile()) }, [dispatch]);
    const stateProfile = useSelector((state: any) => state.profile)

    const changeNewAvatar = (event: any) => {
        setAvatarUrl(URL.createObjectURL(event.target.files[0]));
        setNewAvatar(event.target.files[0]);
        setCrop(undefined)
    }

    const changeNewNickname = (event: ChangeEvent<HTMLInputElement>) => {
        setNickname(event.target.value);
        if (event.target.value.length > 10) setMaxLenUsernameSatisfied(false);
        else setMaxLenUsernameSatisfied(true);

    }


    const setAvatar = useSelector((state: any) => state.responseUser)
    const changeNicknameSuccess = useSelector((state: any) => state.changeNicknameSuccess)

    const shiftUserData = async (): Promise<void> => {

        if (previewCanvasRef.current) {
            previewCanvasRef.current.toBlob(async (blob) => {
                if (!blob) {
                    throw new Error('Failed to create blob')
                }
                const file = new File([blob], "avatar.png", { type: "image/jpeg" });
                const formData = new FormData();
                formData.append('file', file);
                dispatch(changingAvatar(formData));

            })
        }


        if (nickname !== "") {
            dispatch(changeNickname({ newNickname: nickname }));
        }
    }

    const submit = async (event: any) => {
        if(!maxLenUsernameSatisfied){
            return;
        }
        await shiftUserData();
    }

    useEffect(() => {
        if (setAvatar === "Complete-set-avatar" && changeNicknameSuccess === "Complete-change-nickaname") { window.location.reload(); }
        else if (nickname !== "" && changeNicknameSuccess === "Complete-change-nickaname" && previewCanvasRef.current === null) {
            window.location.reload();
        }
        else if (previewCanvasRef.current && setAvatar === "Complete-set-avatar" && nickname === "") {
            window.location.reload();
        }

    }, [setAvatar, changeNicknameSuccess])

    function centerAspectCrop(
        mediaWidth: number,
        mediaHeight: number,
        aspect: number,
    ) {
        return centerCrop(
            makeAspectCrop(
                {
                    unit: '%',
                    width: 100,
                },
                aspect,
                mediaWidth,
                mediaHeight,
            ),
            mediaWidth,
            mediaHeight,
        )
    }

    function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
        if (aspect) {
            const { width, height } = e.currentTarget
            setCrop(centerAspectCrop(width, height, aspect))
        }
    }


    async function canvasPreview(
        image: HTMLImageElement,
        canvas: HTMLCanvasElement,
        crop: PixelCrop,

    ) {
        const ctx = canvas.getContext('2d')

        if (!ctx) {
            throw new Error('No 2d context')
        }

        const scaleX = image.naturalWidth / image.width
        const scaleY = image.naturalHeight / image.height

        const pixelRatio = window.devicePixelRatio

        canvas.width = Math.floor(crop.width * scaleX * pixelRatio)
        canvas.height = Math.floor(crop.height * scaleY * pixelRatio)

        ctx.scale(pixelRatio, pixelRatio)
        ctx.imageSmoothingQuality = 'high'

        const cropX = crop.x * scaleX
        const cropY = crop.y * scaleY

        const centerX = image.naturalWidth / 2
        const centerY = image.naturalHeight / 2

        ctx.save()


        ctx.translate(-cropX, -cropY)

        ctx.translate(centerX, centerY)

        ctx.translate(-centerX, -centerY)
        ctx.drawImage(
            image,
            0,
            0,
            image.naturalWidth,
            image.naturalHeight,
            0,
            0,
            image.naturalWidth,
            image.naturalHeight,
        )

        ctx.restore()
    }


    if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
    ) {
        canvasPreview(
            imgRef.current,
            previewCanvasRef.current,
            completedCrop,
        )
    }


    return (
        <>
            <Form>
                <Form.Group style={{ display: "flex", alignItems: "center", marginBottom: "35px" }} controlId="formBasicCurrentPassword">
                    <div>
                        <Form.Label style={{ color: "white", fontFamily: "Roboto", fontSize: "18px", marginBottom: "0" }}>Имя профиля</Form.Label>
                        <Form.Label style={{ color: "#818181", fontFamily: "Roboto", fontSize: "15px" }}>Поменяйте имя, которое будет отображаться у вас в профиле</Form.Label>
                    </div>
                    <div style={{ width: "94%", display: "flex", flexDirection: "column" }}>
                        <Form.Control style={{ marginTop: "30px", width: "100%", marginLeft: "6%", background: "0", height: "50px", color: "white", borderRadius: "20px", border: "2px solid #818181" }} onChange={changeNewNickname} type="text" placeholder={stateProfile.username} />
                        {!maxLenUsernameSatisfied ? (<div style={{ marginLeft: "6%", marginTop: "10px" }} className="error-auth">Максимальная длина - 10</div>) : <div style={{ height: "20px", marginTop: "10px" }}></div>}
                    </div>
                </Form.Group>

            </Form>
            <div className="separator-line"></div>
            <div style={{ background: "black" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                        <div style={{ color: "white", fontFamily: "Roboto", fontSize: "18px", marginBottom: "0" }}>Аватар профиля</div>
                        <div style={{ color: "#818181", fontFamily: "Roboto", fontSize: "15px" }}>Поменяйте аватар, который будет отображаться у вас в профиле</div>
                    </div>

                    <div className="current-avatar-form">
                        {!!newAvatar ?
                            <canvas
                                ref={previewCanvasRef}
                                className="canvas"

                            />
                            : <img alt="" style={{ width: "120px", height: "120px", borderRadius: "20px", marginRight: "5%" }} src={stateProfile.avatar}></img>}
                        <form style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="custom-file-input">
                                <input style={{ width: "100%", height: "100%" }} onChange={changeNewAvatar} type="file" name="file" />
                            </div>
                        </form>
                    </div>
                </div>
                {newAvatar && (
                    <div className="crop-image-block">
                        <ReactCrop

                            keepSelection={true}
                            crop={crop}
                            aspect={1}
                            onChange={c => setCrop(c)}
                            onComplete={(c) => {
                                setCompletedCrop(c)
                            }
                            }
                        >

                            <img
                                src={avatarUrl}
                                ref={imgRef}
                                style={{ maxHeight: "60vh", border: "2px solid #574597" }}
                                onLoad={onImageLoad}
                                alt=""
                            />

                        </ReactCrop >
                    </div>
                )}
            </div>
            {
                (newAvatar || nickname !== "") && (
                    <div className="save-new-avatar-block">
                        <button onClick={submit} type="submit" className="save-button" style={{ width: "184px", marginRight: "1%" }} >Сохранить</button>
                    </div>
                )
            }
        </>
    );

}