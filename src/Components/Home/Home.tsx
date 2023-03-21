import { ChangeEvent, useState, MouseEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthNavbar from "../Header/AuthNavbar";
import "./Home.css"
import { generateSound, getSounds } from "../../redux/actions/sound.actions";
import SoundPlayer from "./SoundPlayer";
import { Pagination } from "react-bootstrap";

const Home = () => {
    let pages = []
    let k = 0;
    const [soundName, setSoundName] = useState('');
    const [soundTime, setSoundTime] = useState('');
    const [genre, setGenre] = useState('Phonk');
    const [placeholderSoundName, setPlaceholderSoundName] = useState('name');
    const [formClass, setformClass] = useState('menu-generate');
    const [nameSoundClass, setNameSoundClass] = useState('name-music');
    const dispatch = useDispatch();

    const soundNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSoundName(event.target.value);
        setNameSoundClass("name-music");
        setformClass("menu-generate");
        setPlaceholderSoundName("name")

    }

    const soundTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSoundTime(event.target.value);
    }

    const genreChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setGenre(event.target.value);
    }

    const handleSubmit = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        if (soundName === '') {
            setformClass("menu-generate-war");
            setPlaceholderSoundName("Invalid input")
            setNameSoundClass("name-music-war")
            return;
        }
        else {
            dispatch(generateSound({ name: soundName, genre: genre, length: Number(soundTime) }));
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

    useEffect(() => { dispatch(getSounds(1)) }, [dispatch]);
    const stateSounds = useSelector((state: any) => state.sounds)
   
    
    console.log(stateSounds);

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
            <AuthNavbar />
            <div className="home-background">

                <div style={{ display: "flex", marginTop: "130px", justifyContent: "space-between", width: "90%" }}>

                    <form className={formClass}>

                        <input value={soundName} onChange={soundNameChange} id="soundName" className={nameSoundClass} style={{ width: "70%" }} placeholder={placeholderSoundName} />

                        <select value={genre} onChange={genreChange} className="genre-select" style={{ width: "27%", minWidth: "100px" }}>
                            <option value="Phonk">Phonk</option>
                            <option value="Classical">Classical</option>
                            <option value="Jazz">Jazz</option>
                            <option value="Rock">Rock</option>
                        </select>

                        <input onChange={soundTimeChange} className="time-music" style={{ width: "3%", minWidth: "60px" }} type="text" placeholder="00:00" />

                    </form>
                    <button onClick={handleSubmit} style={{ marginLeft: "15px" }} type="button" className="btn btn-success">Generate</button>

                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "20vh" }}>


                    {stateSounds.soundsInfo.map((sound: any) => (
                        <SoundPlayer
                            key={"sound" + String(k++)}
                            name={sound.name}
                            genre={sound.genre}
                            length={sound.length}
                            url={sound.url}
                        />
                    ))}
                    <Pagination>{pages}</Pagination>


                    {/* <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Item active>{2}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination> */}
                    {/* <img style={{ height: "200px", width: "400px" }} src='https://i.yapx.ru/So2wJ.png' alt='pixlr-bg-result.png' />
                    <div style={{ color: "white", fontSize: "20px", marginTop: "10px" }} >You have no entries :(</div> */}
                </div>

            </div >
        </>
    );
}
export default Home;