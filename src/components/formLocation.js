import React from 'react';
import { Form } from 'react-bootstrap';
import styles from './formLocation.module.scss';
import moveFrom from '../assets/moveFrom.svg';
import moveTo from '../assets/moveTo.svg';
import Map from '../assets/map.png';

const FormLocation = () => {
  return (
    <div className={styles.formLocation}>
      <div className={styles.formLabel}>
        <img src={moveFrom} alt="move from" />
        <label>Moving From</label>
      </div>
      <div className={styles.formGroup}>
        <Form.Control
          size="lg"
          type="text"
          className={styles.customBtn}
          placeholder="Apt No."
        />
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <img className={styles.mapImage} src={Map} alt="map" />
    </div>
  );
};

export default FormLocation;
