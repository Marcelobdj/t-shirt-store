import React from 'react';
import './Checkout.css';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import OrderSummary from '../OrderSummary/OrderSummary';

const Checkout = () => {
    // Dummy cart items data for demonstration purposes
    const cartItems = [
        { id: 1, name: 'T-Shirt 1', price: 19.99, quantity: 1 },
        { id: 2, name: 'T-Shirt 2', price: 24.99, quantity: 2 },
    ];

    const handleFormSubmit = () => {
        // Handle form submission logic here, e.g. send data to your API
    };

    return (
        <div className="checkout-container">
            <h2 className="checkout-title">Checkout</h2>
            <CheckoutForm onSubmit={handleFormSubmit} />
            <OrderSummary cartItems={cartItems} />
        </div>
    );
};

export default Checkout;