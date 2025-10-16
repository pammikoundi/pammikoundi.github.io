import React from 'react';
import dynamic from 'next/dynamic';
// Load IconCloud only on the client because it (or its dependencies) access the DOM
const IconCloud = dynamic(() => import('./IconCloud'), { ssr: false });
import styles from './Header.module.css';
/*
<h2>Front-End</h2>
<h3>React, Next.js</h3>
<h2>Backend</h2>
<h3>Python, FastAPI</h3>
<h2>Web Services / Cloud Integration</h2>
<h3>Azure Cloud</h3>
*/
const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header_text}>
                <h1>My Toolkit</h1>
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
                <p className={styles.text_bottom}>Technology Which I Have Experience With</p>
            </div>    
        </div>
    );
};

export default Header;
