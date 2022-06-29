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
          class="flex items-center flex-col justify-center p-2 group"
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
          class="flex items-center flex-col justify-center p-2 group"
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
          class="flex items-center flex-col justify-center p-2 group"
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
          class="flex items-center flex-col justify-center p-2 group"
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
          class="flex items-center flex-col justify-center p-2 group"
        >
          <i className="bx bxl-nodejs transition duration-300 group-hover:text-[#3C873A] text-5xl pb-3 dark:text-gray-300" />
          <span className="group-hover:text-[#3C873A] transition duration-300 dark:text-gray-300">NodeJS</span>
        </div>

        <div
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-delay="75"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
          class="flex items-center flex-col justify-center p-2 group"
        >
          <i className="bx bxl-nodejs transition duration-300 group-hover:text-[#3C873A] text-5xl pb-3 dark:text-gray-300" />
          <span className="group-hover:text-[#3C873A] transition duration-300 dark:text-gray-300">Express</span>
        </div>

        <div
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-delay="80"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
          class="flex items-center flex-col justify-center p-2 group"
        >
          <i className="bx bxl-mongodb transition duration-300 group-hover:text-[#589636] text-5xl pb-3 dark:text-gray-300" />
          <span className="group-hover:text-[#589636] transition duration-300 dark:text-gray-300">MongoDB</span>
        </div>

        <div
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-delay="85"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
          class="flex items-center flex-col justify-center p-2 group"
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
          class="flex items-center flex-col justify-center p-2 group"
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
          class="flex items-center flex-col justify-center p-2 group"
        >
          <i className="bx bxl-git transition duration-300 group-hover:text-[#F1502F] text-5xl pb-3 dark:text-gray-300" />
          <span className="group-hover:text-[#F1502F] transition duration-300 dark:text-gray-300">Git</span>
        </div>

        {/* <div>
          <div className="sm:pr-10">
            <h2
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="top-bottom"
              className="mb-5 font-extrabold text-2xl dark:text-white"
            >
              Profesional Skills
            </h2>
            <p
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="top-bottom"
              className="text-base dark:text-white"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat
              ut voluptates soluta, aut earum nemo recusandae cumque
              perferendis! Recusandae alias accusamus atque.
            </p>
          </div>
          <ul className="mt-10 mx-auto pl-3 sm:pl-0">
            <li
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="50"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="top-bottom"
              className="inline-block text-6xl relative pr-5 group"
            >
              <i className="bx bxl-html5 transition duration-300 text-gray-300 group-hover:text-[#E34C26]" />
            </li>
            <li
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="300"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="top-bottom"
              className="inline-block text-6xl relative pr-5 group"
            >
              <i className="bx bxl-css3 transition duration-300 text-gray-300 group-hover:text-[#2965F1]" />
            </li>
            <li
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="500"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="top-bottom"
              className="inline-block text-6xl relative pr-5 group"
            >
              <i className="bx bxl-javascript transition duration-300 text-gray-300 group-hover:text-[#F0DB4F]" />
            </li>
            <li
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="700"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="top-bottom"
              className="inline-block text-6xl relative pr-5 group"
            >
              <i className="bx bxl-react transition duration-300 text-gray-300 group-hover:text-[#61DBFB]" />
            </li>
            <li
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="900"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="top-bottom"
              className="inline-block text-6xl relative pr-5 group"
            >
              <i className="bx bxl-nodejs transition duration-300 text-gray-300 group-hover:text-[#3C873A]" />
            </li>
            <li
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="1100"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="top-bottom"
              className="inline-block text-6xl relative pr-5 group"
            >
              <i className="bx bxl-tailwind-css transition duration-300 text-gray-300 group-hover:text-[#67e8f9]" />
            </li>
          </ul>
        </div>

        <div
          data-aos="fade-down"
          data-aos-offset="0"
          data-aos-delay="1100"
          data-aos-easing="ease-out-cubic"
          data-aos-anchor-placement="top-bottom"
        >
          <img
            src="https://i.postimg.cc/yY6Mm5wc/work3.jpg"
            className="rounded-lg xl:w-10/12"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Skill;
