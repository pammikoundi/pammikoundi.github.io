 'use client'
import React from 'react';
import styles from './Header.module.css';
import dynamic from 'next/dynamic';
import animationData from '../../../../public/LaptopAnimation.json'

// Lottie can access the DOM; load it only on the client
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
const Header = () => {

    return (
        <div className={styles.container}>
            <div className={styles.blob}></div>
            <div className={styles.blur}></div>
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
