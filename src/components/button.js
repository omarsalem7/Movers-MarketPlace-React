import React from 'react';
import styles from './button.module.css';

const Button = ({ children, className }) => {
  return (
    <button className={`${styles.primaryBtn} ${className}`}>{children}</button>
  );
};

export default Button;
