import { useState } from "react";
import { Moon, Sun, Globe } from "phosphor-react";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Message from "./Message";
import Footer from "./Footer";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSubtitle, setisSubtitle] = useState(true); 

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  const toggleLanguage = () => {
    setisSubtitle(!isSubtitle); 
  };

  return (
    <>
      <nav
        className={`${
          isDarkMode ? "bg-white text-[#227B94]" : "bg-[#050505] text-[#CBCBCB]"
        } h-[81px] rounded-[20px] mx-auto flex items-center justify-between px-10 fixed z-50 w-full left-0 right-0 max-w-[1140px] lg:max-w-[1040px] mt-2 lg:mt-4 shadow-lg`}
      >
        <div className="flex items-center justify-between w-full">
          <p className="text-2xl lg:text-3x font-semibold">WiL</p>
          <div className="flex items-center space-x-4">
            <button className="lg:text-black text-black" onClick={toggleLanguage}>
              <Globe size={24} className={`${isDarkMode ? "text-black" : "text-[#CBCBCB]"}`} />
            </button>
            <button onClick={toggleDarkMode} className="lg:text-black text-black">
              {isDarkMode ? (
                <Moon size={24} className="lg:text-black text-black" />
              ) : (
                <Sun size={24} className="text-white lg:text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <Hero isDarkMode={isDarkMode} isSubtitle={isSubtitle} />
      <About isDarkMode={isDarkMode} isSubtitle={isSubtitle} />
      <Project isDarkMode={isDarkMode} isSubtitle={isSubtitle} />
      <Message isDarkMode={isDarkMode} isSubtitle={isSubtitle} />
      <Footer isDarkMode={isDarkMode} isSubtitle={isSubtitle} />
    </>
  );
};

export default Navbar;