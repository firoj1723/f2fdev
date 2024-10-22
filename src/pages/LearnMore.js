import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Add this import

const LearnMore = () => {
  const cardStyle = {
    borderRadius: '10px',
    transition: 'transform 0.2s',
    backgroundColor: '#f8f9fa', // Light background
  };

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Learn More About Us</h2>
      
      <Row className="mb-4">
        <Col xs={12} md={6}>
          <Card style={cardStyle} className="shadow-sm" 
                onMouseEnter={(e) => e.currentTarget.style = {...cardStyle, ...cardHoverStyle}} 
                onMouseLeave={(e) => e.currentTarget.style = cardStyle}>
            <Card.Body>
              <Card.Title className="text-primary">Our Mission</Card.Title>
              <Card.Text>
                At F2F Developers, our mission is to be clear, concise, and memorable, effectively communicating the company's purpose and direction.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col xs={12} md={6}>
          <Card style={cardStyle} className="shadow-sm" 
                onMouseEnter={(e) => e.currentTarget.style = {...cardStyle, ...cardHoverStyle}} 
                onMouseLeave={(e) => e.currentTarget.style = cardStyle}>
            <Card.Body>
              <Card.Title className="text-primary">Our History</Card.Title>
              <Card.Text>
                Founded in 2024 by Firoj Khan and Mohd. Faraj, we aim to provide software and websites at affordable prices, helping businesses and individuals access digital solutions without high costs. Our first client project successfully established a professional digital presence at a competitive price.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col xs={12} md={6}>
          <Card style={cardStyle} className="shadow-sm" 
                onMouseEnter={(e) => e.currentTarget.style = {...cardStyle, ...cardHoverStyle}} 
                onMouseLeave={(e) => e.currentTarget.style = cardStyle}>
            <Card.Body>
              <Card.Title className="text-primary">Our Values</Card.Title>
              <ul className="list-unstyled">
                <li><i className="bi bi-check-circle-fill text-success"></i> Integrity</li>
                <li><i className="bi bi-check-circle-fill text-success"></i> Innovation</li>
                <li><i className="bi bi-check-circle-fill text-success"></i> Customer Satisfaction</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card style={cardStyle} className="shadow-sm" 
                onMouseEnter={(e) => e.currentTarget.style = {...cardStyle, ...cardHoverStyle}} 
                onMouseLeave={(e) => e.currentTarget.style = cardStyle}>
            <Card.Body>
              <Card.Title className="text-primary">Meet the Team</Card.Title>
              <Card.Text>
                Our dedicated team is passionate about creating innovative, user-friendly, and affordable digital solutions that empower businesses of all sizes to succeed in the digital world.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card style={cardStyle} className="shadow-sm" 
                onMouseEnter={(e) => e.currentTarget.style = {...cardStyle, ...cardHoverStyle}} 
                onMouseLeave={(e) => e.currentTarget.style = cardStyle}>
            <Card.Body>
              <Card.Title className="text-primary">Customer Stories</Card.Title>
              <Card.Text>
                Hear from our customers about their experiences with us:
              </Card.Text>
              <blockquote className="blockquote">
                <p>"We needed a professional website for our small business, but most quotes were beyond our budget. F2F Developers delivered a sleek, modern website that looks amazing, all while staying within our budget. Their team is responsive, creative, and understood our vision perfectly!"</p>
                <footer className="blockquote-footer">— Narendra Jonwal, Owner of Amol Educare</footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <h3 className="text-primary">Looking Ahead</h3>
          <p>We are excited about the future and are working towards our goals.</p>
          <Link to="/addusers">
            <Button variant="primary" size="lg">Get in Touch</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default LearnMore;
