// src/App.js
import React from 'react';
import { ButtonGroup, Button, Pagination, Breadcrumb, OverlayTrigger, Tooltip, Toast, ToastContainer } from 'react-bootstrap';

export default function App() {
    return (
        <div className="App">
            <h1>React Bootstrap Components</h1>
            <Btngroups />
            <PaginationComp />
            <Breadcrumbs />
            <Overlays />
            <Toasts />
        </div>
    );
}

export function Btngroups() {
    return (
        <div>
            <h2>Button Groups</h2>
            <ButtonGroup>
                <Button variant="primary">Left</Button>
                <Button variant="secondary">Middle</Button>
                <Button variant="primary">Right</Button>
            </ButtonGroup>
        </div>
    );
}

export function PaginationComp() {
    return (
        <div>
            <h2>Pagination</h2>
            <Pagination>
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
            </Pagination>
        </div>
    );
}

export function Breadcrumbs() {
    return (
        <div>
            <h2>Breadcrumbs</h2>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export function Overlays() {
    return (
        <div>
            <h2>Overlays</h2>
            <OverlayTrigger
                overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}
            >
                <span className="d-inline-block">
                    <Button disabled style={{ pointerEvents: 'none' }}>
                        Disabled button
                    </Button>
                </span>
            </OverlayTrigger>
        </div>
    );
}

export function Toasts() {
    const [show, setShow] = React.useState(false);

    return (
        <div>
            <h2>Toasts</h2>
            <Button onClick={() => setShow(true)}>Show Toast</Button>
            <ToastContainer position="top-end" className="p-3">
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
}
