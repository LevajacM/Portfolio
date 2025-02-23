import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../utils/list";
import HeroCamera from "./HeroCamera";
import Button from "./Button";
//******************************************
import Hero3D from "./Hero3D";
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
import Rocket from "../space/Rocket";
import StarGlasses from "../space/StarGlasses";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const logoScale = 0.04;

  return (
    <section id='home' className='min-h-screen w-full flex flex-col relative'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-24 c-space gap-3'>
        <p className='sm:text-2xl text-xl font-medium text-white text-center font-generalsans '>
          Hi, I&apos;m Mihajlo, a Web Developer{" "}
          <span className='waving-hand'>👋</span>
        </p>
        <p className='hero_tag text-gray_gradient'>
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
            <OrbitControls />

            <Css3Logo
              speed={0.5}
              radius={2.3}
              rotationSpeed={1.3}
              height={-11}
              scale={logoScale}
            />
            <FramerLogo
              speed={0.5}
              radius={6.45}
              rotationSpeed={1.3}
              height={-7.5}
              scale={logoScale}
            />
            <JSLogo
              speed={0.5}
              radius={3.45}
              rotationSpeed={1.3}
              height={-10}
              scale={logoScale}
            />
            <NextjsLogo
              speed={0.5}
              radius={8}
              rotationSpeed={1.3}
              height={-5.5}
              scale={logoScale}
            />
            <ReactLogo
              speed={0.5}
              radius={4}
              rotationSpeed={1.3}
              height={-9}
              scale={logoScale}
            />
            <TailwindLogo
              speed={0.5}
              radius={5}
              rotationSpeed={1.3}
              height={-8}
              scale={logoScale}
            />
            <TypescriptLogo
              speed={0.5}
              radius={7.2}
              rotationSpeed={1.3}
              height={-6.5}
              scale={logoScale}
            />
            <HeroCamera isMobile={isMobile}>
              <Hero3D
                // position={sizes.deskPosition}
                position={[0, -3, 0]}
                // scale={sizes.deskScale}
                scale={0.35}
                rotation={[0, -2.2, 0]}
              />
            </HeroCamera>
            <group>
              <Asteroids scale={0.5} position={sizes.reactLogoPosition} />
              <PlanetSystem
                scale={0.5}
                position={sizes.mPosition}
                rotation={[0.5, 0, 0]}
              />
              <group scale={0.65} position={sizes.htmlPosition}>
                <Rocket scale={0.25} position={sizes.htmlPosition} />
                <StarGlasses scale={1.7} position={[-12, 1.7, 0]} />
                <StarGlasses scale={1.7} position={[-11.5, 2.5, 0]} />
                <StarGlasses scale={1.7} position={[-10, 1.7, 0]} />
              </group>
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
