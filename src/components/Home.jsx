import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      mirror: true,
    });
  }, []);
  return (
    <section
      id="home"
      className="bg-slate-50 dark:bg-[#1F2235] transition duration-500"
    >
      <div className="relative gap-y-20 mx-auto pt-3 sm:pt-20 pb-56 xl:w-[1200px] grid grid-cols-1 sm:grid-cols-2 px-4 ">
        <div className="self-center relative inline-block top-1/4 left-0 translate-x-0">
          <h1
            data-aos="fade-down"
            data-aos-offset="0"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
            className="lg:text-[55px] text-[30px] mb-10 font-extrabold dark:text-white"
          >
            Hi,
            <br />
            I'am <span className="text-[#3e6ff4]">Quyet</span>
            <br /> Web Developer
          </h1>
          <div
            data-aos="fade-down"
            data-aos-offset="0"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
            className="btn-contact"
          >
            <a
              href="#contact"
              className="inline-block bg-[#3e6ff4] text-white mt-4 py-3 px-9 font-semibold rounded-lg transition duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            >
              Contact
            </a>
          </div>
          <ul className="mt-10">
            <li
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="50"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="top-bottom"
              className="block mb-3 sm:inline-block sm:mr-3"
            >
              <a
                href="https://www.facebook.com/lllvpvqvlll"
                target="_blank"
                className="text-[#3e6ff4] text-base text-center leading-10 border border-[#3e6ff4] w-10 h-10 rounded-full inline-block transition duration-500 hover:bg-[#3e6ff4] hover:text-white"
              >
                <i className="bx bxl-facebook" />
              </a>
            </li>
            <li
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="300"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="top-bottom"
              className="block mb-3 sm:inline-block sm:mr-3"
            >
              <a
                href="https://t.me/lllvpvqvlll"
                target="_blank"
                className="text-[#3e6ff4] text-base text-center leading-10 border border-[#3e6ff4] w-10 h-10 rounded-full inline-block transition duration-500 hover:bg-[#3e6ff4] hover:text-white"
              >
                <i className="bx bxl-telegram" />
              </a>
            </li>
            <li
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="500"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="top-bottom"
              className="block mb-3 sm:inline-block sm:mr-3"
            >
              <a
                href="https://github.com/pvq2k2"
                target="_blank"
                className="text-[#3e6ff4] text-base text-center leading-10 border border-[#3e6ff4] w-10 h-10 rounded-full inline-block transition duration-500 hover:bg-[#3e6ff4] hover:text-white"
              >
                <i className="bx bxl-github" />
              </a>
            </li>
          </ul>
          <div className="sm:hidden top-[55%] absolute right-0 bottom-0 translate-x-0 w-[220px]">
            <svg
              className="fill-[#3e6ff4]"
              viewBox="0 0 479 467"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                {/* <image className="w-[360px]" x={50} y={60} href="assets/img/perfil.png" /> */}
              </g>
            </svg>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="0"
          data-aos-delay="200"
          data-aos-easing="ease-out-cubic"
          data-aos-anchor-placement="top-bottom"
          className="relative hidden sm:block sm:left-0 sm:top-10 lg:left-1/4 lg:top-1/4 translate-x-0 w-[260px]"
        >
          <svg
            className="fill-[#3e6ff4] sm:w-[360px]"
            viewBox="0 0 479 467"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0" mask-type="alpha">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
            </mask>
            <g mask="url(#mask0)">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              {/* <image className="w-[360px]" x={50} y={60} href="assets/img/perfil.png" /> */}
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Home;
