import AboutLeft from "./_aboutLeft";
import AboutRight from "./_aboutRight";

const AboutSkills = () => {
  return (
    <div className="max-width section-gap flex flex-col lg:flex-row gap-20 items-center justify-center ">
      <AboutLeft />
      <AboutRight />
    </div>
  );
};

export default AboutSkills;
