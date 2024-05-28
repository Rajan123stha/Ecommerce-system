import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import Logo from "../Assets/logo1.png";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav>
      <div className="logo-container">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter the product."
        />
      </div>
      <div className="profile-container">
        <Link to="/wishList">
          <FiHeart className="nav-icons" />
        </Link>
        <Link to="/cart">
          <AiOutlineShoppingCart className="nav-icons" />
        </Link>
        <Link to="/login">
          <AiOutlineUserAdd className="nav-icons" />
        </Link>
      </div>
    </nav>
  );
}
