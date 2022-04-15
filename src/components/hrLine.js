import React from 'react';
import styles from './hrLine.module.css';

const HrLine = ({ width }) => {
  return <hr className={styles.hrLine} width={width} />;
};

export default HrLine;
