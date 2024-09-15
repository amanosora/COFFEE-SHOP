import React from 'react'; 
import { Navbar, Nav, Container, ButtonToolbar, Button } from 'react-bootstrap';
import './style.scss';
import logo from './logo.png';
import { Image } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar expand="lg" id="navbar">
            <Container>
                <Navbar.Brand href="/"><Image src={logo} className="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/about">About Us</Nav.Link>
                    </Nav>
                    <ButtonToolbar>
                        <Button 
                            className="my-btn btn border-0 fw-bold px-3" 
                            href="#contact-us"
                        >
                            CONTACT US
                        </Button>
                    </ButtonToolbar>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;