import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import CanvasLoader from "../hero/CanvasLoader";
import SpaceStation from "./SpaceStation";
import Button from "../hero/Button";
import { IoCopy } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";

const AboutSection = () => {
  const [copyText, setCopyText] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("mihajlo.levi@proton.me");
    setCopyText(true);

    setTimeout(() => {
      setCopyText(false);
    }, 5000);
  };

  return (
    <section className='c-space my-20'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img
              src='/photos/hero1.jpeg'
              alt='photo1'
              className='w-full sm:h-[276px] h-fit object contain'
            />
            <div>
              <p className='grid-headtext'>sdfbs sbsb sbsrbs</p>
              <p className='grid-subtext'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti delectus rerum expedita totam cupiditate ipsa labore
                adipisci, voluptatem, at, mollitia nesciunt asperiores quas qui
                eveniet!
              </p>
            </div>
          </div>
        </div>
        <div className='col-span-1 row-span-3'>
          <div className='grid-container'>
            <img
              src='/photos/grid3.png'
              alt='photo2'
              className='w-full sm:h-[276px] h-fit object contain'
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
    </section>
  );
};

export default AboutSection;
