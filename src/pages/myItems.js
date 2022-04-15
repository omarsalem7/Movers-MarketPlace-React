import React from 'react';
import './myItems.css';
import Button from '../components/button';
import Boxs from '../components/boxs';
import SecondFooter from '../components/secondFooter';

const MyItems = () => {
  return (
    <>
      <div className="myItems">
        <Button className="btnNext">Continue</Button>
        <Boxs />
      </div>
      <SecondFooter />
    </>
  );
};

export default MyItems;
