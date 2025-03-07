/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Conrad Justin (https://sketchfab.com/ConradJustin)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/mobile-home-5240b1dbc29c4ea28be7f91b3638951a
Title: Mobile Home
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
// import { useThree } from "@react-three/fiber";

const Bonsai = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/heroModels/mobile-home.glb"
  );
  // const { camera } = useThree();
  // camera.position.set(0, 0, 0);

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      // console.log(actions);
      const action = actions[Object.keys(actions)[0]];
      action.play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[Math.PI / 2, 0, -Math.PI]}>
          <group
            name='622331dd64104be7aa66e2f7d6b5dc8efbx'
            rotation={[-Math.PI, 0, 0]}
            scale={0.05}
          >
            <group name='Object_2'>
              <group name='RootNode'>
                <group
                  name='BezierCurve003'
                  position={[1208.747, -1918.884, -205.693]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[73.461, 114.205, 73.461]}
                >
                  <mesh
                    name='BezierCurve003_foliage_baked_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.BezierCurve003_foliage_baked_0.geometry}
                    material={materials.foliage_baked}
                  />
                  <mesh
                    name='BezierCurve003_foliage_baked_0_1'
                    castShadow
                    receiveShadow
                    geometry={nodes.BezierCurve003_foliage_baked_0_1.geometry}
                    material={materials.foliage_baked}
                  />
                </group>
                <group
                  name='building_D_pipes'
                  position={[70.961, 517.462, 1209.234]}
                  rotation={[0, 0, Math.PI]}
                  scale={100}
                >
                  <mesh
                    name='building_D_pipes_pipes_moving_baked_0'
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.building_D_pipes_pipes_moving_baked_0.geometry
                    }
                    material={materials.pipes_moving_baked}
                  />
                </group>
                <group
                  name='rock_left'
                  position={[-1129.298, 4955.811, 5110.5]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    name='rock_left_stones_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.rock_left_stones_0.geometry}
                    material={materials.stones}
                  />
                  <mesh
                    name='rock_left_ROCKS_SMALL_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.rock_left_ROCKS_SMALL_0.geometry}
                    material={materials.ROCKS_SMALL}
                  />
                  <mesh
                    name='rock_left_rock_A_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.rock_left_rock_A_0.geometry}
                    material={materials.rock_A}
                  />
                  <mesh
                    name='rock_left_rock_B_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.rock_left_rock_B_0.geometry}
                    material={materials.rock_B}
                  />
                </group>
                <group
                  name='stone_small_C001'
                  position={[-1129.298, 4955.811, 5110.5]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    name='stone_small_C001_rock_top_baked_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.stone_small_C001_rock_top_baked_0.geometry}
                    material={materials.rock_top_baked}
                  />
                </group>
                <group
                  name='stone_small_C002'
                  position={[-1129.298, 4955.811, 5110.5]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    name='stone_small_C002_rock_right_baked_0'
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.stone_small_C002_rock_right_baked_0.geometry
                    }
                    material={materials.rock_right_baked}
                  />
                </group>
                <group
                  name='rock_middle'
                  position={[-1129.298, 4955.811, 5110.5]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    name='rock_middle_rock_middle_baked_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.rock_middle_rock_middle_baked_0.geometry}
                    material={materials.rock_middle_baked}
                  />
                </group>
                <group
                  name='bridge_suspended002'
                  position={[-2351.661, 3178, 1078.609]}
                  rotation={[0, 0, -2.834]}
                  scale={100}
                >
                  <mesh
                    name='bridge_suspended002_platform_calm_0'
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.bridge_suspended002_platform_calm_0.geometry
                    }
                    material={materials.platform_calm}
                  />
                </group>
                <group
                  name='Armature001'
                  position={[-154.142, 606.122, -66.65]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={100}
                >
                  <group name='Object_23'>
                    <primitive object={nodes._rootJoint} />
                  </group>
                </group>
                <group
                  name='bridge_suspended010'
                  position={[641.867, -5206.882, 755.615]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={100}
                >
                  <mesh
                    name='bridge_suspended010_platform_unstable_baked_0'
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.bridge_suspended010_platform_unstable_baked_0
                        .geometry
                    }
                    material={materials.platform_unstable_baked}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/heroModels/mobile-home.glb");

export default Bonsai;
