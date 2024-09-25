  const Hero = ({ isDarkMode, isSubtitle }) => {

  const texts = {
    english: {
      hello: "Hello It's",
      me: "Me",
      intro: "I'm Wildan, a web developer specializing in front-end development. I have a passion for creating simple, modern web applications that are both functional and visually appealing.",
      description:
        "I have experience working with technologies such as HTML, CSS, TailwindCSS, JavaScript, React, Next.js, Node.js, and Flutter. I constantly strive to improve my skills and stay up to date with the latest web development trends.",
    },
    indonesian: {
      hello: "Halo Ini",
      me: "Saya",
      intro: "Saya Wildan, seorang pengembang web yang berspesialisasi dalam pengembangan front-end. Saya memiliki hasrat untuk membuat aplikasi web sederhana dan modern yang fungsional dan menarik secara visual.",
      description:
        "Saya memiliki pengalaman bekerja dengan teknologi seperti HTML, CSS, TailwindCSS, JavaScript, React, Next.js, Node.js, dan Flutter. Saya terus berusaha meningkatkan keterampilan saya dan mengikuti perkembangan tren web terkini.",
    },
  };

  const currentText = isSubtitle ? texts.english : texts.indonesian;

  return (
    <>
      <section
        className={`${
          isDarkMode ? "bg-white" : "bg-[#030303]"
        }`}
      >
        <div
          className={`${
            isDarkMode ? "bg-white" : "bg-[#030303]"
          } container mx-auto px-10 sm:px-12 py-16`}
        >
          <p
            className={`text-[28px] font-bold text-left lg:mb-5 mt-16 lg:mt-[70px] lg:text-left animate-bounce ${
              isDarkMode ? "text-black" : "text-[#CBCBCB]"
            }`}
          >
            {currentText.hello}
            <span className="text-[#227B94]"> {currentText.me}</span>
            <span className="animate-pulse hidden lg:block">
              <span className="text-[#227B94]">Wil</span>dan!
            </span>
          </p>
          <p
            className={`text-[28px] lg:hidden font-bold text-left mb-5 lg:mb-12 lg:mt-20 lg:text-left lg:ml-28 animate-pulse ${
              isDarkMode ? "text-black" : "text-[#CBCBCB]"
            }`}
          >
            <span className="text-[#227B94]">Wil</span>dan!
          </p>
          <div className="flex flex-col lg:mr-28 lg:flex-row items-center lg:hidden">
            <div className="relative lg:w-1/2 mb-8 lg:mb-0 lg:mr-0">
              <img
                src="/public/assets/img/pp.png"
                className="rounded-full lg:rounded-none shadow-lg mx-auto relative"
              />
              <div className="absolute inset-0 border-[5px] border-[#227B94] rounded-full shadow-[0_0_20px_5px_rgba(34,123,148,0.7)]"></div>
            </div>
            <div className="lg:w-1/2 text-left">
              <p
                className={`text-[17px] font-[400] mb-4 ${
                  isDarkMode ? "text-black" : "text-[#CBCBCB]"
                }`}
              >
                {currentText.intro}
              </p>
              <p
                className={`text-[17px] font-[400] text-left ${
                  isDarkMode ? "text-black" : "text-[#CBCBCB]"
                }`}
              >
                {currentText.description}
              </p>
            </div>
          </div>

          {/* Hero dekstop */}
          <div className="lg:flex lg:flex-row hidden">
            <div className="relative lg:w-1/2">
              <img
                src="/public/assets/img/pp.png"
                className="shadow-lg rounded-full mx-auto relative"
              />
              <div className="absolute inset-0 border-[5px] border-[#227B94] rounded-full shadow-[0_0_20px_5px_rgba(34,123,148,0.7)]"></div>
            </div>
            <div className="lg:w-full flex flex-col justify-center text-left lg:ml-12">
              <p
                className={`text-[20px] font-[400] mb-[40px] ${
                  isDarkMode ? "text-black" : "text-[#CBCBCB]"
                }`}
              >
                {currentText.intro}
              </p>
              <p
                className={`text-[20px] font-[400] ${
                  isDarkMode ? "text-black" : "text-[#CBCBCB]"
                }`}
              >
                {currentText.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;