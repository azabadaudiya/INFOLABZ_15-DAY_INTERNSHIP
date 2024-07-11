// src/Customcomps.js
import React from 'react';

function Login() {
    return <button>Login</button>;
}

function Logout() {
    return <button>Logout</button>;
}

function Addtocart() {
    return <button>Add to Cart</button>;
}

function All() {
    return (
        <div>
            <Login />
            <Logout />
            <Addtocart />
        </div>
    );
}

export default Login;
export { Logout, Addtocart, All };
