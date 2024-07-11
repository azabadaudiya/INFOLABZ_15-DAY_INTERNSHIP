// src/components/Third.js
import React from 'react';
import Fourth from './Fourth';
import { Logout } from '../Customcomps';

function Third() {
    return (
        <div>
            <h2>Third Component</h2>
            <Fourth />
            <Logout />
        </div>
    );
}

export default Third;
