import html from '../src/assets/images/icons/html.png'
import c from '../src/assets/images/icons/c.png'
import cpp from '../src/assets/images/icons/c++.png'
import express from '../src/assets/images/icons/express.png'
import java from '../src/assets/images/icons/java.png'
import css from '../src/assets/images/icons/css.png'
import javascript from '../src/assets/images/icons/javascript.png'
import react from '../src/assets/images/icons/react.png'
import nodejs from '../src/assets/images/icons/nodejs.png'
import mongo from '../src/assets/images/icons/mongo.png'
import mysql from '../src/assets/images/icons/javascript.png'
import python from '../src/assets/images/icons/javascript.png'
import oops from '../src/assets/images/icons/oops.png'
import dsa from '../src/assets/images/icons/dsa.png'
import collegeMap from '../src/assets/images/collegmap.jpg'
import EzFit from '../src/assets/images/EZ.jpg'
import jobify from '../src/assets/images/jobfy.jpg'
import imageEditor from '../src/assets/images/imageEditor.jpg'
import portfolio from '../src/assets/images/portfo.jpg'



export const data = [
  {
    id: 1,
    name: "College Map",
    image:collegeMap,
    details:
      "Experience seamless navigation through NMAMIT Campus using the College Map- Classroom Finder project.",
    tech: "HTML,CSS,JavaScript,PHP,MySQL",
    link: "https://github.com/alo06/alo06.github.io",
    live: "https://alo06.github.io/",
  },
  {
    id: 2,
    name: "Jobify",
    image: jobify,
    details:
      "Unlock a world of job opportunities with Jobify, the job portal designed with MongoDB, ExpressJS, ReactJS, and NodeJS. Employers enjoy effortless job creation, editing, and deletion, while job seekers find their perfect match. ",
    tech: "MongoDB,ExpressJs,ReactJs,NodeJs",
    link: "https://github.com/alo06/Jobify",
    live: "https://github.com/alo06/Jobify",
  },
  {
    id: 3,
    name: "Ez Fit",
    image: EzFit,
    details:
      "Elevate your fitness journey with EzFit, the ultimate Android app powered by Java, XML, and SQLite. Stay fit on the go as it tracks your calories, offers meal suggestions, exercise routines, and features a handy step counter.",
    tech: "Android,Java,XML,SQLite",
    link: "https://github.com/alo06/fitnessApp",
    live: "https://github.com/alo06/fitnessApp",
  },
  {
    id: 4,
    name: "Image Editor",
    image: imageEditor,
    details:
      "Unleash your creativity with the Image Editor Website, a powerful online tool crafted using HTML, CSS, and JavaScript. Enhance your images with features like brightness, grayscale, and saturation adjustments. Plus, easily resize your images to fit your vision perfectly.",
    tech: "HTML,CSS,JavaScript",
    link: "https://github.com/alo06/Image-Editor",
    live: "https://image-editor-umber.vercel.app/",
  },
  {
    id: 5,
    name: "Portfolio",
    image: portfolio,
    details:
      "Welcome to my portfolio website, built using ReactJS and CSS. Here, I showcase a collection of my projects and skills. Explore my journey and expertise in the world of web development.",
    tech: "ReactJS,CSS",
    link: "https://github.com/alo06/portfolio",
    live: "https://jeevottambhat.vercel.app/",
  },
];

export const educationData = [
  {
    institute: "NMAM Institute Of Technology",
    duration: "2020 - present",
    degree: "Computer Science and Engineering",
    cgpa: "8.8",
  },
  {
    institute: "Sharada Pre University",
    duration: "2018 - 2020",
    degree: "PCMS",
    cgpa: "90%",
  },
];

export const icons = {
  frontend: [
    html,
    css,
    javascript,
    react,
  ],
  backend: [
    nodejs,
    express,
    mongo,
    mysql,
  ],
  programmingLanguages: [
    cpp,
    c,
    java,
    python,
  ],
  others: [
    oops,
    dsa,
  ],
};


