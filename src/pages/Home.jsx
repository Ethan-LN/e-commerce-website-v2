import React from "react";
import Announce from "../components/Announce";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slider />
      <Categories />
      <p className="text-purple-900 ont-medium text-[30px] font-bold">Top Products</p>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
