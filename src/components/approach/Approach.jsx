import { useState, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { approachList } from "../utils/list";
import { Center } from "@react-three/drei";
import CanvasLoader from "../hero/CanvasLoader";
import Office from "./Office";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const Approach = () => {
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

  return (
    <section id='approach' className='c-space my-20'>
      <div className='w-full text-white-600'>
        <h3 className='head-text pt-8'>My Approach</h3>

        <div className='work-container '>
          <div className='work-content'>
            <div className='py-[10px] sm:py-10  sm:px-5 px-2.5 '>
              {!isMobile ? (
                <AnimatePresence mode='sync'>
                  {approachList.map((item, ind) => {
                    const delay = (ind + 0.5) / 3 + 1;
                    const delay2 = delay + 2;
                    return (
                      <div
                        key={item.id}
                        className='work-content_container group '
                      >
                        <div className='flex flex-col h-full justify-start items-center py-2'>
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 0,
                            }}
                            animate={{
                              y: animate ? 0 : 400,
                              opacity: animate ? 1 : 0,
                            }}
                            transition={{
                              duration: 0.2 + delay,
                            }}
                            className='work-content_logo mt-4  '
                          >
                            <img
                              src={item.icon}
                              alt={`${item.title} icon`}
                              className='h-full w-full rounded-lg'
                            />
                          </motion.div>
                          <div className='work-content_bar ' />
                        </div>
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 0,
                          }}
                          animate={{
                            rotateX: animate ? 0 : -90,

                            opacity: animate ? 1 : 0,
                          }}
                          transition={{
                            duration: 0.2 + delay2,
                          }}
                          className='sm:p-5 px-2.5 py-5'
                        >
                          <p className='font-bold text-white-800'>
                            {item.title}
                          </p>
                          <p className='group-hover:text-white transition ease-in-out duration-500'>
                            {item.desc}
                          </p>
                        </motion.div>
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
                              alt={`${item.title} icon`}
                              className='h-full w-full rounded-lg'
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
          <div className='work-canvas'>
            <Canvas>
              <Suspense fallback={<CanvasLoader />}></Suspense>
              <ambientLight intensity={0.7} />
              <directionalLight position={[20, 30, -50]} intensity={1} />
              <directionalLight position={[50, 80, 10]} intensity={0.7} />
              <directionalLight position={[-50, 40, -60]} intensity={0.5} />
              <spotLight
                position={[-10, 50, 50]}
                intensity={1.5}
                angle={0.15}
                penumbra={1}
              />
              <spotLight
                position={[20, 20, 20]}
                intensity={1.5}
                angle={0.15}
                penumbra={1}
              />
              <hemisphereLight
                intensity={0.6}
                skyColor={0xeeeeff}
                groundColor={0x111122}
              />
              <Center position={[0.4, -4, -252]} rotation={[0, 0, 0]}>
                <Office scale={0.2} />
              </Center>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
