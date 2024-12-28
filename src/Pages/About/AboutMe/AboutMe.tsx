import AboutContent from "./_aboutContent";
import ProfilePhoto from "./_profilePhoto";

const AboutMe = () => {
  return (
    <section className="section-gap flex flex-col lg:flex-row gap-16 items-center justify-center">
      <ProfilePhoto />
      <AboutContent />
    </section>
  );
};

export default AboutMe;
