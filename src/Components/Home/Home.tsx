import { ChangeEvent, useState, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import AuthNavbar from "../Header/AuthNavbar";
import "./Home.css"
import AudioPlayer from 'react-audio-player';
import { generateSound, getSounds } from "../../redux/actions/sound.actions";

const Home = () => {


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

    dispatch(getSounds(1));

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
                    <AudioPlayer style={{ marginBottom: "2%" }} src={"https://ruo.morsmusic.org/load/1983107670/Toby_Fox_-_MEGALOVANIA_(musmore.com).mp3"} controls />
                    {/* <img style={{ height: "200px", width: "400px" }} src='https://i.yapx.ru/So2wJ.png' alt='pixlr-bg-result.png' />
                    <div style={{ color: "white", fontSize: "20px", marginTop: "10px" }} >You have no entries :(</div> */}
                </div>

            </div >
        </>
    );
}
export default Home;