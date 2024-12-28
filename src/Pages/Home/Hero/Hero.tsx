import React from 'react';
import FloatingIcons from '../FloatingIcons';
import TextContents from '../TextContents/TextContents';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url('/bg.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      <div className='relative h-full w-full'>
      <FloatingIcons />
      <TextContents />
      </div>
    </div>
  );
};

export default HeroSection;