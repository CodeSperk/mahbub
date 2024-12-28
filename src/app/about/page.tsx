import PageTitle from '@/components/shared/Heading';
import AboutMe from '@/Pages/About/AboutMe/AboutMe';
import FAQ from '@/Pages/About/FAQ/FAQ';
import TechStack from '@/Pages/About/TechStack/TechStack';

const AboutPage = () => {
  return (
    <div className='page-bg min-h-screen pt-6'>
      <div className='max-width'>
      <PageTitle bg="Resume" title1="About" title2="Me"/>
      <AboutMe/>
      <TechStack/> 
      <FAQ/>     
      </div>
    </div>
  );
};

export default AboutPage;