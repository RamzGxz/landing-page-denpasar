import React, { useState } from "react";
import { CaretDown, List, X } from "phosphor-react";

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

  const handleScroll = (e, targetId) => {
    setIsMenuOpen(false);
    e.preventDefault();
    

    if (window.location.pathname === "/") {
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToPage = (url) => {
    window.location.href = url;
  };

  const navigateToLanding = () => {
    window.location.href = "/";
  };

  return (
    <nav className="bg-black h-[81px] rounded-[30px] mx-auto flex items-center justify-between px-4 fixed z-50 w-full left-0 right-0 max-w-[1140px] mt-2 lg:mt-4">
      <div className="hidden lg:flex items-center text-white w-full justify-between">
        <ul className="flex items-center flex-grow justify-between">
          <li className="ml-20 group">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateToLanding();
              }}
              className="group-hover:bg-[#D92D20] group-hover:text-white px-3 py-2 rounded-[60px] transition duration-300"
            >
              Beranda
            </a>
          </li>
          <li className="mx-1 group">
            <a
              href="#biografi"
              onClick={(e) => handleScroll(e, "biografi")}
              className="group-hover:bg-[#D92D20] group-hover:text-white px-3 py-2 rounded-[60px] transition duration-300"
            >
              Biografi
            </a>
          </li>
          <li className="mx-1 group">
            <a
              href="#publikasi"
              onClick={(e) => handleScroll(e, "publikasi")}
              className="group-hover:bg-[#D92D20] group-hover:text-white px-3 py-2 rounded-[60px] transition duration-300"
            >
              Pojok Kandidat
            </a>
          </li>
          <div className="flex-shrink-0 mx-20">
            <img
              src="/assets/taufan/logo.svg"
              alt="Logo"
              className="h-10 mx-auto md:mx-0"
            />
          </div>
          <li className="mx-1 group relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center group-hover:bg-[#D92D20] group-hover:text-white px-3 py-2 rounded-[60px] transition duration-300"
            >
              Rekam Jejak
              <CaretDown
                size={16}
                className={`ml-1 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-black rounded shadow-lg">
                <li
                  className="px-4 py-2 hover:bg-[#D92D20] cursor-pointer"
                  onClick={() => navigateToPage("/i_nyoman_sutjidra")}
                >
                  I Nyoman Sutjidra
                </li>
                <li
                  className="px-4 py-2 hover:bg-[#D92D20] cursor-pointer"
                  onClick={() => navigateToPage("/GedeSupriatna")}
                >
                  Gede Supriatna
                </li>
              </ul>
            )}
          </li>
          <li className="mx-1 group">
            <a
              href="#karier"
              onClick={(e) => handleScroll(e, "karier")}
              className="group-hover:bg-[#D92D20] group-hover:text-white px-3 py-2 rounded-[60px] transition duration-300"
            >
              Karier
            </a>
          </li>
          <li className="mr-20 group">
            <a
              href="#berita"
              onClick={(e) => handleScroll(e, "berita")}
              className="group-hover:bg-[#D92D20] group-hover:text-white px-3 py-2 rounded-[60px] transition duration-300"
            >
              Berita
            </a>
          </li>
        </ul>
      </div>
      <div className="flex lg:hidden items-center justify-between w-full">
        <img src="/assets/taufan/logo.svg" alt="Logo" className="h-10" />
        <button onClick={toggleMenu} className="text-white ml-4">
          <List size={24} />
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0" : "translate-y-[-100%]"
        }`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-white"
        >
          <X size={24} />
        </button>
        <ul className="mt-16 w-full flex flex-col items-center">
          <li className="py-2">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateToLanding();
              }}
              className="hover:bg-[#D92D20] hover:text-white px-3 py-2 rounded-[60px] transition duration-300"
            >
              Beranda
            </a>
          </li>
          <li className="py-2">
            <a
              href="#biografi"
              onClick={(e) => handleScroll(e, "biografi")}
              className="hover:bg-[#D92D20] hover:text-white px-3 py-2 rounded-[60px] transition duration-300"
            >
              Biografi
            </a>
          </li>
          <li className="py-2">
            <a
              href="#publikasi"
              onClick={(e) => handleScroll(e, "publikasi")}
              className="hover:bg-[#D92D20] hover:text-white px-3 py-2 rounded-[60px] transition duration-300"
            >
              Pojok Kandidat
            </a>
          </li>
          <li className="py-2 relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center hover:bg-[#D92D20] hover:text-white px-3 py-2 rounded-[60px] transition duration-300"
            >
              Rekam Jejak
              <CaretDown
                size={16}
                className={`ml-1 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-black rounded shadow-lg ">
                <li
                  className="px-4 py-2 hover:bg-[#D92D20] cursor-pointer"
                  onClick={() => navigateToPage("/i_nyoman_sutjidra")}
                >
                  I Nyoman Sutjidra
                </li>
                <li
                  className="px-4 py-2 hover:bg-[#D92D20] cursor-pointer"
                  onClick={() => navigateToPage("/GedeSupriatna")}
                >
                  Gede Supriatna
                </li>
              </ul>
            )}
          </li>
          <li className="py-2">
            <a
              href="#karier"
              onClick={(e) => handleScroll(e, "karier")}
              className="hover:bg-[#D92D20] hover:text-white px-3 py-2 rounded-[60px] transition duration-300"
            >
              Karier
            </a>
          </li>
          <li className="py-2">
            <a
              href="#berita"
              onClick={(e) => handleScroll(e, "berita")}
              className="hover:bg-[#D92D20] hover:text-white px-3 py-2 rounded-[60px] transition duration-300"
            >
              Berita
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
