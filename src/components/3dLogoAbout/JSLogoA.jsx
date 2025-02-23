import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const JSLogoA = (props) => {
  const { nodes, materials } = useGLTF("/models/logos/js-h5.glb");
  const groupRef = useRef();

  const [startTime, setStartTime] = useState(Date.now());
  const [rotationSpeed, setRotationSpeed] = useState(1);
  const [phase, setPhase] = useState("accelerating"); // Da bismo pratili faze (brzo, sporo)

  useFrame(() => {
    const elapsedTime = (Date.now() - startTime) / 1000;

    let currentRotationSpeed = rotationSpeed;

    // Brza rotacija traje 3 sekunde
    if (phase === "accelerating") {
      currentRotationSpeed = Math.min(rotationSpeed + elapsedTime * 0.5, 1); // Ubrzaj rotaciju
      if (elapsedTime > 1.5) {
        setPhase("slowing"); // Pređi na fazu usporavanja
        setStartTime(Date.now()); // Resetuj vreme za novu fazu
      }
    }

    // Spora rotacija traje 4 sekunde
    if (phase === "slowing") {
      currentRotationSpeed = Math.max(rotationSpeed - elapsedTime * 0.1, 0.001); // Sporo smanjuj brzinu
      if (elapsedTime > 10) {
        setPhase("accelerating"); // Pređi na fazu ubrzanja
        setStartTime(Date.now()); // Resetuj vreme za novu fazu
      }
    }

    // Rotiraj objekat oko Y ose koristeći trenutnu brzinu
    groupRef.current.rotation.y += currentRotationSpeed * Math.PI * 0.1;
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
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

useGLTF.preload("/models/logos/js-h5.glb");

export default JSLogoA;
