import PageTitle from "@/components/shared/Heading";
import Banner from "@/Pages/Contact/Banner/Banner";
import Aside from "@/Pages/Contact/Main/Aside";
import Contact from "@/Pages/Contact/Main/Contact";

const ContactPage = () => {
  return (
    <div className="page-bg min-h-screen">
      <PageTitle bg="Contact" title1="Get In" title2="touch" />
      <Banner/>
      <main className="max-width section-gap text-white flex flex-col-reverse lg:flex-row justify-between gap-10 lg:gap-16">
        <Aside/>
        <Contact/>        
      </main>
    </div>
  );
};

export default ContactPage;
