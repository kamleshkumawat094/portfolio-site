import React, { useState } from "react";
import "./Navbar.css";
import { Home, Menu, X } from "lucide-react";
import { motion, setStyle, styleEffect } from "framer-motion";

const Navbar = ({ onProjectsClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
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
            className="cursor-pointer center-underline hover:text-[#00AEFF]"
              
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
          </li>
          <li className="slide-in-left duration-3">
            <button
             className="cursor-pointer center-underline hover:text-[#00AEFF]"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
          </li>
          <li className="slide-in-left duration-4">
            <button
              className="cursor-pointer center-underline hover:text-[#00AEFF]"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>
          </li>
          <li className="slide-in-left duration-4">
            <button
             className="cursor-pointer center-underline hover:text-[#00AEFF]"
              onClick={onProjectsClick}
            >
              Projects
            </button>
          </li>
          <li className="slide-in-left duration-4 ">
            <button
             className="cursor-pointer center-underline hover:text-[#00AEFF]"
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
                    className="cursor-pointer center-underline hover:text-[#00AEFF]"
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
                    className="cursor-pointer center-underline hover:text-[#00AEFF]"
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
                  className="cursor-pointer center-underline hover:text-[#00AEFF]"
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
                  className="cursor-pointer center-underline hover:text-[#00AEFF]"
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
                  className="cursor-pointer center-underline hover:text-[#00AEFF]"
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
