import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { About } from "./components/About";
import Skills from "./components/Skill";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import  Projects  from "./components/Projects";

function App() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
   useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <div className=" absolute  top-0 left-0 w-full z-50 "> 
        <Navbar  onProjectsClick={() => setIsProjectsOpen(true)} />
        </div>
      <div className="scroll-smooth container ">
        <Home />
        <About  />
        <Skills/>
        
        <Contact/>
        <Toaster position="top-center" reverseOrder={false} />
        {isProjectsOpen && (
  <Projects onClose={() => setIsProjectsOpen(false)} />
)}

      </div>
        
    </div>
  );
}

export default App;
