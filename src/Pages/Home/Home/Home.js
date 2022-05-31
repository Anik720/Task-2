import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Contact from '../ContactUs/Contact';
import AboutUs from '../About/AboutUs';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Contact></Contact>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
