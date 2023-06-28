'use client'
import React from 'react';
import Image from 'next/image'
import logo from '../../../public/porfolioLogo.jpg';
import { Link } from 'react-scroll/modules'
const Navber = () => {
    const navList = <>
          <li><a href="/">Home</a></li>
          <li><Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}>
          About<span  className='text-red-600'>Me</span>
        </Link></li>
          <li><Link activeClass="active" to="page2" spy={true} smooth={true} offset={50} duration={500}>Skills & Projects</Link></li>
          <li><Link activeClass="active" to="page3" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
    </>
    return (
        <div className="navbar bg-white fixed z-10 bg-opacity-30 max-w-screen-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navList}
      </ul>
    </div>
    <Image
      src={logo}
      width={50}
      height={50}
      alt="Picture of the author"
      className='rounded-full'
    />
    <div className="btn btn-ghost normal-case text-xl"> <p>SH<span className='text-[#DD33FF]'>A</span>KI<span className='text-[#FF9633]'>L</span></p></div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navList}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#FF6133]">Hire Me</a>
  </div>
</div>
    );
};

export default Navber;