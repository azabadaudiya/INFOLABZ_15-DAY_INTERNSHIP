// src/components/Btnbadge.js
import React from 'react';
import { Badge, Button } from 'react-bootstrap';

function Btnbadge() {
    return (
        <Button variant="secondary">
            Notifications <Badge variant="light">4</Badge>
        </Button>
    );
}

export default Btnbadge;
