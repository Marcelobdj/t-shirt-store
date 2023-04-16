import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import useActiveClass from './useActiveClass';

const Navbar = ({ isAuthenticated }) => {
    const registerActiveClass = useActiveClass('/register');
    const loginActiveClass = useActiveClass('/login');
    const logoutActiveClass = useActiveClass('/logout');
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/" className={useActiveClass('/')}>
                    T-Shirt Store
                </NavLink>
            </div>
            <div className="navbar-menu">
                <ul className="navbar-items">
                    <li>
                        <NavLink to="/" className={useActiveClass('/')}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className={useActiveClass('/products')}>
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" className={useActiveClass('/cart')}>
                            Cart
                        </NavLink>
                    </li>
                    {!isAuthenticated ? (
                        <>
                            <li>
                                <NavLink to="/register" className={registerActiveClass}>
                                    Register
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/login" className={loginActiveClass}>
                                    Login
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <li>
                            <NavLink to="/logout" className={logoutActiveClass}>
                                Logout
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;