// src/components/Buttons.js
import React from 'react';
import Login, { Logout, Addtocart } from '../Customcomps';

function Buttons() {
    return (
        <div>
            <Login />
            <Logout />
            <Addtocart />
        </div>
    );
}

export default Buttons;
