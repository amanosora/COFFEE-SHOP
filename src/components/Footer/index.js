import React from 'react';
import './style.scss';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Footer = () => {
  return (
    <footer id="footer">
      <Container className="footer-container">
        <Row className="full-width-row">
          <Col lg={4} md={3} xs={12} className="footer-paragraph">
            <p>Stay Connected with Us!</p>
            <p>Thank you for visiting our coffee shop. We’re passionate about bringing you the finest coffee experience and delicious treats.</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="d-flex flex-column align-items-end">
            <div className="d-flex justify-content-end mb-2">
              <i className="bi bi-linkedin m-1"></i>
              <i className="bi bi-twitter m-1"></i>
              <i className="bi bi-instagram m-1"></i>
            </div>
            <p className="text-end">Copyright © 2024. Coffee Shop Inc. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer
