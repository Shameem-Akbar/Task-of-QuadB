import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar bg="danger" expand="lg">
            <Container>
                <Link>
                    <Navbar.Brand> <button className='btn fs-5 fw-semibold text-white border border-2'>QuadB Tech</button> </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto gap-lg-5">
                        <Link className='text-decoration-none fw-semibold fs-5 text-white' to="/">Home</Link>
                        <Link className='text-decoration-none fs-5 fw-semibold text-white'>Booking</Link>
                    </Nav>
                    <Button variant="light" className='fw-semibold fs-5 py-1 px-3'>Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;