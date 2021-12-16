import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function GuestBook() {
  return (
    <Container className="font-readex my-5">
      <h2 className="text-center mb-5">Guest Book</h2>
      <Row className="justify-content-center">
        <Col md="6">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} placeholder="Your Message" />
            </Form.Group>
            <Button variant="warning" type="submit" className="w-100">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default GuestBook;
