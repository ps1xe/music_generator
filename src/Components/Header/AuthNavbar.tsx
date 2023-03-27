import { Container, Nav, NavDropdown, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css"

export interface AuthProfileProps {
    username: string;
    avatarUrl: string;
}


const AuthNavbar = ({ username, avatarUrl }: AuthProfileProps) => {
    return (

        <Navbar expand="sm" variant="dark" fixed="top" style={{ background: "#161B22" }}>
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
                            <Link to='/home' className='menu_button'>Home</Link>
                            <Link to='/about' className='menu_button'>About</Link>
                            <Link to='/contacs' className='menu_button'>Contacs</Link>

                        </Nav>
                        <Nav style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <NavDropdown
                                style={{ width: "200px" }}
                                title={<img alt="" style={{ width: "40px", height: "40px", borderRadius: "100%" }} src={avatarUrl}></img>}
                                id='offcanvasNavbarDropdown-expand-sm'
                            >
                                <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>Signed in as {username}</div>
                                <NavDropdown.Divider />

                                <NavDropdown.Item className="dropdown-text" href="/settings">Your profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="dropdown-text" href="/main">Sign Out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

    );
}
export default AuthNavbar;