import { Envelope } from "phosphor-react";
import React from "react";

const Berita = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 mx-auto">
      <div className="flex md:justify-between items-center justify-center mb-5 md:mb-1 lg:mb-[9px]">
        <h1 className="font-bold text-4xl md:text-[40px]">BERITA</h1>
        <button className="hidden md:block px-5 py-3 text-sm text-white md:text-xs lg:text-sm bg-black rounded-lg">
          Baca Selengkapnya
        </button>
      </div>
      <div className="border-b-[2px] border-black hidden md:block"></div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-[41px] md:gap-[23px] lg:gap-[30px] md:mt-[21px]">
        <div className="flex-1">
          <div className="w-full md:h-[305px] lg:h-[471px] rounded-lg overflow-hidden mb-[6px] md:mb-[9px] lg:mb-[10px]">
            <img
              src="../../public/assets/nafis/berita.png"
              alt="Main News"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-sm md:text-base text-gray-600 mb-[6px] md:mb-[10px]">
            Sabtu, 22 Juni 2024
          </div>
          <div className="text-xl md:text-xl lg:text-4xl font-semibold">
            Mutasi Pejabat, Ketua DPRD Buleleng Apresiasi Sistem Merit
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-4 md:gap-3 lg:gap-[27px] flex-1">
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 md:gap-[23px] h-max items-center">
              <div className="w-full min-h-[99px] lg:max-w-[263px] md:h-[97px] lg:min-h-[139px] rounded-lg overflow-hidden">
                <img
                  src="../../public/assets/nafis/berita1.png"
                  alt="News 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1 md:gap-[2px] lg:gap-[9px] w-full">
                <span className="text-xs lg:text-base text-gray-600">
                  Sabtu, 22 Juni 2024
                </span>
                <p className="text-sm md:text-xs lg:text-base font-semibold">
                  Ketua DPRD Gede Supriatna Buka Event BATA ke-6 di Krisna
                  Funtastic Land
                </p>
              </div>
            </div>
            <div className="border-b-[1px] border-black md:hidden"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 md:gap-[23px] h-max items-center">
              <div className="w-full min-h-[99px] lg:max-w-[263px] md:h-[97px] lg:min-h-[139px] rounded-lg overflow-hidden">
                <img
                  src="../../public/assets/nafis/berita2.png"
                  alt="News 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1 md:gap-[2px] lg:gap-[9px] w-full">
                <span className="text-xs lg:text-base text-gray-600">
                  Salasa, 22 April 2024
                </span>
                <p className="text-sm md:text-xs lg:text-base font-semibold">
                  Mantan Wakil Bupati Buleleng dr.Nyoman Sutjidra,Sp.OG,
                  Resmikan Rumah Relawan JOSS 24
                </p>
              </div>
            </div>
            <div className="border-b-[1px] border-black md:hidden"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 md:gap-[23px] h-max items-center">
              <div className="w-full min-h-[99px] lg:max-w-[263px] md:h-[97px] lg:min-h-[139px] rounded-lg overflow-hidden">
                <img
                  src="../../public/assets/nafis/berita3.png"
                  alt="News 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1 md:gap-[2px] lg:gap-[9px] w-full">
                <span className="text-xs lg:text-base text-gray-600">
                  Senin, 22 april 2024
                </span>
                <p className="text-sm md:text-xs lg:text-base font-semibold">
                  Sebut Singaraja Kota Petarung, Sutjidra Senggol Ungkapan
                  Netizen
                </p>
              </div>
            </div>
            <div className="border-b-[1px] border-black md:hidden"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 md:gap-[23px] h-max items-center">
              <div className="w-full min-h-[99px] lg:max-w-[263px] md:h-[97px] lg:min-h-[139px] rounded-lg overflow-hidden">
                <img
                  src="../../public/assets/nafis/berita4.png"
                  alt="News 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1 md:gap-[2px] lg:gap-[9px] w-full">
                <span className="text-xs lg:text-base text-gray-600">
                  Senin, 29 Juni 2024
                </span>
                <p className="text-sm md:text-xs lg:text-base font-semibold">
                  Pasca Tak Menjabat, Sutjidra Buka Klinik Utama
                </p>
              </div>
            </div>
            <div className="border-b-[1px] border-black md:hidden"></div>
          </div>
        </div>
      </div>
      <div className="mt-28 p-6 bg-red-100 rounded-lg text-center max-w-screen-md mx-auto">
        <h2 className="text-2xl font-bold mb-2">Ada Kritik dan Saran?</h2>
        <p className="text-gray-600 mb-4">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <button className="px-5 py-3 text-white bg-red-600 rounded-lg">
          <span className="flex items-center gap-2">
            <Envelope size={24} weight="regular" />
            Kontak Kami
          </span>
        </button>
      </div>
    </div>
  );
};

export default Berita;
