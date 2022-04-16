import React from 'react';
const HrLine = ({ width }) => {
  const Style = {
    line: {
      height: '2.5px',
      backgroundColor: 'black',
      border: 'none',
      borderRadius: '2px',
    },
  };
  return <hr style={Style.line} width={width} />;
};

export default HrLine;
