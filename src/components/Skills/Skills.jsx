import React from "react";
import SkillsIcon from "./skillsIcon"; 
import "./skills.css";

 const icons = {
  frontend: [
    "/src/assets/images/icons/html.png",
    "/src/assets/images/icons/css.png",
    "/src/assets/images/icons/javascript.png",
    "/src/assets/images/icons/react.png",
  ],
  backend: [
    "/src/assets/images/icons/nodejs.png",
    "/src/assets/images/icons/express.png",
    "/src/assets/images/icons/mongo.png",
    "/src/assets/images/icons/mysql.png",
  ],
  programmingLanguages: [
    "/src/assets/images/icons/c++.png",
    "/src/assets/images/icons/c.png",
    "/src/assets/images/icons/java.png",
    "/src/assets/images/icons/python.png",
  ],
  others: [
    "/src/assets/images/icons/html.png",
    "/src/assets/images/icons/css.png",
    "/src/assets/images/icons/javascript.png",
    "/src/assets/images/icons/react.png",
  ],
};

const Skills = () => {
  return (
    <div className="skills scroll" id="skills">
      <div className="skills-first">
        <h1>Skills</h1>
        <p>
          I would say I have learned a lot of skills in my 3 years of
          Engineering and can also confirm there is a lot more to go.
        </p>
      </div>
      <div className="skills-second">
        <SkillsIcon title="Front-End" icons={icons.frontend} />
        <SkillsIcon title="Back-End" icons={icons.backend} />
        <SkillsIcon
          title="Programming Languages"
          icons={icons.programmingLanguages}
        />
        <SkillsIcon title="Others" icons={icons.others} />
      </div>
    </div>
  );
};

export default Skills;
