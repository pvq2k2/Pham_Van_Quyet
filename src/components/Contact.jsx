import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
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
      id="contact"
    >
      <h2
        className="relative text-3xl text-left sm:text-center text-[#3e6ff4] mt-4 mb-8 font-extrabold pl-4 sm:pl-0
          after:absolute after:w-16 after:h-[3px] after:left-4 after:right-0 after:top-10 after:bg-[#3e6ff4] sm:after:left-0 sm:after:m-auto"
      >
        Contact
      </h2>
      <div className="gap-y-8 text-left mx-auto pt-10 xl:w-[1200px] grid grid-cols-1 sm:grid-cols-2 px-4">
        <div>
          <h3
            data-aos="fade-down"
            data-aos-offset="0"
            data-aos-delay="50"
            data-aos-easing="ease-out-cubic"
            data-aos-anchor-placement="top-bottom"
            className="mb-10 text-3xl dark:text-white"
          >
            Contact Info
          </h3>
          <ul className="flex flex-col text-base">
            <li
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="100"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="top-bottom"
              className="flex flex-col sm:flex-row mb-8 sm:items-center"
            >
              <i className="bx bxs-map mr-3 dark:text-white" />
              <span className="dark:text-white">
                Address: Chuong My, Hanoi
              </span>
            </li>
            <li
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="300"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="top-bottom"
              className="flex flex-col sm:flex-row mb-8 sm:items-center"
            >
              <i className="bx bxs-phone mr-3 dark:text-white" />
              <span className="dark:text-white">
                Phone:
                <a
                  href="tel:+84348228722"
                  className="pl-1 hover:underline hover:text-[#3e6ff4]"
                >
                  +84 348 228 722
                </a>
              </span>
            </li>
            <li
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="500"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="top-bottom"
              className="flex flex-col sm:flex-row mb-8 sm:items-center"
            >
              <i className="bx bxl-gmail mr-3 dark:text-white" />
              <span className="dark:text-white">
                Email:
                <a
                  href="mailto:vanquyet2392002@gmail.com"
                  className="pl-1 hover:underline hover:text-[#3e6ff4]"
                >
                  vanquyet2392002@gmail.com
                </a>
              </span>
            </li>
            <li
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="700"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="top-bottom"
              className="flex flex-col sm:flex-row mb-8 sm:items-center"
            >
              <i className="bx bxs-home mr-3 dark:text-white" />
              <span className="dark:text-white">
                Website:
                <a
                  href="#home"
                  className="pl-1 hover:underline hover:text-[#3e6ff4]"
                >
                  quyetdeveloper.netlify.app
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h3
            data-aos="fade-down"
            data-aos-offset="0"
            data-aos-delay="50"
            data-aos-easing="ease-out-cubic"
            data-aos-anchor-placement="top-bottom"
            className="mb-10 text-3xl dark:text-white"
          >
            Contact Form
          </h3>
          <form>
            <div
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="100"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="top-bottom"
              className="relative z-0 w-full mb-6 group"
            >
              <input
                type="text"
                name="floating_name"
                id="floating_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="300"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="top-bottom"
              className="relative z-0 w-full mb-6 group"
            >
              <input
                type="email"
                name="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="500"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="top-bottom"
              className="relative z-0 w-full mb-6 group"
            >
              <input
                type="tel"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>
            <div
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="700"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="top-bottom"
              className="relative z-0 w-full mb-6 group"
            >
              <textarea
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Message
              </label>
            </div>
            <button
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="900"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="top-bottom"
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
