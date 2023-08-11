import React from "react";
import "./skills.css";

const SkillsIcon = ({ title, icons }) => {
  const skillCategory = title.toLowerCase().replace(/ /g, "-");

  return (
    <div className={`skills-container ${skillCategory}`}>
      <div className="column">
        <h2>{title}</h2>
        <ul>
          {icons.map((icon, index) => (
            <li key={index}>
              <img src={icon} alt={`Icon ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsIcon;
