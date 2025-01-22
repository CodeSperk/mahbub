import React from 'react';
import FloatingIcons from './_FloatingIcons';
import TextContents from './_TextContents';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url('/bg.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      <div className='relative w-full'>
      {/* <FloatingIcons /> */}
      <TextContents />
      </div>
    </section>
  );
};

export default HeroSection;