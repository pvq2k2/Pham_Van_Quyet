import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
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
      id="about"
    >
      <h2
        className="relative text-3xl text-left sm:text-center text-[#3e6ff4] mt-4 mb-8 font-extrabold pl-4 sm:pl-0
          after:absolute after:w-16 after:h-[3px] after:left-4 after:right-0 after:top-10 after:bg-[#3e6ff4] sm:after:left-0 sm:after:m-auto"
      >
        About
      </h2>
      <div className="gap-y-8 text-center sm:text-left mx-auto pt-10 xl:w-[1200px] grid grid-cols-1 sm:grid-cols-2 items-center px-4">
        <div
          data-aos="fade-down"
          data-aos-offset="0"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-bottom"
          className="self-center relative mx-auto sm:mx-0 sm:left-1/4 lg:left-1/3"
        >
          <img
            className="w-[200px] rounded-lg"
            src="https://i.postimg.cc/FHpjqR1Y/Alcidesmarcio.jpg"
          />
        </div>
        <div>
          <h2
            data-aos="fade-down"
            data-aos-offset="0"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
            className="font-extrabold text-3xl dark:text-white pb-4"
          >
            About me
          </h2>
          <ul
            data-aos="fade-down"
            data-aos-offset="0"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
            className="flex gap-3 flex-col gap-x-10"
          >
            <li className="flex py-3 gap-3 dark:text-white">
              <span className="font-extrabold">Name: </span>
              <p>Pham Van Quyet</p>
            </li>
            <li className="flex py-3 gap-3 dark:text-white">
              <span className="font-extrabold">Date of birth: </span>
              <p>September 23, 2002</p>
            </li>
            <li className="flex py-3 gap-3 dark:text-white">
              <span className="font-extrabold">Address: </span>
              <p>Chuong My, Hanoi</p>
            </li>
            <li className="flex py-3 gap-3 dark:text-white">
              <span className="font-extrabold">Email: </span>{" "}
              <a
                href="mailto:vanquyet2392002@gmail.com"
                className="pl-1 hover:underline hover:text-[#3e6ff4]"
              >
                vanquyet2392002@gmail.com
              </a>
            </li>
            <li className="flex py-3 gap-3 dark:text-white">
              <span className="font-extrabold">Phone: </span>{" "}
              <a
                href="tel:+84348228722"
                className="pl-1 hover:underline hover:text-[#3e6ff4]"
              >
                +84 348 228 722
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
