import Link from "next/link";
import { contactInfo } from "../_helpers/ContactInfo";
import { socialIcon } from "../_helpers/SocialIcon";

const asideCardStyles =
  "bg-card-bg  space-y-6 px-[30px] md:px-[60px] py-[50px] md:py-[80px] rounded-sm ";

const Aside = () => {
  return (
    <aside className="w-full lg:w-[390px] lg:-mt-[320px] space-y-10 lg:space-y-16 xl:gap-20">
      <div className={asideCardStyles}>
        {contactInfo.map((contact, idx) => (
          <div
            key={idx}
            className="bg-page-bg p-8 rounded-sm space-y-4"
          >
            <h6 className="font-semibold">{contact.title}</h6>
            <p>{contact.info}</p>
          </div>
        ))}
      </div>

      <div className={asideCardStyles}>
        <h3>Find Me In</h3>
        <div className="flex gap-4 text-xl">
          {socialIcon.map((icon, idx) => (
            <Link
              key={idx}
              href={icon.href}
              target="_black"
              className="p-3 rounded-full bg-icon-hover-bg hover:scale-110 hover:text-highlight border-2 border-button duration-300"
            >
              <icon.icon />
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Aside;
