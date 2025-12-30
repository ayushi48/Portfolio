import React, { useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { Achievements } from "../constants";
import { textVariant } from "../utils/motion";
import Carousel from "./Carousel";
import { styles } from "../styles";

const ProjectCard = ({ items, name, description, date }) => {
  return (
    <div
      className="
        relative
        w-[320px]
        min-h-[440px]
        p-[1px]
        rounded-3xl
        bg-gradient-to-br from-violet-500/35 via-yellow-400/20 to-pink-500/25
      "
    >
      <div
        className="
          bg-tertiary
          h-full
          p-5
          rounded-3xl
          flex flex-col
          justify-between
          backdrop-blur-md
          shadow-[0_0_24px_rgba(0,0,0,0.4)]
        "
      >
        <div>
          <h3 className="text-yellow-400 font-bold text-[20px] font-serif uppercase mb-3 text-center">
            {name}
          </h3>

          <div className="relative w-full bg-black/40 rounded-xl overflow-hidden mb-3">
            <Carousel
              items={items}
              baseWidth={280}
              autoplay
              autoplayDelay={3000}
              pauseOnHover
              loop
              round={false}
            />
          </div>

          <div className="text-center">
            <p className="text-[11px] text-gray-400 mb-1">{date}</p>
            <p className="text-secondary text-[13px] font-serif leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -340, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
  };

  return (
    <div className="mt-16 bg-black-100 rounded-[26px] overflow-hidden">

      {/* ===== HEADER ===== */}
      <div
        className={`
          bg-tertiary
          rounded-2xl
          ${styles.padding}
          min-h-[120px]
          flex items-center justify-center
        `}
      >
        <motion.div
          variants={textVariant()}
          className="text-center"
        >
          <p
            className="
              text-3xl
              font-serif
              font-bold
              tracking-[0.25em]
              text-transparent bg-clip-text
              bg-gradient-to-r from-yellow-400 via-pink-400 to-violet-500
            "
          >
            MY ACHIEVEMENTS
          </p>
        </motion.div>
      </div>

      {/* ===== SCROLL AREA ===== */}
      <div className="relative flex items-center -mt-14">

        {/* LEFT BUTTON */}
        <button
          onClick={scrollLeft}
          className="
            absolute left-5 z-10
            w-10 h-10
            flex items-center justify-center
            rounded-full
            bg-black/60
            text-white text-2xl
            backdrop-blur-md
            hover:scale-110
            transition
          "
        >
          &#8249;
        </button>

        {/* CARDS */}
        <div
          ref={scrollRef}
          className="
            flex gap-10
            overflow-x-auto
            scrollbar-none
            px-20
            py-10
          "
        >
          {Achievements.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              items={project.item}
              {...project}
            />
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={scrollRight}
          className="
            absolute right-5 z-10
            w-10 h-10
            flex items-center justify-center
            rounded-full
            bg-black/60
            text-white text-2xl
            backdrop-blur-md
            hover:scale-110
            transition
          "
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
