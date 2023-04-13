import React from 'react';
import './ProductList.css';
import ProductCard from '../ProductCard/ProductCard';

const products = [
    { id: 1, title: 'T-Shirt 1', imageUrl: 'https://via.placeholder.com/150', price: 19.99 },
    { id: 2, title: 'T-Shirt 2', imageUrl: 'https://via.placeholder.com/150', price: 24.99 },
    // Add more products for testing
];

const ProductList = () => {
    return (
        <div className="product-list">
            <h2>All Products</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;