import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizesHero } from "../utils/list";
import HeroCamera from "./HeroCamera";
import Button from "./Button";
//******************************************
import Bonsai from "./Bonsai";
import Moon from "./Moon";
//******************************************
import Css3Logo from "../3dLogo/Css3Logo";
import FramerLogo from "../3dLogo/FramerLogo";
import JSLogo from "../3dLogo/JSLogo";
import NextjsLogo from "../3dLogo/NextjsLogo";
import ReactLogo from "../3dLogo/ReactLogo";
import TailwindLogo from "../3dLogo/TailwindLogo";
import TypescriptLogo from "../3dLogo/TypescriptLogo";
//******************************************
import Asteroids from "../space/Asteroids";
import PlanetSystem from "../space/PlanetSystem";

const Hero = ({ titleZInd }) => {
  const isSmall = useMediaQuery({ maxWidth: 500 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizesHero(isSmall, isMobile, isTablet);
  const logoScale = sizes.logoScale;
  const logoSpeed = 0.3;
  const logoRotationSpeed = 1.3;

  return (
    <section id='home' className='min-h-screen w-full flex flex-col relative'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-24 c-space gap-3'>
        <p
          className={`sm:text-2xl text-xl font-medium text-white text-center font-generalsans ${titleZInd}`}
        >
          Hi, I&apos;m Mihajlo, a Web Developer
          {/* <span className='waving-hand'>👋</span> */}
        </p>
        <p className={`hero_tag text-gray_gradient ${titleZInd}`}>
          Let&apos;s create something amazing together.
        </p>
      </div>
      <div className='w-full h-full absolute inset-0'>
        {/* <Leva /> */}
        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader />}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <PerspectiveCamera makeDefault position={[0, 0, 35]} />
            {/* <OrbitControls /> */}
            <HeroCamera isMobile={isMobile}>
              <Css3Logo
                speed={logoSpeed}
                radius={sizes.cssRadius}
                rotationSpeed={logoRotationSpeed}
                height={sizes.cssHeight}
                scale={logoScale}
              />
              <JSLogo
                speed={logoSpeed}
                radius={sizes.jsRadius}
                rotationSpeed={logoRotationSpeed}
                height={sizes.jsHeight}
                scale={logoScale}
              />
              <ReactLogo
                speed={logoSpeed}
                radius={sizes.reactRadius}
                rotationSpeed={logoRotationSpeed}
                height={sizes.reactHeight}
                scale={logoScale}
              />
              <TailwindLogo
                speed={logoSpeed}
                radius={sizes.tailRadius}
                rotationSpeed={logoRotationSpeed}
                height={sizes.tailHeight}
                scale={logoScale}
              />
              <FramerLogo
                speed={logoSpeed}
                radius={sizes.framerRadius}
                rotationSpeed={logoRotationSpeed}
                height={sizes.framerHeight}
                scale={logoScale}
              />
              <TypescriptLogo
                speed={logoSpeed}
                radius={sizes.typeRadius}
                rotationSpeed={logoRotationSpeed}
                height={sizes.typeHeight}
                scale={logoScale}
              />
              <NextjsLogo
                speed={logoSpeed}
                radius={sizes.nextRadius}
                rotationSpeed={logoRotationSpeed}
                height={sizes.nextHeight}
                scale={logoScale}
              />

              <Bonsai
                position={sizes.bonsaiPosition}
                scale={sizes.bonsaiScale}
                rotation={[0, 4.1, 0]}
              />
            </HeroCamera>
            <group>
              <Moon
                scale={sizes.moonScale}
                position={sizes.moonPosition}
                rotation={[0, 0, 0]}
              />
              <directionalLight position={[20, -15, 0]} intensity={0.2} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[-50, -20, 40]} intentsity={1} />
          </Suspense>
        </Canvas>
      </div>
      <div className='absolute bottom-7 left-0 right-0 z-10 c-space'>
        <a href='#about' className='w-fit'>
          <Button
            name='Get in touch'
            isBeam
            containerClass='sm:w-fit w-full sm:min-w-96 font-semibold'
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
