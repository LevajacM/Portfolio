import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Css3Logo = ({
  speed = 1, // Brzina rotacije
  radius = 5, // Radijus kružnog kretanja
  height = 2, // Visina (pozicija u Y osi)
  rotationSpeed = 0.5, // Brzina rotacije oko Y ose
  ...props
}) => {
  const { nodes, materials } = useGLTF("/models/logos/css3-h5.glb");
  const groupRef = useRef();
  const startAngle = Math.random() * Math.PI * 2;

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Izračunaj novu poziciju u 3D prostoru koristeći sferne koordinate (samo X i Z)
      const angle = state.clock.elapsedTime * speed + startAngle; // Povećaj ugao u zavisnosti od vremena
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;
      // Poziciju modela na osnovu izračunatog X, Y (height) i Z
      groupRef.current.position.set(x, height, z);
      // rotacija oko svoje ose
      groupRef.current.rotation.y += delta * rotationSpeed;
    }
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

useGLTF.preload("/models/logos/css3-h5.glb");

export default Css3Logo;
