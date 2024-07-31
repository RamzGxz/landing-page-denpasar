const Pojok = () => {
    return (
        <>
        <section>
            <div className="container lg:w-[1140px] mx-auto">
                <h1 className="text-[40px] font-bold text-[#FF0000] mt-10">POJOK <span className="text-black">KANDIDAT</span></h1>
                <div className="flex">
                    <div className="border-2 border-[#FF0000] w-[140px]"></div>
                    <div className="border-2 border-black w-[210px]"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-[16px] mt-10">
                    <div className="w-[263px] h-[323px]">
                        <img src="src/assets/pojok&profil/pk1.png" alt="" />
                    </div>
                    <div className="w-[263px] h-[323px]">
                        <img src="src/assets/pojok&profil/pk2.png" alt="" />
                    </div>
                    <div className="w-[263px] h-[323px]">
                        <img src="src/assets/pojok&profil/pk3.png" alt="" />
                    </div>
                    <div className="w-[263px] h-[323px]">
                        <img src="src/assets/pojok&profil/pk4.png" alt="" />
                    </div>
                </div>
                <div className="text-end">
                    <button className="bg-black hover:bg-blue-700 text-white text-[14px] font-normal py-2 px-16 rounded-[15px] mt-10 mx-auto">Lihat Selengkapnya</button>
                </div>
            </div>
        </section>
        </>
      );
}
 
export default Pojok;