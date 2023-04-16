import React, { useState, useEffect } from 'react';
import './ProductDetails.css';
import axios from 'axios';

const ProductDetails = ({ productId }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`/api/products/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.log('Error fetching product details:', error);
            }
        };

        fetchProductDetails();
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const { sizes, colors } = product;

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