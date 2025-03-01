/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: chiaragiacomuzzo (https://sketchfab.com/chiara_giacomuzzo)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/asteroids-planet-lowpoly-69a91b856ec24b3ea53662b563e9f9dc
Title: Asteroids planet lowpoly
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Asteroids = (props) => {
  const { nodes, materials } = useGLTF("/models/space/asteroids.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials["asteroidi.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials["asteroidi.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.mattone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials["mattone.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.toon_shader_fico}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/space/asteroids.glb");

export default Asteroids;
