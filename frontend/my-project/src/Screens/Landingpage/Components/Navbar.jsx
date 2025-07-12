import React from 'react'
import { useState, useEffect } from 'react';
import logo from '../Components/logo.png'
import LoginModal from './Loginmodal';
import Signupmodal from './Signupmodal';

const Navbar = () => {

  const [scroll, setscroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollpostion = window.scrollY;
      setscroll(scrollpostion > 50);

    };

    window.addEventListener('scroll', handleScroll)


    return () => window.removeEventListener('scroll', handleScroll)
  }, []);


  return (
    <>
      <div className={`navbar bg-white shadow-sm md:px-20 fixed z-50 transition duration-300 ${scroll ? 'bg-[#d1d0d0] shadow-md' : 'bg-white'}`}>
        <div className='navbar-start'>
          <img src={logo} alt="" className='h-10 w-auto' />
        </div>
        <div className='navbar-end space-x-3 hidden md:flex'>
          <button className='bg-[#3A3A3A] text-sm font-medium text-white h-8 w-20 rounded-2xl hover:bg-[#FFA31A] transition-all duration-400' onClick={() => document.getElementById('my_modal_1').showModal()}>Login</button>
        </div>

        <div className="navbar-end flex md:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 z-50 mt-3 w-screen right-0 p-4 shadow absolute flex flex-col justify-center items-center">

              <li className="w-full">
                <button className="bg-[#3A3A3A] w-full h-10 text-sm font-medium text-white hover:bg-[#FFA31A] transition-all duration-400 rounded-none" onClick={() => document.getElementById('my_modal_1').showModal()}>
                  Login
                </button>
              </li>

            </ul>
          </div>
        </div>

      </div>

      <LoginModal />
      <Signupmodal/>
    </>
  )
}

export default Navbar
