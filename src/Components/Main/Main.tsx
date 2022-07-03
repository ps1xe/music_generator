import { Link } from 'react-router-dom';
import DefaultNavbar from '../Header/DefaultNavbar';
import './Main.css'

const Main = () => {
    return (
        <>
            <DefaultNavbar />
            <div className="box_centre">
                <div style={{ color: "#fefefe", fontSize: "95px", textAlign: "center" }}>Generate music now</div>
                <Link to="/login" className='start_button'>Start</Link>
            </div>
        </>
    );
}
export default Main;