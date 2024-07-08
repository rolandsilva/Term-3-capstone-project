import React from "react";
import './GovernmentSalesPage.css';

const GovernmentSalesPage = () => {
  return (
    <div className="government-sales">
      <h1 className="title">Government Sales</h1>
      <p className="subtitle">Roland's Computer, Device, and Accessories Store - Serving Government Agencies for 12 Years</p>
      <div className="card">
        <h2>About Our Government Sales Services</h2>
        <p>
          At Roland's, we specialize in providing technology solutions for government agencies. For the past 12 years, we have been a trusted partner to many local, state, and federal agencies, offering the latest technology products and exceptional support.
        </p>
        <p>
          Our team understands the unique requirements and procurement processes of government entities. We offer competitive pricing, GSA schedules, and tailored solutions to meet your specific needs.
        </p>
      </div>
      <div className="card-container">
        <div className="card">
          <h2>Our Services</h2>
          <ul>
            <li>Bulk purchasing options</li>
            <li>Custom configurations</li>
            <li>On-site setup and installation</li>
            <li>Ongoing technical support</li>
          </ul>
        </div>
        <div className="card">
          <h2>Why Choose Us</h2>
          <ul>
            <li>Expert advice from knowledgeable staff</li>
            <li>High-quality products from leading brands</li>
            <li>Exceptional customer service</li>
            <li>Reliable and timely support</li>
          </ul>
        </div>
        <div className="card">
          <h3>Contact Us</h3>
          <p>
            Get in touch with our government sales team:
          </p>
          <ul>
            <li>Email: government@rolandscomputers.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Massachusetts Ave, Boston, MA 01234</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GovernmentSalesPage;