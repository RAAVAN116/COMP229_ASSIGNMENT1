/*
Home.jsx
Name: Kunj Patel
StuID: 301426345
Date: 16/05/2024
*/

import React from 'react';
import '../components/styles.css';
import resume from '../components/Resume.pdf';

export default function About() {
    return (
        <div className="about-me">
            <h1>About Me</h1>
            <div className="profile-container">
                <div className="profile-description">
                    <p>Hi, I am Kunj. Currently, I am pursuing my 2nd semester of Software Engineering Technology at Centennial College.</p>
                    <p>Highly skilled and proficient in functional and low-level programming. Interested in <b>building end-to-end solutions</b>.</p>
                    <a href={resume} target="_blank" rel="noopener noreferrer" className="resume-link">Click here to Download Resume</a>
                </div>
            </div>
        </div>
    );
}