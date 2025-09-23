import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .send(
        "service_75zhrq8",
        "template_18o3rvu",
        formData,
        "vISV3Pxm4PMO3i7hL"
      )
      .then(
        () => {
          toast.success("Message sent successfully! 🚀");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        () => {
          toast.error("Failed to send message ❌");
          setLoading(false);
        }
      );
  };
  return (
    <section id="Contact" className="py-16">
      <div className="max-w-3xl mx-auto px-6 flex flex-col">
        <motion.h1 className="text-5xl font-bold "
        initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          Let's <span className="text-[#00aeff]">Connect</span>
          <span class="block w-20 h-[5px] bg-[#ffffff] mt-4 mx-auto rounded"></span>
        </motion.h1>
        <motion.p className="text-center text-white py-5 text-2xl"
        initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          {" "}
          Reach out by filling out the form below, and I’ll respond promptly
        </motion.p>
        <motion.form
         initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
          whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-md"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-white/10 placeholder-gray-500 text-white focus:bg-white/20 focus:outline-none transition"
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-white/10 placeholder-gray-500 text-white focus:bg-white/20 focus:outline-none transition"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="p-4 rounded-lg bg-white/10 placeholder-gray-500 text-white focus:bg-white/20 focus:outline-none transition resize-none"
          />
          <button disabled={loading}
            className="  mx-auto text-black border-black rounded-lg py-2 px-6 bg-[#00aeff] font-bold cursor-pointer transition duration-400 ease  hover:scale-105  hover:bg-[#0398dd] disabled:bg-gray-400 disabled:text-white disabled:cursor-not-allowed"
            type="submit"
          >
            {loading ? "Sending" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
