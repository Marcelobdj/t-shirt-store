const express = require('express');
const router = express.Router();
const {
    getProducts,
    getProductDetails,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController');
const { authenticate, isAdmin } = require('../middleware/authMiddleware');

router.get('/', getProducts);
router.get('/:id', getProductDetails);
router.post('/', authenticate, isAdmin, createProduct);
router.put('/:id', authenticate, isAdmin, updateProduct);
router.delete('/:id', authenticate, isAdmin, deleteProduct);

module.exports = router;