import React from "react";
import Announce from "../components/Announce";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {BrowserRouter as Router, } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slider />
      <Categories />      
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
