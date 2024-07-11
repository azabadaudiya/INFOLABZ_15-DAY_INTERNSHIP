// src/Details.js
import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';

export default function Companyinfo() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Company Info
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="start">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Company Info</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    This is the company info offcanvas content.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export function Termsandconditions() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                Terms and Conditions
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="bottom">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Terms and Conditions</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    This is the terms and conditions offcanvas content.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
