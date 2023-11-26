import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./ThreeDModel.css";

const Model = () => {
  const { scene, animations } = useGLTF("/model/scene.gltf");
  const group = useRef();
  const [rotationAngle, setRotationAngle] = useState(0.005);

  useFrame(() => {
    group.current.rotation.y += rotationAngle;
  });

  return (
    <group ref={group} scale={[1.5, 1.5, 1.5]}>
      <primitive object={scene} />
      {animations.map((animation, index) => (
        <primitive key={index} object={animation} />
      ))}
    </group>
  );
};

const ThreeDModelViewer = () => {
  return (
    <div className="canvas-container">
      <Canvas className="canvas" camera={{ position: [-10, 5, 10] }}>
        {/* Освещение */}
        <ambientLight intensity={5} color="white" />
        <pointLight position={[10, 10, 10]} intensity={10} color="white" />
        {/* Точечный свет */}
        <directionalLight position={[-5, 5, 5]} intensity={5} color="white" />
        {/* Направленный свет */}
        {/* Загрузка модели */}
        <Model position={[1, 1, 1]} />
      </Canvas>
    </div>
  );
};

export default ThreeDModelViewer;
