import { useState, Suspense, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import { Vector3 } from "three";
import CanvasLoader from "../hero/CanvasLoader";
import Button from "../hero/Button";
import { IoCopy } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
//******************************************
import Css3LogoA from "../3dLogoAbout/Css3LogoA";
import FramerLogoA from "../3dLogoAbout/FramerLogoA";
import JSLogoA from "../3dLogoAbout/JSLogoA";
import NextjsLogoA from "../3dLogoAbout/NextjsLogoA";
import ReactLogoA from "../3dLogoAbout/ReactLogoA";
import TailwindLogoA from "../3dLogoAbout/TailwindLogoA";
import TypescriptLogoA from "../3dLogoAbout/TypescriptLogoA";
//******************************************
import EnergyStation from "./EnergyStation";
import SpaceStation from "./SpaceStation";
import Astronaut from "./Astronaut";
//******************************************

const SceneOne = () => {
  const logoScale = 0.04;
  return (
    <Suspense fallback={<CanvasLoader />}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 35]} />
      <Center>
        <group position={[0, 0, 0]}>
          <Css3LogoA scale={logoScale} position={[0, 2.5, 0]} />
          <FramerLogoA scale={logoScale} position={[2.5, -1.25, 0]} />
          <JSLogoA scale={logoScale} position={[-2.5, 1.25, 0]} />
          <NextjsLogoA scale={logoScale} position={[0, -2.5, 0]} />
          <ReactLogoA scale={logoScale} position={[0, 0, 0]} />
          <TailwindLogoA scale={logoScale} position={[2.5, 1.25, 0]} />
          <TypescriptLogoA scale={logoScale} position={[-2.5, -1.25, 0]} />
        </group>
      </Center>
    </Suspense>
  );
};

const AutoRotatingCamera = () => {
  const { camera } = useThree(); // Uzimamo glavnu kameru
  const speed = 0.00015; // Brzina rotacije

  // Koristimo useFrame da ažuriramo kameru u svakom frejmu
  useFrame(() => {
    // Rotiramo kameru oko scene (center)
    const angle = speed * performance.now(); // Brzina rotacije u zavisnosti od vremena

    // Računamo poziciju kamere
    camera.position.x = Math.cos(angle) * 5; // X pozicija
    camera.position.z = Math.sin(angle) * 5; // Z pozicija
    camera.position.y = 0; // Visina kamere
    camera.lookAt(new Vector3(-2, 0, 0)); // Kamera uvek gleda prema centru scene
  });

  return null;
};

const SceneTwo = () => {
  return (
    <Suspense fallback={<CanvasLoader />}>
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 15]} />
      <Center position={[0, 0, -4]} scale={3.5} rotation={[0, -2.5, 0]}>
        <EnergyStation />
      </Center>
    </Suspense>
  );
};

const Scene3 = () => {
  return (
    <Suspense fallback={<CanvasLoader />}>
      {/* <OrbitControls />      */}
      <ambientLight intensity={4} color='#1B79CF' />
      <directionalLight position={[10, 30, -50]} intensity={1} />
      <spotLight
        position={[-5, 5, -5]}
        intensity={1}
        color='blue'
        angle={Math.PI / 6} // Ovaj parametar određuje širinu svetlosnog konusa
        penumbra={1} // Izglađivanje ivica svetlosnog konusa
        castShadow
      />
      <pointLight position={[5, 5, 5]} intensity={1} color='blue' castShadow />
      <Center position={[0, 0, -120]} scale={3.5} rotation={[0, 2, 0]}>
        <SpaceStation />
      </Center>
    </Suspense>
  );
};

const Scene4 = ({ aNum }) => {
  return (
    <Suspense fallback={<CanvasLoader />}>
      <ambientLight intensity={4} />
      <directionalLight position={[30, 30, 5]} />
      <pointLight position={[5, 5, 5]} intensity={4} color='blue' castShadow />
      <Center position={[0, -2.2, 0]} scale={2.8}>
        <Astronaut rotation={[0, -0.4, 0]} aNum={aNum} />
      </Center>
    </Suspense>
  );
};

