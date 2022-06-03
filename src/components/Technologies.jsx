import React, { useContext } from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JAVASCRIPT from "../assets/javascript.png";
import REACT from "../assets/react.png";
import REDUX from "../assets/redux.png";
import GITHUB from "../assets/github.png";
import GITHUBLIGHT from "../assets/githubLight.png";
import NODE from "../assets/node.png";
import MySQL from "../assets/MySQL.png";
import EXPRESS from "../assets/expressjs.png";
import SEQUELIZE from "../assets/sequelize.png";
import TAILWIND from "../assets/tailwind.png";
import MONGO from "../assets/mongo.png";
import { ThemeContext } from "./themeContext";
import Skill from "./Skill";

export default function Technologies() {
  const { theme } = useContext(ThemeContext);

  const skills = [
    { title: "HTML", src: HTML, alt: "HTML Icon" },
    { title: "CSS", src: CSS, alt: "CSS Icon" },
    { title: "JavaScript", src: JAVASCRIPT, alt: "JS Icon" },
    { title: "React", src: REACT, alt: "REACT Icon" },
    { title: "Redux", src: REDUX, alt: "REDUX Icon" },
    {
      title: "GitHub",
      src: theme === "dark" ? GITHUBLIGHT : GITHUB,
      alt: "GITHUB Icon",
    },
    { title: "Node.js", src: NODE, alt: "NODE Icon" },
    { title: "Express.js", src: EXPRESS, alt: "EXPRESS Icon" },
    { title: "Sequelize", src: SEQUELIZE, alt: "SEQUELIZE Icon" },
    { title: "MongoDB", src: MONGO, alt: "MONGO Icon" },
    { title: "Tailwind CSS", src: TAILWIND, alt: "TAILWIND Icon" },
    { title: "MySQL", src: MySQL, alt: "MySQL Icon" },
  ];

  return (
    <>
      <div className="col-span-2 lg:col-span-3 pt-10">
        <p className="text-md lg:text-xl px-2 py-1 font-bold inline border-l-4 border-b-4 border-light_structure dark:border-structure text-light_title dark:text-title transition-all duration-700">
          Technologies I've worked with:
        </p>
      </div>
      <div className="col-span-2 lg:col-span-3">
        <div className="w-full font-semibold grid grid-cols-2 lg:grid-cols-6 gap-4 text-center py-8">
          {skills.map((skill) => (
            <Skill title={skill.title} src={skill.src} alt={skill.alt} />
          ))}
        </div>
      </div>
    </>
  );
}
