import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { MyclickPhoto } from "../constants";



const MyclickPhotoview = ({
    index,
    date,
    place,
    image,
    link,
}) => (


    <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className='bg-black-200 p-10 rounded-3xl w-[420px] flex justify-center items-center '
    >
        <div className="bg-white rounded-lg shadow-md p-4 w-[360px] max-w-md mx-auto space-y-3 h-[45vh]">
            {/* Visit/Download Button */}
            <div className="flex justify-between">

                <a
                    href={image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 hover:underline text-sm font-medium font-serif"
                >
                    Visit / Download
                </a>

                <p className="text-black">{index +1}</p>
            </div>

            {/* Image */}
            <img
                src={image}
                alt="Thumbnail"
                className="w-full h-[60%] rounded-md border border-gray-200 object-cover object-center"
            />

            {/* Text Content */}
            <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-gray-800 font-serif uppercase">{place}</p>
                <p className="text-sm text-gray-600 font-serif">
                    <span className="font-medium text-black">{date}</span>
                </p>
            </div>
        </div>

    </motion.div>
);


const Coding = () => {
    return (
        <div className={`mt-12 bg-black-100 rounded-[20px]`}>
            <div
                className={`rounded-2xl ${styles.padding} min-h-[300px]`}
            >
                <motion.div
                    variants={textVariant()}
                    className="text-center mb-10 "
                >
                    <p className="relative inline-block after:block after:h-[2px] after:bg-violet-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 font-serif">
                        My Clicks / My Hobby
                    </p>

                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-pink-400 text-4xl font-bold font-serif">
                        When Camera Is In My Hand
                    </h2>
                </motion.div>

            </div>
            <div className={`-mt-20 pb-14 ${styles.paddingX} overflow-x-scroll overflow-y-scroll scrollbar-none flex flex-row gap-10`}>
                {MyclickPhoto.map((profile, index) => (
                    <MyclickPhotoview key={profile.name} index={index} {...profile} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Coding, "");
