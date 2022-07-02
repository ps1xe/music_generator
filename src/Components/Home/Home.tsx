import AuthNavbar from "../Header/AuthNavbar";
import "./Home.css"

const Home = () => {
    return (
        <>
            <AuthNavbar />
            <div className="home-background">

                <div style={{ display: "flex", marginTop: "3%", justifyContent: "space-between", width: "90%" }}>

                    <form className="menu-generate">

                        <input className="name-music" style={{ width: "50%" }} placeholder="name" />

                        <select className="genre-select" style={{ width: "45%" }}>
                            <option selected>Phonk</option>
                            <option value="1">Classical</option>
                            <option value="2">Jazz</option>
                        </select>

                        <input className="time-music" style={{ width: "10%", minWidth: "100px" }} type="time" />

                    </form>

                    <button style={{ marginLeft: "15px" }} type="button" className="btn btn-success">Generate</button>

                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "12%" }}>
                    <img style={{ height: "200px", width: "400px" }} src='https://i.yapx.ru/So2wJ.png' alt='pixlr-bg-result.png' />
                    <div style={{ color: "white", fontSize: "20px", marginTop: "10px" }} >You have no entries :(</div>
                </div>

            </div >
        </>
    );
}
export default Home;