import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { title, imageUrl, price } = product;

    return (
        <div className="product-card">
            <img src={imageUrl} alt={title} className="product-card-image" />
            <h3 className="product-card-title">{title}</h3>
            <p className="product-card-price">${price}</p>
        </div>
    );
};

export default ProductCard;