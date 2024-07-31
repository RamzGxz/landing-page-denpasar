const Biografi = () => {
    return ( 
        <>
            <div className="max-w-screen-xl mx-auto mt-14 md:mt-16 lg:mt-20" id="biografi">
                <div className="flex  justify-center">
                    <h1 className="text-[35px] lg:text-[48px] font-bold">Biografi Singkat</h1>
                </div>

                {/* Gede Supriatna */}
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 lg:mt-20 mx-2  lg:mx-16">
                    <div className="flex flex-col mx-2 gap-20 order-2 lg:order-1 md:items-center lg:items-end">
                        <p className="text-black text-[16px] md:text-[20px] text-start md:text-center lg:text-start lg:text-[20px] -mt-16 lg:mt-32 order-2 lg:order-1">Gede Supriatna, lahir di Tejakula, 20 Desember 1968, beliau merupakan politisi PDI Perjuangan dan pernah menjabat menjadi sekretaris DPC PDIP Buleleng sejak 2010 hingga sekarang. Pada tahun 2014 beliau berhasil menduduki posisi sebagai ketua DPRD Buleleng periode 2014-2024.</p>
                        <h1 className="flex justify-start lg:justify-end gap-3 text-[30px] md:text-[38px] lg:text-[40px] mt-10 lg:mt-0 font-bold order-1 lg:order-2"><span className="text-[#D92D20]">Gede</span>Supriatna,SH</h1>
                    </div>
                    <div className="relative bg-[#D92D20] w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] flex justify-center items-center rounded-full mx-8 md:mx-44 lg:ml-[70px] overflow-hidden order-1 lg:order-2">
                        <img src="/Biografi/Gede Supriatna Bio.png" alt="Profile Picture" className="absolute object-contain lg:w-50 mt-36" />
                    </div>
                </div>

                
                {/* I Nyoman  */}
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-32 lg:mt-28 mx-2 lg:mx-16">
                    <div className="flex flex-col mx-2 gap-20 order-1 md:items-center lg:items-start">
                        <p className="text-black text-[16px] md:text-[20px] -mt-16 lg:mt-32 order-2 lg:order-1 md:text-center lg:text-start">Dr. I Nyoman Sutjidra, Sp.OG. Lahir Buleleng, 13 November 1960, beliau merupakan politisi PDI Perjuangan dan pada menjabat sebagai Wakil Bupati Buleleng periode 2012-2017 dan 2017-2022. I Nyoman Sutjidra juga menjabat sebagai wakil ketua bidang pemenangan pemilu DPC PDI Perjuangan Kabupateng Buleleng periode 2019-2024</p>
                        <h1 className="flex justify-start gap-3 text-[30px] md:text-[38px] lg:text-[40px] font-bold mt-10 lg:mt-0 order-1 lg:order-2"><span>I</span><span className="text-[#D92D20]">Nyoman</span>Sutdijra</h1>
                    </div>
                    <div className="relative bg-[#D92D20] w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] flex justify-center items-center rounded-full mx-8 md:mx-44 lg:mx-0 overflow-hidden">
                        <img src="/Biografi/I nyoman.png" alt="" className="absolute object-contain w-11/12 mt-16"/>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Biografi;