import React from 'react'
import { educationData } from '../../data';
import './about.css'

const Education = () => {
  return (
    <div className="timeline-container">
      {educationData.map((education, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-content">
            <h3>{education.institute}</h3>
            <p>{education.duration}</p>
            <p>{education.degree}</p>
            <p>CGPA: {education.cgpa}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education