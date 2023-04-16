const Product = require('../models/Product');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getProductDetails = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const createProduct = async (req, res) => {
    const { name, description, price, imageUrl, sizes, colors } = req.body;

    try {
        const product = new Product({
            name,
            description,
            price,
            imageUrl,
            sizes,
            colors,
        });

        await product.save();
        res.status(201).json({ message: 'Product created', data: product });
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
    }
};

const updateProduct = async (req, res) => {
    const { name, description, price, imageUrl } = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                name,
                description,
                price,
                imageUrl,
            },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getProducts,
    getProductDetails,
    createProduct,
    updateProduct,
    deleteProduct,
};