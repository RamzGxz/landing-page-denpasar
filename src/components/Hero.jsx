import React from 'react';
import { Quotes } from 'phosphor-react'; 

const Hero = () => {
  return (
    <div className="mx-auto w-full flex flex-col items-center justify-center" id="beranda">
      <div className="text-center">
        <img 
          src="/assets/taufan/hello.svg" 
          alt="Decorative" 
          className="w-[129px] h-[64px] mx-auto mt-24 lg:mt-40 mb-2"
        />
        <div className="text-[30px] font-semibold lg:text-[70px]">
          <span className="text-[#D92D20]"> Gede</span> Supriatna
        </div>
        <div className="text-[30px] font-semibold lg:text-[70px]">
          I 
          <span className="text-[#D92D20]"> Nyoman</span> Sutjidra
        </div>
      </div>
      <div className="flex w-full max-w-6xl justify-center items-center">
        <div className="hidden lg:flex relative left-2 w-64 p-6 bg-white shadow-lg rounded-lg text-center flex-col items-center">
          <Quotes size={24} className="text-gray-500 mb-4" />
          <p className="text-gray-700">Dalam setiap tantangan terdapat peluang. Hadapi setiap rintangan dengan tekad dan keyakinan.</p>
        </div>
        <img 
          src="/assets/taufan/hero.png" 
          alt="Hero" 
          className="w-full mx-auto lg:w-[700px] lg:h-[400px]"
        />
        <div className="hidden lg:flex relative right-2 w-64 p-6 bg-white shadow-lg rounded-lg text-center flex-col items-center">
          <Quotes size={24} className="text-gray-500 mb-4" />
          <p className="text-gray-700">Kesuksesan adalah hasil dari kerja keras dan ketekunan. Jangan biarkan tantangan menghentikanmu.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
