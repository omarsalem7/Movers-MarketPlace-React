import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import Truck from '../assets/truck.svg';
import './dateCompare.scss';

const DateCompare = () => {
  const [date, setDate] = useState('');
  console.log(date);

  return (
    <Col md={2}>
      <div className="mb-3">
        <img src={Truck} alt="Truck" />
        <span className="ms-3">Move-in Date</span>
      </div>
      <input
        className="inputDate iconDate"
        type="date"
        onChange={(event) => setDate(event.target.value)}
      />
    </Col>
  );
};

export default DateCompare;
