import { useState, Suspense, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { approachList } from "../utils/list";
import * as THREE from "three";
import { Environment, Lightformer, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../hero/CanvasLoader";
import {
  EffectComposer,
  Bloom,
  LUT,
  BrightnessContrast,
  HueSaturation,
  ToneMapping,
} from "@react-three/postprocessing";
import { LUTCubeLoader, ToneMappingMode } from "postprocessing";
import FlowerTransformed from "./Flower-transformed";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const Approach = () => {
  const [speed, setSpeed] = useState(0.009);

  //-----------------------------------------
  const [isMobile, setIsMobile] = useState(false);
  const [animate, setAnimate] = useState(false);
  const { scrollYProgress } = useScroll();
  const screenWidth = window.innerWidth;
  let animateWidth;
  if (screenWidth > 1023) {
    animateWidth = 0.59;
  }
  if (screenWidth <= 1023) {
    animateWidth = 0.63;
  }
  console.log(scrollYProgress.get());

  const checkWindowSize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (screenWidth > 1023) {
      animateWidth = 0.59;
    }
    if (screenWidth <= 1023) {
      animateWidth = 0.63;
    }

    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, [screenWidth]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      if (current > animateWidth) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    }
  });
  //----------------------------------------
  const texture = useLoader(
    LUTCubeLoader,
    "/models/flower-transformed/F-6800-STD.cube"
  );

  const handleRotationSpeed = (num) => {
    setSpeed(num);
  };

  return (
    <section id='approach' className='c-space my-20'>
      <div className='w-full text-white-600'>
        <h3 className='head-text'>My Approach</h3>
        <div className='work-container'>
          <div className='work-canvas'>
            <Canvas
              gl={{ antialias: false }}
              camera={{ position: [0, 2.5, 5], fov: 35 }}
              onCreated={(state) => {
                state.gl.toneMapping = THREE.NoToneMapping;
              }}
            >
              <color attach='background' args={["#151520"]} />
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              <Suspense fallback={<CanvasLoader />}>
                <FlowerTransformed
                  position={[0, -0.18, 0]}
                  scale={0.6}
                  rotationSpeed={speed}
                />
              </Suspense>
              <OrbitControls />
              <Environment
                files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/blue_photo_studio_1k.hdr'
                resolution={512}
              >
                <group rotation={[0, 0, 1]}>
                  <Lightformer
                    form='circle'
                    intensity={10}
                    position={[0, 10, -10]}
                    scale={20}
                    onUpdate={(self) => self.lookAt(0, 0, 0)}
                  />
                  <Lightformer
                    intensity={0.1}
                    onUpdate={(self) => self.lookAt(0, 0, 0)}
                    position={[-5, 1, -1]}
                    rotation-y={Math.PI / 2}
                    scale={[50, 10, 1]}
                  />
                  <Lightformer
                    intensity={0.1}
                    onUpdate={(self) => self.lookAt(0, 0, 0)}
                    position={[10, 1, 0]}
                    rotation-y={-Math.PI / 2}
                    scale={[50, 10, 1]}
                  />
                  <Lightformer
                    color='white'
                    intensity={0.2}
                    onUpdate={(self) => self.lookAt(0, 0, 0)}
                    position={[0, 1, 0]}
                    scale={[10, 100, 1]}
                  />
                </group>
              </Environment>
              <EffectComposer disableNormalPass>
                <Bloom mipmapBlur luminanceThreshold={1} intensity={2} />
                <LUT lut={texture} />
                <BrightnessContrast brightness={0} contrast={0.1} />
                <HueSaturation hue={0} saturation={-0.25} />
                <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
              </EffectComposer>
            </Canvas>
          </div>
          <div className='work-content'>
            <div className='sm:py-10 py-5 sm:px-5 px-2.5 '>
              {!isMobile ? (
                <AnimatePresence mode='sync'>
                  {approachList.map((item, ind) => {
                    const delay = (ind + 1) / 3;
                    return (
                      <div
                        key={item.id}
                        onPointerOver={() => setSpeed(0.003)}
                        onPointerOut={() => setSpeed(0.009)}
                        className='work-content_container group '
                      >
                        <div className='flex flex-col h-full justify-start items-center py-2'>
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 0,
                            }}
                            animate={{
                              y: animate ? 0 : 700,
                              opacity: animate ? 1 : 0,
                            }}
                            transition={{
                              duration: 0.2 + delay,
                            }}
                            className='work-content_logo'
                          >
                            <img
                              src={item.icon}
                              alt='dvsdv'
                              className='h-full w-full'
                            />
                          </motion.div>
                          <div className='work-content_bar' />
                        </div>
                        <div className='sm:p-5 px-2.5 py-5'>
                          <p className='font-bold text-white-800'>
                            {item.title}
                          </p>
                          <p className='group-hover:text-white transition ease-in-out duration-500'>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </AnimatePresence>
              ) : (
                <>
                  {approachList.map((item, ind) => {
                    const delay = (ind + 1) / 3;
                    return (
                      <div
                        key={item.id}
                        onPointerOver={() => setSpeed(0.003)}
                        onPointerOut={() => setSpeed(0.009)}
                        className='work-content_container group '
                      >
                        <div className='flex flex-col h-full justify-start items-center py-2'>
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 0,
                            }}
                            animate={{
                              y: animate ? 0 : 700,
                              opacity: animate ? 1 : 0,
                            }}
                            transition={{
                              duration: 0.2 + delay,
                            }}
                            className='work-content_logo'
                          >
                            <img
                              src={item.icon}
                              alt='dvsdv'
                              className='h-full w-full'
                            />
                          </motion.div>
                          <div className='work-content_bar' />
                        </div>
                        <div className='sm:p-5 px-2.5 py-5'>
                          <p className='font-bold text-white-800'>
                            {item.title}
                          </p>
                          <p className='group-hover:text-white transition ease-in-out duration-500'>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
