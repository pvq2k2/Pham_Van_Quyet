import React, { useEffect } from "react";
import { projects } from "../data.js";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      mirror: true,
    });
  }, []);
  return (
    <section
      className="pt-20 pb-1 bg-slate-50 dark:bg-[#1F2235] transition duration-500"
      id="portfolio"
    >
      <h2
        className="relative text-3xl text-left sm:text-center text-[#3e6ff4] mt-4 mb-8 font-extrabold pl-4 sm:pl-0
          after:absolute after:w-16 after:h-[3px] after:left-4 after:right-0 after:top-10 after:bg-[#3e6ff4] sm:after:left-0 sm:after:m-auto"
      >
        Portfolio
      </h2>

      {projects.map((project) => (
        <div
          key={project.id}
          data-aos="fade-right"
          data-aos-offset="0"
          data-aos-delay="50"
          data-aos-easing="ease-in-sine"
          data-aos-anchor-placement="top-bottom"
          className="mx-auto pt-10 xl:w-[1200px] sm:px-10"
        >
          <div className="group gap-y-8 text-left grid grid-cols-1 sm:grid-cols-2 items-center py-10 px-4 rounded-lg shadow-xl sm:shadow-none sm:border-b-2 sm:border-dashed sm:border-[#3e6ff4]">
            <div className="box-border overflow-hidden">
              <img
                src={project.img}
                alt="projectimg"
                className="rounded-lg transition duration-500 group-hover:scale-105"
                width={720}
                height={340}
              />
            </div>
            <div className="pl-6">
              <h3 className="mb-4 text-3xl uppercase font-semibold dark:text-white transition duration-300 group-hover:text-[#3e6ff4]">
                {project.name}
              </h3>
              <div className="text-xl dark:text-white">
                <p>{project.description}</p>
              </div>
              <ul className="flex flex-wrap sm:flex-col p-4 m-0 list-disc">
                {project.tags.map((tag) => (
                  <li className="mr-8 text-xs uppercase tracking-widest dark:text-white">
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="flex justify-start flex-col">
                <a
                  href={project.ghLink}
                  target="_blank"
                  className="text-center capitalize mt-5 mr-4 px-3 py-2 bg-[#3e6ff4] text-white inline-block font-bold text-sm cursor-pointer rounded-lg shadow-md transition duration-300 hover:opacity-80 hover:scale-105"
                  rel="noreferrer"
                >
                  source
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
