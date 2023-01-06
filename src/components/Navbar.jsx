import { Search } from "@mui/icons-material";
import React from "react";

function Navbar() {
  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="warpper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center">
        <div className="left flex flex-1 items-center">
          <div className="language cursor-pointer text-[16px]">En</div>
          <div className="searchInput flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px]">
            <input className="input"
            type='text'/ >
            <Search/>
          </div>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
}

export default Navbar;
