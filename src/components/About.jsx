import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
const socials = [
  {
    icon: Github,
    link: "https://github.com/ayushi48",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/ayushi-kumari48/",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/ayushikumari9015?igsh=MWYyaml3bGI1MHEwZw==",
  },
  {
    icon: Mail,
    link: "mailto:contact@ayushikumari.me",
  },
];
const ServiceCard = ({ index, title, icon }) => (

  <Tilt
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    scale={1.03}
    transitionSpeed={600}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.2, 0.9)}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="development"
          className="w-60 h-30 object-contain rounded-xl"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>

);

const About = () => {
  const drivelink =
    "https://drive.google.com/uc?export=download&id=1b1JAFMF-hRn3FMlYN_3si5vRy_b8cKcM";

  const [viewwhich, setViewwhich] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewwhich((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex flex-col lg:flex-row justify-between  gap-10">

      {/* ================= LEFT TEXT SECTION ================= */}
      <div className="flex-1">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>INTRODUCTION</p>
          <h2 className={`${styles.sectionHeadText} font-serif`}>
            Behind the Screen.
          </h2>
        </motion.div>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] w-full leading-[30px]"
        >
          {/* FLEX ROW: TEXT + IMAGE SIDE BY SIDE */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-6">

            {/* LEFT TEXT BLOCK (65% WIDTH) */}
            <div className="w-full lg:w-[65%] pr-0">

              <p className="text-lg leading-8 text-justify font-serif">
                Hi, I’m{" "}
                <span className="font-semibold text-yellow-300">Ayushi Kumari</span> — a{" "}
                <span className="font-semibold text-pink-300">
                  passionate full-stack web developer
                </span>{" "}
                and a third-year Electronics and Communication Engineering student at{" "}
                <span className="font-semibold text-yellow-300">BIT Mesra</span>. I specialize
                in{" "}
                <span className="font-semibold text-violet-300">
                  building scalable, responsive, and user-focused web applications
                </span>{" "}
                that deliver meaningful and engaging digital experiences. My expertise spans
                frontend development with{" "}
                <span className="font-semibold text-violet-300">
                  React and Tailwind CSS
                </span>
                , along with backend fundamentals, database management, and API integration.
              </p>

              <p className="text-lg leading-8 mt-4 text-justify font-serif">
                I enjoy crafting clean, well-structured interfaces, designing smooth user
                interactions, and developing applications that feel{" "}
                <span className="font-semibold text-green-300">
                  intuitive, efficient, and easy to use
                </span>
                . I continuously refine code quality, experiment with modern web technologies,
                and follow best practices to build{" "}
                <span className="font-semibold text-green-300">
                  scalable and maintainable solutions
                </span>
                .
              </p>

              <p className="text-lg leading-8 mt-4 text-justify font-serif">
                Alongside web development, I actively strengthen my{" "}
                <span className="font-semibold text-blue-300">
                  problem-solving and logical reasoning
                </span>{" "}
                by practicing{" "}
                <span className="font-semibold text-red-300">
                  Data Structures and Algorithms
                </span>
                . Driven by curiosity, creativity, and continuous learning, I strive to solve
                real-world problems through thoughtful and impactful code.
              </p>

              <p className="text-lg leading-8 mt-4 text-justify font-serif">
                <span className="font-semibold text-yellow-300">
                  Key Skills & Technologies:
                </span>{" "}
                <span className="font-semibold text-violet-300">React</span>,{" "}
                <span className="font-semibold text-violet-300">Tailwind CSS</span>,{" "}
                <span className="font-semibold text-blue-300">JavaScript</span>, HTML, CSS,
                Node.js, REST APIs, MongoDB, Git, Responsive Web Design, UI/UX Design Principles.
              </p>



              {/* DOWNLOAD BUTTON */}
              <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center">

                {/* Download Resume */}
                <div className="mt-6 flex justify-center sm:justify-start">
                  <motion.a
                    href={drivelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="
        min-w-52 px-6 py-3 rounded-full
        flex items-center justify-center
        border-2 border-cyan-400
        text-cyan-400 font-semibold
        hover:bg-cyan-400 hover:text-black
        shadow-[0_0_20px_rgba(34,211,238,0.6)]
        transition-all duration-300
      "
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={viewwhich ? "download" : "view"}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}
                      >
                        Download Resume
                      </motion.span>
                    </AnimatePresence>
                  </motion.a>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6 justify-center sm:justify-end items-center mt-6 sm:mt-0">
                  {socials.map((item, index) => (
          //           <motion.a
          //             key={index}
          //             href={item.link}
          //             target="_blank"
          //             rel="noopener noreferrer"
          //             initial={{ opacity: 0, y: 20 }}
          //             animate={{ opacity: 1, y: 0 }}
          //             transition={{
          //               delay: index * 0.15,
          //               type: "spring",
          //               stiffness: 120,
          //               damping: 12,
          //             }}
          //             whileHover={{ scale: 1.15, rotate: 5 }}
          //             whileTap={{ scale: 0.95 }}
          //             className="w-12 h-12 rounded-full
          // flex items-center justify-center
          // border-2 border-cyan-400
          // text-cyan-400
          // hover:bg-cyan-400 hover:text-black
          // shadow-[0_0_15px_rgba(34,211,238,0.6)]
          // transition-colors duration-300"
          //           >
          //             <item.icon size={22} />
          //           </motion.a>


<motion.a
  key={index}
  href={item.link}
 target="_blank"
rel="noopener noreferrer"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: index * 0.15,
    type: "spring",
    stiffness: 120,
    damping: 12,
  }}
  whileHover={{ scale: 1.15, rotate: 5 }}
  whileTap={{ scale: 0.95 }}
  className="w-12 h-12 rounded-full
    flex items-center justify-center
    border-2 border-cyan-400
    text-cyan-400
    hover:bg-cyan-400 hover:text-black
    shadow-[0_0_15px_rgba(34,211,238,0.6)]
    transition-colors duration-300"
>
  <item.icon size={22} />
</motion.a>
          
                  ))}
                </div>

              </div>

            </div>

            {/* RIGHT IMAGE BLOCK (35% WIDTH) */}
            <div className="hidden lg:flex w-full lg:w-[35%] justify-end items-center m-0 p-0">
              <img
                src="https://res.cloudinary.com/dyjgl5yrr/image/upload/v1766236807/Gemini_Generated_Image_3yjw2g3yjw2g3yjw_aizvis.png"
                alt="Ayushi Profile"
                className="w-[320px] h-auto object-cover rounded-2xl select-none m-0 p-0"
              />
            </div>

          </div>
        </motion.div>
        <div className="mt-20 flex flex-wrap justify-around gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
