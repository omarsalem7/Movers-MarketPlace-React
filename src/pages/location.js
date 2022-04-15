import React from 'react';
import SecondFooter from '../components/secondFooter';
import HrLine from '../components/hrLine';
import styles from './location.module.scss';
import FormLocation from '../components/formLocation';
import InfoForm from '../components/infoForm';

const Location = () => {
  return (
    <div className={styles.location}>
      <h3>Enter the details of your move</h3>
      <HrLine width="50px" />

      <div className={styles.maps}>
        <FormLocation />
        <FormLocation />
      </div>
      <InfoForm />
      <SecondFooter />
    </div>
  );
};

export default Location;
