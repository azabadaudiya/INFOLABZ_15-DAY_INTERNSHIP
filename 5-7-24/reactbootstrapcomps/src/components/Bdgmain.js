// src/components/Bdgmain.js
import React from 'react';
import { Badge } from 'react-bootstrap';
import Btnbadge from './Btnbadge';
import { Passbadge, Failbadge } from './Badges';

function Bdgmain() {
    return (
        <div>
            <h2>Badges</h2>
            <Badge variant="primary">Primary Badge</Badge>
            <Btnbadge />
            <Passbadge />
            <Failbadge />
        </div>
    );
}

export default Bdgmain;
