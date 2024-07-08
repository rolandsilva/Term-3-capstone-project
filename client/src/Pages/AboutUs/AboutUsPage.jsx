import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import "./AboutUsPage.scss"

const AboutUsPage = () => {
  return (
    <Container className="about-us">
      <Row>
        <Col>
          <h1 className="title">About Us</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Roland's Computer, Device, and Accessories Store</Card.Title>
              <Card.Text>
                Welcome to Roland's Computer, Device, and Accessories Store! 
                Founded 12 years ago, we have been dedicated to providing top-quality electronic products and exceptional customer service. 
                Our mission is to help you find the perfect technology solutions to meet your needs.
              </Card.Text>
              <Card.Text>
                At Roland's, we offer a wide range of products including the latest computers, tablets, smartphones, and accessories from leading brands. 
                Our knowledgeable staff is always ready to assist you with expert advice and support.
              </Card.Text>
              <Card.Text>
                Over the years, we have built a reputation for reliability and trustworthiness. 
                We pride ourselves on our commitment to customer satisfaction and strive to exceed your expectations every time you shop with us.
              </Card.Text>
              <Card.Text>
                Thank you for choosing Roland's Computer, Device, and Accessories Store. 
                We look forward to serving you and helping you stay connected with the best technology has to offer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                To provide high-quality technology products and exceptional customer service, 
                helping our customers stay connected and productive in their everyday lives.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                To be the leading provider of technology solutions in our community, 
                known for our expertise, reliability, and dedication to customer satisfaction.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Values</Card.Title>
              <Card.Text>
                Integrity, customer focus, innovation, and teamwork are at the core of everything we do. It is a family run business and we are proud of what we do!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsPage;




