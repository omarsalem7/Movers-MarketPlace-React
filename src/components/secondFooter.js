import React from 'react';
import styles from './secondFooter.module.css';
import Facebook from '../assets/facebook.svg';
import Twitter from '../assets/twitter.svg';
import Youtube from '../assets/youtube.svg';

const SecondFooter = () => {
  return (
    <div className={styles.secondFooter}>
      <div>
        <h2 className={styles.secondFooter__title}>MarketPlace</h2>
        <p>
          The best way to compare moving quotes and book a licensed mover online
          instantly. Quotes and Prices guaranteed! 
        </p>
      </div>
      <div>
        <h3 className={styles.secondFooter__title}>Sitemap</h3>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div>
        <h3 className={styles.secondFooter__title}>Contact Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div>
        <ul className={styles.contactSocials}>
          <li>
            <img src={Facebook} alt="Facebook icon" />
          </li>
          <li>
            <img src={Twitter} alt="Twitter icon" />
          </li>
          <li>
            <img src={Youtube} alt="youtube icon" />
          </li>
        </ul>
        <ul>
          <li>©Movers LLC 2022 </li>
          <li>855-286-7258 </li>
        </ul>
      </div>
    </div>
  );
};

export default SecondFooter;
