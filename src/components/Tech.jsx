// // // import React from "react";

// // // import { BallCanvas } from "./canvas";
// // // import { SectionWrapper } from "../hoc";
// // // import { technologies } from "../constants";
// // // import { database } from "../constants";
// // // import { styles } from "../styles";

// // // const Tech = () => {
// // //   return (
// // //     <div>
// // //       {/* <div className="flex justify-center mb-10 px-4 sm:px-6 lg:px-8">
// // //         <h1 className={` ${styles.sectionHeadText}  font-serif tracking-wide py-3 px-6 shadow-lg`}>
// // //           Tech I Used So Far
// // //         </h1>
// // //       </div> */}
// // //       <div className="flex justify-center items-center mb-10 px-4 sm:px-6 lg:px-8 text-center">
// // //         <h1
// // //           className={`${styles.sectionHeadText} font-serif tracking-wide py-3 px-6 shadow-lg`}
// // //         >
// // //           Tech I Used So Far
// // //         </h1>
// // //       </div>

// // //       <div className='flex flex-row flex-wrap justify-center gap-10'>
// // //         {technologies.map((technology) => (
// // //           <div
// // //             className="relative group cursor-pointer flex items-center justify-center"
// // //             key={technology.name}
// // //           >
// // //             {/* <BallCanvas icon={technology.icon} /> */}
// // //             <BallCanvas
// // //               icon={technology.icon}
// // //               mobileIcon={technology.mobileIcon}
// // //             />

// // //             <div
// // //               className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
// // //       bg-[#7b7980] text-yellow-600 text-xs px-2 py-1 rounded shadow-lg 
// // //       opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10
// // //       pointer-events-none whitespace-nowrap"
// // //             >
// // //               {technology.name}
// // //             </div>
// // //           </div>
// // //         ))}

// // //       </div>
// // //     </div>

// // //   );
// // // };

// // // // export default SectionWrapper(Tech, "");
// // // import React from "react";

// // // import { BallCanvas } from "./canvas";
// // // import { SectionWrapper } from "../hoc";
// // // import { technologies } from "../constants";
// // // import { database } from "../constants";
// // // import { styles } from "../styles";

// // // const Tech = () => {
// // //   return (
// // //     <div>
// // //       {/* <div className="flex justify-center mb-10 px-4 sm:px-6 lg:px-8">
// // //         <h1 className={` ${styles.sectionHeadText}  font-serif tracking-wide py-3 px-6 shadow-lg`}>
// // //           Tech I Used So Far
// // //         </h1>
// // //       </div> */}
// // //       <div className="flex justify-center items-center mb-10 px-4 sm:px-6 lg:px-8 text-center">
// // //         <h1
// // //           className={`${styles.sectionHeadText} font-serif tracking-wide py-3 px-6 shadow-lg`}
// // //         >
// // //           <svg
// // //             viewBox="0 0 24 24"
// // //             className="w-10 h-10 text-emerald-400"
// // //             fill="none"
// // //             stroke="currentColor"
// // //             strokeWidth="1.8"
// // //             strokeLinecap="round"
// // //             strokeLinejoin="round"
// // //           >
// // //             <polygon points="12 2 2 7 12 12 22 7 12 2" />
// // //             <polyline points="2 12 12 17 22 12" />
// // //             <polyline points="2 17 12 22 22 17" />
// // //           </svg>

// // //           Technology Stack
// // //         </h1>
// // //       </div>

// // //       <div>
// // //         <div>
// // //           <div>
// // //             <h1>Languages & Frameworks
// // //             </h1>
// // //           </div>
// // //           <div className='flex flex-row flex-wrap justify-center gap-10'>
// // //             {technologies.map((technology) => (
// // //               <div
// // //                 className="relative group cursor-pointer flex items-center justify-center"
// // //                 key={technology.name}
// // //               >
// // //                 {/* <BallCanvas icon={technology.icon} /> */}
// // //                 <BallCanvas
// // //                   icon={technology.icon}
// // //                   mobileIcon={technology.mobileIcon}
// // //                 />

// // //                 <div
// // //                   className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
// // //                 bg-[#7b7980] text-yellow-600 text-xs px-2 py-1 rounded shadow-lg 
// // //                 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10
// // //                 pointer-events-none whitespace-nowrap"
// // //                 >
// // //                   {technology.name}
// // //                 </div>
// // //               </div>
// // //             ))}

