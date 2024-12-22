import PageTitle from '@/components/shared/Heading';
import TechStack from '@/Pages/About/Skills/TechStack';
import React from 'react';

const AboutPage = () => {
  return (
    <div className=' page-bg min-h-screen'>
      <div className='max-width py-10 md:py-16'>
      <PageTitle bg="Resume" title1="About" title2="Me"/>
      


      <TechStack/>
      </div>
    </div>
  );
};

export default AboutPage;