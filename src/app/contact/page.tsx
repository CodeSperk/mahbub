import PageTitle from "@/components/shared/Heading";
import React from "react";
import ContactForm from "@/Pages/Contact/__ContactForm";
import LeftContact from "@/Pages/Contact/__LeftContact";

const ContactPage = () => {
  return (
    <div className="page-bg min-h-screen flex flex-col justify-between">
      <PageTitle bg="Contact" title1="Get In" title2="touch" />

      <section>
        <div className="my-12 md:my-16 lg:my-20 flex flex-col-reverse md:flex-row justify-center gap-12 lg:gap-16 text-white">
          <LeftContact />
          <ContactForm />
        </div>
      </section>

      <footer className="bg-[#fefef5] h-[50px] flex justify-center items-center">
        <div className="text-xl"> All right reserved © Mahbubur Rahman, 2024</div>
      </footer>
    </div>
  );
};

export default ContactPage;
