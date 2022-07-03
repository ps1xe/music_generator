import { Container, Nav, NavDropdown, Navbar, Form, Offcanvas, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css"

const AuthNavbar = () => {
    return (

        <Navbar bg="dark" expand="sm" variant="dark" fixed="top" style={{ background: "#161B22" }}>
            <Container fluid>
                {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
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
                                title={<img style={{ width: "40px", height: "40px", borderRadius: "100%" }} src="https://i.imgur.com/6UXcOTs.png"></img>}
                                id='offcanvasNavbarDropdown-expand-sm'
                            >
                                <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>Signed in as UserName</div>
                                <NavDropdown.Divider />

                                <NavDropdown.Item> <Link className="dropdown-text" to="/profile">Your profile</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link className="dropdown-text" to="/settings">Settings</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item> <Link className="dropdown-text" to="/main">Sign Out</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

    );
}
export default AuthNavbar;