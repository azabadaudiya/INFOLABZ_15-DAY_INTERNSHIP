// src/Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">React Bootstrap Components</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#badges">Badges</Nav.Link>
                <Nav.Link href="#table">Table</Nav.Link>
                <Nav.Link href="#models">Models</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavigationBar;
