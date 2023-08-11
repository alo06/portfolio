import React from 'react'
import './about.css'
import pfp from "/src/assets/images/pfp.jpg";
import Education from './Education';

const About = () => {
  return (
    <div className="about scroll" id="about">
      <div className="about-first">
        <h1>About</h1>
        <p>
          Hello! My Name is Jeevottam Bhat. I am in my 3rd year of Engineering
          in NMAM Institute of Technology, NITTE. My Interests are Web
          Development, watching football, playing games like Valorant ,CSGO with
          friends. Also love listening to Music with Rap,Hip Hop being my
          favorite genres.
        </p>
        <Education />
      </div>
      <div className="about-second">
        <img src={pfp} alt="" />
      </div>
    </div>
  );
}

export default About