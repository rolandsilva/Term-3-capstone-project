import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './BusinessSalesPage.scss';

const BusinessSalesPage = () => {
  return (
    <Container className="business-sales">
      <Row>
        <Col>
          <h1 className="title">Business Sales</h1>
          <p className="subtitle">Roland's Computer, Device, and Accessories Store - Serving Businesses for 12 Years</p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>About Our Business Sales Services</Card.Title>
              <Card.Text>
                At Roland's, we understand the unique technology needs of businesses. For the past 12 years, we have been a trusted partner to many local and regional businesses, providing them with the latest technology products and exceptional support.
              </Card.Text>
              <Card.Text>
                Whether you are a small business or a large corporation, our team of experts is here to help you find the right solutions to meet your needs. We offer competitive pricing, tailored solutions, and dedicated support to ensure your business stays connected and productive.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Services</Card.Title>
              <Card.Text>
                We offer a wide range of services tailored to businesses, including:
                <ul>
                  <li>Bulk purchasing options</li>
                  <li>Custom configurations</li>
                  <li>On-site setup and installation</li>
                  <li>Ongoing technical support</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Why Choose Us</Card.Title>
              <Card.Text>
                With over a decade of experience, we provide:
                <ul>
                  <li>Expert advice from knowledgeable staff</li>
                  <li>High-quality products from leading brands</li>
                  <li>Exceptional customer service</li>
                  <li>Reliable and timely support</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Contact Us</Card.Title>
              <Card.Text>
                Get in touch with our business sales team:
                <ul>
                  <li>Email: business@rcda.com</li>
                  <li>Phone: (123) 456-7890</li>
                  <li>Address: 123 Massachusetts Avenue,Boston, Massachusetts, USA</li>
                </ul>
                <Button variant="primary" href="mailto:business@rcda.com">Email Us</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BusinessSalesPage;