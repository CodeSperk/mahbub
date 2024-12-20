import PageTitle from '@/components/shared/title';
import React from 'react';

const AboutPage = () => {
  return (
    <div className='bg-[#03030d] min-h-screen'>
      <div className='py-10 md:py-16'>
      <PageTitle bg="Resume" title1="About" title2="Me"/>
      </div>
    </div>
  );
};

export default AboutPage;