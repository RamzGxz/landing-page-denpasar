const ProfilNyoman = () => {
  return (
      <div id="karier" className="pt-20">

      {/* Profil Nyoman Desktop */}
      <section className="hidden md:hidden lg:block">
          <div className="container w-[1140px] mx-auto">
              <h1 className="text-[40px] text-center font-bold text-black mt-10">Profil Pribadi</h1>
              <div className="bg-[#C40C0C] grid grid-cols-3 gap-4 rounded-[10px] mt-[40px] p-6 text-white">
                  <div className="flex flex-col justify-center">
                      <h1 className="text-[32px] font-bold mb-4">I Nyoman Sutjidra</h1>
                      <p className="text-[16px]">
                          Dr. I Nyoman Sutjidra, Sp.OG. (lahir 13 November 1960) adalah politisi PDI Perjuangan yang menjabat sebagai Wakil Bupati Buleleng periode 2012-2017 dan 2017-2022. Sutjidra juga menjabat sebagai Wakil Ketua Bidang Pemenangan Pemilu DPC PDI Perjuangan Kabupaten Buleleng periode 2019-2024.
                      </p>
                  </div>
                  <div className="flex justify-center items-center">
                      <img src="/assets/wildan/PPnyoman.png" alt="I Nyoman Sutjidra" className="w-[340px] h-[100%] object-cover rounded-[10px]"/>
                  </div>
                  <div className="flex flex-col justify-center">
                      <h2 className="text-[32px] font-bold mb-4">Karier :</h2>
                      <div className="text-[16px] font-semibold space-y-4">
                          <div className="text-white p-4 rounded-[10px] flex items-center border-2 border-white">
                              <div className="flex-shrink-0 text-[32px] font-bold mr-4">1.</div>
                              <p>Alumni Program Magister Spesialis Kebidanan dan Penyakit Kandungan di universitas Udayana</p>
                          </div>
                          <div className="text-white p-4 rounded-[10px] flex items-center border-2 border-white">
                              <div className="flex-shrink-0 text-[32px] font-bold mr-4">2.</div>
                              <p>Menjabat Sebagai Wakil Ketua Bidang Pemenangan Pemilu DPC PDI Buleleng</p>
                          </div>
                          <div className="text-white p-4 rounded-[10px] flex items-center border-2 border-white">
                              <div className="flex-shrink-0 text-[32px] font-bold mr-4">3.</div>
                              <p>Pernah menjadi PNS di Badung dan Karangasem.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Profil Nyoman Mobile */}
      <section className="block lg:hidden md:hidden">
          <div className="container mx-auto px-4">
              <h1 className="text-[32px] text-center font-bold text-black mt-10">Profil Pribadi</h1>
              <div className="bg-[#C40C0C] rounded-[10px] mt-[20px] p-4 text-white">
                  <div className="flex flex-col items-center mb-4">
                      <img src="/assets/wildan/PPnyoman.png" alt="I Nyoman Sutjidra" className="w-full h-auto object-cover rounded-[10px] mb-4"/>
                      <h1 className="text-[24px] font-bold mb-2">I Nyoman Sutjidra</h1>
                      <p className="text-[14px] text-center">
                          Dr. I Nyoman Sutjidra, Sp.OG. (lahir 13 November 1960) adalah politisi PDI Perjuangan yang menjabat sebagai Wakil Bupati Buleleng periode 2012-2017 dan 2017-2022. Sutjidra juga menjabat sebagai Wakil Ketua Bidang Pemenangan Pemilu DPC PDI Perjuangan Kabupaten Buleleng periode 2019-2024.
                      </p>
                  </div>
                  <div className="flex flex-col justify-center">
                      <h2 className="text-[24px] font-bold mb-4">Karier :</h2>
                      <div className="text-[14px] font-semibold space-y-4">
                          <div className="text-white p-4 rounded-[10px] flex items-center border-2 border-white">
                              <div className="flex-shrink-0 text-[24px] font-bold mr-4">1.</div>
                              <p>Alumni Program Magister Spesialis Kebidanan dan Penyakit Kandungan di universitas Udayana</p>
                          </div>
                          <div className="text-white p-4 rounded-[10px] flex items-center border-2 border-white">
                              <div className="flex-shrink-0 text-[24px] font-bold mr-4">2.</div>
                              <p>Menjabat Sebagai Wakil Ketua Bidang Pemenangan Pemilu DPC PDI Buleleng</p>
                          </div>
                          <div className="text-white p-4 rounded-[10px] flex items-center border-2 border-white">
                              <div className="flex-shrink-0 text-[24px] font-bold mr-4">3.</div>
                              <p>Pernah menjadi PNS di Badung dan Karangasem.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Profil Nyoman Tablet */}
      <section className="hidden lg:hidden md:block">
          <div className="container mx-auto px-4">
              <h1 className="text-[32px] text-center font-bold text-black mt-10">Profil Pribadi</h1>
              <div className="bg-[#C40C0C] rounded-[10px] mt-[20px] p-4 text-white">
                  <div className="flex flex-col items-center mb-4">
                      <img src="/assets/wildan/PPnyoman.png" alt="I Nyoman Sutjidra" className="w-1/2 h-auto object-cover rounded-[10px] mb-4"/>
                      <div className="text-start">
                      <h1 className="text-[24px] font-bold mb-2">I Nyoman Sutjidra</h1>
                      <p className="text-[14px]">
                          Dr. I Nyoman Sutjidra, Sp.OG. (lahir 13 November 1960) adalah politisi PDI Perjuangan yang menjabat sebagai Wakil Bupati Buleleng periode 2012-2017 dan 2017-2022. Sutjidra juga menjabat sebagai Wakil Ketua Bidang Pemenangan Pemilu DPC PDI Perjuangan Kabupaten Buleleng periode 2019-2024.
                      </p>
                      </div>
                  </div>
                  <div className="flex flex-col justify-center">
                      <h2 className="text-[24px] font-bold mb-4">Karier :</h2>
                      <div className="text-[14px] font-semibold space-y-4">
                          <div className="text-white p-4 rounded-[10px] flex items-center border-2 border-white">
                              <div className="flex-shrink-0 text-[24px] font-bold mr-4">1.</div>
                              <p>Alumni Program Magister Spesialis Kebidanan dan Penyakit Kandungan di universitas Udayana</p>
                          </div>
                          <div className="text-white p-4 rounded-[10px] flex items-center border-2 border-white">
                              <div className="flex-shrink-0 text-[24px] font-bold mr-4">2.</div>
                              <p>Menjabat Sebagai Wakil Ketua Bidang Pemenangan Pemilu DPC PDI Buleleng</p>
                          </div>
                          <div className="text-white p-4 rounded-[10px] flex items-center border-2 border-white">
                              <div className="flex-shrink-0 text-[24px] font-bold mr-4">3.</div>
                              <p>Pernah menjadi PNS di Badung dan Karangasem.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      </div>
  );
}

export default ProfilNyoman;
