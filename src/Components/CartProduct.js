import React from "react";

export default function CartProduct({ product }) {
  return (
    <div className="product">
      <div className="product-Cimage">
        <img src={product} alt="Framed painting Butterfly" />
      </div>
      <div className="product-details">
        <h3 className="product-name">Framed painting Butterfly</h3>
        <p className="product-type">Type: Framed</p>
        <p className="product-price">Price: Rs 500</p>
        <div className="buttons">
          <button className="share-btn">Share</button>
          <button className="remove-btn">Remove</button>
        </div>
      </div>
    </div>
  );
}
