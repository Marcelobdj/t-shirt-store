import React, { useState, useEffect } from 'react';
import './ShoppingCart.css';
import CartItem from '../CartItem/CartItem';
import { useNavigate } from 'react-router-dom';
import { fetchCartItems } from '../../services/CartService';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    const handleItemUpdate = (updatedItem) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
        );
    };

    const handleItemRemove = (itemId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };

    useEffect(() => {
        const getCartItems = async () => {
            try {
                const items = await fetchCartItems();
                setCartItems(items);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        getCartItems();
    }, []);

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            {cartItems.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    onItemUpdate={handleItemUpdate}
                    onItemRemove={handleItemRemove}
                />
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