import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Add this import
import { Helmet } from 'react-helmet-async'; // Don't forget to import Helmet

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
    <>
      <Helmet>
        <title>F2F Developers - Learn More About Us</title>
        <meta name="description" content="F2F Developers provides top-notch services that empower businesses and individuals. Let's build something amazing together." />
        <meta name="keywords" content="F2F Developers, IT services, Dausa software company, software development, website development, Dausa IT company, best IT company in Dausa, Dausa IT services, Dausa web designing company, F2F Developers" />
        <meta property="og:title" content="F2F Developers - Learn More About Us" />
        <meta property="og:description" content="Explore top-notch IT services with F2F Developers. Let us help you bring your ideas to life." />
        <meta property="og:url" content="https://f2fdev.in" />
        <meta property="og:image" content="https://f2fdev.in/assets/hi.png" />
      </Helmet>

      <Container className="my-5">
        <h2 className="text-center mb-4">Learn More About Us</h2>

        <Row className="mb-4">
          <Col xs={12} md={6}>
            <Card
              style={cardStyle}
              className="shadow-sm"
              onMouseEnter={(e) => e.currentTarget.style = { ...cardStyle, ...cardHoverStyle }}
              onMouseLeave={(e) => e.currentTarget.style = cardStyle}
            >
              <Card.Body>
                <Card.Title className="text-primary">Our Mission</Card.Title>
                <Card.Text>
                  At F2F Developers, our mission is to be clear, concise, and memorable, effectively communicating the company's purpose and direction.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card
              style={cardStyle}
              className="shadow-sm"
              onMouseEnter={(e) => e.currentTarget.style = { ...cardStyle, ...cardHoverStyle }}
              onMouseLeave={(e) => e.currentTarget.style = cardStyle}
            >
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
            <Card
              style={cardStyle}
              className="shadow-sm"
              onMouseEnter={(e) => e.currentTarget.style = { ...cardStyle, ...cardHoverStyle }}
              onMouseLeave={(e) => e.currentTarget.style = cardStyle}
            >
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
            <Card
              style={cardStyle}
              className="shadow-sm"
              onMouseEnter={(e) => e.currentTarget.style = { ...cardStyle, ...cardHoverStyle }}
              onMouseLeave={(e) => e.currentTarget.style = cardStyle}
            >
              <Card.Body>
                <Card.Title className="text-primary">Join Us</Card.Title>
                <Card.Text>
                  We are always looking for talented individuals to join our team. Explore current opportunities and become a part of the F2F Developers family!
                </Card.Text>
                <Link to="/careers">
                  <Button variant="primary">Learn More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LearnMore;
