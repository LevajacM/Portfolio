import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Arrow = (props) => {
  const { nodes, materials } = useGLTF("/models/arrow.glb");
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  const initialRotation = [3, 0, Math.PI / 2]; // Početna rotacija
  const rotationSpeed = 0.05; // Brzina rotacije na hover
  const returnSpeed = 0.02; // Brzina vraćanja u početni položaj

  useFrame(() => {
    if (!groupRef.current) return;

    if (hovered) {
      // Ako je hoverovan, rotira normalno
      groupRef.current.rotation.y += rotationSpeed;
    } else {
      // Kada nije hoverovan, vraća se u početni položaj
      const currentY = groupRef.current.rotation.y;
      const targetY = initialRotation[1]; // Ciljna rotacija na Y osi

      // Progresivno smanjujemo razliku između trenutne i početne rotacije
      if (Math.abs(currentY - targetY) > 0.01) {
        groupRef.current.rotation.y += (targetY - currentY) * returnSpeed;
      } else {
        groupRef.current.rotation.y = targetY; // Postavljamo tačno na početak kad je jako blizu
      }
    }
  });

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      rotation={initialRotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <group scale={0.009}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_Material001_0.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_Material002_0.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/arrow.glb");

export default Arrow;
