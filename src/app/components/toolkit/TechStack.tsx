import React from 'react'
import styles from './TechStack.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faFileCode, faLaptopCode, faMicrochip, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

const TechStack = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.sub_title}>My Preferred Tech Stack</h1>
            <div className={styles.preference_list}>
                <div>
                    <FontAwesomeIcon icon={faMobileScreen} />
                    <h2>Front-End <br />Development</h2>
                    <p>React, React-Native, Next.js</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faLaptopCode} />
                    <h2>Backend Development</h2>
                    <p>Python, Java</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faFileCode} />
                    <h2>Web <br />Services</h2>
                    <p>Azure</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faBrain} />
                    <h2>Artificial Intelligence</h2>
                    <p>Python, Keras, OpenAI API</p>
                </div>
            </div>
        </div>
    )
}

export default TechStack