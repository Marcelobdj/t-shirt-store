const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const cartController = require('../controllers/cartController');

router.post('/add', authMiddleware, cartController.addItem);
router.put('/update', authMiddleware, cartController.updateItem);
router.delete('/remove/:itemId', authMiddleware, cartController.removeItem);
router.get('/', authMiddleware, cartController.getCart);

module.exports = router;
