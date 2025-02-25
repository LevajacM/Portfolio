import { useState, Suspense } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import NavItems from "./NavItems";
import Sidebar from "./Sidebar";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Robotic from "./Robotic";
import CanvasLoader from "../hero/CanvasLoader";

const Navbar = ({ setTitleZInd }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [visible, setVisible] = useState(true);
  const { scrollYProgress } = useScroll();

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      setTitleZInd("z-50");
    } else {
      setTitleZInd("z-10");
    }
  };

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (direction < 0 || scrollYProgress.get() < 0.1) {
        setVisible(true);
      } else {
        setVisible(false);
        setIsOpen(false);
      }
    }
  });

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
          <div className='max-w-7xl mx-auto relative'>
            <div className='flex justify-between items-center py-5 mx-auto c-space'>
              <a
                href='/'
                className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'
              >
                <div className='h-[41px] w-[33px]'>
                  <Canvas scale={5}>
                    <directionalLight position={[10, 10, 10]} />
                    <Robotic
                      scale={2.9}
                      position={[0, -3.1, 0]}
                      rotation={[0, -1.2, 0]}
                    />
                    <Suspense fallback={<CanvasLoader />}></Suspense>
                  </Canvas>
                </div>
              </a>
              <button
                onClick={toggleOpen}
                className='text-neutral-400 hover:text-white sm:hidden flex'
              >
                <HiBars3BottomRight
                  className={
                    isOpen
                      ? "w-6 h-6  hover:scale-[1.2] delay-100 -rotate-90 transition  duration-100 ease-in-out"
                      : "w-6 h-6   hover:scale-[1.2] delay-100  transition  duration-100 ease-in-out"
                  }
                />
              </button>
              <nav className='hidden sm:flex'>
                <NavItems />
              </nav>
            </div>
            {isOpen ? <Sidebar setIsOpen={setIsOpen} /> : null}
          </div>
        </header>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
