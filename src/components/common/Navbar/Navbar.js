import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/" exact activeClassName="active">T-Shirt Store</NavLink>
            </div>
            <div className="navbar-menu">
                <ul className="navbar-items">
                    <li>
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" activeClassName="active">
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" activeClassName="active">
                            Cart
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;