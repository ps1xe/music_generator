import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (

        <header>

            <div style={{ display: "flex" }}>
                <Link to='/main' className='menu_button'>Home</Link>
                <Link to='/about' className='menu_button'>About</Link>
                <Link to='/contacs' className='menu_button'>Contacs</Link>
            </div>


            {/* <svg className='logo' version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="50%" height="50%" viewBox="0 0 135.000000 133.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,133.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M0 665 l0 -665 675 0 675 0 0 665 0 665 -675 0 -675 0 0 -665z m823
            321 l137 -78 0 -238 0 -238 -139 -81 -139 -81 -141 81 -141 81 0 238 0 238
            138 81 c75 44 140 80 143 78 3 -1 67 -37 142 -81z"/>
                    <path d="M648 892 c-16 -9 -28 -19 -28 -22 0 -3 29 -22 65 -43 l64 -37 3 -80
            c3 -79 4 -81 36 -101 l32 -21 0 120 0 120 -71 41 c-39 23 -71 41 -72 41 -1 0
            -14 -8 -29 -18z"/>
                    <path d="M540 632 l0 -120 70 -41 70 -42 30 18 c17 9 30 20 30 23 0 3 -29 23
            -65 44 l-64 37 -3 80 c-3 78 -4 80 -35 100 l-33 21 0 -120z"/>
                </g>
            </svg> */}



            <Link to="/login" className='auth_button'>Press</Link>

        </header >

    );
}
export default Header;