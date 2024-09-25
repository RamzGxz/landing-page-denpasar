import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { CaretLeft, CaretRight } from "phosphor-react"; 

const Project = ({ isDarkMode, isSubtitle }) => {

  const texts = {
    english: {
      title: "My Project",
      projects: [
        { id: 1, title: "Project 1", image: "/public/assets/img/p1.png", link: "https://project-belife.vercel.app/" },
        { id: 2, title: "Project 2", image: "/public/assets/img/p2.png", link: "https://porto-smp-new.vercel.app/" },
        { id: 3, title: "Project 3", image: "/public/assets/img/p3.png", link: "https://project3.com" },
        { id: 4, title: "Project 4", image: "/public/assets/img/p1.png", link: "https://project4.com" },
        { id: 5, title: "Project 5", image: "/public/assets/img/p2.png", link: "https://project5.com" },
      ],
    },
    indonesian: {
      title: "Karya Saya",
      projects: [
        { id: 1, title: "Karya 1", image: "/public/assets/img/p1.png", link: "https://project-belife.vercel.app/" },
        { id: 2, title: "Karya 2", image: "/public/assets/img/p2.png", link: "https://porto-smp-new.vercel.app/" },
        { id: 3, title: "Karya 3", image: "/public/assets/img/p3.png", link: "https://karya3.com" },
        { id: 4, title: "Karya 4", image: "/public/assets/img/p1.png", link: "https://karya4.com" },
        { id: 5, title: "Karya 5", image: "/public/assets/img/p2.png", link: "https://karya5.com" },
      ],
    },
  };

  const currentText = isSubtitle ? texts.english : texts.indonesian;
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectsPerBatch = 3;
  const totalBatches = Math.ceil(currentText.projects.length / projectsPerBatch);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prevIndex) =>
        prevIndex === totalBatches - 1 ? prevIndex : prevIndex + 1
      ),
    onSwipedRight: () =>
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1)),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const startIndex = currentIndex * projectsPerBatch;
  const endIndex = startIndex + projectsPerBatch;
  const currentProjects = currentText.projects.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentIndex < totalBatches - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <section className={`${isDarkMode ? "bg-white" : "bg-[#030303]"} py-10`}>
        <div className="container mx-auto px-4">
          <p
            className={`${
              isDarkMode ? "text-black" : "text-[#CBCBCB]"
            } text-3xl font-[700] text-center mb-12`}
          >
            {currentText.title}
          </p>

          {/* Mobile */}
          <div className="relative lg:hidden" {...handlers}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden md:overflow-visible">
              {currentText.projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`${
                    isDarkMode ? "bg-white" : "bg-black"
                  } p-6 rounded-lg shadow-md transition-transform duration-500 ease-in-out ${
                    index === currentIndex ? "block" : "hidden"
                  } md:block`}
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg mb-4"
                    />
                    <p
                      className={`${
                        isDarkMode ? "text-black" : "text-[#CBCBCB]"
                      } text-xl font-[600] mb-2`}
                    >
                      {project.title}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex lg:hidden justify-center mt-4">
            {currentText.projects.map((_, index) => (
              <div
                key={index}
                className={`w-[7px] h-[7px] rounded-full mx-1 cursor-pointer ${
                  currentIndex === index ? "bg-[#227B94]" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          {/* Desktop with arrows */}
          <div className="lg:block hidden relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
              <button onClick={handlePrev} disabled={currentIndex === 0}>
                <CaretLeft size={32} className={`${isDarkMode ? "text-black" : "text-[#CBCBCB]"}`} />
              </button>
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <button onClick={handleNext} disabled={currentIndex === totalBatches - 1}>
                <CaretRight size={32} className={`${isDarkMode ? "text-black" : "text-[#CBCBCB]"}`} />
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
              {currentProjects.map((project) => (
                <div
                  key={project.id}
                  className={`${
                    isDarkMode ? "bg-white" : "bg-black"
                  } p-6 rounded-lg shadow-md transition-transform duration-500 ease-in-out`}
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg mb-4"
                    />
                    <p
                      className={`${
                        isDarkMode ? "text-black" : "text-[#CBCBCB]"
                      } text-xl font-[600] mb-2`}
                    >
                      {project.title}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:flex hidden justify-center mt-4">
            {Array.from({ length: totalBatches }).map((_, index) => (
              <div
                key={index}
                className={`w-[7px] h-[7px] rounded-full mx-1 cursor-pointer ${
                  currentIndex === index ? "bg-[#227B94]" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;