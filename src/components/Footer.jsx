import { InstagramLogo, TiktokLogo } from "phosphor-react";
import { Link } from "react-router-dom"; 

const Footer = ({ isSubtitle }) => {

  const texts = {
    english: {
      skills: "skills",
      project: "project",
      message: "message",
    },
    indonesia: {
      skills: "keahlian",
      project: "karya",
      message: "pesan",
    }
  }

  const currentText = isSubtitle ? texts.english : texts.indonesia;
  
  return (
    <footer className="bg-[#141414] py-5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[#227B94] text-2xl font-semibold mb-4">
          WiL
        </h2>

        <div className="mb-4">
          <Link
            to="/home"    
            className="text-[#CBCBCB] hover:text-white mx-2"
          >
            {currentText.skills}
          </Link>
          <Link
            to="/about" 
            className="text-[#CBCBCB] hover:text-white mx-2"
          >
            {currentText.project}
          </Link>
          <Link
            to="/contact" 
            className="text-[#CBCBCB] hover:text-white mx-2"
          >
            {currentText.message}
          </Link>
        </div>

        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#CBCBCB] hover:text-white"
          >
            <InstagramLogo size={24} />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#CBCBCB] hover:text-white"
          >
            <TiktokLogo size={24} />
          </a>
        </div>

        <div className="text-[#CBCBCB]">
          © 2024 
        </div>
      </div>
    </footer>
  );
};

export default Footer;