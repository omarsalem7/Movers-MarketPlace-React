import React from 'react';
import './myItems.css';
import Boxs from '../components/boxs';
import SecondFooter from '../components/secondFooter';
import { Button } from 'react-bootstrap';

const MyItems = (props) => {
  const Continue = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  return (
    <>
      <div className="myItems">
        <Button className="btnNext" variant="dark" onClick={Continue}>
          Continue
        </Button>
        <Boxs />
      </div>
      <SecondFooter />
    </>
  );
};

export default MyItems;
