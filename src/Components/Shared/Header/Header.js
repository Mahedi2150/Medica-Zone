import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/home">Navbar</Navbar.Brand>

                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="me-auto">
                                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#services">Service</Nav.Link>
                                <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                            </Nav>
                            <Navbar.Text>
                                Signed in as: <a href="#login">b</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </>
        </div>
    );
};

export default Header;