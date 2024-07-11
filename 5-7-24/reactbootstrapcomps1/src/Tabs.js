// src/Tabs.js
import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

export default function Controlledtabs() {
    const [key, setKey] = useState('home');

    return (
        <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
            <Tab eventKey="home" title="Home">
                Home content
            </Tab>
            <Tab eventKey="profile" title="Profile">
                Profile content
            </Tab>
            <Tab eventKey="contact" title="Contact">
                Contact content
            </Tab>
        </Tabs>
    );
}

export function Justifiedtabs() {
    return (
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3" justify>
            <Tab eventKey="home" title="Home">
                Home content
            </Tab>
            <Tab eventKey="profile" title="Profile">
                Profile content
            </Tab>
            <Tab eventKey="contact" title="Contact">
                Contact content
            </Tab>
        </Tabs>
    );
}

export function Pilltabs() {
    return (
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3" variant="pills">
            <Tab eventKey="home" title="Home">
                Home content
            </Tab>
            <Tab eventKey="profile" title="Profile">
                Profile content
            </Tab>
            <Tab eventKey="contact" title="Contact">
                Contact content
            </Tab>
        </Tabs>
    );
}
