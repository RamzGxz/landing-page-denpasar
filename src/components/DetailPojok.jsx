import React from 'react';

const DetailPojok = () => {
    const candidates = [
        { src: "public/assets/wildan/pk1.png", title: "Menyapa warga buleleng di acara jalan sehat" },
        { src: "public/assets/wildan/pk2.png", title: "Penyerahan Bantuan kepada panti asuhan" },
        { src: "public/assets/wildan/pk3.png", title: "Hadiri dalam acara APSEN 2024, Yang bertema 'Kota para legenda, kota petarung'" },
        { src: "public/assets/wildan/pk4.png", title: "Edukasi Kesehatan untuk masyarakat" },
        { src: "public/assets/wildan/pk5.jpg", title: "Ngopi break Bareng Bli Nyoman saat penutupan Rakernas PDI Perjuangan di Jakarta" },
        { src: "public/assets/wildan/pk6.jpg", title: "Mengadakan kegiatan bakti sosial di Desa Galungan dan juga memberikan pelayanan pemeriksaan mata serta pembagian kacamata gratis." },
        { src: "public/assets/wildan/pk7.jpg", title: "Ikut dalam prosesi pelaksanan Upacara Pecaruan Tilem Sasih Kapitu di Pura Dalem Desa Adat Bontihing Kecamatan Kubutambahan." },
        { src: "public/assets/wildan/pk8.jpg", title: "Acara pembukaan LOKAFEST (Lokapaksa Festival) yang dilaksanakan pada tanggal 21 Desember 2023" }
    ];

    return (
        <div className="pt-[70px] lg:pt-[100px]"> {/* Tambahkan padding-top sesuai dengan tinggi navbar */}
        {/* Pojok Kandidat Desktop */}
        <section className="hidden md:hidden lg:block">
            <div className="container w-[1140px] mx-auto mb-10">
                <h1 className="text-[40px] font-bold text-center text-black mt-10">
                    Detail : <span className="text-[#FF0000]">POJOK</span> KANDIDAT
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-[16px] mt-10">
                    {candidates.map((candidate, index) => (
                        <div key={index} className="w-[263px] h-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4">
                            <div className="relative h-[323px]">
                                <img src={candidate.src} alt={candidate.title} className="w-full h-full object-cover"/>
                                <div className="absolute top-2 right-2 bg-white bg-opacity-75 text-[#FF0000] text-[12px] font-bold px-2 py-1 rounded">
                                    POJOK <span className="text-black">KANDIDAT</span>
                                </div>
                            </div>
                            <div className="p-4 text-white bg-black">
                                <h2 className="text-[16px] font-semibold">{candidate.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Pojok Kandidat Mobile */}
        <section className="md:hidden lg:hidden">
            <div className="container w-[360px] mx-auto mb-10 px-4">
                <h1 className="text-[24px] font-bold text-center text-black mt-10">
                    Detail : <span className="text-[#FF0000]">POJOK</span> KANDIDAT
                </h1>
                <div className="grid grid-cols-2 gap-[8px] mt-10">
                    {candidates.map((candidate, index) => (
                        <div key={index} className="w-full h-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4">
                            <div className="relative h-[160px]">
                                <img src={candidate.src} alt={candidate.title} className="w-full h-full object-cover"/>
                                <div className="absolute top-2 right-2 bg-white bg-opacity-75 text-[#FF0000] text-[10px] font-bold px-1 py-0.5 rounded">
                                    POJOK <span className="text-black">KANDIDAT</span>
                                </div>
                            </div>
                            <div className="p-2 text-white bg-black">
                                <h2 className="text-[12px] font-semibold">{candidate.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Pojok Kandidat Tablet */}
        <section className="md:block hidden lg:hidden">
            <div className="container w-[768px] mx-auto mb-10 px-4">
                <h1 className="text-[32px] font-bold text-center text-black mt-10">
                    Detail : <span className="text-[#FF0000]">POJOK</span> KANDIDAT
                </h1>
                <div className="grid grid-cols-2 gap-[16px] mt-10">
                    {candidates.map((candidate, index) => (
                        <div key={index} className="w-full h-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4">
                            <div className="relative h-[200px]">
                                <img src={candidate.src} alt={candidate.title} className="w-full h-full object-cover"/>
                                <div className="absolute top-2 right-2 bg-white bg-opacity-75 text-[#FF0000] text-[14px] font-bold px-2 py-1 rounded">
                                    POJOK <span className="text-black">KANDIDAT</span>
                                </div>
                            </div>
                            <div className="p-4 text-white bg-black">
                                <h2 className="text-[14px] font-semibold">{candidate.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </div>
    );
}

export default DetailPojok;
