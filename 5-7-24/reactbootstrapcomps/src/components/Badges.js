// src/components/Badges.js
import React from 'react';
import { Badge } from 'react-bootstrap';

export function Passbadge() {
    return <Badge variant="success">Pass</Badge>;
}

export function Failbadge() {
    return <Badge variant="danger">Fail</Badge>;
}

function Successbadge() {
    return <Badge variant="success">Success</Badge>;
}

export default Successbadge;
