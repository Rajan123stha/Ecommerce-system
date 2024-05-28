import React from "react";
import "./Navbar.css"; // Import CSS file for styling
import Logo from "../../../Assets/logo1.png";
import Profile from "../../../Assets/me.jpg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Website Logo" className="logo" />
      </div>
      <div className="navbar-middle">
        <span>Admin Panel</span>
      </div>
      <div className="navbar-right">
        <img src={Profile} alt="Profile" className="profile-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
