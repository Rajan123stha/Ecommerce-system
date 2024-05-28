// WishListPage.js
import Img1 from "../../DB/B-27.jpg";
import React, { useState } from "react";
import "./WishList.css";
import WishCart from "../../Components/WishCart";
const WishListPage = () => {
  // Mock data for products in the wish list
  const [wishList, setWishList] = useState([
    { id: 1, name: "Product 1", price: "Rs 20", image: Img1 },
    { id: 2, name: "Product 2", price: "Rs 30" },
  ]);

  // Function to remove a product from the wish list
  const removeFromWishList = (id) => {
    const updatedWishList = wishList.filter((product) => product.id !== id);
    setWishList(updatedWishList);
  };

  return (
    <div className="wish-list-container">
      <h1>Wish List</h1>
      <hr />
      <WishCart wishList={wishList} fun={removeFromWishList} />
    </div>
  );
};

export default WishListPage;
