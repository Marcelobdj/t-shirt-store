const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const { authenticate } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', authenticate, (req, res) => {
    res.status(200).json({ message: 'User logged out' });
});

module.exports = router;