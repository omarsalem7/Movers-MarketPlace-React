import React from 'react';
import SecondFooter from '../components/secondFooter';
import HrLine from '../components/hrLine';
import styles from './location.module.scss';
import FormLocation from '../components/formLocation';
import InfoForm from '../components/infoForm';
import { Row, Col, Button } from 'react-bootstrap';
import backArrow from '../assets/backArrow.svg';

const Location = () => {
  const stykeBtns = {
    btnShadow: {
      boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      borderRadius: '20px',
    },
    btnColor: {
      backgroundColor: '#A8DADB',
      color: '#fff',
      float: 'right',
      width: '150px',
    },
  };
  return (
    <>
      <div className={styles.location}>
        <h3>Enter the details of your move</h3>
        <HrLine width="50px" />

        <div className={styles.maps}>
          <FormLocation />
          <FormLocation />
        </div>
        <InfoForm />
        <Row className="mt-5" style={{ margin: '0 -15px' }}>
          <Col xs={6} sm={4}>
            <Button style={stykeBtns.btnShadow} variant="light">
              <img className="pe-3" src={backArrow} alt="backArrow" /> Back To
              Inventory
            </Button>
          </Col>
          <Col xs={6} sm={{ span: 4, offset: 4 }}>
            <Button
              style={{ ...stykeBtns.btnShadow, ...stykeBtns.btnColor }}
              variant="light"
            >
              Save Details
            </Button>
          </Col>
        </Row>
      </div>
      <SecondFooter />
    </>
  );
};

export default Location;
