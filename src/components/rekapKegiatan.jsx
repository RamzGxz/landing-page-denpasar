// src/rekapKegiatan.jsx
import React, { useState } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';


const RekapKegiatan = () => {
  const activities = [
    {
      id: 1,
      title: 'Menghadiri dalam acara BATA7 berlokasi di Krisna Oleh-oleh, Temukus, Buleleng',
      image: 'public/RekapKegiatan/berita1.jpg',
    },
    {
      id: 2,
      title: 'Fraksi PDIP Serahkan Donasi Biaya Pemulangan PMI Meninggal Di Ceko',
      image: 'public/RekapKegiatan/kegiatan2.png',
    },
    {
      id: 3,
      title: 'Menghadiri Serangkaian HUT PDI Perjuangan ke 51, Ranting Desa Tejakula',
      image: 'public/RekapKegiatan/berita3.jpg',
    },
    {
      id: 4,
      title: 'PDIP Bali Usulkan Peluang Pencalonan Pemilihan Bupati dan Wakil Bupati',
      image: 'public/RekapKegiatan/berita2.jpg',
    },
    {
      id: 5,
      title: 'Bertemu dengan Perbekel dan Bendesa Adat Se-kecamatan Seririt.',
      image: 'public/RekapKegiatan/berita5.jpg',
  },
    // Tambahkan lebih banyak item jika diperlukan
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 0));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => (prevPage < Math.ceil(activities.length / itemsPerPage) - 1 ? prevPage + 1 : prevPage));
  };

  const currentActivities = activities.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className="bg-white min-h-screen p-4">
      <section>
        <div className="container mx-auto p-4">
          <div className="bg-[#FF6500] grid grid-cols-1 lg:grid-cols-3 gap-4 rounded-[10px] mt-[40px] p-6 text-white">
            <div className="flex flex-col justify-center">
              <h2 className="text-[24px] lg:text-[32px] font-bold mb-4">Karier :</h2>
              <div className="text-[14px] lg:text-[16px] font-semibold space-y-4">
                <div className="text-white p-4 rounded-[10px] flex items-center border-2 border-white">
                  <div className="flex-shrink-0 text-[24px] lg:text-[32px] font-bold mr-4">1.</div>
                  <p>Memimpin rapat paripurna di DPRD Buleleng yang membahas berbagai isu ekonomi dan budaya.</p>
                </div>
                <div className="text-white p-4 rounded-[10px] flex items-center border-2 border-white">
                  <div className="flex-shrink-0 text-[24px] lg:text-[32px] font-bold mr-4">2.</div>
                  <p>Berperan aktif dalam mendukung suksesnya visi misi penguatan "Satu Jalur" yang bertujuan untuk meningkatkan kesejahteraan rakyat Buleleng.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-4 lg:mt-0">
              <img src="public/RekapKegiatan/profile_gede.png" alt="Gede Supriata" className="w-[200px] h-[200px] lg:w-[330px] lg:h-[100%] object-cover rounded-[10px]" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-[24px] lg:text-[32px] font-bold mb-4">Gede Supriata, SH</h1>
              <p className="text-[14px] lg:text-[16px]">
                Gede Supriata, yang sudah bekerja di DPRD Buleleng sejak tahun 1998, 
                telah berperan penting dalam berbagai inisiatif kebijakan yang berfokus pada kepentingan umum. Dalam masa jabatan 2018-2023, 
                Gede Supriata terus berupaya dalam mengedepankan aspirasi masyarakat dan mendukung berbagai program publik di Buleleng.
              </p>
            </div>
          </div>
          <div className="bg-white min-h-screen p-4 mt-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">Rekap Kegiatan</h2>
            <div className="relative">
              <div className="flex justify-center lg:justify-start flex-wrap -mx-2">
                {currentActivities.map(activity => (
                  <div key={activity.id} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                    <div className="bg-gray-200 p-4 rounded-lg">
                      <img src={activity.image} alt={activity.title} className="rounded-lg mb-4 w-full h-40 object-cover" />
                      <h3 className="text-lg font-bold text-gray-800">{activity.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <button onClick={handlePrevClick} className="p-6 rounded-full bg-gray-800 mx-2"><CaretLeft size={32} color="white" /></button>
                <button onClick={handleNextClick} className="p-6 rounded-full bg-gray-800 mx-2"><CaretRight size={32} color="white" /></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RekapKegiatan;
