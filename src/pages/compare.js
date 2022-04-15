import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import HrLine from '../components/hrLine';
import './compare.scss';
import DateCompare from '../components/dateCompare';
import Companies from '../components/companies';
import SecondFooter from '../components/secondFooter';

const Compare = () => {
  return (
    <div className="compare ">
      <Container className="pt-4 px-5">
        <Row>
          <Col md={6}>
            <p className="fw-bold mb-0">
              Reserve your price, Pay later. Cancel for free.
            </p>
            <HrLine width="60px" />
          </Col>
          <Col md={4}>
            <Form.Group
              className="searchGroup"
              controlId="exampleForm.ControlInput2"
            >
              <Form.Control
                className="searchInput mb-3"
                type="text"
                placeholder="ENTER A PROMO CODE"
              />
              <Button
                className="searchBtn"
                variant="light"
                style={{
                  backgroundColor: '#A8DADB',
                  color: '#fff',
                  borderRadius: '20px',
                  outline: 'none',
                }}
              >
                Apply
              </Button>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Select
              variant="light"
              style={{
                backgroundColor: '#A8DADB',
                color: '#fff',
                borderRadius: '20px',
              }}
              aria-label="Default select example"
            >
              <option>Filter companies</option>
              <option value="low to high">low to high prices</option>
              <option value="top rated">top rated</option>
              <option value="best discount">best discount</option>
            </Form.Select>
          </Col>
        </Row>

        <Row>
          <DateCompare />
          <Col md={10}>
            <Companies />
          </Col>
        </Row>
      </Container>
      <SecondFooter />
    </div>
  );
};

export default Compare;
