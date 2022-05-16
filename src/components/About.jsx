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
      className="pt-20 pb-40 bg-slate-50 dark:bg-[#1F2235] transition duration-500"
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
            className="mb-8 font-extrabold text-3xl dark:text-white"
          >
            I'am Quyet
          </h2>
          <p
            data-aos="fade-down"
            data-aos-offset="0"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
            className="dark:text-white"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates
            soluta, aut earum nemo recusandae cumque perferendis! Recusandae
            alias accusamus atque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