// // //           </div>
// // //         </div>

// // //         <div className="flex flex-col justify-between">
// // //           <div>
// // //             <h1>Databases
// // //             </h1>
// // //           </div>
// // //           <div className='flex flex-row flex-wrap justify-center gap-10'>
// // //             {database.map((technology) => (
// // //               <div
// // //                 className="relative group cursor-pointer flex items-center justify-center"
// // //                 key={technology.name}
// // //               >
// // //                 {/* <BallCanvas icon={technology.icon} /> */}
// // //                 <BallCanvas
// // //                   icon={technology.icon}
// // //                   mobileIcon={technology.mobileIcon}
// // //                 />

// // //                 <div
// // //                   className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
// // //                 bg-[#7b7980] text-yellow-600 text-xs px-2 py-1 rounded shadow-lg 
// // //                 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10
// // //                 pointer-events-none whitespace-nowrap"
// // //                 >
// // //                   {technology.name}
// // //                 </div>
// // //               </div>
// // //             ))}

// // //           </div>

// // //         </div>

// // //         <div className="flex flex-col justify-between">
// // //           <div>
// // //             <h1>
// // //               Cloud & DevOps
// // //             </h1>
// // //           </div>
// // //           <div className='flex flex-row flex-wrap justify-center gap-10'>
// // //             {database.map((technology) => (
// // //               <div
// // //                 className="relative group cursor-pointer flex items-center justify-center"
// // //                 key={technology.name}
// // //               >
// // //                 {/* <BallCanvas icon={technology.icon} /> */}
// // //                 <BallCanvas
// // //                   icon={technology.icon}
// // //                   mobileIcon={technology.mobileIcon}
// // //                 />

// // //                 <div
// // //                   className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
// // //                 bg-[#7b7980] text-yellow-600 text-xs px-2 py-1 rounded shadow-lg 
// // //                 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10
// // //                 pointer-events-none whitespace-nowrap"
// // //                 >
// // //                   {technology.name}
// // //                 </div>
// // //               </div>
// // //             ))}

// // //           </div>

// // //         </div>
// // //       </div>



// // //     </div>

// // //   );
// // // };

// // // export default SectionWrapper(Tech, "");
// // import React from "react";

// // import { BallCanvas } from "./canvas";
// // import { SectionWrapper } from "../hoc";
// // import { technologies, database } from "../constants";
// // import { styles } from "../styles";

// // const Tech = () => {
// //   return (
// //     <div className="flex flex-col gap-16">

// //       {/* ===== SECTION TITLE ===== */}
// //       <div className="flex justify-center items-center text-center">
// //         <h1
// //           className={`
// //             ${styles.sectionHeadText}
// //             font-serif tracking-wide
// //             flex items-center gap-3
// //             py-3 px-6
// //             shadow-lg
// //           `}
// //         >
// //           {/* Stack Icon */}
// //           <svg
// //             viewBox="0 0 24 24"
// //             className="w-9 h-9 text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]"
// //             fill="none"
// //             stroke="currentColor"
// //             strokeWidth="1.8"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //           >
// //             <polygon points="12 2 2 7 12 12 22 7 12 2" />
// //             <polyline points="2 12 12 17 22 12" />
// //             <polyline points="2 17 12 22 22 17" />
// //           </svg>

// //           Technology Stack
// //         </h1>
// //       </div>

// //       {/* ===== LANGUAGES & FRAMEWORKS ===== */}
// //       <div className="flex flex-col gap-8">
// //         <h2 className="text-center text-xl font-semibold tracking-wide text-gray-200">
// //           Languages & Frameworks
// //         </h2>

// //         <div className="flex flex-wrap justify-center gap-10">
// //           {technologies.map((technology) => (
// //             <div
// //               key={technology.name}
// //               className="relative group cursor-pointer flex items-center justify-center"
// //             >
// //               <BallCanvas
// //                 icon={technology.icon}
// //                 mobileIcon={technology.mobileIcon}
// //               />

// //               {/* Tooltip */}
// //               <div
// //                 className="
// //                   absolute bottom-full left-1/2 -translate-x-1/2 mb-2
// //                   bg-[#7b7980] text-yellow-600 text-xs
// //                   px-2 py-1 rounded shadow-lg
// //                   opacity-0 group-hover:opacity-100
// //                   transition-opacity duration-300
// //                   pointer-events-none whitespace-nowrap
// //                 "
// //               >
// //                 {technology.name}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* ===== DATABASES ===== */}
// //       <div className="flex flex-col gap-8">
// //         <h2 className="text-center text-xl font-semibold tracking-wide text-gray-200">
// //           Databases
// //         </h2>

