import React from "react";
import Image from "next/image";


  const skills = {
    frontend: [
      { name: "React.js", icon: "/about/techIcons/react.svg" },
      { name: "Next.js", icon: "/about/techIcons/nextjs.png" },
      { name: "JavaScript", icon: "/about/techIcons/javascript.svg" },
      { name: "TypeScript", icon: "/about/techIcons/typescript.svg" },
      { name: "HTML5", icon: "/about/techIcons/html.svg" },
      { name: "CSS3", icon: "/about/techIcons/css.svg" },
      { name: "Tailwind", icon: "/about/techIcons/tailwind.svg" },
      { name: "MUI", icon: "/about/techIcons/mui.svg" },
    ],
    backend: [
      { name: "Node.js", icon: "/about/techIcons/nodejs.svg" },
      { name: "Express.js", icon: "/about/techIcons/express.png" },
      { name: "MongoDB", icon: "/about/techIcons/mongodb.svg" },
      { name: "PostgreSQL", icon: "/about/techIcons/postgresql.webp" },
      { name: "REST API", icon: "/about/techIcons/rest-api.svg" },
      { name: "Firebase", icon: "/about/techIcons/firebase.svg" },
    ],
    tools: [
      { name: "Git", icon: "/about/techIcons/git.svg" },
      { name: "GitHub", icon: "/about/techIcons/github.svg" },
      { name: "Postman", icon: "/about/techIcons/postman.svg" },
      { name: "npm", icon: "/about/techIcons/npm.svg" },
      { name: "Figma", icon: "/about/techIcons/figma.webp" },
      { name: "VS Code", icon: "/about/techIcons/vscode.svg" },
    ],
  };
  
  type titleProp = {
    title: keyof typeof skills;
  }

const RightSkill  = ({title} : titleProp)  => {
  const selectedSkills = skills[title];

  return (
    <div>
      <h3 className="font-semibold text-primary mb-4 capitalize text-xl">{title}</h3>
      <ul className="space-y-2 text-lg">
        {selectedSkills.map((skill, idx) => (
          <li key={idx} className="text-gray-600 flex items-center gap-2 ">
            <Image height={20} width={20} alt={`${skill.name} icon`} src={skill?.icon}/>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightSkill;