//******************************************
const AboutSection = () => {
  const [aNum, setANum] = useState(1);
  const [copyText, setCopyText] = useState(false);
  //----------------------------------------
  const [isMobile, setIsMobile] = useState(false);
  const [animate, setAnimate] = useState(false);
  const { scrollYProgress } = useScroll();
  const screenWidth = window.innerWidth;
  let animateWidth;
  if (screenWidth > 1023) {
    animateWidth = 0.2;
  }
  if (screenWidth <= 1023) {
    animateWidth = 0.18;
  }

  const checkWindowSize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (screenWidth > 1023) {
      animateWidth = 0.2;
    }
    if (screenWidth <= 1023) {
      animateWidth = 0.18;
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
  //------------------------------------------

  const handleCopy = () => {
    navigator.clipboard.writeText("mihajlo.levi@proton.me");
    setCopyText(true);
    setANum(0);

    setTimeout(() => {
      setCopyText(false);
      setANum(1);
    }, 5250);
  };

  const delay = 0.9;
  const logoScale = 0.04;
  const robotY = -93;
  //---------------------------------------

  return (
    <section className='c-space my-20' id='about'>
      {!isMobile ? (
        <AnimatePresence mode='wait'>
          <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            <motion.div
              initial={{
                opacity: 0,
                y: 0,
              }}
              animate={{
                // y: animate ? 0 : -300,
                x: animate ? 0 : -300,
                opacity: animate ? 1 : 0,
              }}
              transition={{
                duration: delay,
              }}
              className='col-span-1 xl:row-span-3'
            >
              <div className='grid-container !gap-0'>
                {/* ---------------------------------------- */}
                <Canvas key={1} className='w-full sm:h-[276px] h-[200px]'>
                  <SceneOne />
                </Canvas>
                <div>
                  <p className='grid-headtext'>Tech Stack</p>

                  <p className='grid-subtext'>
                    I&apos;ve built projects using JavaScript, CSS, Tailwind,
                    React, TypeScript, React-three-fiber, and Next.js.
                  </p>
                </div>
                {/* ---------------------------------------- */}
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 0,
              }}
              animate={{
                // rotateY: animate ? 0 : 90,
                // x: animate ? 0 : -300,
                opacity: animate ? 1 : 0,
              }}
              transition={{
                duration: delay,
              }}
              className='col-span-1 row-span-3'
            >
              <div className='grid-container'>
                {/* ---------------------------------------- */}

                <motion.div
                  initial={{
                    opacity: 0,
                    // y: 0,
                  }}
                  animate={{
                    // y: animate ? 0 : -300,
                    opacity: animate ? 1 : 0,
                  }}
                  transition={{
                    duration: delay + 0.7,
                  }}
                  className='w-full md:h-[250px] flex items-center justify-center border border-white-600/[0.1] rounded-lg 
                  '
                >
                  <motion.img
                    src='/photos/avatar.webp'
                    alt='avatar'
                    initial={{
                      opacity: 0,
                      y: 0,
                    }}
                    animate={{
                      rotateX: animate ? 0 : 90,
                      opacity: animate ? 0.6 : 0,
                    }}
                    transition={{
                      duration: delay + 0.7,
                    }}
                    className='w-full md:h-[150px] h-fit object-contain opacity-60'
                  />
                </motion.div>

                <div>
                  <p className='grid-headtext'>About me</p>

                  <p className='grid-subtext'>
                    I&apos;m a passionate web developer focused on modern
                    frontend and interactive user experiences. I love building
                    elegant, fast, and functional solutions using the latest
                    technologies. Always exploring new concepts and striving for
                    continuous improvement.
                  </p>
                </div>
                {/* ---------------------------------------- */}
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 0,
              }}
              animate={{
                // y: animate ? 0 : -700,
                x: animate ? 0 : 300,
                opacity: animate ? 1 : 0,
              }}
              transition={{
                duration: delay,
              }}
              className='col-span-1 row-span-4 '
            >
              <div className='grid-container '>
                <div className=' rounded-lg w-full sm:h-[350px] md:h-[350px]  h-full flex justify-center items-center '>
                  <Canvas key={2} className='w-full h-fit  rounded-md'>
                    <perspectiveCamera makeDefault position={[10, 5, 10]} />

                    <AutoRotatingCamera />

                    <SceneTwo />
                  </Canvas>
                </div>
                <div className='mt-2 md:mt-15'>
                  <p className='grid-headtext'>Fast & Reliable Websites</p>

                  <p className='grid-subtext'>
                    If you need a website built quickly and with high quality,
                    I&apos;m here to help. I specialize in creating clean,
                    functional, and responsive websites tailored to your needs.
                    Let&apos;s bring your idea to life!
                  </p>
                  <a href='#contact'>
                    <Button
                      name='Contact'
                      isBeam
                      containerClass='w-full mt-10'
                    />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 0,
              }}
              animate={{
                y: animate ? 0 : 300,
                x: animate ? 0 : -300,
                opacity: animate ? 1 : 0,
              }}
              transition={{
                duration: delay,
              }}
              className='xl:col-span-2 xl:row-span-3 '
            >
              <div className='grid-container lg:h-[450px]'>
                <Canvas className='rounded-md h-fit' shadows>
                  <Scene3 />
                </Canvas>
                <div>
                  <p className='grid-headtext'>On the Horizon</p>

                  <p className='grid-subtext'>
                    Continuing to enhance my skills in JavaScript, React, and
                    Next.js, while exploring 3D modeling and deepening my
                    knowledge of Three.js and related technologies.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 0,
              }}
              animate={{
                y: animate ? 0 : 300,
                x: animate ? 0 : 300,
                opacity: animate ? 1 : 0,
              }}
              transition={{
                duration: delay,
              }}
              className='xl:col-span-1 xl:row-span-2 '
            >
              <div className='grid-container lg:h-[274px] !pt-0 !gap-2'>
                <Canvas className='w-full md:h-[126px] sm:h-[276px] h-fit'>
                  <Scene4 aNum={aNum} />
                </Canvas>

                <div className='space-y-2'>
                  <div className='copy-container' onClick={handleCopy}>
                    {copyText ? (
                      <span className='inline grid-subtext mt-10 !text-white'>
                        Email copied successfully{"  "}
                        <GiCheckMark className='inline text-green-400 ' />
                      </span>
                    ) : (
                      <Button
                        name='Copy my email'
                        isBeam
                        containerClass='mt-4 grid-subtext !text-white'
                      >
                        <IoCopy />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      ) : (
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
          <div className='col-span-1 xl:row-span-3'>
            <div className='grid-container'>
              <div className='w-full h-[230px] sm:h-[230px] flex items-center justify-center border border-white-600/[0.1] rounded-lg'>
                <img
                  src='/photos/avatar.webp'
                  alt='avatar'
                  className='w-full sm:h-[150px] h-[150px] object-contain opacity-60'
                />
              </div>
              <div>
                <p className='grid-headtext'>About me</p>

                <p className='grid-subtext'>
                  I&apos;m a passionate web developer focused on modern frontend
                  and interactive user experiences. I love building elegant,
                  fast, and functional solutions using the latest technologies.
                  Always exploring new concepts and striving for continuous
                  improvement.
                </p>
              </div>
            </div>
          </div>

          <div className='col-span-1 row-span-3'>
            <div className='grid-container '>
              <div className='h-[280px] sm:h-[300px]'>
                <Canvas key={1} className='w-full h-[250px] sm:h-[276px] '>
                  <SceneOne />
                </Canvas>
              </div>

              <div>
                <p className='grid-headtext'>Tech Stack</p>

                <p className='grid-subtext'>
                  I&apos;ve built projects using JavaScript, CSS, Tailwind,
                  React, TypeScript, React-three-fiber, and Next.js.
                </p>
              </div>
            </div>
          </div>
          <div className='col-span-1 row-span-4'>
            <div className='grid-container'>
              <div className='mt-8 rounded-3xl w-full sm:h-[350px] h-full flex justify-center items-center'>
                <Canvas key={2} className='w-full rounded-md  h-fit'>
                  <perspectiveCamera makeDefault position={[10, 5, 10]} />

                  <AutoRotatingCamera />
                  <SceneTwo />
                </Canvas>
              </div>
              <div className='mt-2 md:mt-20'>
                <p className='grid-headtext'>Fast & Reliable Websites</p>

                <p className='grid-subtext'>
                  If you need a website built quickly and with high quality,
                  I&apos;m here to help. I specialize in creating clean,
                  functional, and responsive websites tailored to your needs.
                  Let&apos;s bring your idea to life!
                </p>
                <a href='#contact'>
                  <Button name='Contact' isBeam containerClass='w-full mt-10' />
                </a>
              </div>
            </div>
          </div>
          <div className='xl:col-span-2 xl:row-span-3 '>
            <div className='grid-container h-[250px] sm:h-[450px]'>
              <Canvas className='rounded-md'>
                <Scene3 />
              </Canvas>
              <div>
                <p className='grid-headtext'>On the Horizon</p>

                <p className='grid-subtext'>
                  Continuing to enhance my skills in JavaScript, React, and
                  Next.js, while exploring 3D modeling and deepening my
                  knowledge of Three.js and related technologies.
                </p>
              </div>
            </div>
          </div>
          <div className='xl:col-span-1 xl:row-span-2 '>
            <div className='grid-container sm:h-[350px]'>
              <Canvas className='w-full md:h-[126px] sm:h-[276px] h-fit'>
                <Scene4 aNum={aNum} />
              </Canvas>
              <div className='space-y-2'>
                <div className='copy-container' onClick={handleCopy}>
                  {copyText ? (
                    <span className='inline grid-subtext mt-12 !text-white'>
                      Email copied successfully{"  "}
                      <GiCheckMark className='inline text-green-400 ' />
                    </span>
                  ) : (
                    <Button
                      name='Copy my email'
                      isBeam
                      containerClass='mt-6 grid-subtext !text-white'
                    >
                      <IoCopy />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
