import React from 'react';
import './ProductDetails.css';

const ProductDetails = () => {
    const sizes = ['S', 'M', 'L', 'XL'];
    const colors = ['Red', 'Blue', 'Green', 'Black'];

    return (
        <div className="product-details">
            <div className="product-details-item">
                <span className="product-details-title">Size:</span>
                <select className="select">
                    {sizes.map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
            </div>
            <div className="product-details-item">
                <span className="product-details-title">Color:</span>
                <select className="select">
                    {colors.map((color) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default ProductDetails;