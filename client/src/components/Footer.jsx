import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-address">
        <div className="addressContainer">
          123 Massachusetts Avenue
          <br />
          Boston, MA 01234
        </div>

        <div className="footer-social-media">
          {/* <a href="#">
            <i className="fab fa-instagram"></i>
          </a> */}
          <p>Instagram </p>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <p> YouTube </p>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <p> Twitter </p>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <p> FaceBook </p>
          <a href="#">
            <i className="fab fa-twitch"></i>
          </a>
          <p> Twitch </p>
        </div>
        <div className="footer-contact">
          <a href="#">Contact Us</a>
        </div>
      </div>

      <div className="footer-links">
        <a href="#">Copyright © 2024 RSPWebDev</a>
        <a href="#">About Us</a>
        <a href="#">Business</a>
        <a href="#">Government</a>
        <a href="#">Education</a>
        <a href="#">Military/Veterans</a>
        <a href="#">Tech Support</a>
      </div>
    </footer>
  );
};

export default Footer;
