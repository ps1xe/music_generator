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
    const [soundTime, setSoundTime] = useState('');
    const [genre, setGenre] = useState('Phonk');
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
        setSoundTime(event.target.value);
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
            await dispatch(generateSound({ name: soundName, genre: genre, length: Number(soundTime) }));
            await dispatch(getSounds(1));
            setPlaceholderSoundName("name")
            setformClass("menu-generate");
            setNameSoundClass("name-music")
            setSoundName('');
            setGenre('Phonk');

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






    if (stateSounds.meta.hasPreviousPage) pages.push(<Pagination.Prev key="prev" onClick={() => onChangePage(stateSounds.meta.page - 1)} />);

    if (stateSounds.meta.hasNextPage || stateSounds.meta.page !== 1) {
        for (let page = 1; page <= stateSounds.meta.pageCount; page++) {
            pages.push(
                <Pagination.Item key={page} data-page={page} active={page === stateSounds.meta.page} onClick={() => onChangePage(page)}>{page}</Pagination.Item>
            )
        }

        if (stateSounds.meta.hasNextPage) {
            pages.push(
                <Pagination.Next key="next" onClick={() => onChangePage(stateSounds.meta.page + 1)} />
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
                                <option value="Phonk">Phonk</option>
                                <option value="Classical">Classical</option>
                                <option value="Jazz">Jazz</option>
                                <option value="Rock">Rock</option>
                            </select>

                            <input onChange={soundTimeChange} className="time-music" style={{ width: "3%", minWidth: "60px" }} value={soundTime} type="text" placeholder="00:00" />

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