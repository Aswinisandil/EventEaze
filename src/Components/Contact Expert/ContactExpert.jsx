import React from 'react';
import styles from './ContactExpert.module.css';

const ContactExpert = () => {
  return (
    <section className={styles.contactExpert}>
      <div className={styles.icon}>
        {/* You can replace this with an actual icon component or SVG */}
        🎩
      </div>
      <h2 className={styles.title}>Contact the expert for free</h2>
      <p className={styles.description}>
        We'd love to help you! 7 days a week from 9am to 8pm.
      </p>
      <a href="tel:991-050-2284" className={styles.callButton}>
        <span className={styles.phoneIcon}>📞</span>
        Call 991-050-2284
      </a>
    </section>
  );
};

export default ContactExpert;