import React from "react";
import { ApiTopPropducts } from "../API/TopProductsApi";
import Product from "./Product";

function Products() {
  return (
    <div>
      <p className="text-purple-900 ont-medium text-[30px] font-bold mobile:text-center">Top Products</p>
      <div className="flex columns-4 flex-wrap p-5 items-center justify-center">
        {ApiTopPropducts.map((product, index) => {
          return <Product item={product} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Products;
