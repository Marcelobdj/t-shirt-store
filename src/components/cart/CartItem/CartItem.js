// CartItem.js
import React from 'react';
import './CartItem.css';
import { updateCartItem, removeCartItem } from '../../services/CartService';

const CartItem = ({ item, onItemUpdate, onItemRemove }) => {
    const { id, title, imageUrl, price, quantity } = item;

    const handleQuantityChange = async (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        try {
            const updatedItem = await updateCartItem(id, newQuantity);
            onItemUpdate(updatedItem);
        } catch (error) {
            console.error('Error updating cart item:', error);
        }
    };

    const handleRemoveClick = async () => {
        try {
            await removeCartItem(id);
            onItemRemove(id);
        } catch (error) {
            console.error('Error removing cart item:', error);
        }
    };

    return (
        <div className="cart-item">
            <img src={imageUrl} alt={title} className="cart-item-image" />
            <div className="cart-item-details">
                <h3 className="cart-item-title">{title}</h3>
                <p className="cart-item-price">${price}</p>
                <p className="cart-item-quantity">
                    Quantity:
                    <select value={quantity} onChange={handleQuantityChange}>
                        {[...Array(10).keys()].map((n) => (
                            <option key={n + 1} value={n + 1}>
                                {n + 1}
                            </option>
                        ))}
                    </select>
                </p>
                <button className="remove-btn" onClick={handleRemoveClick}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;