const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the T-Shirt Store API!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});