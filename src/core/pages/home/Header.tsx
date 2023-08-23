import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header: React.FC = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">CBM/AL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/mcs">MCS</Nav.Link>
                        <Nav.Link href="/saps">SAPS</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Maria José" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/auth/logout">Logout</NavDropdown.Item>
                            <NavDropdown.Item href="/setting">
                                Configurações
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;