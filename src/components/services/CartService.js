import axios from 'axios';

const API_BASE_URL = '/api/cart';

export const fetchCartItems = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching cart items:', error);
        throw error;
    }
};

export const updateCartItem = async (itemId, quantity) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/${itemId}`, { quantity });
        return response.data;
    } catch (error) {
        console.error('Error updating cart item:', error);
        throw error;
    }
};

export const removeCartItem = async (itemId) => {
    try {
        await axios.delete(`${API_BASE_URL}/${itemId}`);
    } catch (error) {
        console.error('Error removing cart item:', error);
        throw error;
    }
};