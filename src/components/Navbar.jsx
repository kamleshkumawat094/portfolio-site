import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Home, Menu, X } from "lucide-react";
import { motion, setStyle, styleEffect } from "framer-motion";

const Navbar = ({ onProjectsClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
useEffect(() => {
  const handleScroll = () => {
    const sections = ["home", "about", "skills", "projects", "Contact"];
    const threshold = 0.6; // 60% visibility
    let currentSection = active;

    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;

        // Calculate visible height within viewport
        const visibleHeight = Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);

        // Calculate visibility ratio
        const visibilityRatio = visibleHeight / sectionHeight;

        if (visibilityRatio >= threshold) {
          currentSection = sections[i];
          break; // Stop checking once found
        }
      }
    }

    if (currentSection !== active) {
      setActive(currentSection);
    }
  };

  window.addEventListener("scroll", handleScroll);
  
  // Initial check on mount
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, [active]);




  const scrollToSection = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };
  return (
    <div className="bg-[#0d1117cc] backdrop-blur-[50px] fixed w-full h-[70px] ">
      <div className="flex flex-row place-content-between  py-[15px] px-[15px] max-w-[1250px] mx-auto">
        <h1 className="text-4xl font-bold slide-in-left duration-1 cursor-pointer fixed md:relative ">
          Port<span className="text-[#00AEFF] ">folio</span>
        </h1>
        <ul className="hidden md:flex flex-row lg:gap-15 gap-5 items-end text-[18px]">
          <li className="slide-in-left duration-2 ">
            <button
              className={`cursor-pointer center-underline hover:text-[#00AEFF] ${
                active === "home" ? "text-[#00AEFF]" : "text-white"
              }`}
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
          </li>
          <li className="slide-in-left duration-3">
            <button
              className={`cursor-pointer center-underline hover:text-[#00AEFF] ${
                active === "about" ? "text-[#00AEFF]" : "text-white"
              }`}
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
          </li>
          <li className="slide-in-left duration-4">
            <button
              className={`cursor-pointer center-underline hover:text-[#00AEFF] ${
                active === "skills" ? "text-[#00AEFF]" : "text-white"
              }`}
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>
          </li>
          <li className="slide-in-left duration-4">
            <button
              className={`cursor-pointer center-underline hover:text-[#00AEFF] ${
                active === "projects" ? "text-[#00AEFF]" : "text-white"
              }`}
              onClick={onProjectsClick}
            >
              Projects
            </button>
          </li>
          <li className="slide-in-left duration-4 ">
            <button
              className={`cursor-pointer center-underline hover:text-[#00AEFF] ${
                active === "Contact" ? "text-[#00AEFF]" : "text-white"
              }`}
              onClick={() => scrollToSection("Contact")}
            >
              Contact Me
            </button>
          </li>
        </ul>
        <button className=" hidden md:flex items-end slide-in-left duration-5 border  rounded py-2 px-3 bg-[#ed3393] font-bold cursor-pointer">
          <a href="https://drive.usercontent.google.com/u/0/uc?id=1ALa81CJxrlbq9H_ZPpZq3KYcwCKvJJTA&export=download">
            Download CV
          </a>
        </button>

        <div className="md:hidden fixed right-[15px] ">
          <button onClick={() => setMenuOpen(!menuOpen)} className="pt-2 ">
            {menuOpen ? (
              <X size={28} className="cursor-pointer" />
            ) : (
              <Menu size={28} className="cursor-pointer" />
            )}{" "}
          </button>
        </div>
        {menuOpen && (
          <div className="inset-0 fixed rounded-2xl">
            <div
              className="fixed inset-0 bg-black/30 "
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              className=" md:hidden absolute top-8 bg-black mt-7 p-1 z-50 w-[calc(100%-2.5rem)] mx-[20px] rounded-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ul className=" flex flex-col  gap-3 items-center text-[18px]">
                <motion.li
                  className=""
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                >
                  <button
                    className={`cursor-pointer center-underline hover:text-[#00AEFF] ${
                active === "home" ? "text-[#00AEFF]" : "text-white"
              }`}
                    onClick={() => scrollToSection("home")}
                  >
                    Home
                  </button>
                </motion.li>
                <motion.li
                  className=""
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                >
                  <button
                    className={`cursor-pointer center-underline hover:text-[#00AEFF] ${
                active === "about" ? "text-[#00AEFF]" : "text-white"
              }`}
                    onClick={() => scrollToSection("about")}
                  >
                    About
                  </button>
                </motion.li>
                <motion.li
                  className=""
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                  <button
                    className={`cursor-pointer center-underline hover:text-[#00AEFF] ${
                active === "skills" ? "text-[#00AEFF]" : "text-white"
              }`}
                    onClick={() => scrollToSection("skills")}
                  >
                    Skills
                  </button>
                </motion.li>
                <motion.li
                  className=""
                  initial={{ opacity: 0, y: -60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                  <button
                    className={`cursor-pointer center-underline hover:text-[#00AEFF] ${
                active === "projects" ? "text-[#00AEFF]" : "text-white"
              }`}
                    onClick={onProjectsClick}
                  >
                    Projects
                  </button>
                </motion.li>
                <motion.li
                  className=""
                  initial={{ opacity: 0, y: -70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                >
                  <button
                    className={`cursor-pointer center-underline hover:text-[#00AEFF] ${
                active === "Contact" ? "text-[#00AEFF]" : "text-white"
              }`}
                    onClick={() => scrollToSection("Contact")}
                  >
                    Contect Me
                  </button>
                </motion.li>
                <motion.li
                  className=""
                  initial={{ opacity: 0, y: -80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                >
                  <button className="cursor-pointer center-underline hover:text-[#00AEFF] ">
                    <a href="https://drive.usercontent.google.com/u/0/uc?id=1ALa81CJxrlbq9H_ZPpZq3KYcwCKvJJTA&export=download">
                      Download CV{" "}
                    </a>
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
