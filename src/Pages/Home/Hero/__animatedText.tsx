"use client"
import React, { useEffect, useState } from "react";

interface AnimatedTextProps {
  texts?: string[];
  interval?: number;
  fadeTime?: number;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  texts = [
    'Frontend (JavaScript/Typescript)',
    'Frontend (React/Next.js)',
    'Backend (Node/Express.js)',
    'Database (MongoDB, PostgreSQL)'
  ],
  interval = 4000,
  fadeTime = 1000,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  
  useEffect(() => {
    const textInterval = setInterval(() => {
      setIsVisible(false);

      const textTimeOut = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, fadeTime)
      return () => clearTimeout(textTimeOut);
    }, interval)
    return () => clearInterval(textInterval);
  }, [texts, interval, fadeTime])

  return (
       <h4> Currently specializing in {" "}  <br className="lg:hidden"/>
        <span className={`
            text-highlight font-bold
            transition-opacity duration-500
            ${isVisible ? 'opacity-100' : 'opacity-0'}
          `}>
          {texts[currentIndex]}
        </span>
      </h4>
    );
};

export default AnimatedText;