import React from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

function CategoryPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex flex-col p-5">
        <h1 className="text-[30px]">Men's Cloth</h1>
        <div className="flex items-center justify-between mt-3">
          <div className="flex flex-col">
            <p>Filter by</p>
            <select className="ml-3 border-2 border-silver rounded-md">
              <option selected disabled>
                size
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
            <select className="ml-3 border-2 border-silver rounded-md mobile:mt-3">
              <option selected disabled>
                color
              </option>
              <option>Yellow</option>
              <option>Blue</option>
              <option>Red</option>
              <option>White</option>
              <option>Black</option>
            </select>
          </div>
          <div className="flex">
            <p>Sort by</p>
            <select className="ml-3 border-2 border-silver rounded-md">
              <option>Newest (First)</option>
              <option>Oldest (First)</option>
              <option>Price (Low-High)</option>
              <option>Price (High-Low)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default CategoryPage;
