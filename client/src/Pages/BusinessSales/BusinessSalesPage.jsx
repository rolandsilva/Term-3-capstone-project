import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import './BusinessSalesPage.scss';
import "./BusinessSalesPage.css";

const BusinessSalesPage = () => {
  return (
    <div className="business-sales">
      <h1 className="businesssalesh1">Business Sales</h1>
      <p className="subtitle">
        Roland's Computer, Device, and Accessories Store - Serving Businesses
        for 12 Years
      </p>
      <div className="card">
        <h2 className="businesssalesh2">About Our Business Sales Services</h2>
        <p>
          At Roland's, we understand the unique technology needs of businesses.
          For the past 12 years, we have been a trusted partner to many local
          and regional businesses, providing them with the latest technology
          products and exceptional support.
        </p>
        <p>
          Whether you are a small business or a large corporation, our team of
          experts is here to help you find the right solutions to meet your
          needs. We offer competitive pricing, tailored solutions, and dedicated
          support to ensure your business stays connected and productive.
        </p>
      </div>
      <div className="card-container">
        <div className="card">
          <h2 className="businesssalesh2">Our Services</h2>
          <p>
            We offer a wide range of services tailored to businesses, including:
          </p>
          <ul>
            <li>Bulk purchasing options</li>
            <li>Custom configurations</li>
            <li>On-site setup and installation</li>
            <li>Ongoing technical support</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="businesssalesh2">Why Choose Us</h2>
          <p>With over a decade of experience, we provide:</p>
          <ul>
            <li>Expert advice from knowledgeable staff</li>
            <li>High-quality products from leading brands</li>
            <li>Exceptional customer service</li>
            <li>Reliable and timely support</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="businesssalesh2">Contact Us</h2>
          <p>Get in touch with our business sales team:</p>
          <ul>
            <li>Email: business@rcda.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>
              Address: 123 Massachusetts Avenue,Boston, Massachusetts, USA
            </li>
          </ul>
          <Button variant="primary" href="mailto:business@rcda.com">
            Email Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BusinessSalesPage;