// //         <div className="flex flex-wrap justify-center gap-10">
// //           {database.map((technology) => (
// //             <div
// //               key={technology.name}
// //               className="relative group cursor-pointer flex items-center justify-center"
// //             >
// //               <BallCanvas
// //                 icon={technology.icon}
// //                 mobileIcon={technology.mobileIcon}
// //               />

// //               <div
// //                 className="
// //                   absolute bottom-full left-1/2 -translate-x-1/2 mb-2
// //                   bg-[#7b7980] text-yellow-600 text-xs
// //                   px-2 py-1 rounded shadow-lg
// //                   opacity-0 group-hover:opacity-100
// //                   transition-opacity duration-300
// //                   pointer-events-none whitespace-nowrap
// //                 "
// //               >
// //                 {technology.name}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* ===== CLOUD & DEVOPS ===== */}
// //       <div className="flex flex-col gap-8">
// //         <h2 className="text-center text-xl font-semibold tracking-wide text-gray-200">
// //           Cloud & DevOps
// //         </h2>

// //         <div className="flex flex-wrap justify-center gap-10">
// //           {database.map((technology) => (
// //             <div
// //               key={technology.name}
// //               className="relative group cursor-pointer flex items-center justify-center"
// //             >
// //               <BallCanvas
// //                 icon={technology.icon}
// //                 mobileIcon={technology.mobileIcon}
// //               />

// //               <div
// //                 className="
// //                   absolute bottom-full left-1/2 -translate-x-1/2 mb-2
// //                   bg-[#7b7980] text-yellow-600 text-xs
// //                   px-2 py-1 rounded shadow-lg
// //                   opacity-0 group-hover:opacity-100
// //                   transition-opacity duration-300
// //                   pointer-events-none whitespace-nowrap
// //                 "
// //               >
// //                 {technology.name}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //     </div>
// //   );
// // };

// // export default SectionWrapper(Tech, "");
// import React from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies, database, cloud } from "../constants";
// import { styles } from "../styles";

// const Tech = () => {
//   return (
//     <div className="flex flex-col gap-20">

//       {/* ===== SECTION TITLE ===== */}
//       <div className="flex justify-center items-center text-center">
//         <h1
//           className={`
//             ${styles.sectionHeadText}
//             font-serif tracking-wide
//             flex items-center gap-3
//             py-3 px-6
//           `}
//         >
//           {/* Stack Icon */}
//           <svg
//             viewBox="0 0 24 24"
//             className="w-9 h-9 text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="1.8"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <polygon points="12 2 2 7 12 12 22 7 12 2" />
//             <polyline points="2 12 12 17 22 12" />
//             <polyline points="2 17 12 22 22 17" />
//           </svg>

//           Technology Stack
//         </h1>
//       </div>

//       {/* ===== LANGUAGES & FRAMEWORKS ===== */}
//       <div className="flex flex-col gap-10">
//         <h2 className="text-center text-lg md:text-xl font-semibold tracking-widest text-emerald-400">
//           LANGUAGES & FRAMEWORKS
//         </h2>

//         <div
//           className="
//             grid
//             grid-cols-2
//             sm:grid-cols-3
//             md:grid-cols-4
//             lg:grid-cols-6
//             gap-6
//             justify-items-center
//           "
//         >
//           {technologies.map((technology) => (
//             <div
//               key={technology.name}
//               className="
//                 flex flex-col items-center gap-3
//                 w-[120px] sm:w-[130px]
//                 p-4
//                 rounded-2xl
//                 bg-white/5
//                 border border-white/10
//                 backdrop-blur-md
//                 shadow-md
//               "
//             >
//               <div className="w-20 h-20 flex items-center justify-center">
//                 <BallCanvas
//                   icon={technology.icon}
//                   mobileIcon={technology.mobileIcon}
//                 />
//               </div>

//               <p className="text-sm text-gray-200 text-center font-medium">
//                 {technology.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ===== TOOLS ===== */}
//       <div className="flex flex-col gap-10">
//         <h2 className="text-center text-lg md:text-xl font-semibold tracking-widest text-emerald-400">
//           DATABASES
//         </h2>

