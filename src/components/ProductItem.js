import React from "react";
import "./ProductItem.css";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ img, bookName, price, url }) => {
  const navigate = useNavigate();
  const handleEvent = () => {
    console.log("you have pressed");
  };
  return (
    <div className="product-items">
      <div className="product">
        <img src={img} alt="" />
        <h3>{bookName}</h3>
        <h5>{price}</h5>
        <button onClick={handleEvent}>Go to course</button>
      </div>
    </div>
  );
};

export default ProductItem;
