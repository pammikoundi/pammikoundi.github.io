'use client'
import React, { useState } from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.subtitle}>Contact Me</h1>
      <div className={styles.row}>
        <div className={styles.contact_left}>
          <a href="mailto:pammikoundi@gmail.com">pammikoundi@gmail.com</a>
          <p>+1 (706)-300-5151</p>
        </div>
        <div className={styles.contact_right}>
          <div className={styles.social_media}>
            <a href="https://github.com/pammikoundi/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/koundinya-pammi-a32020251" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <span onClick={toggleTheme} className={styles.themeIcon}>
              {isDarkMode ? (
                <FontAwesomeIcon icon={faMoon} />
              ) : (
                <FontAwesomeIcon icon={faSun} />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
