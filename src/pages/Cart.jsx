import React from "react";
import Announce from "../components/Announce";
import Counter from "../components/Counter";
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
      <div className="mt-7 md:flex">
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
            <div className="description ml-5 mb-3 flex flex-auto">
              <div>
                <p className="mb-3">
                  <b>ID:</b> S3476543
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
              <div className="flex flex-col justify-center items-center flex-auto">
                <Counter />
                <p className="flex items-center sm:justify-center text-xl mt-3">
                  <b>$70 AUD</b>
                </p>
              </div>
            </div>
          </div>
          <hr className="mt-7 mb-7"></hr>
          <div className="flex w-[100%] h-auto items-center">
            <div>
              <img
                className="w-[7.2rem] rounded-lg shadow-lg hover:scale-[1.1] ease-in-out duration-300"
                src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                alt="product_img"
              />
            </div>
            <div className="description ml-5 mb-3 flex flex-auto">
              <div>
                <p className="mb-3">
                  <b>ID:</b> S3476553
                </p>
                <p className="mb-3">
                  <b>Product:</b> Blue crew neck sweat shirt
                </p>
                <p className="flex gap-3 items-center justify-start mb-3">
                  <b>Color:</b>
                  <div className="bg-blue-400 w-[1.5rem] h-[1.5rem] border-2 rounded-full cursor-pointer hover:border-[#8a4af3]"></div>
                </p>
                <p className="mb-3">
                  <b>Size:</b> Large
                </p>
              </div>
              <div className="flex flex-col justify-center items-center flex-auto">
                <Counter />
                <p className="flex items-center sm:justify-center text-xl mt-3">
                  <b>$72 AUD</b>
                </p>
              </div>
            </div>
          </div>
          <hr className="mt-7 mb-7"></hr>
        </div>
        <div className="ml-5 mr-5 mb-5 p-5 flex-[0.4] w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg flex flex-col items-center">
          <h1 className="text-[2rem]">Summary</h1>
          <div className="flex justify-between mt-3 w-[100%]">
            <p>Subtotal</p>
            <p>$142</p>
          </div>
          <div className="flex justify-between mt-3 w-[100%]">
            <p>Shipping</p>
            <p>$40</p>
          </div>
          <div className="flex justify-between mt-3 w-[100%]">
            <p>shipping discount</p>
            <p>$-40</p>
          </div>
          <div className="flex justify-between mt-3 w-[100%] font-bold text-2xl">
            <p>Total</p>
            <p>$142</p>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Cart;
