import React from "react";
import Image from "next/image";
import { skills } from "../_helpers/_skills";

  type titleProp = {
    title: keyof typeof skills;
  }

const Skills  = ({title} : titleProp)  => {
  const selectedSkills = skills[title];

  return (
    <div className="min-h-[336px]">
      <h3 className="font-semibold text-pagination mb-4 capitalize text-xl text-highlight">{title}</h3>
      <ul className="space-y-2 text-lg">
        {selectedSkills.map((skill, idx) => (
          <li key={idx} className="text-secondary flex items-center gap-2 ">
            <Image height={20} width={20} alt={`${skill.name} icon`} src={skill?.icon}/>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
