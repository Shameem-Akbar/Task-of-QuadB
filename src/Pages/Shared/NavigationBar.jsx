import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>QuadB</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto gap-lg-5">
                        <Link className='text-decoration-none fw-semibold fs-5 text-secondary' to="/">Home</Link>
                        <Link className='text-decoration-none fs-5 fw-semibold text-secondary'>Booking</Link>
                    </Nav>
                    <Button variant="primary">Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;