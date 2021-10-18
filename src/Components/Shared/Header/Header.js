import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../../hooks/useFirebase';


const Header = () => {
    const { user, logOut } = useFirebase()
    return (

        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Medica Zone</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Service</Nav.Link>
                            <Nav.Link as={HashLink} to="/about">About</Nav.Link>

                        </Nav>

                        <Nav>

                            {user?.email ?
                                <>
                                    <Link className="nav-link" to="home"><i class="fas fa-user"></i><span> </span>{user?.displayName}<span className="text-lite ms-2" onClick={logOut}> <i class="fas fa-sign-out-alt"></i> Log Out</span></Link>
                                </> :
                                <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    );
};

export default Header;