'use client'
import React, { useState } from 'react';
import styles from './Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={styles.nav}>
            <a href="/" className={styles.logo}>

            <img src="logo.svg" alt="Logo" className={`${styles.logo} ${styles.coloredLogo}`} />
            </a>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </div>
            <ul className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
                <li>
                    <a href="./Koundinya_Pammi_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </li>
                <li>
                    <a href="https://github.com/pammikoundi/" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
