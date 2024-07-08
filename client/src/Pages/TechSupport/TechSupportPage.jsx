import React from "react";
import './TechSupportPage.css';

const TechSupportPage = () => {
  return (
    <div className="tech-support">
      <h1 className="techsupporth1">Tech Support</h1>
      <p className="subtitle">Roland's Computer, Device, and Accessories Store</p>
      <div className="card">
        <h2 className="techsupporth2">About Our Tech Support Services</h2>
        <p>
          At Roland's, we are committed to providing exceptional tech support to our customers. Our team of experts is here to help you with any technical issues you may encounter with your computers, devices, and accessories.
        </p>
        <p>
          Located at 123 Massachusetts Ave, Boston, MA 01234, we have been serving the community for over 12 years. Our goal is to ensure that you get the most out of your technology and have a smooth and efficient experience.
        </p>
      </div>
      <div className="card-container">
        <div className="card">
          <h2 className="techsupporth2">Our Services</h2>
          <ul>
            <li>Hardware troubleshooting and repair</li>
            <li>Software installation and support</li>
            <li>Network setup and maintenance</li>
            <li>Data recovery and backup solutions</li>
            <li>On-site and remote support</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="techsupporth2">Why Choose Us</h2>
          <ul>
            <li>Experienced and certified technicians</li>
            <li>Fast and reliable service</li>
            <li>Competitive pricing</li>
            <li>Personalized support</li>
            <li>Customer satisfaction guaranteed</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="techsupporth2">Contact Us</h2>
          <p>
            Get in touch with our tech support team:
          </p>
          <ul>
            <li>Email: support@rcda.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Massachusetts Ave, Boston, MA 01234</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechSupportPage;