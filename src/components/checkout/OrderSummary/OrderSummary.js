import React from 'react';
import './OrderSummary.css';

const OrderSummary = ({ cartItems }) => {
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="order-summary">
            <h2 className="order-summary-title">Order Summary</h2>
            {cartItems.map((item) => (
                <div className="order-summary-item" key={item.id}>
                    <span>{item.name} x {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            ))}
            <div className="order-summary-total">
                <strong>Total:</strong> ${calculateTotal().toFixed(2)}
            </div>
        </div>
    );
};

export default OrderSummary;