import { ChangeEvent, useState, MouseEvent, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthNavbar from "../Header/AuthNavbar";
import "./Home.css"
import { generateSound, getSounds } from "../../redux/actions/sound.actions";
import SoundPlayer from "./SoundPlayer";
import { Pagination } from "react-bootstrap";
import { getProfile } from "../../redux/actions/users.actions";
import { useNavigate } from "react-router-dom";

const Home = () => {
    let pages = []
    let k = 0;
    const [soundName, setSoundName] = useState('');
    const [soundTime, setSoundTime] = useState("00:00");
    const [isAuth, setIsAuth] = useState(false)
    const [genre, setGenre] = useState('Classical');
    const [placeholderSoundName, setPlaceholderSoundName] = useState('Имя трека');
    const [formClass, setformClass] = useState('menu-generate');
    const [nameSoundClass, setNameSoundClass] = useState('name-music');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const soundNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSoundName(event.target.value);
        setNameSoundClass("name-music");
        setformClass("menu-generate");
        setPlaceholderSoundName("Имя трека")
    }



    const soundTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (/^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(value)) {
            if (value <= "02:00") {

                setSoundTime(value);
            } else {
                setSoundTime("02:00");
            }
        }

    }

    const genreChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setGenre(event.target.value);
    }

    const handleSubmit = async (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        if (soundName === '') {
            setformClass("menu-generate-war");
            setPlaceholderSoundName("Пустое поле")
            setNameSoundClass("name-music-war")
            return;
        }
        else if (soundName.length > 20) {
            return;
        }
        else {
            const [minutes, sec] = soundTime.split(":");
            const len = Number(minutes)*60 + Number(sec)
            console.log(soundTime);
            await dispatch(generateSound({ name: soundName, genre: genre, length: len }));
            await dispatch(getSounds(1));
            setSoundTime("00:00");
            setPlaceholderSoundName("Имя трека")
            setformClass("menu-generate");
            setNameSoundClass("name-music")
            setSoundName('');
            setGenre('Classical');

        }
    }

    const onChangePage = (numPage: number) => {
        dispatch(getSounds(numPage));
    }

    const stateSounds = useSelector((state: any) => state.sounds)
    const stateProfile = useSelector((state: any) => state.profile)
    const loadingSound = useSelector((state: any) => state.loadingSound);
    const responseUser = useSelector((state: any) => state.responseUser)
    useEffect(() => { dispatch(getProfile()) }, [dispatch]);
    useEffect(() => { dispatch(getSounds(1)) }, [loadingSound]);

    useMemo(() => {
        if (responseUser === 'Access error') {
            navigate('/login')
        }
    }, [responseUser]);






    if (stateSounds.meta.hasPreviousPage) pages.push(<div className="pagination-prev" key="prev" onClick={() => onChangePage(stateSounds.meta.page - 1)}>{"🠘"}</div>);

    if (stateSounds.meta.hasNextPage || stateSounds.meta.page !== 1) {
        for (let page = 1; page <= stateSounds.meta.pageCount; page++) {
            pages.push(
                <div className={"pagination-item" + (page === stateSounds.meta.page ? "-active" : "")} key={page} data-page={page} onClick={() => onChangePage(page)}>{page}</div>
            )
        }

        if (stateSounds.meta.hasNextPage) {
            pages.push(
                <div className="pagination-next" key="next" onClick={() => onChangePage(stateSounds.meta.page + 1)}>{"🠚"}</div>
            )
        }
    }

  


    return (
        <>

            <AuthNavbar
                key={"profile"}
                username={stateProfile.username}
                avatarUrl={stateProfile.avatar}
            />
            <div className="home-background">
                <div style={{ display: "flex", flexDirection: "column", marginTop: "15vh", width: "90%", justifyContent: "center", alignItems: "center" }}>
                    <div className="home-title">Генератор музыки</div>
                    <div style={{ marginTop: "0" }} className="decoratiom-line"></div>

                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>

                        <form className={formClass}>

                            <input value={soundName} onChange={soundNameChange} id="soundName" className={nameSoundClass} style={{ width: "70%" }} placeholder={placeholderSoundName} />

                            <select value={genre} onChange={genreChange} className="genre-select" style={{ width: "27%", minWidth: "100px" }}>
                                <option value="Classical">Classical</option>
                                <option value="8-bit">Rock</option>
                            </select>

                            <input onChange={soundTimeChange} className="time-music" style={{ width: "3%", minWidth: "65px" }} type="time" value={soundTime} max="02:00" />

                        </form>
                        <button onClick={handleSubmit} type="button" className="gen-button">Генерировать</button>

                    </div>
                </div>
                {soundName.length > 20 ? <div style={{ marginTop: "35px" }} className="error-auth">Максимальное имя трека - 20 символов</div> : <div style={{ marginTop: "35px", height: "20px" }}></div>}

                <div className="track-block" >

                    {
                        stateSounds.soundsInfo !== undefined ? stateSounds.soundsInfo.map((sound: any) => (
                            <SoundPlayer
                                key={"sound" + String(k++)}
                                id={sound.id}
                                name={sound.name}
                                genre={sound.genre}
                                length={sound.length}
                                url={sound.url}
                                loaded={sound.loaded}
                            />
                        )) : []}



                </div>
                <div style={{ height: "40px", marginBottom: "50px" }}>
                    <Pagination className="pagination">{pages}</Pagination>
                </div>
            </div >
        </>
    );
}
export default Home;