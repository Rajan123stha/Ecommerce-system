import CartProduct from "../../Components/CartProduct";
import Product from "../../DB/Flat bottom bottle art.jpg";
import "./Cart.css";

export default function Cart() {
  return (
    <>
      <div className="cart-container">
        <div className="cart">
          <h2>Your Shopping Cart</h2>
          <hr />
          <CartProduct product={Product} />
          <hr />
          <CartProduct product={Product} />
          <hr />
          <CartProduct product={Product} />
        </div>
        <div className="order-summery">
          <h2>Order Summary</h2>
          <hr />
          <div className="order-details">
            <p className="subtotal">Subtotal:</p>
            <p className="price">Rs 500</p>
          </div>
          <div className="order-details">
            <p className="subtotal">Shipping Fee:</p>
            <p className="price">Rs 50</p>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </>
  );
}
