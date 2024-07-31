import Navbar from "../components/Navbar";

const DetailNyoman = () => {
    return (
        <>
            <section className="lg:mx-auto lg:max-w-screen-xl">
                <div className="relative w-full h-[600px] lg:h-[635px] bg-cover rounded-bl-3xl rounded-br-3xl bg-center lg:mx-auto lg:max-w-screen-xl" style={{ backgroundImage: `url('/public/assets/haikal/background.png')` }}>
                    <Navbar className="fixed top-0 left-0 w-full z-50" />
                    <div className="flex items-center justify-center h-full">
                        <img src="/public/assets/haikal/nyoman.png" className="mt-[255px] w-[70%] md:mt-44 md:w-[40%] lg:mt-[204px] lg:w-[25%]" alt="" />
                    </div>
                </div>
                <div className="flex flex-col my-8 mx-2 md:mx-16">
                    <h1 className="font-bold text-xl">Rekam Jejak I Nyoman Sutjidra</h1>
                    <div className="flex mt-4 gap-2">
                        <div className="flex flex-col mt-1">
                            <span className="w-5 h-5 border rounded-full border-[#FF0000]"></span>
                            <span className="w-[1px] h-[185px] bg-black ml-[9px]"></span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="ml-0">
                                <span className="text-white bg-[#FF0000] py-0.5 px-4 rounded-xl">2013-2019</span>
                            </div>
                            <div className="ml-2">
                                <h1 className="font-semibold text-sm">Wakil Ketua DPD PDIP Kabupaten Buleleng</h1>
                                <p className="font-regular text-sm">I Nyoman Sutjidra menjabat sebagai Wakil Ketua DPD Taruna Merah Putih PDI Perjuangan Kabupaten Buleleng dari 2013 hingga 2019, di mana ia berperan penting dalam pengembangan kader dan penguatan jaringan partai di tingkat kabupaten.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 -mt-1">
                        <div className="flex flex-col mt-1">
                            <span className="w-5 h-5 border rounded-full border-[#FF0000]"></span>
                            <span className="w-[1px] h-[225px] bg-black ml-[9px]"></span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="ml-0">
                                <span className="text-white bg-[#FF0000] py-0.5 px-4 rounded-xl">2019-2024</span>
                            </div>
                            <div className="ml-2">
                                <h1 className="font-semibold text-sm">Wakil Ketua Bidang Pemenangan Pemilu DPC PDI Perjuangan Kabupaten Buleleng</h1>
                                <p className="font-regular text-sm">
                                    I Nyoman Sutjidra menjabat sebagai Wakil Ketua Bidang Pemenangan Pemilu DPC PDI Perjuangan Kabupaten Buleleng dari 2019 hingga 2024, di mana ia bertanggung jawab atas strategi kampanye dan mobilisasi pemilih untuk meningkatkan hasil pemilu partai di daerah tersebut.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 -mt-1">
                        <div className="flex flex-col mt-1">
                            <span className="w-5 h-5 border rounded-full border-[#FF0000]"></span>
                            <span className="w-[1px] h-[185px] bg-black ml-[9px]"></span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="ml-0">
                                <span className="text-white bg-[#FF0000] py-0.5 px-4 rounded-xl">2012-2022</span>
                            </div>
                            <div className="ml-2">
                                <h1 className="font-semibold text-sm">Wakil Bupati Buleleng</h1>
                                <p className="font-regular text-sm">
                                    I Nyoman Sutjidra menjabat sebagai Wakil Bupati Buleleng selama dua periode, yaitu 2012-2017 dan 2017-2022. Selama masa jabatannya, ia berperan dalam pelaksanaan kebijakan pemerintahan, pengembangan daerah, dan peningkatan layanan publik di Kabupaten Buleleng.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailNyoman;
