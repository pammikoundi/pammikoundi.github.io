'use client'
import React, { useState } from 'react';
import styles from './About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faLaptopCode, faMicrochip, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  return (
    <div className={styles.row}>
      <div className={styles.about_col_1}>
        <img src="user.png" alt="User" />
      </div>
      <div className={styles.about_col_2}>
        <h1 className={styles.sub_title}>About Me</h1>
        <p>
          I'm a computer science student at the Georgia Institute of Technology, right in the heart
          of Atlanta. My academic focus revolves around data analysis and software engineering. Outside of classes, I
          enjoy 3D modeling and 3D printing. I love bridging my hobbies with my passion for computer
          science whenever possible. You can check out some of the projects where these interests converge on my GitHub
          profile.
        </p>
        <div className={styles.tab_titles}>
          <p
            className={`${styles.tab_links} ${activeTab === 'skills' ? styles.active_link : ''}`}
            onClick={() => openTab('skills')}
          >
            Skills
          </p>
          <p
            className={`${styles.tab_links} ${activeTab === 'experience' ? styles.active_link : ''}`}
            onClick={() => openTab('experience')}
          >
            Experience
          </p>
          <p
            className={`${styles.tab_links} ${activeTab === 'education' ? styles.active_link : ''}`}
            onClick={() => openTab('education')}
          >
            Education
          </p>
        </div>
        <div className={`${styles.tab_contents} ${activeTab === 'skills' ? styles.active_tab : ''}`} id="skills">
          <ul>
            <li><span>UI/UX  <FontAwesomeIcon icon={faFileCode} /></span><br /><br />React | Next.js </li>
            <li><span>Software Development  <FontAwesomeIcon icon={faLaptopCode} /></span><br /><br />Java | Python | C++</li>
            <li><span>Embedded Systems Development  <FontAwesomeIcon icon={faMicrochip} /></span><br /><br />C++ | ROS</li>
            <li><span>App Development  <FontAwesomeIcon icon={faMobileScreen} /></span><br /><br />Kotlin | React-Native</li>
          </ul>
        </div>
        <div className={`${styles.tab_contents} ${activeTab === 'experience' ? styles.active_tab : ''}`} id="experience">
          <ul>
          <li><span>May 2024 - August 2024</span><br /><br />NCR Atleos - Software Engineering Intern</li>
          <li><span>May 2023 - May 2024</span><br /><br />Southern Insurance Underwriters - Software Testing Intern</li>
          <li><span>August 2020 - May 2022</span><br /><br />Maximum One Realtors - Student Office Assistant</li>
          </ul>
        </div>
        <div className={`${styles.tab_contents} ${activeTab === 'education' ? styles.active_tab : ''}`} id="education">
          <ul>
          <li><span>Expected: 2026</span><br /><br />Bachelor's Degree Computer Science</li>
            <li><span>Graduated: 2022</span><br /><br />High School Diploma</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
