import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Dropdown from './Dropdown'; // Assuming you have a Dropdown component defined

import lg from '../images/wocktan.png';
import '../App.css';

function MyNavbar() {
    // State for managing dropdown visibility
    const [dropdown, setDropdown] = useState(false);

    // Event handler for mouse over
    const onMouseOver = () => {
        setDropdown(true);
    };

    // Event handler for mouse leave
    const onMouseLeave = () => {
        setDropdown(false);
    };

    return (
        <Navbar expand="lg" className="navc">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={lg} alt="logo" className="navpic" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className="navlink">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" className="navlink">
                            About
                        </Nav.Link>
                        <NavDropdown
                            title="Language"
                            id="basic-nav-dropdown"
                            onMouseOver={onMouseOver}
                            onMouseLeave={onMouseLeave}
                            show={dropdown}
                        >
                              <Dropdown /> 
                          
                        </NavDropdown>
                        <Nav.Link as={Link} to="/blog" className="navlink">
                            Blog
                        </Nav.Link>
                        <Nav.Link href="https://wocktancomshop.creator-spring.com/" className="navlink">
                            Shop
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="navlink">
                            Contacts
                        </Nav.Link>
                        <Nav.Link as={Link} to="/travel" className="navlink">
                            Travel
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
