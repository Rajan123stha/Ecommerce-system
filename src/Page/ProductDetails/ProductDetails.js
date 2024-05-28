import "./ProductDetails.css";
import Product from "../../DB/Flower painting2.jpg";
import { FaWhatsapp, FaViber, FaFacebookMessenger } from "react-icons/fa";

export default function ProductDetails() {
  const feature = ["Framed", "original", "Simple"];
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={Product} alt="Product" />
        <div className="product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="buy-now">Add to Wishlist</button>
        </div>
      </div>
      <div className="product-details">
        <h1>Quiling Art(Not Framed) Letter E</h1>
        <p className="artist">
          <strong>Artist:Pablo Maldini</strong>
        </p>
        <hr />
        <p className="price">Rs. 1,500</p>
        <hr />
        <p className="s-head">Share:</p>
        <div className="sharing">
          <p className="sharing-option">
            <FaWhatsapp />
          </p>
          <p className="sharing-option">
            <FaViber />
          </p>
          <p className="sharing-option">
            <FaFacebookMessenger />
          </p>
        </div>
        <hr />
        <p className="s-head">
          <strong>Product Details </strong>
        </p>
        <hr />
        <ul className="features">
          {feature.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
