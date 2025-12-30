// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader";

// const Computers = () => {
//   const computer = useGLTF("/desktop_pc/scene.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={4} groundColor="grey" />
//       <ambientLight intensity={0.7} />
//       <pointLight intensity={1} position={[10, 10, 10]} />

//       <primitive
//         object={computer.scene}
//         scale={0.7}             // Balanced size
//         position={[0, -1.6, 0]} // Perfect depth and height
//         rotation={[0, -0.53, 0]} // Natural facing angle
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const query = window.matchMedia("(max-width: 500px)");
//     setIsMobile(query.matches);

//     const listener = (event) => setIsMobile(event.matches);
//     query.addEventListener("change", listener);

//     return () => query.removeEventListener("change", listener);
//   }, []);

//   /* ===========================
//         MOBILE VERSION (PNG)
//      =========================== */
//   if (isMobile) {
//     return (
//       <div className="w-full flex justify-center items-center mt-10">
//         <img
//           src="/profile.png"
//           alt="profile"
//           className="
//             w-[250px]
//             sm:w-[240px]
//             md:w-[300px]
//             lg:w-[360px]
//             xl:w-[420px]
//             h-auto object-contain
//           "
//         />
//       </div>
//     );
//   }

//   /* ===========================
//         DESKTOP 3D VERSION
//      =========================== */
//   return (

//     <Canvas
//       frameloop='demand'
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 12], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="grey" />
      <ambientLight intensity={0.6} />
      <pointLight intensity={1} position={[10, 10, 10]} />
      {/* <pointLight color="white" /> */}

      {/* <OrbitControls target={[0, -0.5, 0]} /> */}

      <primitive
        object={computer.scene}
        scale={isMobile ? 1.5 : 0.7}
        position={isMobile ? [0, -1.1, -2.5] : [0, 0, -1.3]}
        rotation={[0, -0.53, 0]}

      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 768px)");
    setIsMobile(query.matches);

    const listener = (e) => setIsMobile(e.matches);
    query.addEventListener("change", listener);

    return () => query.removeEventListener("change", listener);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 12], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
