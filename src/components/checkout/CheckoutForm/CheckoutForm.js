import React from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({ onSubmit }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Process the checkout information here, e.g. send it to your API
        onSubmit();
    };

    return (
        <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="checkout-form-item">
                <label className="checkout-form-label" htmlFor="name">
                    Name
                </label>
                <input
                    className="checkout-form-input"
                    type="text"
                    id="name"
                    name="name"
                    required
                />
            </div>
            {/* Add more form fields as needed */}
            <button className="checkout-form-submit" type="submit">
                Complete Order
            </button>
        </form>
    );
};

export default CheckoutForm;