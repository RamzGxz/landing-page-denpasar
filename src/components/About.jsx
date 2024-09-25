const About = ({ isDarkMode, isSubtitle }) => {
  
  const texts = {
    english: {
      title: "Skills",
    },
    indonesian: {
      title: "Keahlian",
    },
  };

  const currentText = isSubtitle ? texts.english : texts.indonesian;
  
  return (
    <section
      className={`${
        isDarkMode ? "bg-white" : "bg-[#030303]"
      }`}
    >
      <div
        className={`${
          isDarkMode ? "bg-white" : "bg-[#030303]"
        } container mx-auto px-4 py-5`}
      >
        <p
          className={`${
            isDarkMode ? "text-black" : "text-[#CBCBCB]"
          } text-3xl font-[700] text-center mb-12`}
        >
          {currentText.title}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">

          {/* HTML */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-[4px] border-transparent flex items-center justify-center relative">
              <img 
                src="/public/assets/img/html.png" 
                alt="HTML Icon" 
                className="w-full h-[50px] animate-show-image-html"
              />
              <p className="absolute text-[#B73E1E] font-[700] text-[18px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 animate-show-text-html">
                HTML
              </p>
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full border-[4px] border-[#B73E1E] animate-fill-border-html"
              ></div>
            </div>
          </div>

          {/* CSS */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-[4px] border-transparent flex items-center justify-center relative">
              <img 
                src="/public/assets/img/css.png" 
                alt="CSS Icon" 
                className="w-full h-[50px] animate-show-image-css"
              />
              <p className="absolute text-[#1E3EB6] font-[700] text-[18px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 animate-show-text-css">
                CSS
              </p>
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full border-[4px] border-[#1E3EB6] animate-fill-border-css"
              ></div>
            </div>
          </div>

          {/* TailwindCSS */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-[4px] border-transparent flex items-center justify-center relative">
              <img 
                src="/public/assets/img/tailwindcss.png" 
                alt="TailwindCSS Icon" 
                className="w-[70%] h-[40px] animate-show-image-tailwind"
              />
              <p className="absolute text-[#0692AA] font-[700] text-[12px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 animate-show-text-tailwind">
                TailwindCSS
              </p>
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full border-[4px] border-[#0692AA] animate-fill-border-tailwind"
              ></div>
            </div>
          </div>

          {/* JavaScript */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-[4px] border-transparent flex items-center justify-center relative">
              <img 
                src="/public/assets/img/javascript.png" 
                alt="JavaScript Icon" 
                className="w-full h-[50px] animate-show-image-js"
              />
              <p className="absolute text-[#BAA227] font-[700] text-[13px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 animate-show-text-js">
                JavaScript
              </p>
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full border-[4px] border-[#BAA227] animate-fill-border-js"
              ></div>
            </div>
          </div>

          {/* Rect */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-[4px] border-transparent flex items-center justify-center relative">
              <img 
                src="/public/assets/img/react.png" 
                alt="React Icon" 
                className="w-full h-[60px] animate-show-image-react"
              />
              <p className="absolute text-[#00B1C8] font-[700] text-[18px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 animate-show-text-react">
                React
              </p>
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full border-[4px] border-[#00B1C8] animate-fill-border-react"
              ></div>
            </div>
          </div>

          {/* Next.js */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-[4px] border-transparent flex items-center justify-center relative">
              <img 
                src="/public/assets/img/next.png" 
                alt="Next.js Icon" 
                className="w-[70%] h-[50px] animate-show-image-next"
              />
              <p
                className={`absolute font-[700] text-[18px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 animate-show-text-next ${
                  isDarkMode ? "text-black" : "text-[#CBCBCB]"
                }`}
              >
                Next.js
              </p>
              <div
                className={`absolute top-0 left-0 w-full h-full rounded-full border-[4px] animate-fill-border-next ${
                  isDarkMode ? "border-black" : "border-[#CBCBCB]"
                }`}
              ></div>
            </div>
          </div>

          {/* Node.js */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-[4px] border-transparent flex items-center justify-center relative">
              <img 
                src="/public/assets/img/node.png" 
                alt="node.js Icon" 
                className="w-[70%] h-[40px] animate-show-image-node"
              />
              <p className="absolute text-[#5E9247] font-[700] text-[18px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 animate-show-text-node">
                Node.js
              </p>
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full border-[4px] border-[#5E9247] animate-fill-border-node"
              ></div>
            </div>
          </div>

          {/* Flutter */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-[4px] border-transparent flex items-center justify-center relative">
              <img 
                src="/public/assets/img/flutter.png" 
                alt="Flutter.js Icon" 
                className="w-full h-[60px] animate-show-image-flutter"
              />
              <p className="absolute text-[#2092C5] font-[700] text-[18px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 animate-show-text-flutter">
                Flutter
              </p>
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full border-[4px] border-[#2092C5] animate-fill-border-flutter"
              ></div>
            </div>
          </div>

        </div>

        <style>{`
          @keyframes fillBorder {
            0% {
              clip-path: inset(0 100% 0 0);
            }
            100% {
              clip-path: inset(0 0% 0 0);
            }
          }

          /* Animasi untuk border berdasarkan persentase */
          .animate-fill-border-html {
            animation: fillBorder-html 4s ease-in-out infinite;
          }

          .animate-fill-border-css {
            animation: fillBorder-css 4s ease-in-out infinite;
          }

          .animate-fill-border-tailwind {
            animation: fillBorder-tailwind 4s ease-in-out infinite;
          }

          .animate-fill-border-js {
            animation: fillBorder-js 4s ease-in-out infinite;
          }

          .animate-fill-border-react {
            animation: fillBorder-react 4s ease-in-out infinite;
          }

          .animate-fill-border-next {
            animation: fillBorder-next 4s ease-in-out infinite;
          }

          .animate-fill-border-node {
            animation: fillBorder-node 4s ease-in-out infinite;
          }

          .animate-fill-border-flutter {
            animation: fillBorder-flutter 4s ease-in-out infinite;
          }

          /* Keyframes untuk border */
          @keyframes fillBorder-html {
            0% { clip-path: inset(0 100% 0 0); }
            100% { clip-path: inset(0 5% 0 0); }
          }

          @keyframes fillBorder-css {
            0% { clip-path: inset(0 100% 0 0); }
            100% { clip-path: inset(0 10% 0 0); }
          }

          @keyframes fillBorder-tailwind {
            0% { clip-path: inset(0 100% 0 0); }
            100% { clip-path: inset(0 15% 0 0); }
          }

          @keyframes fillBorder-js {
            0% { clip-path: inset(0 100% 0 0); }
            100% { clip-path: inset(0 90% 0 0); }
          }

          @keyframes fillBorder-react {
            0% { clip-path: inset(0 100% 0 0); }
            100% { clip-path: inset(0 30% 0 0); }
          }

          @keyframes fillBorder-next {
            0% { clip-path: inset(0 100% 0 0); }
            100% { clip-path: inset(0 60% 0 0); }
          }

          @keyframes fillBorder-node {
            0% { clip-path: inset(0 100% 0 0); }
            100% { clip-path: inset(0 90% 0 0); }
          }

          @keyframes fillBorder-flutter {
            0% { clip-path: inset(0 100% 0 0); }
            100% { clip-path: inset(0 80% 0 0); }
          }

          /* Animasi gambar dan teks */
          .animate-show-image-html {
            animation: showImage-html 8s ease-in-out infinite;
          }

          .animate-show-text-html {
            animation: showText-html 8s ease-in-out infinite;
          }

          .animate-show-image-css {
            animation: showImage-css 8s ease-in-out infinite;
          }

          .animate-show-text-css {
            animation: showText-css 8s ease-in-out infinite;
          }

          .animate-show-image-tailwind {
            animation: showImage-tailwind 8s ease-in-out infinite;
          }

          .animate-show-text-tailwind {
            animation: showText-tailwind 8s ease-in-out infinite;
          }

          .animate-show-image-js {
            animation: showImage-js 8s ease-in-out infinite;
          }

          .animate-show-text-js {
            animation: showText-js 8s ease-in-out infinite;
          }
            
          .animate-show-image-react {
            animation: showImage-js 8s ease-in-out infinite;
          }

          .animate-show-text-react {
            animation: showText-js 8s ease-in-out infinite;
          }

          .animate-show-image-next {
            animation: showImage-js 8s ease-in-out infinite;
          }

          .animate-show-text-next {
            animation: showText-js 8s ease-in-out infinite;
          }

          .animate-show-image-node {
            animation: showImage-js 8s ease-in-out infinite;
          }

          .animate-show-text-node {
            animation: showText-js 8s ease-in-out infinite;
          }

          .animate-show-image-flutter {
            animation: showImage-js 8s ease-in-out infinite;
          }

          .animate-show-text-flutter {
            animation: showText-js 8s ease-in-out infinite;
          }

          /* Keyframes gambar muncul/hilang */
          @keyframes showImage-html {
            0%, 50% { opacity: 1; }
            60%, 100% { opacity: 0; }
          }

          @keyframes showText-html {
            0%, 50% { opacity: 0; }
            60%, 100% { opacity: 1; }
          }

          @keyframes showImage-css {
            0%, 50% { opacity: 1; }
            60%, 100% { opacity: 0; }
          }

          @keyframes showText-css {
            0%, 50% { opacity: 0; }
            60%, 100% { opacity: 1; }
          }

          @keyframes showImage-tailwind {
            0%, 50% { opacity: 1; }
            60%, 100% { opacity: 0; }
          }

          @keyframes showText-tailwind {
            0%, 50% { opacity: 0; }
            60%, 100% { opacity: 1; }
          }

          @keyframes showImage-js {
            0%, 50% { opacity: 1; }
            60%, 100% { opacity: 0; }
          }

          @keyframes showText-js {
            0%, 50% { opacity: 0; }
            60%, 100% { opacity: 1; }
          }

          @keyframes showImage-react {
            0%, 50% { opacity: 1; }
            60%, 100% { opacity: 0; }
          }

          @keyframes showText-react {
            0%, 50% { opacity: 0; }
            60%, 100% { opacity: 1; }
          }

          @keyframes showImage-next {
            0%, 50% { opacity: 1; }
            60%, 100% { opacity: 0; }
          }

          @keyframes showText-next {
            0%, 50% { opacity: 0; }
            60%, 100% { opacity: 1; }
          }

          @keyframes showImage-node {
            0%, 50% { opacity: 1; }
            60%, 100% { opacity: 0; }
          }

          @keyframes showText-node {
            0%, 50% { opacity: 0; }
            60%, 100% { opacity: 1; }
          }

          @keyframes showImage-flutter {
            0%, 50% { opacity: 1; }
            60%, 100% { opacity: 0; }
          }

          @keyframes showText-flutter {
            0%, 50% { opacity: 0; }
            60%, 100% { opacity: 1; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default About;