import { Faq } from "../_helpers/_faqs";
type faq = {
  faq: Faq;
}

const FaqCard = ({ faq }: faq) => {
  return (
    <div className="group border-2 border-[#20171f] rounded-md bg-card-bg hover:bg-transparent p-10 md:p-12 lg:p-14 flex flex-col md:flex-row xl:flex-col gap-10 md:gap-12 lg:gap-14">
      <div className="w-[60px] md:w-[80px] lg:w-[120px] xl:w-[80px] h-[60px] md:h-[80px] lg:h-[120px] xl:h-[80px] bg-card-bg group-hover:bg-card-bg border border-button rounded-md flex justify-center items-center">
        <h4>{faq.id < 10 ? `0${faq.id}` : faq.id}</h4>
      </div>

      <div className="flex-1 -mt-[6px] space-y-5">
        <h5 className="font-semibold">
          {faq.question}
        </h5>
        <p>
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

export default FaqCard;
