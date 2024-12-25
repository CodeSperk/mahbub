import PageTitle from '@/components/shared/Heading';
import AboutSkills from '@/Pages/About/AboutSkills/AboutSkills';
import TechStack from '@/Pages/About/TechStack/TechStack';
import React from 'react';

const AboutPage = () => {
  return (
    <div className=' page-bg min-h-screen'>
      <div className='max-width'>
      <PageTitle bg="Resume" title1="About" title2="Me"/>
      
      <AboutSkills/>
      <TechStack/>
      </div>
    </div>
  );
};

export default AboutPage;