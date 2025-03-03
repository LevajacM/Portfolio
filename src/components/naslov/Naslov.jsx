import React, { useEffect, useState, useRef } from "react";
import { TextGenerateEffect } from "./TextGenerateEffect";

const Naslov = ({ text, className, duration, textCol }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const [showTextEffect, setShowTextEffect] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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
  }, []);

  useEffect(() => {
    if (isVisible) {
      setShowTextEffect(true);
    } else {
      setShowTextEffect(false);
    }
  }, [isVisible]);

  return (
    <div ref={elementRef} className='pt-0'>
      {showTextEffect && (
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
