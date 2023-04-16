import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductInfo.css';
import ProductDetails from '../ProductDetails/ProductDetails';

const ProductInfo = ({ productId }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProductInfo = async () => {
            try {
                const response = await axios.get(`/api/products/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.log('Error fetching product info:', error);
            }
        };

        fetchProductInfo();
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleAddToCart = () => {
        // handle adding to cart
    };

    return (
        <div className="product-info">
            <img src={product.imageUrl} alt={product.title} />
            <div className="product-info-details">
                <h1 className="product-title">{product.title}</h1>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <ProductDetails productId={productId} />
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;