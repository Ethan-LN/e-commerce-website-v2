import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { rgbToHex } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function Product({ item }) {
  const [hoverEffect, SetHoverEffect] = useState(" opacity-0");
  const handelHoverEnter = () => {
    SetHoverEffect(" opacity-1 bg-[rgba(0,0,0,0.2)]");
  };
  const handelHoverExit = () => {
    SetHoverEffect(" opacity-0");
  };
  const iconStyle =
    "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer";
  return (
    <div
      className="flex flex-1 items-center justify-center min-w-[190px] max-w-[220px] overflow-hidden rounded-md shadow-lg m-2 relative"
      onMouseEnter={handelHoverEnter}
      onMouseLeave={handelHoverExit}
    >
      <img src={item.src} alt="product_image" />
      <div
        className={
          `flex items-center justify-center w-[100%] h-[100%] absolute gap-3 ease-in duration-200` +
          hoverEffect
        }
      >
        <div className={iconStyle}>
          <ShoppingCartOutlined />
        </div>
        <div className={iconStyle}>
          <FavoriteBorderOutlined />
        </div>
        <Link to="/product" className={iconStyle}>
          <SearchOutlined />
        </Link>
      </div>
    </div>
  );
}

export default Product;
