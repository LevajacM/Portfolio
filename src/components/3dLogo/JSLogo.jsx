import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const JSLogo = ({
  speed = 1, // Brzina rotacije
  radius = 5, // Radijus kružnog kretanja
  height = 2, // Visina (pozicija u Y osi)
  rotationSpeed = 0.5, // Brzina rotacije oko Y ose
  ...props
}) => {
  const { nodes, materials } = useGLTF("/models/logos/js-h5.glb");
  const groupRef = useRef();
  const startAngle = Math.random() * Math.PI * 2;

  useFrame((state, delta) => {
    if (groupRef.current) {
      if (speed > 0 || radius > 0) {
        // Ako se model treba kretati, onda menjaj poziciju
        const angle = state.clock.elapsedTime * speed + startAngle;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        groupRef.current.position.set(x, height, z);
      }

      // Rotacija se uvek primenjuje ako rotationSpeed nije 0
      if (rotationSpeed > 0) {
        groupRef.current.rotation.y += delta * rotationSpeed;
      }
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

useGLTF.preload("/models/logos/js-h5.glb");

export default JSLogo;
