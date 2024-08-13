'use client';

import React, { useState } from 'react';
import styles from './Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navigateToSection = (section: string) => {
        // If your sections are on different pages, you can use router.push here
        router.push(section);
        setMenuOpen(false); // Close menu after navigation
    };

    return (
        <div className={styles.nav}>
                <img src="logo.svg" alt="Logo" onClick={() => navigateToSection('/')} className={`${styles.logo} ${styles.coloredLogo}`} />

            <div className={styles.menuIcon} onClick={toggleMenu}>
                <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </div>
            <ul className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
                <li onClick={() => navigateToSection('/#about')}>
                    About
                </li>
                <li onClick={() => navigateToSection('/#portfolio')}>
                    Portfolio
                </li>
                <li onClick={() => navigateToSection('/workflow')}>
                    Workflow
                </li>
                <li onClick={() => navigateToSection('#contact')}>
                    Contact
                </li>
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