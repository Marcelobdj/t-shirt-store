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
import Register from './components/auth/Register/Register';
import Login from './components/auth/Login/Login';
import Logout from './components/auth/Logout/Logout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const isAuthenticated = false; // Replace this with your actual authentication state
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/products/:id" element={<ProductInfo />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <ProtectedRoute
            path="/login"
            element={<Login />}
            isAuthenticated={isAuthenticated}
          /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;