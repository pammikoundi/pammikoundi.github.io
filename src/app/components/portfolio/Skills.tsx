import React from 'react'
import styles from './Skills.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faFileCode, faLaptopCode, faMicrochip, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.sub_title}>My Skills</h1>
      <div className={styles.skills_list}>
        <div>
          <FontAwesomeIcon icon={faFileCode} />
          <h2>UI/UX <br />Development</h2>
          <p>HTML and CSS</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faLaptopCode} />
          <h2>Software Development</h2>
          <p>Python, Java, C++</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faMobileScreen} />
          <h2>App Development</h2>
          <p>Kotlin, Java, Android Studio</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faMicrochip} />
          <h2>Embedded Systems</h2>
          <p>C++ and ROS</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faBrain} />
          <h2>Artificial Intelligence</h2>
          <p>Python, Tensorflow, Keras</p>
        </div>
      </div>
    </div>
  )
}

export default Skills;
