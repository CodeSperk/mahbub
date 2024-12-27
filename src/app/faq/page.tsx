import PageTitle from '@/components/shared/Heading';
import React from 'react';
import { faqs } from "./__helper";
import FaqCard from './__faqCard';

const FAQPage = () => {


  return (
    <div className='page-bg min-h-screen'>
     <PageTitle bg="Questions" title1="FAQ" title2="Corner"/>

     <section className='max-width section-gap grid gap-10'>
      {
        faqs?.map(faq => (
          <FaqCard key={faq.id} faq={faq}/>
        ))
      }
     </section>
     
    </div>
  );
};

export default FAQPage ;