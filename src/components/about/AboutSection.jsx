import { useState, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import CanvasLoader from "../hero/CanvasLoader";
import SpaceStation from "./SpaceStation";
import Button from "../hero/Button";
import { IoCopy } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

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
                duration: 0.7,
              }}
              className='col-span-1 xl:row-span-3'
            >
              <div className='grid-container'>
                <img
                  src='/photos/hero1.jpeg'
                  alt='photo1'
                  className='w-full sm:h-[276px] h-fit object-contain'
                />
                <div>
                  <p className='grid-headtext'>sdfbs sbsb sbsrbs</p>
                  <p className='grid-subtext'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti delectus rerum expedita totam cupiditate ipsa
                    labore adipisci, voluptatem, at, mollitia nesciunt
                    asperiores quas qui eveniet!
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
                rotateY: animate ? 0 : 90,
                // x: animate ? 0 : -300,
                opacity: animate ? 1 : 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className='col-span-1 row-span-3'
            >
              <div className='grid-container'>
                <img
                  src='/photos/grid3.png'
                  alt='photo2'
                  className='w-full sm:h-[276px] h-fit object-contain'
                />
                <div>
                  <p className='grid-headtext'>Tech Stack</p>
                  <p className='grid-subtext'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus soluta magnam, vero obcaecati ut ullam?
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
                // y: animate ? 0 : -700,
                x: animate ? 0 : 300,
                opacity: animate ? 1 : 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className='col-span-1 row-span-4'
            >
              <div className='grid-container'>
                <div className='mt-8 rounded-3xl w-full sm:h-[326px] h-full flex justify-center items-center'>
                  <Canvas>
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 5]} />
                    <Center>
                      <Suspense fallback={<CanvasLoader />}>
                        <group
                          scale={1}
                          position={[0, 0, 0]}
                          rotation={[-0.7, -0.3, 0.4]}
                        >
                          <SpaceStation />
                        </group>
                      </Suspense>
                    </Center>
                  </Canvas>
                </div>
                <div className='mt-10 md:mt-20'>
                  <p className='grid-headtext'>Lorem ipsum dolor sit amet.</p>
                  <p className='grid-subtext'>
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Inventore, eos.
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
                duration: 0.7,
              }}
              className='xl:col-span-2 xl:row-span-3 '
            >
              <div className='grid-container'>
                <img
                  src='/photos/grid2.webp'
                  alt='grid2-photo'
                  className='w-full sm:h-[266px] h-fit object-contain'
                />
                <div>
                  <p className='grid-headtext'>Lorem ipsum dolor sit amet.</p>
                  <p className='grid-subtext'>
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Inventore, eos.
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
                duration: 0.7,
              }}
              className='xl:col-span-1 xl:row-span-2 '
            >
              <div className='grid-container'>
                <img
                  src='/photos/grid4.webp'
                  alt='grid4 photo'
                  className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'
                />
                <div className='space-y-2'>
                  <p className='grid-subtext text-center'>Contact me</p>
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
            </motion.div>
          </div>
        </AnimatePresence>
      ) : (
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
          <div className='col-span-1 xl:row-span-3'>
            <div className='grid-container'>
              <img
                src='/photos/hero1.jpeg'
                alt='photo1'
                className='w-full sm:h-[276px] h-fit object-contain'
              />
              <div>
                <p className='grid-headtext'>sdfbs sbsb sbsrbs</p>
                <p className='grid-subtext'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti delectus rerum expedita totam cupiditate ipsa labore
                  adipisci, voluptatem, at, mollitia nesciunt asperiores quas
                  qui eveniet!
                </p>
              </div>
            </div>
          </div>

          <div className='col-span-1 row-span-3'>
            <div className='grid-container'>
              <img
                src='/photos/grid3.png'
                alt='photo2'
                className='w-full sm:h-[276px] h-fit object-contain'
              />
              <div>
                <p className='grid-headtext'>Tech Stack</p>
                <p className='grid-subtext'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus soluta magnam, vero obcaecati ut ullam?
                </p>
              </div>
            </div>
          </div>
          <div className='col-span-1 row-span-4'>
            <div className='grid-container'>
              <div className='mt-8 rounded-3xl w-full sm:h-[326px] h-full flex justify-center items-center'>
                <Canvas>
                  <ambientLight intensity={1} />
                  <directionalLight position={[10, 10, 5]} />
                  <Center>
                    <Suspense fallback={<CanvasLoader />}>
                      <group
                        scale={1}
                        position={[0, 0, 0]}
                        rotation={[-0.7, -0.3, 0.4]}
                      >
                        <SpaceStation />
                      </group>
                    </Suspense>
                  </Center>
                </Canvas>
              </div>
              <div className='mt-10 md:mt-20'>
                <p className='grid-headtext'>Lorem ipsum dolor sit amet.</p>
                <p className='grid-subtext'>
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Inventore, eos.
                </p>
                <Button name='Contact' isBeam containerClass='w-full mt-10' />
              </div>
            </div>
          </div>
          <div className='xl:col-span-2 xl:row-span-3 '>
            <div className='grid-container'>
              <img
                src='/photos/grid2.webp'
                alt='grid2-photo'
                className='w-full sm:h-[266px] h-fit object-contain'
              />
              <div>
                <p className='grid-headtext'>Lorem ipsum dolor sit amet.</p>
                <p className='grid-subtext'>
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Inventore, eos.
                </p>
              </div>
            </div>
          </div>
          <div className='xl:col-span-1 xl:row-span-2 '>
            <div className='grid-container'>
              <img
                src='/photos/grid4.webp'
                alt='grid4 photo'
                className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'
              />
              <div className='space-y-2'>
                <p className='grid-subtext text-center'>Contact me</p>
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
