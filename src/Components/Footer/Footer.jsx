import React from 'react';
import styles from './Footer.module.css';
import apple from '../../resources/appstore@2x.png';
import google from '../../resources/googleplay@2x.png';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";



const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <h3>Information</h3>
        <ul>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Terms & privacy</a></li>
          <li><a href="#">Do Not Sell My Personal Information</a></li>
          <li><a href="#">Register your business</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Editorial team & policies</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Wedding Awards 2024</a></li>
        </ul>
      </div>

      <div className={styles.section}>
        <h3>Get the EventEaze app</h3>
        <p>Plan your Events on the go with the EventEaze app.</p>
        <div className={styles.appStoreButtons}>
          <a href="#" className={styles.appStoreButton}>
            <img src={apple} alt="Download on the App Store" />
          </a>
          <a href="#" className={styles.appStoreButton}>
            <img src={google} alt="Get it on Google Play" />
          </a>
        </div>
      </div>

      <div className={styles.section}>
        <h3>Follow us on</h3>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIcon}>
          <FaFacebookF />

          </a>
          <a href="#" className={styles.socialIcon}>
          <FaInstagram />

          </a>
          <a href="#" className={styles.socialIcon}>
          <AiOutlineYoutube />

          </a>
        </div>
      </div>

      <div className={styles.section}>
        <h3>Choose a state</h3>
        <select className={styles.countrySelect}>
        <option value="Select">Select</option>
          <option value="Telangana">Telangana</option>
          <option value="andhra_pradesh">Andhra Pradesh</option>
          <option value="tamil_nadu">Tamil Nadu</option>
          <option value="Karnataka">Karnataka</option>
        </select>
      </div>

      <div className={styles.copyright}>
        © 2024 Eventeaze
      </div>
    </footer>
  );
};

export default Footer;