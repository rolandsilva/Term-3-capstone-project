import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import "./AboutUsPage.css"

const AboutUsPage = () => {
  return (
    <div className="about-us">
      <h1 className="aboutush1">About Us</h1>
      <p id="subtitle">Roland's Computer, Device, and Accessories Store</p>
      <div className="card">
        <h2 className="aboutush2">
          Welcome to Roland's Computer, Device, and Accessories Store!
        </h2>
        <p id="cardtext">
          Founded 12 years ago, we have been dedicated to providing top-quality electronic products and exceptional customer service.
          Our mission is to help you find the perfect technology solutions to meet your needs.
        </p>
        <p id="cardtext">
          At Roland's, we offer a wide range of products including the latest computers, tablets, smartphones, and accessories from leading brands.
          Our knowledgeable staff is always ready to assist you with expert advice and support.
        </p>
        <p id="cardtext">
          Over the years, we have built a reputation for reliability and trustworthiness.
          We pride ourselves on our commitment to customer satisfaction and strive to exceed your expectations every time you shop with us.
        </p>
        <p id="cardtext">
          Thank you for choosing Roland's Computer, Device, and Accessories Store.
          We look forward to serving you and helping you stay connected with the best technology has to offer.
        </p>
      </div>
      <div className="card-container">
        <div className="card">
          <h2 className="aboutush2">Our Mission</h2>
          <p>
            To provide high-quality technology products and exceptional customer service,
            helping our customers stay connected and productive in their everyday lives.
          </p>
        </div>
        <div className="card">
          <h2 className="aboutush2">Our Vision</h2>
          <p>
            To be the leading provider of technology solutions in our community,
            known for our expertise, reliability, and dedication to customer satisfaction.
          </p>
        </div>
        <div className="card">
          <h2 className="aboutush2">Our Values</h2>
          <p>
            Integrity, customer focus, innovation, and teamwork are at the core of everything we do.
            It is a family-run business and we are proud of what we do!
          </p>
        </div>
        </div>
      </div>
  );
};

export default AboutUsPage;




