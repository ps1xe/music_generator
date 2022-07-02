import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'

const DefaultNavbar = () => {

    return (
        <Navbar expand="lg" variant="dark" sticky="top" style={{ background: "none" }}>
            <Container fluid>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="me-auto" style={{ marginLeft: "128px" }}>

                        <Link to='/main' className='menu_button'>Home</Link>
                        <Link to='/about' className='menu_button'>About</Link>
                        <Link to='/contacs' className='menu_button'>Contacs</Link>

                    </Nav>
                    <Nav style={{ marginRight: "128px", marginLeft: "128px" }}>
                        <Link to="/login" className='auth_button'>Press</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );


}
export default DefaultNavbar;