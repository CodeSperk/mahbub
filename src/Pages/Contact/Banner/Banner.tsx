import Image from 'next/image';

const Banner = () => {
  return (
    <section className="max-width section-gap text-white text-xl ">
        <div className="w-full h-[400px] md:h-[500px] xl:h-[600px] border-2 border-[#20171f] rounded-xl">
          <Image
            src="/map.png"
            width={300}
            height={150}
            alt="Map Background"
            className="w-full h-full"
          />
        </div>
      </section>
  );
};

export default Banner;