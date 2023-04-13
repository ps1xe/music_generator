import { Container, Nav, NavDropdown, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css"

export interface AuthProfileProps {
    username: string;
    avatarUrl: string;
}


const AuthNavbar = ({ username, avatarUrl }: AuthProfileProps) => {

    // function exit() {
    //     const cookies = document.cookie.split('; ');

    //     for (let i = 0; i < cookies.length; i++) {
    //         const cookie = cookies[i].split('=');
    //         const name = cookie[0];
    //         const value = cookie[1];
    //         const isHttpOnly = document.cookie.split(';').some(c => c.trim().startsWith(`${name}=`) && c.trim().endsWith('HttpOnly'));

    //         if (isHttpOnly && (name === 'refreshToken' || name === 'token')) {
    //             document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    //         }
    //     }
    // }

    return (

        <Navbar expand="sm" variant="dark" fixed="top" style={{ background: "#0b0b0b" }}>
            <Container fluid>
                {/* <Navbar.Brand href="#"><img alt="" src="../../../public/logo.png"></img></Navbar.Brand> */}
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
                        <Nav className="me-auto">
                            <Link to='/home' className='menu_button-active'>Главная</Link>
                            <Link to='/about' className='menu_button'>О проекте</Link>
                            <Link to='/contacs' className='menu_button'>Контакты</Link>

                        </Nav>
                        <Nav style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <NavDropdown
                                style={{ width: "200px" }}
                                title={<img alt="" style={{ width: "40px", height: "40px", borderRadius: "100%" }} src={avatarUrl}></img>}
                                id='offcanvasNavbarDropdown-expand-sm'
                            >
                                <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>{username}</div>
                                <NavDropdown.Divider />

                                <NavDropdown.Item className="dropdown-text" href="/settings">Профиль</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="dropdown-text" href="/main">Выйти</NavDropdown.Item>
                                {/* onClick={exit} */}
                            </NavDropdown>
                        </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

    );
}
export default AuthNavbar;