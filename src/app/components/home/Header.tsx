'use client'
import React from 'react';
import styles from './Header.module.css';
import Lottie from "lottie-react";
import animationData from '../../../../public/LaptopAnimation.json'
const Header = () => {

    return (
        <div className={styles.container}>
            <div className={styles.header_text}>
                <h1>Koundinya Pammi</h1>
                <h2>Student | Developer</h2>
            </div>
            
            <Lottie
                animationData={animationData}
                className={styles.lottie}
                loop={true}
                autoplay={true}
                style={{ width: 800, height: 800 }}
            />
        </div>
    );
};

export default Header;
