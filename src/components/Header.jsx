import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useDarkMode from '../hook/useDarkMode'

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [navToggle, setNavToggle] = useState(true);
  return (
<header id="header">
<div className="fixed right-0 left-0 z-[1030] bg-slate-50 dark:bg-[#1F2235] transition duration-500">
  <div className="flex justify-between mx-auto px-4 xl:w-[1200px]">
    <div className="logo h-[50px] px-1 sm:px-4 pt-3">
    <Link to="/" >
    <p className="
    sm:text-[30px]
    text-2xl
    font-extrabold 
    uppercase 
    text-[#3e6ff4]">QUYET</p></Link>

    </div>
    <div className="mobile-nav">
  <div className="slicknav_menu flex justify-between sm:hidden">
    <div onClick={() => setTheme(colorTheme)} className="toggle mt-4 h-5 w-5">
  {colorTheme === 'light' ? (
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 dark:text-[#3e6ff4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
  ): (
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#3e6ff4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )}
</div>
<div>
  <div className="mt-[14px] ml-2 transition duration-300" onClick={() => setNavToggle(!navToggle)}>
{navToggle ? (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3e6ff4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>) : (
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3e6ff4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

    )}
  </div>
    <div className={navToggle
    ? "fixed top-[50px] right-[-100%] w-[320px] h-full p-8 bg-slate-100 dark:bg-[#1F2235] transition-all duration-500 shadow-lg"
    : "fixed top-[50px] right-[0] w-[320px] h-full p-8 bg-slate-100 dark:bg-[#1F2235] transition-all duration-500 shadow-lg"}>
      <ul className="nav navbar-nav navbar-right">
        <li className="block relative after:content-[] after:absolute after:left-0 after:top-8 after:h-2 after:bg-[#3e6ff4]"><NavLink to="#home"><p className="text-[#3e6ff4] text-[15px] font-semibold uppercase py-[10px] px-[15px]">Home</p></NavLink></li>
        <li className="block"><NavLink to="#about"><p className="text-[#3e6ff4] text-[15px] font-semibold uppercase py-[10px] px-[15px]">About</p></NavLink></li>
        <li className="block"><NavLink to="#skill"><p className="text-[#3e6ff4] text-[15px] font-semibold uppercase py-[10px] px-[15px]">Skill</p></NavLink></li>
        <li className="block"><NavLink to="#portfolio"><p className="text-[#3e6ff4] text-[15px] font-semibold uppercase py-[10px] px-[15px]">Portfolio</p></NavLink></li>																				
        <li className="block"><NavLink to="#contact"><p className="text-[#3e6ff4] text-[15px] font-semibold uppercase py-[10px] px-[15px]">Contact</p></NavLink></li>
      </ul>
          </div>
      </div>
  </div>
</div>
    <div id="navbar" className="my-2 mr-4 hidden sm:flex">
      <ul className="nav navbar-nav navbar-right inline-block">
        <li className="relative inline-block"><NavLink to="#home"><p className="text-[#3e6ff4] text-[15px] font-semibold uppercase py-[10px] px-[15px]">Home</p></NavLink></li>
        <li className="relative inline-block"><NavLink to="#about"><p className="text-[#3e6ff4] text-[15px] font-semibold uppercase py-[10px] px-[15px]">About</p></NavLink></li>
        <li className="relative inline-block"><NavLink to="#skill"><p className="text-[#3e6ff4] text-[15px] font-semibold uppercase py-[10px] px-[15px]">Skill</p></NavLink></li>
        <li className="relative inline-block"><NavLink to="#portfolio"><p className="text-[#3e6ff4] text-[15px] font-semibold uppercase py-[10px] px-[15px]">Portfolio</p></NavLink></li>																				
        <li className="relative inline-block"><NavLink to="#contact"><p className="text-[#3e6ff4] text-[15px] font-semibold uppercase py-[10px] px-[15px]">Contact</p></NavLink></li>
      </ul>

      <div onClick={() => setTheme(colorTheme)} className="toggle my-2 ml-2 h-5 w-5">
  {colorTheme === 'light' ? (
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 dark:text-[#3e6ff4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
  ): (
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#3e6ff4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )}
</div>
    </div>
  </div>
</div>
</header>
  )
}

export default Header