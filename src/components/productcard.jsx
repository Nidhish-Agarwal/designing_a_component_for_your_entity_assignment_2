// write product card here
import React from "react";
import Button from "./button.jsx";

function productcard({ productData }) {
  return (
    <div>
      <img src={productData.image} alt="React Image" />
      <p>Name : {productData.name}</p>
      <p>Price : {productData.price}</p>
      <Button />
    </div>
  );
}

export default productcard;
