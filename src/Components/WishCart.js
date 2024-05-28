import React from "react";

export default function WishCart({ wishList, fun }) {
  return (
    <>
      {wishList.length > 0 ? (
        <div className="wish-list">
          {wishList.map((product) => (
            <div className="wish-list-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="wish-list-item-details">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button onClick={() => fun(product.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wish list is empty.</p>
      )}
    </>
  );
}
