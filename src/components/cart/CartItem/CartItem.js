import React from 'react';
import './CartItem.css';

const CartItem = ({ item }) => {
    const { title, imageUrl, price, quantity } = item;

    return (
        <div className="cart-item">
            <img src={imageUrl} alt={title} className="cart-item-image" />
            <div className="cart-item-details">
                <h3 className="cart-item-title">{title}</h3>
                <p className="cart-item-price">${price}</p>
                <p className="cart-item-quantity">Quantity: {quantity}</p>
                {/* Add buttons to update the item quantity and remove the item from the cart */}
            </div>
        </div>
    );
};

export default CartItem;