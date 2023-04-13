import React from 'react';
import './ProductInfo.css';
import ProductDetails from '../ProductDetails/ProductDetails';

const product = {
    id: 1,
    title: 'T-Shirt 1',
    imageUrl: 'https://via.placeholder.com/150',
    description: 'This is a sample product description.',
    price: 19.99,
};

const ProductInfo = () => {
    return (
        <div className="product-info">
            <img src={product.imageUrl} alt={product.title} />
            <div className="product-info-details">
                <h1 className="product-title">{product.title}</h1>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <ProductDetails />
                <button className="add-to-cart-btn" onClick={() => { /* handle adding to cart */ }}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;