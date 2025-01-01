import PageTitle from "@/components/shared/Heading";
import Banner from "@/Pages/Contact/Banner/Banner";
import Aside from "@/Pages/Contact/Main/Aside";
import Contact from "@/Pages/Contact/Main/Contact";

const ContactPage = () => {
  return (
    <div className="bg-page-bg min-h-screen pt-6">
     <div className="max-width">
     <PageTitle bg="Contact" title1="Get In" title2="touch" />
      <Banner/>
      <main className="section-gap flex flex-col-reverse lg:flex-row justify-between gap-10 lg:gap-16">
        <Aside/>
        <Contact/>        
      </main>
     </div>
    </div>
  );
};

export default ContactPage;
