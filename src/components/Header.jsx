import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
<header id="header">
<div className="fixed right-0 left-0 z-[1030] py-5">
  <div className="container mx-auto px-4 w-[1200px]">
    <div className="logo">
    <Link to="/" 
    className=" float-left
    p-4
    text-[18px]
    leading-5
    h-[50px]">
    <p className="
    text-[30px] 
    font-extrabold 
    uppercase 
    text-[#ff4a57]">QUYETDAIK</p></Link>

    <div className="mobile-nav"><div className="slicknav_menu">
    <a href="#" aria-haspopup="true" role="button" tabIndex={0} className="slicknav_btn slicknav_collapsed" style={{outline: 'none'}}>
    <span className="slicknav_menutxt" />
    <span className="slicknav_icon slicknav_no-text">
    <span className="slicknav_icon-bar" />
    <span className="slicknav_icon-bar" />
    <span className="slicknav_icon-bar" />
    </span></a>
    <div className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{display: 'none'}}>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#home" role="menuitem">Home</a></li>
              <li><a href="#about" role="menuitem">About</a></li>
              <li><a href="#service" role="menuitem">Service</a></li>
              <li><a href="#portfolio" role="menuitem">Portfolio</a></li>								
              <li><a href="#blog" role="menuitem">Blog</a></li>													
              <li><a href="#contact" role="menuitem">Contact</a></li>
            </ul>
          </div>
          </div>
</div>
    </div>
    <div id="navbar" className="float-right mr-[-15px]">
      <ul className="nav navbar-nav navbar-right inline-block">
        <li className="relative inline-block"><NavLink to="#home"><p className="text-[#ff4a57] text-[15px] font-semibold uppercase py-[10px] px-[15px]">Home</p></NavLink></li>
        <li className="relative inline-block"><NavLink to="#about"><p className="text-[#ff4a57] text-[15px] font-semibold uppercase py-[10px] px-[15px]">About</p></NavLink></li>
        <li className="relative inline-block"><NavLink to="#service"><p className="text-[#ff4a57] text-[15px] font-semibold uppercase py-[10px] px-[15px]">Service</p></NavLink></li>
        <li className="relative inline-block"><NavLink to="#portfolio"><p className="text-[#ff4a57] text-[15px] font-semibold uppercase py-[10px] px-[15px]">Portfolio</p></NavLink></li>								
        <li className="relative inline-block"><NavLink to="#blog"><p className="text-[#ff4a57] text-[15px] font-semibold uppercase py-[10px] px-[15px]">Blog</p></NavLink></li>													
        <li className="relative inline-block"><NavLink to="#contact"><p className="text-[#ff4a57] text-[15px] font-semibold uppercase py-[10px] px-[15px]">Contact</p></NavLink></li>
      </ul>
    </div> 
  </div>
</div>
</header>
  )
}

export default Header