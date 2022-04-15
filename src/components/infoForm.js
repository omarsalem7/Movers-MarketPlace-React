import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const InfoForm = () => {
  return (
    <Container>
      <Row
        style={{ borderBottom: '3px dashed var(--p-color)' }}
        className="pb-4 mt-5"
      >
        <Col className="mb-4" md={4}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Special Requests & Instructions:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="We want you to have the best moving experience. Let us know if there's anything we can do to make your move day seamless."
              rows={4}
            />
          </Form.Group>
        </Col>
        <Col md={{ span: 4, offset: 2 }} className="">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="text" placeholder="+0123456789" />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={{ span: 4, offset: -1 }}>
          <div
            style={{ paddingLeft: '1.5em' }}
            className="form-check form-switch"
          >
            <input
              className="form-check-input me-4"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label fw-bold"
              for="flexSwitchCheckDefault"
            >
              Would You Like To Add Storage?
            </label>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoForm;
