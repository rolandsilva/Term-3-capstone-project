import React from "react";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  return (
    <div className="contact-container">
      <section className="contact-section">
        <div className="info-title">Contact Us</div>
        <div className="contact-info">
          <h2>General Contact</h2>
          <h4>Roland's Computers, Devices ans Accessories </h4>
          <h4>(RCDA LTD)</h4>
          <p>Address: 123 Massachusetts Ave, Boston, MA, 01234 USA</p>
          <p>Phone: (800) 555-1234</p>
          <p>Email: contact@rcda.com</p>

          <hr />
        </div>
        <div className="contact-info">
          <h2>Tech Support</h2>
          <p>Phone: (800) 555-5678</p>
          <p>Email: techsupport@rcda.com</p>
          <p>Hours: Mon-Fri, 9am - 5pm</p>
        </div>

        <hr />

        <div className="contact-info">
          <h2>Sales</h2>
          <p>Phone: (800) 555-9012</p>
          <p>Email: sales@rcda.com</p>
          <p>Hours: Mon-Fri, 9am - 6pm</p>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
