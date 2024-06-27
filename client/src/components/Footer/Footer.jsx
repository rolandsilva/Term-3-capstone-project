import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faTwitter,
  faFacebookF,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import ContactUsPage from "../../Pages/ContactUSPage";

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
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#E4405F" }} />{" "}
            Instagram
          </a>
          {/* <p>Instagram </p> */}

          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} style={{ color: "#FF0000" }} />{" "}
            YouTube
          </a>
          {/* <p> YouTube </p> */}

          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#1DA1F2" }} />{" "}
            Twitter
          </a>
          {/* <p> Twitter </p> */}

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} style={{ color: "#3b5998" }} />{" "}
            FaceBook
          </a>
          {/* <p> FaceBook </p> */}

          <a
            href="https://www.twitch.tv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitch} style={{ color: "#9146FF" }} />{" "}
            Twitch
          </a>
          {/* <p> Twitch </p> */}
        </div>

        {/* <div className="footer-contact">
          <a href="#">Contact Us</a>
        </div> */}

        <div className="footer-contact">
          <a href="/contact-us">Contact Us</a>
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

{
  /* <a href="#">
            <i className="fab fa-instagram"></i>
          </a> */
}

{
  /* <a href="#">
            <i className="fab fa-youtube"></i>
          </a> */
}
