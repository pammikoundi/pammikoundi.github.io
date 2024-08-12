'use client'
import React, { useState } from 'react';
import styles from './Portfolio.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen, faMicrochip, faBrain } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
    const [activeOption, setActiveOption] = useState('');

    const openDiv = (id: React.SetStateAction<string>) => {
        setActiveOption(id);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.subTitle}>My Personal Projects</h1>

            <div className={styles.options}>
                <div
                    className={`${styles.option} ${activeOption === 'taskApp' ? styles.active : ''}`}
                    id="taskApp"
                    onClick={() => openDiv('taskApp')}
                    style={{ '--optionBackground': 'url(/Slide1.jpg)' } as React.CSSProperties}
                >
                    <div className={styles.shadow}></div>
                    <div className={styles.label}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faMobileScreen} />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.main}>Task Managing/Scheduling App</div>
                            <div className={styles.sub}>
                                An app built in Android Studio using Java and XML. Utilizes a SQLite database for organization and multi-user support.
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`${styles.option} ${activeOption === 'spotifyWrappedApp' ? styles.active : ''}`}
                    id="spotifyWrappedApp"
                    onClick={() => openDiv('spotifyWrappedApp')}
                    style={{ '--optionBackground': 'url(/Slide2.jpg)' } as React.CSSProperties}
                >
                    <div className={styles.shadow}></div>
                    <div className={styles.label}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faMobileScreen} />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.main}>Spotify Wrapped App</div>
                            <div className={styles.sub}>
                                An app built using Kotlin. Utilizes Firebase authentication and real-time database for user management and data storage.
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`${styles.option} ${activeOption === 'tempSensor' ? styles.active : ''}`}
                    id="tempSensor"
                    onClick={() => openDiv('tempSensor')}
                    style={{ '--optionBackground': 'url(/Slide3.jpg)' } as React.CSSProperties}
                >
                    <div className={styles.shadow}></div>
                    <div className={styles.label}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faMicrochip} />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.main}>Temperature Monitoring Sensor</div>
                            <div className={styles.sub}>
                                Utilizing Arduino, NTC Thermistor, and an LCD display to read and relay raw analog input to readable language.
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`${styles.option} ${activeOption === 'noteStorageWebApp' ? styles.active : ''}`}
                    id="noteStorageWebApp"
                    onClick={() => openDiv('noteStorageWebApp')}
                    style={{ '--optionBackground': 'url(/Slide4.jpg)' } as React.CSSProperties}
                >
                    <div className={styles.shadow}></div>
                    <div className={styles.label}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faBrain} />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.main}>Note Storage Web App</div>
                            <div className={styles.sub}>
                                Built using Python, TensorFlow, and Tesseract OCR, designed to store notes with searchable functionality.
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`${styles.option} ${activeOption === 'adventuraAI' ? styles.active : ''}`}
                    id="adventuraAI"
                    onClick={() => openDiv('adventuraAI')}
                    style={{ '--optionBackground': 'url(/Slide5.jpg)' } as React.CSSProperties}
                >
                    <div className={styles.shadow}></div>
                    <div className={styles.label}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faBrain} />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.main}>AdventuraAI</div>
                            <div className={styles.sub}>
                                A web app built using Python backend and JavaScript frontend to help users generate travel itineraries.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
