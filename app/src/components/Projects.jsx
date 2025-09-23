import React from "react";
import { motion } from "framer-motion";

const Projects = ({ onClose }) => {
  return (
    <motion.div className="fixed inset-0 flex items-start justify-center  bg-black/50 z-50 "
              

    >
      <motion.div className="bg-white/30 backdrop-blur-md shadow-lg border border-white/20 p-6 rounded-lg mt-18   w-11/12 md:w-[500px] relative mx-5"
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.8 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        <h2 className="text-xl font-bold mb-4 text-black">Projects will be available here shortly. Stay tuned!</h2>
        <p></p>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black hover:text-red-500"
        >
          ✖
        </button>

        <button className=" mx-auto text-black border-black rounded-lg py-2 px-6 bg-[#00aeff] font-bold cursor-pointer transition duration-400 ease  hover:scale-105  hover:bg-[#0398dd]" onClick={onClose}
        >
Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
