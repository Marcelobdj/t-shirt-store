import React from 'react';
import './ProductImage.css';

const ProductImage = ({ imageUrl, onClose }) => {
    return (
        <div className="product-image-container" onClick={onClose}>
            <img className="product-image" src={imageUrl} alt="Product" />
        </div>
    );
};

export default ProductImage;