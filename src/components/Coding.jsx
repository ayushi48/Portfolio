import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { CodingProfile } from "../constants";

const ProfileCard = ({
  index,
  name,
  username,
  link,
  image,
  achievements,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl w-[350px] sm:w-[560px]'
  >
    <div className="bg-white rounded-lg shadow-md p-4 w-[280px] sm:w-[360px] max-w-md mx-auto">
      <div className="flex justify-between items-center mb-2">
        <p className="text-lg font-semibold text-gray-800 font-serif">{name}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm font-medium font-serif"
        >
          Visit Profile
        </a>
      </div>

      <p className=" text-gray-600 mb-3 font-serif">Username: <span className="font-medium text-black font-serif">{username}</span></p>

      <img
        src={image}
        alt="CodeForces"
        className="w-full h-auto rounded-md border border-gray-200"
      />
      <div className="mt-4">
        {achievements && achievements.length > 0 && (
          <div className="bg-gray-50 rounded-md p-3 border border-gray-200">
            {/* <p className="text-sm font-semibold text-gray-800 mb-2 font-serif">
              Achievements
            </p> */}

            <ul className="space-y-1">
              {achievements.map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-700 font-serif"
                >
                  
                  {item.Rank?<p className=" font-bold">• Rank: <span className="font-medium">{item.Rank}</span></p>:""}
                  <p className=" font-bold">• Question Solved: <span className="font-medium">{item.problem}</span></p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

    </div>
  </motion.div>
);
const Coding = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[250px]`}
      >
        <motion.div
          variants={textVariant()}
          className="text-center mb-10 "
        >
          <p className="relative inline-block  after:block after:h-[2px] after:bg-violet-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 font-serif">
            My Achievements
          </p>

          <h2 className="text-transparent  uppercase bg-clip-text bg-gradient-to-r from-yellow-600 to-pink-400 text-4xl font-bold font-serif">
            Coding Platforms
          </h2>
        </motion.div>

      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} overflow-x-scroll overflow-y-scroll scrollbar-none flex flex-row gap-10`}>
        {CodingProfile.map((profile, index) => (
          <ProfileCard key={profile.name} index={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Coding, "");
