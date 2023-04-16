const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;

        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

const isAdmin = (req, res, next) => {
    User.findById(req.userId)
        .then((user) => {
            if (user.isAdmin) {
                next();
            } else {
                res.status(403).json({ message: 'Forbidden: Admin access required' });
            }
        })
        .catch((error) => {
            res.status(500).json({ message: 'Server error' });
        });
};

module.exports = {
    authenticate,
    isAdmin,
};