import React, { useState } from 'react';
import Company from '../components/company';

const Companies = () => {
  const [companiesData] = useState([
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ]);
  return (
    <div>
      {companiesData.map(({ id }) => (
        <Company key={id} />
      ))}
    </div>
  );
};

export default Companies;
