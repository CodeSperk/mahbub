import React from "react";
import TeachIcon from "./__techIcon";
import iconsData from "../_helpers/_stackIcons";

const TechIcons = () => {
  return (
    <div>
      <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-4 lg:gap-6 max-w-4xl">
        {
          iconsData.slice(0, 8).map((icon, idx) => (
            <TeachIcon key={idx} Icon={icon.icon} />
          ))
        }
      </div>

      <div className="flex flex-wrap justify-center gap-5 lg:gap-6 mt-6 max-w-2xl">
        {
          iconsData.slice(8, iconsData.length + 1).map((icon, idx) => (
            <TeachIcon key={idx} Icon={icon.icon} />
          ))
        }
      </div>
    </div>
  );
};

export default TechIcons;
