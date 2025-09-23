import React from "react";
import imgg from "../assets/ppp.png";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Home = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  return (
    <div className="md:h-[100vh]  flex-col flex items-center justify-evenly md:flex-row py-17 px-4  my-auto">
      <div className="flex md:w-auto w-[60%] md:my-auto justify-center mb-5">
        <img
          src={imgg}
          alt=""
          className=" kamal w-full md:w-auto max-w-[330px] h-auto "
        />
      </div>
      <div className="flex flex-col my-auto md:w-[50%] w-full">
        <div className="flex flex-col md:items-start items-center">
          <h6 className="text-xl font-medium slide-in-Top duration-1">
            Hello, I'm
          </h6>
          <h1 className=" fontKiSize text-4xl  font-bold py-1 slide-in-Top duration-2 ">
            Kamlesh Kumawat
          </h1>

          <h3 className=" hKiSize text-xl md:text-2xl font-medium slide-in-Top duration-3 w-auto text-start">
            And I'm a&nbsp;
            <span className="text-[#00AEFF] font-bold">
              <Typewriter
                words={["Web Developer"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h3>
          <br />
          <span className="md:text-left text-center slide-in-Top duration-4">
            I'm a passionate{" "}
            <span className="text-[#00AEFF] font-bold">
              MERN Stack Developer
            </span>{" "}
            with experience in building modern web applications using MongoDB,
            Express, React, and Node.js. I enjoy creating clean, responsive, and
            efficient solutions for both front-end and back-end development.
          </span>
        </div>
        <div className="flex gap-4 py-3 md:justify-start justify-center slide-in-Top duration-5 flex-row">
          <a
            href="https://www.linkedin.com/in/kamlesh-kumawat-691435255"
            target="_blank"
    
            className="w-8 h-8  flex  items-center justify-center rounded  bg-white/20 backdrop-blur-md
             transition-all duration-300 ease-in-out
             hover:scale-110 hover:bg-white/30 hover:shadow-[0_0_15px_#ed3393aa]"
          >
            <FaLinkedinIn size={24} className="text-[#ed3393] drop-shadow-[0_0_5px_black]" />
          </a>
          <a
          
            href={isMobile ? "mailto:kamleshkumawat7740@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Kamlesh%2C%0AI%20just%20visited%20your%20portfolio..."
      : "https://mail.google.com/mail/?view=cm&fs=1&to=kamleshkumawat7740@gmail.com&su=Contact%20from%20Portfolio&body=Hi%20Kamlesh%2C%0AI%20just%20visited%20your%20portfolio..."}
           target="_blank"
            className=" w-8 h-8  flex  items-center justify-center rounded  bg-white/20 backdrop-blur-md
             transition-all duration-300 ease-in-out
             hover:scale-110 hover:bg-white/30 hover:shadow-[0_0_15px_#ed3393aa]"
          >
            <Mail size={24} className="text-[#ed3393] drop-shadow-[0_0_5px_black]" />
          </a>
          <a
            href="https://github.com/kamleshkumawat094"
            target="_blank"
        
            className=" w-8 h-8   flex  items-center justify-center rounded  bg-white/20 backdrop-blur-md
             transition-all duration-300 ease-in-out
             hover:scale-110 hover:bg-white/30 hover:shadow-[0_0_15px_#ed3393aa]"
          >
            <FaGithub size={24} className="text-[#ed3393] drop-shadow-[0_0_5px_black]" />
          </a>
          <a
            href="https://www.instagram.com/kamleshkumawat094?igsh=MWczNHN1MWJtOTJ5Yw=="
            target="_blank"
           
            className=" w-8 h-8   flex  items-center justify-center rounded  bg-white/20 backdrop-blur-md
             transition-all duration-300 ease-in-out
             hover:scale-110 hover:bg-white/30 hover:shadow-[0_0_15px_#ed3393aa]"
          >
            <FaInstagram size={24} className="text-[#ed3393] drop-shadow-[0_0_5px_black]" />
          </a>
          
        </div>
        <div className="flex gap-6 py-1 text-black  md:justify-start justify-center">
          <button className="brdr border-black rounded py-2 px-6 bg-[#00aeff] font-bold slide-in-Top duratioon-6 cursor-pointer transition duration-400 ease  hover:scale-105  hover:bg-[#0398dd] ">
            <a
              href="https://drive.google.com/file/d/1ALa81CJxrlbq9H_ZPpZq3KYcwCKvJJTA/view?usp=drivesdk"
              target="_blank"
            >
              Open CV
            </a>
          </button>
          <button
            className="brdr border-black rounded py-2 px-3 bg-[#00aeff] font-bold slide-in-Top duratioon-6 cursor-pointer transition duration-400 ease  hover:scale-105 hover:bg-[#0398dd]"
            onClick={() => scrollToSection("Contact")}
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
