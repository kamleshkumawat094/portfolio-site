
import imgg from "../assets/ppp.png";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div
      id="about"
      className="md:h-[100vh]  flex flex-col items-center justify-evenly  md:flex-row py-16 px-4 "
    >
      <div className="w-full md:text-[18px] text-[17px] md:w-1/2 md:text-start text-center md:mt-0 mt-5">
        <motion.h1
          className="text-5xl font-bold  "
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About <span className="text-[#00aeff]">Me</span>
           
        </motion.h1>
        
        <br />

        <motion.p
          className="text-2xl mb-4 w-full "
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          MERN Stack Developer!
        </motion.p>

        <motion.p
          
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I'm a passionate MERN Stack Developer currently pursuing my final
          year of B.Tech at Stanny Memorial College of Engineering and
          Technology. With a strong foundation in both frontend and backend
          technologies, I specialize in building dynamic, responsive, and
          scalable web applications using MongoDB, Express.js, React.js, and
          Node.js.
        </motion.p>
        <br />
        <motion.p
          
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
           
        >
          Throughout my academic journey, I’ve worked on several projects that
          reflect my problem-solving mindset, clean code practices, and
          enthusiasm for full-stack development. I enjoy turning complex
          problems into simple, beautiful, and intuitive solutions.
        </motion.p>
      </div>
      <div className="flex justify-center mt-10 md:mt-0">
        <motion.img
          src={imgg}
          alt="demo"
          className="w-3/4 md:w-auto max-w-[300px] h-auto"
          initial={{ rotate: -45, opacity: 0, scale: 0.5 }}
          whileInView={{ rotate: 0, opacity: 1, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};
