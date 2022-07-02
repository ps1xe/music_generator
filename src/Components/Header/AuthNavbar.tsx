import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css"

const AuthNavbar = () => {
    return (
        <Navbar expand="lg" variant="dark" sticky="top"  style={{ background: "#161B22" }}>
            <Container fluid>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="me-auto" style={{ marginLeft: "128px" }}>

                        <Link to='/home' className='menu_button'>Home</Link>
                        <Link to='/about' className='menu_button'>About</Link>
                        <Link to='/contacs' className='menu_button'>Contacs</Link>

                    </Nav>
                    <Nav >
                        <NavDropdown
                            style={{ marginLeft: "128px", width: "200px" }}
                            title={<img style={{ width: "40px", height: "40px", borderRadius: "100%" }} src="https://i.imgur.com/6UXcOTs.png"></img>}>

                            <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>Signed in as UserName</div>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Your profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/login">Sign Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}
export default AuthNavbar;