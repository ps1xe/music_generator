import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Main.css'

const Main = () => {
    return (
        <>
        <Header/>
        <div className="box_centre">
            <div style={{ color: "#fefefe", fontSize: "120px" }}>Generate music now</div>
            <Link to="/login" className='start_button'>Start</Link>
        </div>
        </>
    );
}
export default Main;