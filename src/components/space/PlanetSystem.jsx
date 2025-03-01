/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: mwilson1 (https://sketchfab.com/mwilson1)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/my-planet-system-a965f24cd9af484c9d71f0c0454dd0b6
Title: My_Planet_System
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const PlanetSystem = (props) => {
  const { nodes, materials } = useGLTF("/models/space/planet_system.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.205, -3.58, -0.593]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials["00___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials["01___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["02___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials["03___Default"]}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/space/planet_system.glb");

export default PlanetSystem;
