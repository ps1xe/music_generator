import Header from '../Header/Header';
import './Main.css'

const Main = () => {
    return (
        <>
        <Header/>
        <div className="box_centre">
            <div style={{ color: "#fefefe", fontSize: "120px" }}>Generate music now</div>
            <button className='start_button'>Start</button>
        </div>
        </>
    );
}
export default Main;