import React from "react";
import './EducationSalesPage.css';

const EducationalSalesPage = () => {
  return (
    <div className="educational-sales">
      <h1 
      className="educationalsalesh1">Educational Sales</h1>
 <p className="subtitle">Roland's Computer, Device, and Accessories Store - Serving Educational Institutions for 12 Years</p>
      <div className="card">
        <h2 className="educationalsalesh2">About Our Educational Sales Services</h2>
        <p>
          At Roland's, we are dedicated to supporting the technology needs of educational institutions. For the past 12 years, we have been a trusted partner to schools, colleges, and universities, providing them with the latest technology products and exceptional support.
        </p>
        <p>
          Our team understands the unique requirements of educational environments. We offer competitive pricing, tailored solutions, and dedicated support to help educators and students achieve their goals.
        </p>
      </div>
      <div className="card-container">
        <div className="card">
          <h2 className="educationalsalesh2">Our Services</h2>
          <ul>
            <li>Bulk purchasing options</li>
            <li>Custom configurations</li>
            <li>On-site setup and installation</li>
            <li>Ongoing technical support</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="educationalsalesh2">Why Choose Us</h2>
          <ul>
            <li>Expert advice from knowledgeable staff</li>
            <li>High-quality products from leading brands</li>
            <li>Exceptional customer service</li>
            <li>Reliable and timely support</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="educationalsalesh2">Contact Us</h2>
          <p>
            Get in touch with our educational sales team:
          </p>
          <ul>
            <li>Email: education@rcda.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Massachusetts Ave, Boston, MA 01234</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationalSalesPage;