import React from "react";
import './MilitarySalesPage.css';

const MilitarySalesPage = () => {
  return (
    <div className="military-sales">
      <h1 className="militarysalesh1">Military and Veterans Sales</h1>
      <p className="subtitle">Roland's Computer, Device, and Accessories Store - Proudly Serving Military and Veterans for 12 Years</p>
      <div className="card">
        <h2 className="militarysalesh2">About Our Military and Veterans Sales Services</h2>
        <p>
          At Roland's, we are honored to support the technology needs of military personnel and veterans. For the past 12 years, we have been a trusted partner, providing the latest technology products and exceptional support to those who serve and have served our country.
        </p>
        <p>
          Our team understands the unique requirements and challenges faced by military members and veterans. We offer competitive pricing, tailored solutions, and dedicated support to help you stay connected and productive.
        </p>
      </div>
      <div className="card-container">
        <div className="card">
          <h2 className="militarysalesh2">Our Services</h2>
          <ul>
            <li>Bulk purchasing options</li>
            <li>Custom configurations</li>
            <li>On-site setup and installation</li>
            <li>Ongoing technical support</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="militarysalesh2">Why Choose Us</h2>
          <ul>
            <li>Expert advice from knowledgeable staff</li>
            <li>High-quality products from leading brands</li>
            <li>Exceptional customer service</li>
            <li>Reliable and timely support</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="militarysalesh2">Contact Us</h2>
          <p>
            Get in touch with our military and veterans sales team:
          </p>
          <ul>
            <li>Email: military@rcda.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Massachusetts Ave, Boston, MA 01234</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MilitarySalesPage;