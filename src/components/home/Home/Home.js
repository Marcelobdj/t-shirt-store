import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <FeaturedProducts />
    </div>
  );
};

export default Home;