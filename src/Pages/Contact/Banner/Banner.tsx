import Image from 'next/image';

const Banner = () => {
  return (
    <section className="pt-4 md:pt-10 text-xl ">
        <div className="w-full  border-2 border-[#20171f] rounded-xl">
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