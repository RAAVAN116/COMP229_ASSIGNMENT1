/*
project.jsx
Name: Kunj Patel
StuID: 301426345
Date: 16/05/2024
*/

import React from 'react';
import '../components/styles.css';
import project1Image from '../components/1.avif'; // Replace with actual paths to your project images
import project2Image from '../components/2.jpg'; // Replace with actual paths to your project images
import project3Image from '../components/3.gif'; // Replace with actual paths to your project images

export default function Projects() {
    return (
        <div className="projects-page">
            <h1>Projects</h1>
            <div className="project-container">
                <div className="project">
                    <img src={project1Image} alt="Project 1" className="project-image" />
                    <h2>Project 1: Social Media Dashboard</h2>
                    <p>Role: Frontend Developer</p>
                    <p>Description: Developed a responsive social media dashboard using React.js and Chart.js. The dashboard displays real-time analytics and user engagement metrics for various social media platforms.</p>
                </div>
                <div className="project">
                    <img src={project2Image} alt="Project 2" className="project-image" />
                    <h2>Project 2: E-Commerce Platform</h2>
                    <p>Role: Full Stack Developer</p>
                    <p>Description: Built a scalable e-commerce platform from scratch using MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented features like user authentication, product catalog, shopping cart, and payment gateway integration.</p>
                </div>
                <div className="project">
                    <img src={project3Image} alt="Project 3" className="project-image" />
                    <h2>Project 3: Task Management App</h2>
                    <p>Role: Backend Developer</p>
                    <p>Description: Designed and developed a task management application RESTful API using Django Rest Framework. The app allows users to create, assign, and track tasks within a team. Implemented JWT authentication for secure access.</p>
                </div>
            </div>
        </div>
    );
}