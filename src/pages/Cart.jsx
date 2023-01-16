import React from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

function Cart() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div>
        <div className="flex justify-center text-3xl">Cart</div>
      </div>
      <div className="flex items-center justify-between m-4">
        <button className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3]">
          Continue Shopping
        </button>
        <div className="sm:flex underline text-md hover:cursor-pointer gap-5">
          <p>Items in your Cart: 3</p>
          <p>Whishlist Item: 0</p>
        </div>
        <button className="btn">Checkout</button>
      </div>
      {/* central div */}
      <div className="mt-7 sm:flex">
        <div className="flex-col flex-1">
          {/* List of Products div */}
          <div className="flex w-[100%] h-auto items-center">
            <div>
              <img
                className="w-[7.2rem] rounded-lg shadow-lg hover:scale-[1.1] ease-in-out duration-300"
                src="https://cdn.shopify.com/s/files/1/0240/7285/products/VisitorsCrewneckSweatshirtinWhite11_360x.jpg?v=1642719779"
                alt="product_img"
              />
            </div>
            <div className="description sm:flex ml-5 h-auto justify-between">
              <div>
                <p className="mb-3">
                  4<b>ID:</b> S3476543
                </p>
                <p className="mb-3">
                  <b>Product:</b> White crew neck sweat shirt
                </p>
                <p className="flex gap-3 items-center justify-start mb-3">
                  <b>Color:</b>
                  <div className="bg-white w-[1.5rem] h-[1.5rem] border-2 rounded-full cursor-pointer hover:border-[#8a4af3]"></div>
                </p>
                <p className="mb-3">
                  <b>Size:</b> Medium
                </p>
              </div>
              <div className="bg-green-300 ">Product quantity and price </div>
            </div>
          </div>
        </div>
        <div className="bg-red-300"> Summary</div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Cart;
