import React, { Component } from 'react';
import Location from './location';
import MyItems from './myItems';
import Compare from './compare';

export class MultiStep extends Component {
  state = {
    step: 1,
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return <MyItems nextStep={this.nextStep} />;
      case 2:
        return <Location nextStep={this.nextStep} prevStep={this.prevStep} />;
      case 3:
        return <Compare prevStep={this.prevStep} />;
      case 4:
        return <h2>Succeed</h2>;
      default:
        console.log('This is a multi-step form built with React.');
    }
  }
}

export default MultiStep;
