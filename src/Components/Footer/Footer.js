import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social">
        <a href="/" className="logo">
          CreativeCrafted
        </a>
        <p className="brief">Discover the Art of Creativity</p>
        <div className="social-media">
          <a href="/" className="facebook">
            <FaFacebookF />
          </a>
          <a href="/" className="instagram">
            <FaInstagram />
          </a>
          <a href="/" className="twitter">
            <FaTwitter />
          </a>
          <a href="/" className="linkedin">
            <FaLinkedinIn />
          </a>
          <a href="/" className="youtube">
            <FaYoutube />
          </a>
        </div>
      </div>
      {/* Add other sections like Information, Links, and Contact */}
    </footer>
  );
};

export default Footer;
