const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware.protect, orderController.createOrder);
router.get('/', authMiddleware.protect, orderController.getOrdersByUser);

module.exports = router;