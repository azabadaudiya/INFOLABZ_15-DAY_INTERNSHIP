// src/components/Mainmodel.js
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function Mainmodel() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch Main Model
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Main Model</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export function Fullscreenmodel() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch Fullscreen Model
            </Button>

            <Modal show={show} onHide={handleClose} fullscreen>
                <Modal.Header closeButton>
                    <Modal.Title>Fullscreen Model</Modal.Title>
                </Modal.Header>
                <Modal.Body>This is a fullscreen modal!</Modal.Body>
            </Modal>
        </>
    );
}

export function Largemodel() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch Large Model
            </Button>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Large Model</Modal.Title>
                </Modal.Header>
                <Modal.Body>This is a large modal!</Modal.Body>
            </Modal>
        </>
    );
}
