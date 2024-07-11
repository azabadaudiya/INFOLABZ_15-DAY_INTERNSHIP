// src/App.js
import React from 'react';
import Navbar from './Navbar';
import Bdgmain from './components/Bdgmain';
import Resulttble from './components/Resulttble';
import Mainmodel from './components/Mainmodel';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="container mt-4">
                <Bdgmain />
                <Resulttble />
                <Mainmodel />
            </div>
        </div>
    );
}

export default App;