//         <div
//           className="
//             grid
//             grid-cols-2
//             sm:grid-cols-3
//             md:grid-cols-4
//             lg:grid-cols-6
//             gap-6
//             justify-items-center
//           "
//         >
//           {cloud.map((technology) => (
//             <div
//               key={technology.name}
//               className="
//                 flex flex-col items-center gap-3
//                 w-[120px] sm:w-[130px]
//                 p-4
//                 rounded-2xl
//                 bg-white/5
//                 border border-white/10
//                 backdrop-blur-md
//                 shadow-md
//               "
//             >
//               <div className="w-20 h-20 flex items-center justify-center">
//                 <BallCanvas
//                   icon={technology.icon}
//                   mobileIcon={technology.mobileIcon}
//                 />
//               </div>

//               <p className="text-sm text-gray-200 text-center font-medium">
//                 {technology.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* ===== DATABASES ===== */}
//       {/* <div className="flex flex-col gap-10">
//         <h2 className="text-center text-lg md:text-xl font-semibold tracking-widest text-emerald-400">
//           DATABASES
//         </h2>

//         <div
//           className="
//             grid
//             grid-cols-2
//             sm:grid-cols-3
//             md:grid-cols-4
//             lg:grid-cols-6
//             gap-6
//             justify-items-center
//           "
//         >
//           {database.map((technology) => (
//             <div
//               key={technology.name}
//               className="
//                 flex flex-col items-center gap-3
//                 w-[120px] sm:w-[130px]
//                 p-4
//                 rounded-2xl
//                 bg-white/5
//                 border border-white/10
//                 backdrop-blur-md
//                 shadow-md
//               "
//             >
//               <div className="w-20 h-20 flex items-center justify-center">
//                 <BallCanvas
//                   icon={technology.icon}
//                   mobileIcon={technology.mobileIcon}
//                 />
//               </div>

//               <p className="text-sm text-gray-200 text-center font-medium">
//                 {technology.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div> */}

//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");
import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, cloud } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="flex flex-col gap-24 w-full">

      {/* ===== TITLE ===== */}
      <div className="flex justify-center items-center text-center">
        <h1
          className={`${styles.sectionHeadText} font-serif flex items-center gap-3`}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-9 h-9 text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.9)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 12 12 17 22 12" />
            <polyline points="2 17 12 22 22 17" />
          </svg>
          Technology Stack
        </h1>
      </div>

      {/* ===== LANGUAGES & FRAMEWORKS ===== */}
      <section className="w-full">
        <h2 className="text-center text-lg md:text-xl font-semibold tracking-widest text-emerald-400 mb-12">
          LANGUAGES & FRAMEWORKS
        </h2>

        <div
          className="flex flex-row flex-wrap justify-center gap-10"
        >
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="
                flex flex-col items-center gap-3
                p-5
                rounded-2xl
                bg-white/5
                border border-emerald-400/25
                backdrop-blur-md
                shadow-[0_0_18px_rgba(16,185,129,0.18)]
                transition-all duration-300
                hover:shadow-[0_0_28px_rgba(16,185,129,0.55)]
              "
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <BallCanvas
                  icon={technology.icon}
                  mobileIcon={technology.mobileIcon}
                />
              </div>

              <p className="text-sm text-gray-200 font-medium text-center">
                {technology.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== DATABASES / TOOLS ===== */}
      <section className="w-full">
        <h2 className="text-center text-lg md:text-xl font-semibold tracking-widest text-emerald-400 mb-12">
          DATABASES / TOOLS
        </h2>

        <div
          className="flex flex-row flex-wrap justify-center gap-10"
        >
          {cloud.map((technology) => (
            <div
              key={technology.name}
              className="
                flex flex-col items-center gap-3
                p-5
                rounded-2xl
                bg-white/5
                border border-emerald-400/25
                backdrop-blur-md
                shadow-[0_0_18px_rgba(16,185,129,0.18)]
                transition-all duration-300
                hover:shadow-[0_0_28px_rgba(16,185,129,0.35)]
              "
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <BallCanvas
                  icon={technology.icon}
                  mobileIcon={technology.mobileIcon}
                />
              </div>

              <p className="text-sm text-gray-200 font-medium text-center">
                {technology.name}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default SectionWrapper(Tech, "");
