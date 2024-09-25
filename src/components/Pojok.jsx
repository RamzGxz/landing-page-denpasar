const Pojok = () => {
  return (
      <div id="publikasi" className="pt-20">
      {/* Pojok Kandidat Desktop */}
      <section className="hidden md:hidden lg:block">
          <div className="container w-[1140px] mx-auto">
              <h1 className="text-[40px] font-bold text-[#FF0000] mt-10">POJOK <span className="text-black">KANDIDAT</span></h1>
              <div className="flex">
                  <div className="border-2 border-[#FF0000] w-[140px]"></div>
                  <div className="border-2 border-black w-[210px]"></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-[16px] mt-10">
                  <div className="w-[263px] h-[323px]">
                      <img src="/assets/wildan/pk1.png" alt="" />
                  </div>
                  <div className="w-[263px] h-[323px]">
                      <img src="/assets/wildan/pk2.png" alt="" />
                  </div>
                  <div className="w-[263px] h-[323px]">
                      <img src="/assets/wildan/pk3.png" alt="" />
                  </div>
                  <div className="w-[263px] h-[323px]">
                      <img src="/assets/wildan/pk4.png" alt="" />
                  </div>
              </div>
              <div className="text-end">
                  <a href="/pojokdetail">
                  <button  className="bg-black hover:bg-[#D92D20] transition-colors duration-300 hover:shadow-lg ease-in-out text-white text-sm font-normal py-3 px-4 rounded-lg mt-10 mx-auto">
                      Lihat Selengkapnya
                  </button>
                  </a>
              </div>
          </div>
      </section>

      {/* Pojok Kandidat Mobile */}
      <div className="block md:hidden lg:hidden">
          <div className="container w-[360px] mx-auto px-4">
              <h1 className="text-[24px] font-bold text-[#FF0000] mt-5">POJOK <span className="text-black">KANDIDAT</span></h1>
              <div className="flex">
                  <div className="border-2 border-[#FF0000] w-[80px]"></div>
                  <div className="border-2 border-black w-[130px]"></div>
              </div>
              <div className="flex overflow-x-auto gap-[8px] mt-5">
                  <div className="min-w-[170px] h-[200px]">
                      <img src="/assets/wildan/pk1.png" alt="" className="w-full h-full object-cover rounded-md" />
                  </div>
                  <div className="min-w-[170px] h-[200px]">
                      <img src="/assets/wildan/pk2.png" alt="" className="w-full h-full object-cover rounded-md" />
                  </div>
                  <div className="min-w-[170px] h-[200px]">
                      <img src="/assets/wildan/pk3.png" alt="" className="w-full h-full object-cover rounded-md" />
                  </div>
                  <div className="min-w-[170px] h-[200px]">
                      <img src="/assets/wildan/pk4.png" alt="" className="w-full h-full object-cover rounded-md" />
                  </div>
              </div>
              <div className="text-start">
                  <a href="/pojokdetail">
                  <button  className="bg-black hover:bg-[#D92D20] transition-colors duration-300 hover:shadow-lg ease-in-out text-white text-sm font-normal py-3 px-4 rounded-lg mt-10 mx-auto">
                      Lihat Selengkapnya
                  </button></a>
              </div>
          </div>
      </div>

      {/* Pojok Kandidat Tablet */}
      <div className="hidden md:block lg:hidden">
          <div className="container w-[768px] mx-auto px-4">
              <h1 className="text-[32px] font-bold text-[#FF0000] mt-8">POJOK <span className="text-black">KANDIDAT</span></h1>
              <div className="flex">
                  <div className="border-2 border-[#FF0000] w-[110px]"></div>
                  <div className="border-2 border-black w-[170px]"></div>
              </div>
              <div className="flex overflow-x-auto gap-[12px] mt-8">
                  <div className="min-w-[270px] h-[300px]">
                      <img src="/assets/wildan/pk1.png" alt="" className="w-full h-full object-cover rounded-md" />
                  </div>
                  <div className="min-w-[270px] h-[300px]">
                      <img src="/assets/wildan/pk2.png" alt="" className="w-full h-full object-cover rounded-md" />
                  </div>
                  <div className="min-w-[270px] h-[300px]">
                      <img src="/assets/wildan/pk3.png" alt="" className="w-full h-full object-cover rounded-md" />
                  </div>
                  <div className="min-w-[270px] h-[300px]">
                      <img src="/assets/wildan/pk4.png" alt="" className="w-full h-full object-cover rounded-md" />
                  </div>
              </div>
              <div className="mt-0">
                  <a href="/pojokdetail">
                  <button  className="bg-black hover:bg-[#D92D20] transition-colors duration-300 hover:shadow-lg ease-in-out text-white text-sm font-normal py-3 px-4 rounded-lg mt-10 mx-auto">
                      Lihat Selengkapnya
                  </button></a>
              </div>
          </div>
      </div>
      </div>
  );
}

export default Pojok;
