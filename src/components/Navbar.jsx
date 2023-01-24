import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const style = "text-[14px] cursor-pointer ml-[25px] mobile:ml-[12px] mobile:text-sm";
  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="warpper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">
        {/* Left div */}
        <div className="left flex flex-1 items-center">
          <div className="language cursor-pointer text-[16px] mobile:hidden">En</div>
          <div className="searchInput flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all">
            <input className="input outline-none w-[50px] sm:w-[100%]" type="text" />
            <Search className="" style={{ fontSize: "16px" }} />
          </div>
        </div>
        {/* Logo */}
        <div className="center flex-1 text-center">
          <Link to="/" className="logo font-bold text-lg mobile:text-sm">Spring collection</Link>
        </div>
        {/* Right div */}
        <div className="right flex flex-1 items-center justify-end mobile:fglex-[2] mobile:justify-center">
          <Link to="/register" className={style}>Register</Link>
          <Link to="/login" className={style}>Sign in</Link>
          <Link to="/cart" className={style}>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
