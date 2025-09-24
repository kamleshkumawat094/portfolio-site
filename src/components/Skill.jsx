import { motion } from "framer-motion";

const skills = [
  { name: "HTML", image: "/html.png" },
  { name: "CSS", image: "/css.png" },
  { name: "Javascript", image: "/javascript.png" },
  { name: "React", image: "/react.svg" },
  { name: "Redux", image: "/redux.png" },
  { name: "MongoDB", image: "/mongodb.png" },
  { name: "Tailwind", image: "/tailwind.png" },
  { name: "Node.js", image: "/node.png" },
  { name: "Express.js", image: "/express.png" },
  { name: "Github", image: "/github (2).png" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 ">
      <div className="max-w-6xl mx-auto px-3 mt-5 md:mt-10 relative inline-block">
        <motion.h2 className="text-5xl font-bold text-center cursor-pointer text-white"
        initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          My <span className="text-[#00aeff]">Skills</span>
          <span class=" block w-20 h-[5px] bg-[#ffffff] mt-4 mx-auto rounded"></span>
        </motion.h2>

        <motion.p className=" py-10  text-2xl "
        initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
            Explore my expertise in programming and technology, where I showcase my experience, skills, and the tools I excel with.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, rotateY: 90, scale: 0.8 },
                visible: { opacity: 1, rotateY: 0, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
              whileHover={{
                scale: 1.12,
                y: -8,
                boxShadow: "0 0 25px rgba(0, 255, 255, 0.6)",
                background:
                  "linear-gradient(135deg, rgba(0,255,255,0.12), rgba(255,255,255,0.06))",
                backdropFilter: "blur(12px)",
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className=" flex-col bg-white/5 border border-white/10 rounded-2xl p-6 
                         flex items-center justify-center text-lg font-semibold 
                         cursor-pointer shadow-md text-white"
              style={{ perspective: "1000px" }}
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
