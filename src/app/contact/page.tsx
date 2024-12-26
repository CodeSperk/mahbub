import PageTitle from "@/components/shared/Heading";
import React from "react";
import ContactForm from "@/Pages/Contact/__ContactForm";
import LeftContact from "@/Pages/Contact/__LeftContact";

const ContactPage = () => {
  return (
    <div className="page-bg min-h-screen">
      <PageTitle bg="Contact" title1="Get In" title2="touch" />

      <section>
        <div className="mt-12 md:mt-16 lg:mt-20 flex flex-col-reverse md:flex-row justify-center gap-12 lg:gap-16 text-white">
          <LeftContact />
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
