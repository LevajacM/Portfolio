import React, { useEffect, useState, useRef } from "react";
import { TextGenerateEffect } from "./TextGenerateEffect";

const Naslov = ({ text, className, duration, textCol }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setHasLoaded(true);
        }
      },
      { threshold: 1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasLoaded]);

  return (
    <div ref={elementRef} className='pt-0'>
      {hasLoaded && (
        <TextGenerateEffect
          words={text}
          className={className}
          duration={duration}
          textColor={textCol}
        />
      )}
    </div>
  );
};

export default Naslov;
