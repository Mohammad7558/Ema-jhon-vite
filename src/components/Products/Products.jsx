import React from "react";
import "./Products.css";
const Products = ({ product, handleAddToCart }) => {
  const { name, img, seller, price, ratings } = product;

  return (
    <div className="product-card">
      <img className="product-img" src={img} alt="" />
      <div className="product-details">
        <h1 className="product-name">{name}</h1>
        <h3>Price: {price}</h3>
        <p>Seller: {seller}</p>
        <p>Ratings: {ratings}</p>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        className="add-to-cart-button"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Products;
