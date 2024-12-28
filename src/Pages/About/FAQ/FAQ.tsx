"use client"
import React, { useState } from 'react';
import FaqCard from './_faqCard';
import { faqs } from '../_helpers/_faqs';
import Pagination from './_paginatiton';

interface Faq {
  id: number;
  question: string;
  answer: string;
}

const FAQ : React.FC = () => {
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages: number = Math.ceil(faqs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFaqs : Faq[] = faqs.slice(startIndex, endIndex);

  return (
     <section className='section-gap py-4'>
      {/* section title */}
      <div className='xl:grid xl:grid-cols-2 gap-8 space-y-8 xl:space-y-0' style={{
        gridTemplateRows: `repeat(4, minmax(0, 1fr))`
      }}>
      <div className='space-y-4'>
        <h3 className='text-5xl font-bold text-primary'>FAQs About Me</h3>
        <p className='text-secondary text-2xl'>Get quick answers to your most pressing questions.</p>
      </div>

      {
        currentFaqs.map((faq, idx) => (
          <div 
            key={faq.id}
            className={`
              ${idx === 0 && "xl:col-start-1 xl:row-start-2 xl:row-span-3"} 
              ${idx === 1 && "xl:col-start-2 xl:row-start-1 xl:row-span-3"}
            `}
          >
            <FaqCard 
            faq={faq}
            />
          </div>
        ))
      }

         {/* pagination */}

        <div className='xl:col-start-2 flex flex-col justify-center xl:mb-8'>
          <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          /> 
       
        </div>
      </div>

     
    
     </section>
  );
};

export default FAQ ;