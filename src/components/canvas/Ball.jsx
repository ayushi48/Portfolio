import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";
import useIsMobile from "../../utils/useIsMobile"; // FIXED PATH

const Ball = ({ imgUrl }) => {
  const decal = useLoader(THREE.TextureLoader, imgUrl);

  return (
    <Float speed={1.7} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 0, 0.1]} />

      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 0]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, mobileIcon }) => {
  const isMobile = useIsMobile();

  // PROTECT AGAINST UNDEFINED
  const fallbackImage = icon || "/assets/tech/default.png";
  const mobileImage = mobileIcon || icon;

  // MOBILE MODE → ONLY SHOW IMAGE (NO 3D)
  if (isMobile) {
    return (
      <div className="w-[90px] h-[90px] flex items-center justify-center">
        <img
          src={mobileImage}
          alt="tech-icon"
          className="w-[70px] h-[70px] object-contain"
        />
      </div>
    );
  }

  // DESKTOP MODE → FULL 3D
  return (
    <div className="w-[110px] h-[110px]">
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={fallbackImage} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
