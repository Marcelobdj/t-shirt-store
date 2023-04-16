const Order = require('../models/orderModel');

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const { userId, items, shippingAddress, totalPrice } = req.body;

        const newOrder = new Order({
            user: userId,
            items,
            shippingAddress,
            totalPrice,
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error });
    }
};

// Get orders by user
exports.getOrdersByUser = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
};