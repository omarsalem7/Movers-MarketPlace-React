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
// export class MultiStep extends Component {
//   state = {
//     step: 1,
//   };

//   // Proceed to next step
//   nextStep = () => {
//     const { step } = this.state;
//     this.setState({
//       step: step + 1,
//     });
//   };

//   // Go back to prev step
//   prevStep = () => {
//     const { step } = this.state;
//     this.setState({
//       step: step - 1,
//     });
//   };

//   render() {
//     const { step } = this.state;

//     switch (step) {
//       case 1:
//         return <MyItems nextStep={this.nextStep} />;
//       case 2:
//         return <Location nextStep={this.nextStep} prevStep={this.prevStep} />;
//       case 3:
//         return <Compare prevStep={this.prevStep} />;
//       case 4:
//         return <h2>Succeed</h2>;
//       default:
//         console.log('This is a multi-step form built with React.');
//     }
//   }
// }

// export default MultiStep;
