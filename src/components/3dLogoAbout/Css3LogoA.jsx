import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Css3LogoA = (props) => {
  const { nodes, materials } = useGLTF("/models/logos/css3-h5.glb");
  const groupRef = useRef();

  const [startTime, setStartTime] = useState(Date.now());
  const [rotationSpeed, setRotationSpeed] = useState(1);
  const [phase, setPhase] = useState("accelerating");
  const [isRotating, setIsRotating] = useState(false);
  // const [hasRotatedOnce, setHasRotatedOnce] = useState(false);

  const handlePointerOver = () => {
    setIsRotating(true); // Pokreni rotaciju kad korisnik pređe preko modela
    setStartTime(Date.now());
    setPhase("accelerating");
  };

  // const handlePointerOut = () => {
  //   setIsRotating(false); // Zaustavi rotaciju
  //   groupRef.current.rotation.y = initialRotation.current; // Vratite model u početni položaj
  // };

  useFrame(() => {
    if (!isRotating) return;

    const elapsedTime = (Date.now() - startTime) / 1000;
    let currentRotationSpeed = rotationSpeed;

    if (phase === "accelerating") {
      currentRotationSpeed = Math.min(rotationSpeed + elapsedTime * 0.5, 1);
      if (elapsedTime > 1.5) {
        setPhase("slowing");
        setStartTime(Date.now());
      }
    }

    if (phase === "slowing") {
      currentRotationSpeed = Math.max(rotationSpeed - elapsedTime * 0.1, 0.001);
      if (elapsedTime > 10) {
        // setPhase("accelerating");
        // setStartTime(Date.now());
        setIsRotating(false);
      }
    }

    groupRef.current.rotation.y += currentRotationSpeed * Math.PI * 0.1;
  });

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      onPointerOver={handlePointerOver}
      // onPointerOut={handlePointerOut}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_Mesh_head_geo001_lambert2SG001.geometry}
        material={materials["lambert2SG.001"]}
        rotation={[Math.PI, Math.PI, Math.PI]}
      />
    </group>
  );
};

useGLTF.preload("/models/logos/css3-h5.glb");

export default Css3LogoA;
