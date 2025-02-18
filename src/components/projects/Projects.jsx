import { Suspense, useState } from "react";
import { recentProjects } from "../utils/list";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import CanvasLoader from "../hero/CanvasLoader";
import LaptopCyber from "./LaptopCyber";

const Projects = () => {
  const [index, setIndex] = useState(0);
  const currentProject = recentProjects[index];
  const handleNav = (direction) => {
    const currentProject = recentProjects[index];
    if (direction === "prev") {
      setIndex(index === 0 ? recentProjects.length - 1 : index - 1);
    }
    if (direction === "next") {
      setIndex(index === recentProjects.length - 1 ? 0 : index + 1);
    }
  };

  return (
    <section className='c-space my-20'>
      <p className='head-text'>My Work</p>

      <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
        <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
          <div className='absolute top-0 right-0'>
            <img
              src={currentProject.spotlight}
              alt='spotlight'
              className='w-full h-96 object-cover rounded-xl'
            />
          </div>
          <div
            className='p-3 backdrop-blur-3xl backdrop-filter w-fit rounded-lg'
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt='logo'
              className='w-10 h-10 shadow-sm'
            />
          </div>
          <div className='flex flex-col gap-5 text-white-600 my-5'>
            <p className='text-white text-2xl font-semibold animated-text'>
              {currentProject.title}
            </p>
            <p className='animatedText'>{currentProject.desc}</p>
            <p className='animatedText'>{currentProject.subdesc}</p>
          </div>
          <div className='flex items-center justify-between flex-wrap gap-5'>
            <div className='flex items-center gap-3'>
              {currentProject.tags.map((tag, i) => {
                return (
                  <div key={i} className='tech-logo'>
                    <img src={tag.path} alt={tag.name} />
                  </div>
                );
              })}
            </div>
            <a
              href={currentProject.href}
              target='_blank'
              rel='noreferrer'
              className='text-white-600 flex items-center gap-2 cursor-pointer hover:scale-110 transition duration-300 ease-in-out hover:text-white'
            >
              <p>Check Live Site</p>
              <LiaExternalLinkSquareAltSolid />
            </a>
          </div>
          <div className='flex justify-between items-center mt-7'>
            <button className='arrow-btn' onClick={() => handleNav("prev")}>
              <FaCaretLeft
                className='text-2xl'
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "46%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </button>
            <button className='arrow-btn' onClick={() => handleNav("next")}>
              <FaCaretRight
                className='text-2xl'
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "54%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </button>
          </div>
        </div>
        <div className='border border-black-300 bg-black-200 rounded-lg h-96 md:h-full'>
          <Canvas>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group
                  scale={0.03}
                  position={[0, 0, -2.5]}
                  rotation={[0.2, 0, 0]}
                >
                  <LaptopCyber />
                </group>
              </Suspense>
            </Center>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
