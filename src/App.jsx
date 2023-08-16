import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Project from './components/Projects/Project'
import Skills from './components/Skills/Skills'
import { Analytics } from "@vercel/analytics/react";

function App() {
 

  return (
    <div >
      <Home  />
      <About />
      <Skills  />
      <Project  />
      <Contact  />
      <Analytics/>
    </div>
  );
}

export default App
