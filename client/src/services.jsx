/*
Services.jsx
Name: Kunj Patel
StuID: 301426345
Date: 16/05/2024
*/

import React from 'react';
import '../components/styles.css';

export default function Services() {
    return (
        <div className="services-page">
            <h1>Services</h1>
            <div className="service">
                <h2>Website Development</h2>
                <ul>
                    <li>Custom website development tailored to your specific needs and requirements.</li>
                    <li>Responsive design to ensure your website looks great and functions well on all devices.</li>
                    <li>SEO optimization to improve your website's visibility and ranking on search engines.</li>
                    <li>E-commerce integration for selling products or services online.</li>
                </ul>            
            </div>
            <div className="service">
                <h2>AI Solutions</h2>
                <ul>
                    <li>Custom AI solutions to solve complex business problems and streamline processes.</li>
                    <li>Machine learning model development for predictive analytics and data-driven insights.</li>
                    <li>Natural Language Processing (NLP) for text analysis, sentiment analysis, and language translation.</li>
                    <li>Computer Vision for image recognition, object detection, and facial recognition.</li>
                </ul>
            </div>
        </div>
    );
}
