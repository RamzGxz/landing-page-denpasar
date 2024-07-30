import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black w-[1140px] h-[81px] rounded-lg mx-auto flex items-center justify-between px-4">
      <ul className="flex space-x-6 text-white">
        <li><a href="#beranda" className="hover:underline">Beranda</a></li>
        <li><a href="#biografi" className="hover:underline">Biografi</a></li>
        <li><a href="#publikasi" className="hover:underline">Publikasi</a></li>
        <li><a href="#rekam-jejak" className="hover:underline">Rekam Jejak</a></li>
      </ul>
      <div className="flex items-center space-x-6">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <ul className="flex space-x-6 text-white">
          <li><a href="#visi" className="hover:underline">Visi</a></li>
          <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
