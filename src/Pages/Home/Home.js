import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './home.css'; // Import your custom CSS file for additional styling

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="banner">
          <div className="content">
            <h1 className="title">StudioPrennis</h1>
            <Button variant="primary" size="lg">Get Started</Button>
          </div>
        </div>

        <div className="cards-section">
          <Container>
            <Row>
              {[1, 2, 3, 4].map((index) => (
                <Col key={index} md={3}>
                  <Card className="mb-4">
                    <Card.Body>
                      <Card.Title>Card {index}</Card.Title>
                      <Card.Text>This is a sample card</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default HomePage;
