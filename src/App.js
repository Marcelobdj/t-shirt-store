import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
import Home from './components/home/Home/Home';
import ProductList from './components/products/ProductList/ProductList';
import ShoppingCart from './components/cart/ShoppingCart/ShoppingCart';
import ProductInfo from './components/products/ProductInfo/ProductInfo';
import Checkout from './components/checkout/Checkout/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/products/:id" element={<ProductInfo />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;