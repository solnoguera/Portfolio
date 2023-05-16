import React from "react";
import { Link } from "react-scroll";
import ProfilePic from "../assets/profile.jpg";
import Technologies from "./Technologies";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full py-36 bg-light_background dark:bg-background text-light_text dark:text-text transition-all duration-700"
    >
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-6xl w-full px-6">
          <div className="pb-10">
            <p className="text-4xl px-2 py-1 font-bold inline border-l-4 border-b-4 border-light_structure dark:border-structure text-light_title dark:text-title transition-all duration-700">
              01.About
            </p>
          </div>
        </div>
        <div className="h-auto w-full items-center justify-around max-w-5xl grid grid-cols-2 px-6 lg:max-w-5xl lg:w-full lg:px-4 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col items-center">
            <div className="relative mx-auto p-2 group transition-all duration-700 lg:p-2">
              <span className="absolute inset-0 w-full h-full transition-all duration-700 transform -translate-x-1 -translate-y-1 bg-light_subtitle dark:bg-subtitle ease dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-700 transform translate-x-1 translate-y-1 bg-light_subtitle dark:bg-subtitle ease opacity-50 dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 mix-blend-multiply dark:mix-blend-screen"></span>
              <img
                src={ProfilePic}
                alt="Profile.jpg"
                className="relative max-h-64 transition-all duration-700"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="my-8">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={1500}
                className="relative cursor-pointer mx-2 py-3 font-bold text-black group px-4 transition-all duration-700 lg:px-6"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-700 transform -translate-x-1 -translate-y-1 bg-light_subtitle dark:bg-subtitle ease dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-700 transform translate-x-1 translate-y-1 bg-light_subtitle dark:bg-subtitle ease opacity-50 dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 mix-blend-multiply dark:mix-blend-screen"></span>
                <span className="relative">Contact me!</span>
              </Link>
            </div>
            <div className="my-8">
              <a
                href="https://drive.google.com/uc?export=download&id=1-bVkZ8vLOhAui9sKzxXn0r7n72UdaEIg"
                download
                className="mx-2 py-3 font-bold text-black group relative px-8 transition-all duration-700 lg:px-10"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-700 transform -translate-x-1 -translate-y-1 bg-light_hover dark:bg-hover ease dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-700 transform translate-x-1 translate-y-1 bg-light_hover dark:bg-hover ease opacity-50 dark:opacity-80 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 mix-blend-multiply dark:mix-blend-screen"></span>
                <span className="relative">Resume ↓</span>
              </a>
            </div>
          </div>

          <div className="text-justify col-span-2 py-4 font-semibold lg:row-start-1 lg:col-start-2">
            <p>
              Hi! I’m Sol :) A Full-stack Developer, Front-end enthusiast, with
              capacity to bring new and innovative ideas. I have skills
              developing modular programming projects. I also have the
              versatility needed for team work and I’m always willing to listen
              and learn from other people’s point of view. I’m eager to grow
              professionally and achieve all my goals.
            </p>
          </div>

          <div className="text-justify col-span-2 py-4 font-semibold lg:row-start-2 lg:col-start-2">
            <p>
              I have been working for more than 3 years as a developer.
              I had positions as Backend, Frontend, and as Full Stack Developer. This experience help
              improving my soft and my hard skills. I learned to be a good partner in a
              team, to be responsible and how to communicate with the client optimally. 
              These experiences also teached me a lot about web/app development, Rest services, 
              APIs development, server-client architecture, protocols, among others.
            </p>
          </div>

          <Technologies />
        </div>
      </div>
    </div>
  );
};

export default About;
