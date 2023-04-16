import React from 'react';
import './Logout.css';

const Logout = () => {
    const handleLogout = () => {
        // TODO: Connect to your backend API for logout
        console.log('User logged out');
    };

    return (
        <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;