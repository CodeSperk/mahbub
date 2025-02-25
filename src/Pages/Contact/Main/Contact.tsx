import React from 'react';
import ContactForm from './_form';

const Contact = () => {
  return (
    <section className="lg:flex-1 w-[calc(100% - 390px)">
    <div className="space-y-6">
      <h6 className="border-l-2">
        <span className="ml-1 border-l-2 pl-4 text-highlight">Get in Touch</span>
      </h6>

      <h2>
        If you have any porject or need help. Contact me
      </h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        emndustry lorem Ipsum has been the industry standard dummy text
        ever since the 1500s, when an unknown print only five centuries,
        but also the leap into electronic.
      </p>
    </div>
    <ContactForm/>
  </section>
  );
};

export default Contact;