import { useEffect, useRef, useState } from "react";
import ReactCrop, { centerCrop, Crop, makeAspectCrop, PixelCrop } from "react-image-crop";
import { useDispatch, useSelector } from "react-redux"
import { changingAvatar, getProfile } from "../../../redux/actions/users.actions";
import "./ChangingAvatar.css";
import 'react-image-crop/dist/ReactCrop.css'

export const ChangingAvatar = () => {
    const dispatch = useDispatch();
    const [newAvatar, setNewAvatar] = useState(null);
    const [crop, setCrop] = useState<Crop>()
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
    const [aspect, setAspect] = useState<number | undefined>(1)
    const imgRef = useRef<HTMLImageElement>(null)
    const previewCanvasRef = useRef<HTMLCanvasElement>(null)
    const [avatarUrl, setAvatarUrl] = useState('');
    const [saveAvatar, setSaveAvatar] = useState(false);

    useEffect(() => { dispatch(getProfile()) }, [dispatch]);
    const stateProfile = useSelector((state: any) => state.profile)

    const changeNewAvatar = (event: any) => {
        setAvatarUrl(URL.createObjectURL(event.target.files[0]));
        setNewAvatar(event.target.files[0]);
        setSaveAvatar(false);
        setCrop(undefined)
    }

    const submit = (event: any) => {

        if (previewCanvasRef.current) previewCanvasRef.current.toBlob(async (blob) => {
            if (!blob) {
                throw new Error('Failed to create blob')
            }
            const file = new File([blob], "avatar.png", { type: "image/jpeg" });
            const formData = new FormData();
            formData.append('file', file);
            dispatch(changingAvatar(formData));
            setSaveAvatar(true);
        })

        // window.location.reload();
    }

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
            <div style={{ background: "rgb(46, 46, 46)" }}>
                <div style={{ color: "white", marginLeft: "1%", marginBottom: "5px", marginTop: "5px" }}>AVATAR</div>
                <div className="current-avatar-form">
                    {!!newAvatar ?
                        <canvas
                            ref={previewCanvasRef}
                            style={{
                                border: '1px solid black',
                                objectFit: 'contain',
                                width: 184,
                                height: 184,
                            }}
                        />
                        : <img alt="" style={{ width: "184px", height: "184px" }} src={stateProfile.avatar}></img>}
                    <form>
                        <input onChange={changeNewAvatar} type="file" name="file" className="custom-file-input" />
                    </form>
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
                                style={{ maxHeight: "60vh" }}
                                onLoad={onImageLoad}
                            />

                        </ReactCrop >
                    </div>
                )}
            </div>
            {newAvatar && (
                <div className="save-new-avatar-block">
                    {saveAvatar && (
                        <div style={{ color: "white", marginRight: "20px" }}>Успешно сохранено</div>
                    )}
                    <button onClick={submit} type="submit" className="btn btn-success" style={{ width: "184px", marginRight: "1%" }} >Сохранить</button>
                </div>
            )}
        </>
    );

}