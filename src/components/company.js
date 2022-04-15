import React from 'react';

import { Row, Col, Button } from 'react-bootstrap';
import companyLogo from '../assets/kompan.svg';
import './company.scss';
import star from '../assets/star.svg';
import old from '../assets/old.svg';
import clean from '../assets/cleanLogo.svg';

const Company = () => {
  return (
    <Row className="company mb-4">
      <Col md={3} className="comp__p1">
        <img src={companyLogo} alt="company logo" />
        <span className="comp__p1__moves">
          moves
          <p className="d-block fw-bold">+365</p>
        </span>
        <div className="d-flex flex-row mt-4">
          <div className="d-flex flex-column flex-fill facilities bg-white py-2 me-2 text-center">
            <span className="small">Experience</span>
            <span>+8 Years</span>
          </div>
          <div className="d-flex flex-fill  facilities flex-column bg-white py-2 me-2  text-center">
            <span className="small"> Our Trucks</span>
            <span>+265</span>
          </div>
          <div className="d-flex flex-column facilities flex-fill  bg-white py-2  text-center">
            <span className="small">Employees</span>
            <span>+1200</span>
          </div>
        </div>
      </Col>

      <Col className="comp__p2 py-4" md={3}>
        <div className="d-flex justify-content-center gap-4 mb-4">
          <div className="bg-white review ">
            <img src={star} alt="star" />
            <span className="rate">4.56</span>
            <p className="small text-center ">Communication</p>
          </div>
          <div className="bg-white review ">
            <img src={star} alt="star" />
            <span className="rate">4.56</span>
            <p className="small text-center  ">Professionalism</p>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-4">
          <div className="bg-white review ">
            <img src={star} alt="star" />
            <span className="rate">4.56</span>
            <p className="small text-center ">Service Quality</p>
          </div>
          <div className="bg-white review ">
            <img src={star} alt="star" />
            <span className="rate">4.56</span>
            <p className="small text-center ">Reliability</p>
          </div>
        </div>
      </Col>

      <Col md={4} className="comp__p3">
        <p className="m-0 py-2 fw-bold">Our Servicses</p>
        <div className="d-flex justify-content-between  mb-3">
          <div>
            <img className="pe-3" src={clean} alt="clean" />
            <span>Cleaning</span>
          </div>
          <div>
            <img className="pe-3" src={old} alt="old" />
            <span>Old Furniture Removal</span>
          </div>
        </div>
        <div className="d-flex justify-content-between  mb-3">
          <div>
            <img className="pe-3" src={clean} alt="clean" />
            <span>Pest Control</span>
          </div>
          <div>
            <img className="pe-3" src={old} alt="old" />
            <span>Pest Control</span>
          </div>
        </div>
        <div className="d-flex justify-content-between  mb-3">
          <div>
            <img className="pe-3" src={clean} alt="clean" />
            <span>Old Furtiture Removal</span>
          </div>
          <div>
            <img className="pe-3" src={old} alt="old" />
            <span>Cleaning</span>
          </div>
        </div>
      </Col>
      <Col className="text-center" md={2}>
        <span
          style={{ color: 'var(--mentGreen)', textDecoration: 'line-through' }}
        >
          $563.25
        </span>
        <h4 style={{ color: '#F7444E', fontWeight: 'bold' }}>$549.99</h4>
        <p style={{ color: '#F7444E' }}>4 trucks left</p>

        <Button style={{ backgroundColor: '#0E3746' }} variant="dark">
          BOOK NOW
        </Button>
      </Col>
    </Row>
  );
};

export default Company;
