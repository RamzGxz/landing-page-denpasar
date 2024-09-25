import React from "react";
import Navbar from "../components/Navbar";

const DetailGede = () => {
  return (
    <section className="lg:mx-auto lg:max-w-screen-xl">
      <Navbar />
      <div className="md:h-[400px] h-80 lg:h-[647px] relative rounded-b-[100px] overflow-hidden flex">
        <img
          src="/assets/zitta/background.png"
          alt="background"
          className="w-full h-full object-cover absolute"
        />
        <img
          src="/assets/zitta/gedesupriatna.png"
          alt="GedeSupriatna"
          height={400}
          width={400}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-52 w-auto md:h-60 lg:h-[444px]"
        />
      </div>
      <div className="px-3 md:px-11 lg:px-36 py-16 lg:py-32">
        <h1 className="text-black font-bold text-2xl">
          Rekam Jejak Gede Supriatna
        </h1>
        <div className="flex gap-7 min-h-max w-fit mt-3 md:mt-8">
          <div className="flex flex-col items-center">
            <div className="size-5 rounded-full ring-2 ring-[#FF0000] ring-inset mt-[2px]"></div>
            <div className="w-[1px] h-full bg-black"></div>
          </div>
          <div className="flex flex-col gap-3 mb-8">
            <span className="w-fit px-5 bg-[#FF0000] text-white rounded-full">
              2005-2010
            </span>
            <span className="font-semibold">
              Ketua PAC PDI Perjuangan Kec. Tejakula
            </span>
            <p>
              Gede Supriatna menjabat sebagai Ketua PAC PDI Perjuangan Kecamatan
              Tejakula dengan dedikasi yang tinggi terhadap pembangunan dan
              kemajuan wilayah tersebut. Di bawah kepemimpinannya, PAC PDI
              Perjuangan Kec. Tejakula aktif menginisiasi berbagai program
              sosial dan ekonomi yang bertujuan untuk meningkatkan kesejahteraan
              masyarakat setempat
            </p>
          </div>
        </div>
        <div className="flex gap-7 min-h-max w-fit mt-[-2px]">
          <div className="flex flex-col items-center">
            <div className="size-5 rounded-full ring-2 ring-[#FF0000] ring-inset mt-[2px]"></div>
            <div className="w-[1px] h-full bg-black"></div>
          </div>
          <div className="flex flex-col gap-3 mb-8">
            <span className="w-fit px-5 bg-[#FF0000] text-white rounded-full">
              2010-2024
            </span>
            <span className="font-semibold">
              Sekretaris DPC PDI Perjuangan Kab. Buleleng
            </span>
            <p>
              Gede Supriatna, saat menjabat sebagai Sekretaris DPC PDI
              Perjuangan Kabupaten Buleleng, menunjukkan kinerja yang luar biasa
              dalam mendukung kepemimpinan partai dan memperkuat struktur
              organisasi. Dengan pengalamannya yang luas, ia berhasil
              mengkoordinasikan berbagai kegiatan partai, mulai dari konsolidasi
              internal hingga kampanye politik yang efektif.
            </p>
          </div>
        </div>
        <div className="flex gap-7 min-h-max w-fit mt-[-2px]">
          <div className="flex flex-col items-center">
            <div className="size-5 rounded-full ring-2 ring-[#FF0000] ring-inset mt-[2px]"></div>
          </div>
          <div className="flex flex-col gap-3 mb-8">
            <span className="w-fit px-5 bg-[#FF0000] text-white rounded-full">
              2019-2024
            </span>
            <span className="font-semibold">Ketua Dprd Kabupaten Buleleng</span>
            <p>
              Gede Supriatna, saat menjabat sebagai Ketua DPRD Kabupaten
              Buleleng, dikenal sebagai pemimpin yang tegas dan visioner. Dalam
              peranannya, ia berhasil memimpin sidang-sidang dewan dengan
              profesionalisme dan memastikan terciptanya kebijakan-kebijakan
              yang berpihak pada kepentingan rakyat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailGede;
