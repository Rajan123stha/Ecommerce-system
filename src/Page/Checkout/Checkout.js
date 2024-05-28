import React, { useState } from "react";
import "./Checkout.css"; // Import your CSS file for styling

function Checkout() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash_on_delivery");

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCheckout = () => {
    // Implement your checkout logic here, such as sending order details to the server
    console.log("Phone Number:", phoneNumber);
    console.log("Address:", address);
    console.log("Payment Method:", paymentMethod);
    // You can add further processing, like validation and submitting the order
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="input-group">
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="text"
          id="phone"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="address">Address:</label>
        <textarea id="address" value={address} onChange={handleAddressChange} />
      </div>
      <div className="input-group">
        <label htmlFor="payment">Payment Method:</label>
        <select
          id="payment"
          value={paymentMethod}
          onChange={handlePaymentMethodChange}
        >
          <option value="cash_on_delivery">Cash on Delivery</option>
          <option value="esewa">eSewa</option>
        </select>
      </div>
      <button className="checkout-btn" onClick={handleCheckout}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
