import React from 'react';
import { Link } from 'react-router';
import navImg from '../../assets/logo.png'
import gitImg from '../../assets/github-logo.png'

const Navbar = () => {
    const links=<> 
    <Link to={'/'}><li className='m-2'>Home</li></Link>
    <Link to={'/apps'}><li className='m-2'>About</li></Link>
    <Link to={'/'}><li className='m-2'>Installation</li></Link>
    </>
    return (
         <div className="navbar bg-base-100 shadow-sm md:px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      {
       links
      }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img className='w-7 md:w-10' src={navImg} alt="" /> Book Fair</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-active bg-gradient-to-r from-green-500 to-amber-400"><img src={gitImg} alt="" /> contribute</a>
  
  </div>
</div>
    );
};

export default Navbar;