import React from 'react';
import axios from 'axios';
import './Logout.css';

const Logout = () => {
    const handleLogout = async () => {
        try {
            await axios.post('/api/users/logout');
            // TODO: Remove the stored user object and token from your application state or context
            // Redirect user to the login page
            console.log('User logged out');
        } catch (error) {
            // Handle logout error, e.g., show a message to the user
            console.log('Logout error:', error.response.data);
        }
    };

    return (
        <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;