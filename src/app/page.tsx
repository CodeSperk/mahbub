import FloatingIcons from "@/Pages/Home/FloatingIcons";
import TextContents from "@/Pages/Home/TextContents/TextContents";

const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background image with overlay */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url('/bg.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      <FloatingIcons />
      <TextContents />
    </div>
  );
};

export default HomePage;
