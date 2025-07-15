import React from "react";
import { getSpanClasses } from "../../../utils/getSpanClasses";
import { LinkIcon } from "../../../assets/icons/LinkIcon";
import { SummaryIcons } from "../../../assets/icons/summaryIcons";

export const ProjectCard = ({ project, moreText }) => {
  return (
    <div
      style={{ "--c": project.gradientFrom, "--c2": project.gradientTo }}
      className={`
      bg-white rounded-xl cursor-pointer shadow md:shadow-none px-4 py-6 hover:bg-[var(--c)]
      md:border-l-2 md:border-solid md:border-[var(--c)]
      transition-colors duration-300
  
      ${getSpanClasses(project.title)}
    `}
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-4xl text-balance md:text-6xl font-bold font-spaceGrotesk">
          {project.title}
        </h3>
        <p className="text-xl font-ibmPlexSans font-light">
          {project.description}
        </p>
      </div>
      <details  className="group mt-4">
        <summary  className="
          flex items-center gap-2 cursor-pointer
          text-lg font-ibmPlexSans font-bold
          marker:hidden select-none
        ">
          {moreText.results}{" "}
        <SummaryIcons open="w-6 h-6 transition-transform
            group-open:hidden text-[var(--c2)]"
          close="w-6 h-6 transition-transform
            group-open:block hidden text-black"
        />
        </summary>
        <blockquote className=" font-ibmPlexSans italic text-balance font-light mt-2">
          {project.result}
        </blockquote>
      </details>
      <section className="flex flex-col md:flex-row items-center justify-between mt-4">
        <div className="flex flex-wrap items-center gap-2 mt-4">
          {project.technologies.map((tag, index) => (
            <span
              key={index}
              className={`text-sm font-ibmPlexSans font-bold bg-gray-100 text-[var(--c2)] rounded-full px-3 py-1 shadow-md`}
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="pr-4 tooltip mt-6 md:mt-0"
        >
          <LinkIcon extraStyles="w-8 h-8 text-background hover:text-white hover:scale-105 transition-colors duration-300" />
          <span className="tooltiptext ">{moreText.seeLink}</span>
        </a>
      </section>
    </div>
  );
};
