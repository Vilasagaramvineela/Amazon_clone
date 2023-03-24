import React from "react";
import Book from "./Book";
import Booka from "./Booka";
import Bookb from "./Bookb";
import Bookc from "./Bookc";
import Bookd from "./Bookd";
import Booke from "./Booke";
function Product() {
  return (
    <div class="product">
      <div class="product_row d-flex">
        <Book />
        <Booka />
        <Bookb />
      </div>
      <div class="product_row d-flex">
        <Bookc />
        <Bookd />
        <Booke />
      </div>
    </div>
  );
}

export default Product;
