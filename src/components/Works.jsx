import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Carousel from "./Carousel";
import { useRef } from "react";



// const ProjectCard = ({
//   items,
//   index,
//   name,
//   description,
//   tags,
//   source_code_link,
// }) => {
//   return (
//     <div className="bg-tertiary p-5 rounded-2xl w-[360px] h-auto flex flex-col justify-between min-h-[480px]">
//       <div>
//         <div className="relative w-full bg-black/25 flex justify-center rounded-3xl overflow-hidden">
//           <Carousel
//             items={items}
//             baseWidth={320}
//             autoplay={true}
//             autoplayDelay={3000}
//             pauseOnHover={true}
//             loop={true}
//             round={false}
//           />

//           <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             >
//               <img
//                 src={github}
//                 alt="source code"
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mt-2">
//           <h3 className="text-yellow-400 text-shadow-gold  font-bold text-[24px] font-serif uppercase">{name}</h3>
//           <p className="mt-2 text-secondary text-[14px] font-serif">{description}</p>
//         </div>
//       </div>

//       {/* Tags section at the bottom */}
//       <div className="mt-4 flex flex-wrap gap-2 uppercase">
//         {tags.map((tag) => (
//           <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
//             #{tag.name}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// };
const ProjectCard = ({
  link,
  status,
  items,
  index,
  name,
  description,
  tags,
  source_code_link,
}) => {
  return (
    <div className="bg-tertiary p-5 rounded-2xl w-[360px] min-h-[500px] flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300">

      {/* ===== TOP SECTION ===== */}
      <div className="flex flex-col gap-4">

        {/* Carousel */}
        <div className="relative w-full bg-black/30 rounded-3xl overflow-hidden flex justify-center">
          <Carousel
            items={items}
            baseWidth={320}
            autoplay
            autoplayDelay={3000}
            pauseOnHover
            loop
            round={false}
          />

          {/* GitHub Button */}
          <div className="absolute top-3 right-3 card-img_hover">
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
            >
              <img
                src={github}
                alt="source code"
                className="w-5 h-5 object-contain"
              />
            </button>
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-yellow-400 text-shadow-gold font-bold text-[22px] font-serif uppercase tracking-wide">
          {name}
        </h3>

        {/* Status + Live */}
        <div className="flex items-center justify-between px-3 py-2 rounded-lg border border-white/10 bg-black/20">

          {/* Status Badge */}
          {status ? (
            <span className="text-green-400 text-xs font-semibold uppercase flex items-center gap-1">
              ● Completed Project
            </span>
          ) : (
            <span className="text-yellow-400 text-xs font-semibold uppercase flex items-center gap-1 animate-pulse">
              ● Ongoing
            </span>
          )}

          {/* Live Button */}
          <span
            onClick={() => window.open(link, "_blank")}
            className="text-cyan-400 text-xs font-bold cursor-pointer hover:underline"
          >
            LIVE ↗
          </span>
        </div>

        {/* Description */}
        <p className="text-secondary text-[14px] leading-relaxed font-serif text-justify">
          {description}
        </p>
      </div>

      {/* ===== TAGS (BOTTOM FIXED) ===== */}
      <div className="mt-auto pt-4 flex flex-wrap gap-2 uppercase">
        {tags.map((tag) => (
          <span
            key={`${name}-${tag.name}`}
            className={`text-[12px] px-2 py-1 rounded-md bg-black/40 tracking-wide ${tag.color}`}
          >
            #{tag.name}
          </span>
        ))}
      </div>

    </div>

  );
};
const Works = () => {

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} italic font-serif `}>My work,</p>
        <h2 className={`${styles.sectionHeadText} italic font-serif`}>
         From Logic to Life
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          <p className="text-lg leading-8 text-justify font-serif">
            I'm <span className="font-semibold text-yellow-300">Ayushi Kumari</span>,
            a third-year B.Tech student in Electronics and Communication Engineering
            at BIT Mesra, with a strong focus on building scalable and efficient
            web applications.
          </p>

          <p className="text-lg leading-8 mt-4 text-justify font-serif">
            My journey into <span className="font-semibold text-pink-300">full-stack development</span>
            is fueled by a passion for transforming logic into real-world solutions.
            I enjoy working across the stack — from crafting responsive and modern
            interfaces using{" "}
            <span className="font-semibold text-violet-300">
              HTML, CSS, Tailwind CSS, JavaScript, and React
            </span>{" "}
            to building reliable backend systems with{" "}
            <span className="font-semibold text-green-300">
              Node.js, Express.js, and MongoDB
            </span>.
          </p>

          <p className="text-lg leading-8 mt-4 text-justify font-serif">
            Alongside development, I consistently sharpen my problem-solving skills
            by practicing{" "}
            <span className="font-semibold text-blue-300">
              Data Structures and Algorithms
            </span>{" "}
            on platforms like{" "}
            <span className="font-semibold text-red-300">
              LeetCode and GeeksforGeeks
            </span>, which has strengthened my understanding of time and space
            complexity and helped me write optimized, efficient code.
          </p>

          <p className="text-lg leading-8 mt-4 text-justify font-serif">
            With a strong interest in{" "}
            <span className="font-semibold text-indigo-300">UI/UX fundamentals</span>,
            I focus on building clean, accessible, and user-friendly interfaces while
            maintaining performance, scalability, and code quality.
          </p>

        </motion.div>
      </div>
      <div className="flex items-center relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="text-white text-3xl px-3 py-1 rounded-full bg-black/40 hover:bg-black/70 transition z-10"
        >
          &#8249;
        </button>

        {/* Scrollable Project Cards */}
        <div
          ref={scrollRef}
          className="relative mt-20 flex overflow-x-auto scrollbar-none gap-7 px-2"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              items={project.item}
              {...project}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="text-white text-3xl px-3 py-1 rounded-full bg-black/40 hover:bg-black/70 transition z-10"
        >
          &#8250;
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
