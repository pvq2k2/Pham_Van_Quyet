import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      mirror: true,
    });
  }, []);
  return (
    <section
      className="sm:pt-32 pt-20 bg-slate-50 dark:bg-[#1F2235] transition duration-500"
      id="skill"
    >
      <h2
        className="relative text-3xl text-left sm:text-center text-[#3e6ff4] mt-4 mb-8 font-extrabold pl-4 sm:pl-0
          after:absolute after:w-16 after:h-[3px] after:left-4 after:right-0 after:top-10 after:bg-[#3e6ff4] sm:after:left-0 sm:after:m-auto"
      >
        Skills
      </h2>
      <div className="gap-10 text-center sm:text-left mx-auto py-20 xl:w-[1200px] grid grid-cols-2 sm:grid-cols-5 items-center px-10">

        <div
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="55"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="top-bottom"
          className="flex items-center flex-col justify-center p-2 group"
        >
          <i className="bx bxl-html5 transition duration-300 dark:text-gray-300 group-hover:text-[#E34C26] text-5xl pb-3" />
          <span className="group-hover:text-[#E34C26] transition duration-300 dark:text-gray-300">HTML</span>
        </div>


        <div
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-delay="55"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
          className="flex items-center flex-col justify-center p-2 group"
        >
          <i className="bx bxl-css3 transition duration-300 group-hover:text-[#2965F1] text-5xl pb-3 dark:text-gray-300" />
          <span className="group-hover:text-[#2965F1] transition duration-300 dark:text-gray-300">CSS</span>
        </div>


        <div
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-delay="60"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
          className="flex items-center flex-col justify-center p-2 group"
        >
          <i className="bx bxl-javascript transition duration-300 group-hover:text-[#F0DB4F] text-5xl pb-3 dark:text-gray-300" />
          <span className="group-hover:text-[#F0DB4F] transition duration-300 dark:text-gray-300">Javascript</span>
        </div>

        <div
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-delay="65"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
          className="flex items-center flex-col justify-center p-2 group"
        >
          <i className="bx bxl-react transition duration-300 group-hover:text-[#61DBFB] text-5xl pb-3 dark:text-gray-300" />
          <span className="group-hover:text-[#61DBFB] transition duration-300 dark:text-gray-300">ReactJS</span>
        </div>

        <div
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-delay="70"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
          className="flex items-center flex-col justify-center p-2 group"
        >
          <i className="bx bxl-nodejs transition duration-300 group-hover:text-[#3C873A] text-5xl pb-3 dark:text-gray-300" />
          <span className="group-hover:text-[#3C873A] transition duration-300 dark:text-gray-300">NodeJS</span>
        </div>
        
        <div
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-delay="80"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
          className="flex items-center flex-col justify-center p-2 group"
        >
          <i className="bx bxl-mongodb transition duration-300 group-hover:text-[#589636] text-5xl pb-3 dark:text-gray-300" />
          <span className="group-hover:text-[#589636] transition duration-300 dark:text-gray-300">MongoDB</span>
        </div>

        <div
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-delay="75"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
          className="flex items-center flex-col justify-center p-2 group"
        >
          <i className="bx bxl-tailwind-css transition duration-300 group-hover:text-[#67e8f9] text-5xl pb-3 dark:text-gray-300" />
          <span className="group-hover:text-[#67e8f9] transition duration-300 dark:text-gray-300">TailwindCSS</span>
        </div>



        <div
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-delay="85"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
          className="flex items-center flex-col justify-center p-2 group"
        >
          <i className="bx bxl-angular transition duration-300 group-hover:text-[#b52e31] text-5xl pb-3 dark:text-gray-300" />
          <span className="group-hover:text-[#b52e31] transition duration-300 dark:text-gray-300">Angular</span>
        </div>

        <div
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-delay="90"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
          className="flex items-center flex-col justify-center p-2 group"
        >
          <i className="bx bxl-sass transition duration-300 group-hover:text-[#CD6799] text-5xl pb-3 dark:text-gray-300" />
          <span className="group-hover:text-[#CD6799] transition duration-300 dark:text-gray-300">Sass</span>
        </div>

        <div
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-delay="95"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
          className="flex items-center flex-col justify-center p-2 group"
        >
          <i className="bx bxl-git transition duration-300 group-hover:text-[#F1502F] text-5xl pb-3 dark:text-gray-300" />
          <span className="group-hover:text-[#F1502F] transition duration-300 dark:text-gray-300">Git</span>
        </div>

        
      </div>
    </section>
  );
};

export default Skill;
