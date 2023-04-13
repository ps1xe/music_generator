import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const DefaultNavbar = ({ theme, isAuth }: any) => {

    const currentPath = window.location.pathname;

    return (
        // <Navbar expand="lg" variant="dark" sticky="top" style={{ background: "none" }}>
        //     <Container fluid>
        //         <Navbar.Toggle />
        //         <Navbar.Collapse>
        //             <Nav className="me-auto" style={{ marginLeft: "128px" }}>

        //                 <Link to='/main' className='menu_button'>Home</Link>
        //                 <Link to='/about' className='menu_button'>About</Link>
        //                 <Link to='/contacs' className='menu_button'>Contacs</Link>

        //             </Nav>
        //             <Nav style={{ marginRight: "128px", marginLeft: "128px" }}>
        //                 <Link to="/login" className='auth_button'>Press</Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>

        <Navbar expand="sm" variant="dark" fixed="top">
            <Container style={{ paddingRight: "5%", paddingLeft: "3%" }} fluid>

                <Navbar.Toggle aria-controls='offcanvasNavbar-expand-sm' />
                <Navbar.Offcanvas style={{ width: "100%", height: "100%", background: "#161B22", color: "#fefefe" }}
                    id='offcanvasNavbar-expand-sm'
                    aria-labelledby='offcanvasNavbarLabel-expand-sm'
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id='offcanvasNavbarLabel-expand-sm'>
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body style={{ textAlign: "center", height: "57px" }}>
                        <Nav style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Navbar.Brand href="#">
                                Logo
                            </Navbar.Brand>
                        </Nav>
                        <Nav className="ms-auto">
                            <Link to={isAuth ? '/home' : '/main'} style={theme === "dark" ? { color: "black" } : { color: "white" }} className={currentPath === "/main" ? 'menu_button-active' : "menu_button"}>Главная</Link>
                            <Link to='/about' style={theme === "dark" ? { color: "black" } : { color: "white" }} className={currentPath === "/about" ? 'menu_button-active' : "menu_button"}>О проекте</Link>
                            <Link to='/contacs' style={theme === "dark" ? { color: "black" } : { color: "white" }} className={currentPath === "/contacs" ? 'menu_button-active' : "menu_button"}>Контакты</Link>

                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar >


    );


}
export default DefaultNavbar;