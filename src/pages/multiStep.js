import React, { useState } from 'react';
import Location from './location';
import MyItems from './myItems';
import Compare from './compare';
import Home from './home';

const MultiStep = () => {
  const [step, setStep] = useState(0);
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  switch (step) {
    case 0:
      return <Home nextStep={nextStep} />;
    case 1:
      return <MyItems nextStep={nextStep} />;
    case 2:
      return <Location nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <Compare prevStep={prevStep} />;
    case 4:
      return <h2>Succeed</h2>;
    default:
      console.log('This is a multi-step form built with React.');
  }
};

export default MultiStep;
