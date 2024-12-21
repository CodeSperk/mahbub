type TProp = {
  id: string;
  className : string;
}

const AnimateBG = ({id, className} : TProp) => {
  return (
    <div
      id={id}
      className={`min-h-screen bg-gradient-to-b from-[#0F050E] via-[#0F050E] to-[#1C0611] z-10 fixed top-0 ${className} w-1/3`}
    />
  );
};

export default AnimateBG;
