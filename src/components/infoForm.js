import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const InfoForm = () => {
  const styles = {
    btnShadow: {
      boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      marginLeft: '-15px',
      borderRadius: '20px',
    },
    btnColor: {
      backgroundColor: '#A8DADB',
      color: '#fff',
    },
  };

  return (
    <Container>
      <Row
        style={{ borderBottom: '3px dashed var(--p-color)' }}
        className="pb-5 mt-5"
      >
        <Col className="bg-success mb-4" md={4}>
          1 of 2
        </Col>
        <Col md={{ span: 4, offset: 2 }} className="bg-danger ">
          2 of 2
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={{ span: 4, offset: -1 }}>
          <div style={{ paddingLeft: '1.5em' }} class="form-check form-switch">
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
      <Row className="mt-5">
        <Col md={3}>
          <Button style={styles.btnShadow} variant="light">
            Back To Inventory
          </Button>
        </Col>
        <Col md={{ span: 5, offset: 4 }}>
          <Button
            style={{ ...styles.btnShadow, ...styles.btnColor }}
            variant="light"
          >
            Save Details
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoForm;
