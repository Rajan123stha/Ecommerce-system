// VendorPanel.js
import React, { useState } from "react";
import "./VendorPanel.css";

function VendorPanel() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [buyerDetails, setBuyerDetails] = useState(null);

  const addProduct = () => {
    if (productName.trim() !== "") {
      setProducts([...products, productName]);
      setProductName("");
    }
  };

  const removeProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts); 
  };

  const viewBuyerDetails = (productName) => {
    // For demonstration purposes, let's assume buyer details are fetched from an API
    // In reality, you would fetch the details based on the product name
    // This is just a placeholder function
    const buyerDetails = {
      name: "John Doe",
      email: "johndoe@example.com",
      address: "123 Main St, City, Country",
    };
    setBuyerDetails(buyerDetails);
  };

  return (
    <div className="vendor-panel">
      <h2>Vendor Panel</h2>
      <div className="add-product">
        <input
          type="text"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <div className="product-list">
        <h3>Products Added</h3>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product}
              <button onClick={() => removeProduct(index)}>Remove</button>
              <button onClick={() => viewBuyerDetails(product)}>
                View Buyer Details
              </button>
            </li>
          ))}
        </ul>
      </div>
      {buyerDetails && (
        <div className="buyer-details">
          <h3>Buyer Details</h3>
          <p>Name: {buyerDetails.name}</p>
          <p>Email: {buyerDetails.email}</p>
          <p>Address: {buyerDetails.address}</p>
          <button onClick={() => setBuyerDetails(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default VendorPanel;
