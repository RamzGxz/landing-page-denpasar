import React, { useState } from 'react';
import { CaretDown, List, X } from 'phosphor-react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black w-full h-[81px] rounded-[30px] mx-auto flex items-center justify-between px-4 relative md:w-full lg:w-[1140px] lg:mt-10">
      {/* Desktop View */}
      <div className="hidden lg:flex items-center text-white w-full justify-between">
        <ul className="flex items-center flex-grow justify-between">
          <li className="ml-20 group">
            <a href="#beranda" className="group-hover:bg-[#D92D20] group-hover:text-white px-3 py-2 rounded-[60px] transition duration-300">Beranda</a>
          </li>
          <li className="mx-1 group">
            <a href="#biografi" className="group-hover:bg-[#D92D20] group-hover:text-white px-3 py-2 rounded-[60px] transition duration-300">Biografi</a>
          </li>
          <li className="mx-1 group">
            <a href="#publikasi" className="group-hover:bg-[#D92D20] group-hover:text-white px-3 py-2 rounded-[60px] transition duration-300">Pojok Kandidat</a>
          </li>
          <div className="flex-shrink-0 mx-20">
            <img src="/public/assets/taufan/logo.svg" alt="Logo" className="h-10 mx-auto md:mx-0" />
          </div>
          <li className="mx-1 group relative">
            <button onClick={toggleDropdown} className="flex items-center group-hover:bg-[#D92D20] group-hover:text-white px-3 py-2 rounded-[60px] transition duration-300">
              Rekam Jejak
              <CaretDown 
                size={16} 
                className={`ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} 
              />
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-black rounded shadow-lg">
                <li className="px-4 py-2 hover:bg-[#D92D20]"><a href="#person1">I Nyoman Sutdijra</a></li>
                <li className="px-4 py-2 hover:bg-[#D92D20]"><a href="#person2">Gede Supriatna</a></li>
              </ul>
            )}
          </li>
          <li className="mx-1 group">
            <a href="#karier" className="group-hover:bg-[#D92D20] group-hover:text-white px-3 py-2 rounded-[60px] transition duration-300">Karier</a>
          </li>
          <li className="mr-20 group">
            <a href="#berita" className="group-hover:bg-[#D92D20] group-hover:text-white px-3 py-2 rounded-[60px] transition duration-300">Berita</a>
          </li>
        </ul>
      </div>

      {/* Mobile and Tablet View */}
      <div className="flex lg:hidden items-center justify-between w-full">
        <img src="/public/assets/taufan/logo.svg" alt="Logo" className="h-10" />
        <button onClick={toggleMenu} className="text-white ml-4">
          <List size={24} />
        </button>
      </div>

      {/* Hamburger Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : 'translate-y-[-100%]'}`}>
        <button onClick={closeMenu} className="absolute top-4 right-4 text-white">
          <X size={24} />
        </button>
        <ul className="mt-16 w-full flex flex-col items-center">
          <li className="py-2">
            <a href="#beranda" className="hover:bg-[#D92D20] hover:text-white px-3 py-2 rounded-[60px] transition duration-300">Beranda</a>
          </li>
          <li className="py-2">
            <a href="#biografi" className="hover:bg-[#D92D20] hover:text-white px-3 py-2 rounded-[60px] transition duration-300">Biografi</a>
          </li>
          <li className="py-2">
            <a href="#publikasi" className="hover:bg-[#D92D20] hover:text-white px-3 py-2 rounded-[60px] transition duration-300">Pojok Kandidat</a>
          </li>
          <li className="py-2 relative">
            <button onClick={toggleDropdown} className="flex items-center hover:bg-[#D92D20] hover:text-white px-3 py-2 rounded-[60px] transition duration-300">
              Rekam Jejak
              <CaretDown 
                size={16} 
                className={`ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} 
              />
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-black rounded shadow-lg">
                <li className="px-4 py-2 hover:bg-[#D92D20]"><a href="#person1">I Nyoman Sutdijra</a></li>
                <li className="px-4 py-2 hover:bg-[#D92D20]"><a href="#person2">Gede Supriatna</a></li>
              </ul>
            )}
          </li>
          <li className="py-2">
            <a href="#karier" className="hover:bg-[#D92D20] hover:text-white px-3 py-2 rounded-[60px] transition duration-300">Karier</a>
          </li>
          <li className="py-2">
            <a href="#berita" className="hover:bg-[#D92D20] hover:text-white px-3 py-2 rounded-[60px] transition duration-300">Berita</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
