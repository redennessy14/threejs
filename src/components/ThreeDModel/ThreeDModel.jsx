import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./ThreeDModel.css";

const Model = () => {
  const gltf = useGLTF("/model/scene.gltf");
  const modelRef = useRef();
  const [isRotatingRight, setIsRotatingRight] = useState(true);

  useFrame(() => {
    if (modelRef.current) {
      if (isRotatingRight) {
        modelRef.current.rotation.y += 0.005;
        if (modelRef.current.rotation.y >= Math.PI / 4) {
          setIsRotatingRight(false);
        }
      } else {
        modelRef.current.rotation.y -= 0.002;
        if (modelRef.current.rotation.y <= 0) {
          setIsRotatingRight(true);
        }
      }
    }
  });

  return (
    <primitive
      object={gltf.scene}
      dispose={null}
      position={[0, -3, 0]}
      ref={modelRef}
    />
  );
};

const ThreeDModelViewer = () => {
  return (
    <div className="canvas-container">
      <Canvas className="canvas" camera={{ position: [-1, 1, 4] }}>
        {/* Освещение */}
        <ambientLight intensity={5} color="white" />
        <pointLight position={[10, 10, 10]} intensity={10} color="white" />
        {/* Точечный свет */}
        <directionalLight position={[-5, 5, 5]} intensity={5} color="white" />
        {/* Направленный свет */}
        {/* Загрузка модели */}
        <Model />
        {/* Управление камерой */}
        <OrbitControls
          minPolarAngle={Math.PI / 3} // Минимальный угол обзора
          maxPolarAngle={Math.PI / 3} // Максимальный угол обзора
          minDistance={5} // Минимальное расстояние до объекта
          maxDistance={8} // Максимальное расстояние до объекта
        />
      </Canvas>
    </div>
  );
};

export default ThreeDModelViewer;
