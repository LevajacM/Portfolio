import { useState, Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
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
import Technotron from "./Technotron";
//******************************************
import Car from "../proba/Car";
import Coral from "../proba/Coral";
import Turret from "../proba/Turret";
//******************************************

const SceneOne = () => {
  const logoScale = 0.04;

  return (
    <Suspense fallback={<CanvasLoader />}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 35]} />
      <Center>
        <group
          // scale={1}
          position={[0, 0, 0]}
          // rotation={[-0.7, -0.3, 0.4]}
        >
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

const SceneTwo = () => {
  // const { camera } = useThree();
  // camera.position.set(0, 0, 12); //SpaceTravel

  return (
    <Suspense fallback={<CanvasLoader />}>
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 15]} />
      <Center position={[0, -0.4, 0]} scale={2.1}>
        <Technotron />
      </Center>
      {/* <Center> */}
      {/* <group scale={2.9} position={[0, -0.8, 0]} rotation={[0, 1.4, 0]}>
          <Coral />
        </group> */}
      {/* <group scale={0.015} position={[0.5, 1, -11.5]} rotation={[0, 0, 0]}>
          <SpaceTravel />
        </group> */}
      {/* </Center> */}
    </Suspense>
  );
};

const Scene3 = () => {
  return (
    <Suspense fallback={<CanvasLoader />}>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} />
      <OrbitControls />

      <Center position={[0, 0, 0]}>
        <group scale={1.2} position={[0, 0, 0]} rotation={[0, 4, 0]}>
          <Car />
        </group>
      </Center>
    </Suspense>
  );
};
//******************************************
const AboutSection = () => {
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
    // Check if current is not undefined and is a number
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

    setTimeout(() => {
      setCopyText(false);
    }, 5000);
  };

  //car

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
                <img
                  src='/photos/avatar2.webp'
                  alt='avatar'
                  className='w-full sm:h-[250px] h-fit object-contain'
                />

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
                <div className=' rounded-3xl w-full sm:h-[350px] md:h-[370px]  h-full flex justify-center items-center'>
                  <Canvas
                    // camera={{ position: [0, 0, -5] }}
                    key={2}
                    className='w-full h-fit  rounded-md'
                  >
                    <OrbitControls />
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
                  <Button name='Contact' isBeam containerClass='w-full mt-10' />
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
                <Canvas className='rounded-md h-fit'>
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
              <div className='grid-container lg:h-[270px] !pt-0 !gap-2'>
                <Canvas className='w-full md:h-[126px] sm:h-[276px] h-fit'>
                  <Suspense fallback={<CanvasLoader />}>
                    <ambientLight intensity={2.5} />
                    <directionalLight position={[-10, 10, 5]} />
                    <Center>
                      {/* <Arrow scale={2.5} position={[1.3, -1.9, 0]} /> */}
                      <group
                        scale={0.009}
                        position={[0, -5.75, 0]}
                        rotation={[0, 0, 0]}
                      >
                        <Turret />
                      </group>
                    </Center>
                  </Suspense>
                </Canvas>

                <div className='space-y-2'>
                  <div className='copy-container' onClick={handleCopy}>
                    {copyText ? (
                      <span className='inline grid-headtext mt-2'>
                        Email copied successfully{"  "}
                        <GiCheckMark className='inline text-green-400 ' />
                      </span>
                    ) : (
                      <Button
                        name='Copy my email'
                        isBeam
                        containerClass='mt-2 grid-headtext'
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
              <img
                src='/photos/avatar2.webp'
                alt='avatar'
                className='w-full sm:h-[250px] h-[250px] object-contain'
              />
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
            <div className='grid-container'>
              <Canvas key={1} className='w-full sm:h-[276px] h-fit'>
                <SceneOne />
              </Canvas>

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
                <Canvas key={2} className='w-full  h-fit'>
                  <OrbitControls />
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
                <Button name='Contact' isBeam containerClass='w-full mt-10' />
              </div>
            </div>
          </div>
          <div className='xl:col-span-2 xl:row-span-3 '>
            <div className='grid-container'>
              <Canvas>
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
            <div className='grid-container'>
              <Canvas className='w-full md:h-[126px] sm:h-[276px] h-fit'>
                <Suspense fallback={<CanvasLoader />}>
                  <ambientLight intensity={2.5} />
                  <directionalLight position={[-10, 10, 5]} />
                  <Center>
                    {/* <Arrow scale={2.5} position={[1.3, -2.4, 0]} /> */}
                    <group
                      scale={0.009}
                      position={[0, -4.5, 0]}
                      rotation={[0, 0, 0]}
                    >
                      <Turret />
                    </group>
                  </Center>
                </Suspense>
              </Canvas>
              <div className='space-y-2'>
                <div className='copy-container' onClick={handleCopy}>
                  {copyText ? (
                    <span className='inline grid-headtext mt-16'>
                      Email copied successfully{"  "}
                      <GiCheckMark className='inline text-green-400 ' />
                    </span>
                  ) : (
                    <Button
                      name='Copy my email'
                      isBeam
                      containerClass='mt-10 grid-headtext'
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

//--------------------------------------
