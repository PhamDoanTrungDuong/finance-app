import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar: React.FC = () => {
      const  [nav, setNav] = useState(false);
      const handleNav = () => {
            setNav(!nav);
      }
  return (
    <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-24 text-white">
      {/* App Menu */}
      <p className="text-3xl font-bold text-[#00df9a] cursor-pointer">FINANCE.</p>
      <ul className="hidden md:flex font-semibold">
        <li className="p-3 cursor-pointer hover:text-[#00df9a] duration-200">Home</li>
        <li className="p-3 cursor-pointer hover:text-[#00df9a] duration-200">Account</li>
        <li className="p-3 cursor-pointer hover:text-[#00df9a] duration-200">Sign In</li>
        <li className="py-3 px-6 cursor-pointer border border-white hover:bg-transparent hover:text-white duration-300 bg-white text-black rounded-xl"><span className="px-4">Get Started</span></li>
      </ul>

      {/* Menu cursor */}
      <div onClick={() => handleNav()} className='block md:hidden'>
            {!nav ? <AiOutlineMenu className='cursor-pointer'  size={20} /> : <AiOutlineClose className='cursor-pointer' size={20} />}
      </div>

      {/* Mobile Menu */}
      <div className={!nav ? "fixed left-[-100%] duration-300 top-0 w-[300px] border-r border-r-gray-900 h-screen bg-[#000300]" : "fixed left-0 top-0 w-[300px] duration-300 border-r border-r-gray-900 h-screen bg-[#000300]"}>
      <p className="p-4 text-3xl font-bold text-[#00df9a]">REACT.</p>
        <ul className="uppercase p-4 font-bold">
          <li className="p-4 cursor-pointer hover:text-gray-600 duration-300 border-b border-gray-500">Home</li>
          <li className="p-4 cursor-pointer hover:text-gray-600 duration-300 border-b border-gray-500">Company</li>
          <li className="p-4 cursor-pointer hover:text-gray-600 duration-300 border-b border-gray-500">Resource</li>
          <li className="p-4 cursor-pointer hover:text-gray-600 duration-300 border-b border-gray-500">About</li>
          <li className="p-4 cursor-pointer hover:text-gray-600 duration-300">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
