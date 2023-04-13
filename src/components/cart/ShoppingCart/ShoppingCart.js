import React from 'react';
import './ShoppingCart.css';
import CartItem from '../CartItem/CartItem';
import { useNavigate } from 'react-router-dom';

const cartItems = [
    { id: 1, title: 'T-Shirt 1', imageUrl: 'https://via.placeholder.com/150', price: 19.99, quantity: 1 },
    { id: 2, title: 'T-Shirt 2', imageUrl: 'https://via.placeholder.com/150', price: 24.99, quantity: 2 },
    // Add more items for testing
];

const ShoppingCart = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const navigate = useNavigate();

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
            <div className="total-price">
                <p>Total: ${totalPrice.toFixed(2)}</p>
            </div>
            <button className="checkout-btn" onClick={() => navigate('/checkout')}>
                Proceed to Checkout
            </button>
        </div>
    );
};

export default ShoppingCart;