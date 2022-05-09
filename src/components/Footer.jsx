import React from 'react'

const Footer = () => {
  return (
<footer className="footer bg-[#1F2235] transition duration-500">
<div className="dark:border-t xl:w-[1200px] mx-auto text-center">
  <p className="text-3xl py-8 uppercase text-white font-semibold">Quyet</p>
  <div className="mb-8">
    <a href="#" className="text-2xl text-white px-4 transition duration-300 hover:text-[#3e6ff4]"><i className="bx bxl-facebook" /></a>
    <a href="#" className="text-2xl text-white px-4 transition duration-300 hover:text-[#3e6ff4]"><i class='bx bxl-telegram' /></a>
    <a href="#" className="text-2xl text-white px-4 transition duration-300 hover:text-[#3e6ff4]"><i className="bx bxl-github" /></a>
  </div>
  <p className="text-base text-white font-semibold pb-4">© Quyetdaik. All rigths reserved</p>
  </div>
</footer>

  )
}

export default Footer