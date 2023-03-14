import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import AuthNavbar from "../Header/AuthNavbar";
import "./Home.css"

const Home = () => {



    const [soundName, setSoundName] = useState('');
    const [soundTime, setSoundTime] = useState('');
    const [genre, setGenre] = useState('');
    const dispatch = useDispatch();

    const soundNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSoundName(event.target.value);
      }

      const soundTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSoundTime(event.target.value);
      }

      const genreChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setGenre(event.target.value);
        console.log(genre)
      }

    return (
        <>
            <AuthNavbar />
            <div className="home-background">

                <div style={{ display: "flex", marginTop: "130px", justifyContent: "space-between", width: "90%" }}>

                    <form className="menu-generate">

                        <input onChange={soundNameChange} className="name-music" style={{ width: "50%" }} placeholder="name" />

                        <select value={genre} onChange={genreChange} className="genre-select" style={{ width: "45%", minWidth:"100px" }}>
                            <option value="Phonk">Phonk</option>
                            <option value="Classical">Classical</option>
                            <option value="Jazz">Jazz</option>
                            <option value="Rock">Rock</option>
                        </select>

                        <input onChange={soundTimeChange} className="time-music" style={{ width: "10%", minWidth: "85px" }} type="time" />

                    </form>

                    <button style={{ marginLeft: "15px" }} type="button" className="btn btn-success">Generate</button>

                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "20vh" }}>
                    <img style={{ height: "200px", width: "400px" }} src='https://i.yapx.ru/So2wJ.png' alt='pixlr-bg-result.png' />
                    <div style={{ color: "white", fontSize: "20px", marginTop: "10px" }} >You have no entries :(</div>
                </div>

            </div >
        </>
    );
}
export default Home;