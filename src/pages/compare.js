import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import HrLine from '../components/hrLine';
import './compare.scss';
import DateCompare from '../components/dateCompare';
import Companies from '../components/companies';
import SecondFooter from '../components/secondFooter';
import backArrow from '../assets/backArrow.svg';

const Compare = (props) => {
  const Back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
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
            <Row className="my-4" style={{ margin: '0 -15px' }}>
              <Col xs={6} sm={4}>
                <Button
                  onClick={Back}
                  style={styleBtns.btnShadow}
                  variant="light"
                >
                  <img className="pe-3" src={backArrow} alt="backArrow" /> Back
                  To Inventory
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <SecondFooter />
    </div>
  );
};
const styleBtns = {
  btnShadow: {
    boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    borderRadius: '20px',
  },
};

export default Compare;
