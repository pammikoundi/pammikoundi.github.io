import React, { useEffect, useState } from 'react';
import IconCloud from './IconCloud';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>My Preferred Tech Stack:</h1>
                <h2>Front-End</h2>
                <h3>React, Next.js</h3>
                <h2>Backend</h2>
                <h3>Python, FastAPI</h3>
                <h2>Web Services / Cloud Integration</h2>
                <h3>Azure Cloud</h3>
            </div>
            <div className={styles.right}>
                <IconCloud
                    iconSlugs={[
                        'typescript',
                        'javascript',
                        'react',
                        'flutter',
                        'android',
                        'html5',
                        'css3',
                        'nodedotjs',
                        'postgresql',
                        'firebase',
                        'docker',
                        'git',
                        'jira',
                        'androidstudio',
                        'python',
                        'anaconda',
                        'anthropic',
                        'apple',
                        'cplusplus',
                        'chocolatey',
                        'github',
                        'githubpages',
                        'gradle',
                        'visualstudiocode',
                    ]}
                />
            </div>
        </div>
    );
};

export default Header;
