import React from 'react';
import boxIcon from '../assets/box.svg';
import classes from './box.module.css';
import decreaseBtn from '../assets/decreaseBtn.svg';
import increaseBtn from '../assets/increaseBtn.svg';

const Box = ({ name, size, count }) => {
  return (
    <div className={classes.box}>
      <img src={boxIcon} alt="box" />
      <h4>{name}</h4>
      <small>{size}</small>
      <div className={classes.btns}>
        <img draggable="false" src={decreaseBtn} alt="decrease btn" />
        {count}
        <img draggable="false" src={increaseBtn} alt="increase btn" />
      </div>
    </div>
  );
};

export default Box;
