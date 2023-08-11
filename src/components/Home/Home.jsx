import React, { useEffect, useRef, useState } from 'react'
import pfp from '/src/assets/images/pfp.jpg';
import './home.css'

const Home = () => {
    const [loop, setLoop] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const toRotate = [" Student", " Developer", " Gamer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000;

    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
      return () => {
        clearInterval(ticker);
      };
    }, [text]);
    const tick = () => {
      let i = loop % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = deleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);
      if (deleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!deleting && updatedText === fullText) {
        setDeleting(true);
        setDelta(period);
      } else if (deleting && updatedText === "") {
        setDeleting(false);
        setLoop(loop + 1);
        setDelta(300);
      }
    };
  return (
    <div className="home scroll">
      <div className="home-first">
        <h1>Jeevottam Bhat</h1>
        <h2>{text}.</h2>
        <div className="buttons">
          <a href="#">
            <button href>Resume</button>
          </a>
          <a href="#about">
            <button>About</button>
          </a>
          <a href="#project">
            <button>Projects</button>
          </a>
          <a href="#skill">
            <button>Skills</button>
          </a>
          <a href="#contact">
            <button>Contact</button>
          </a>
        </div>
      </div>
      {/* <div className="home-second">
        <img src={pfp}></img>
      </div> */}
    </div>
  );
}

export default Home