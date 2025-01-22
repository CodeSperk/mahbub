type TProps = {
  bg: string,
  title1: string
  title2: string
}

const PageTitle: React.FC<TProps> = ({bg, title1, title2}) => {
  return (
    <div className="text-center h-36 lg:h-28 relative">
      <span className="text-[#251729] text-6xl md:text-8xl uppercase font-extrabold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center leading-none cursor-none">{bg}</span>
      <h1 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-black text-2xl md:text-[44px] uppercase leading-none">{title1} <span className="text-highlight">{title2}</span></h1>
    </div>
  );
};

export default PageTitle;