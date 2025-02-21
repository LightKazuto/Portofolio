import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./NavigationBar";

// Mendeklarasikan tipe props untuk Hero
interface HeroProps {
  activeTab: string;
  handleTabClick: (tabName: string) => void;
}

function Hero({ activeTab, handleTabClick }: HeroProps) {
  const [isBackgoundOpen, setIsBackgoundOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const openBackgroundModal = () => setIsBackgoundOpen(true);
  const closeBackgroundModal = () => setIsBackgoundOpen(false);

  const openProfileModal = () => setIsProfileOpen(true);
  const closeProfileModal = () => setIsProfileOpen(false);

  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/12dfX-sF4QH7JkuXMmLeY-qgNQCEZj7x-/view?usp=drive_link"
    );
  };

  const handleContactMe = () => {
    window.open("mailto:ilhamsidiq62@gmail.com");
  };

  return (
    <div className="w-full h-auto">
      {/* Background Section */}
      <div className="flex relative justify-center bg-gradient-to-b from-black via-white to-white xl:h-[680px] h-[780px] border-b-2 border-gray-200">
        <div className="text-center text-white w-[1300px] xl:h-4/6 h-[400px]">
          <img
            src="https://wallpapers.com/images/hd/4k-programming-background-q1s9mxfdjw4j3t0r.jpg"
            alt="Foto sampul programer"
            className="w-full h-full object-cover mx-auto rounded-b-lg cursor-pointer"
            onClick={openBackgroundModal}
          />
          {/* Navigation Bar at the Boundary of Gradient */}
          <div className="absolute bottom-0 left-6 right-6">
            {/* Navigation Bar with passed props */}
            <NavigationBar activeTab={activeTab} onTabClick={handleTabClick} />
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="xl:flex xl:justify-center xl:items-center absolute top-[290px] left-1/2 transform -translate-x-1/2 px-8 mt-20 xl:mt-36 max-w-[1300px] xl:w-5/6 w-full h-[200px]">
        <div className="flex justify-center">
          <div className="bg-white p-1 rounded-full xl:w-[200px] xl:h-[200px]">
            <img
              src="https://profilepicture7.com/img/img_dongman/3/1382673276.jpg"
              alt="foto profile"
              className="rounded-full w-[200px] h-[200px] cursor-pointer xl:w-48 xl:h-48"
              onClick={openProfileModal}
            />
          </div>
        </div>

        <div className="xl:mt-16 px-4 pt-2 w-[250px] xl:w-4/6 w-full">
          <div className="xl:w-[210px] flex-col justify-center text-center xl:text-right">
            <h1 className="font-bold text-4xl font-segoe tracking-wide text-black">
              Ilham Sidiq
            </h1>
            <ul className="mt-2 font-segoe font-medium text-gray-600">
              <li>Fullstack Developer -</li>
              <li>Frontend Specialized !!</li>
            </ul>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex flex-wrap justify-center xl:justify-end font-mono xl:w-full xl:mt-8 xl:h-auto xl:mt-[160px] xl:gap-4 mt-6">
          <div className="flex flex-wrap justify-center xl:justify-end w-full xl:space-x-4 gap-2">
            <button
              onClick={handleDownloadCV}
              className="bg-blue-500 text-white font-bold py-2 px-7 rounded-md hover:bg-blue-600 flex items-center">
              Download CV
              <FontAwesomeIcon icon={faDownload} className="ml-2" />
            </button>
            <button
              onClick={handleContactMe}
              className="bg-gray-200 text-black font-bold py-2 px-7 rounded-md hover:bg-gray-300 flex items-center">
              Contact Me
              <FontAwesomeIcon icon={faEnvelopeOpenText} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Background Image Popup */}
      {isBackgoundOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative">
            <button
              onClick={closeBackgroundModal}
              className="absolute top-0 right-0 text-white font-bold text-2xl p-2">
              X
            </button>
            <img
              src="https://wallpapers.com/images/hd/4k-programming-background-q1s9mxfdjw4j3t0r.jpg"
              alt="Popup image"
              className="max-w-4xl max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* Modal for Profile Image Popup */}
      {isProfileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative">
            <button
              onClick={closeProfileModal}
              className="absolute top-0 right-0 text-white font-bold text-2xl p-2">
              X
            </button>
            <img
              src="https://profilepicture7.com/img/img_dongman/3/1382673276.jpg"
              alt="Popup profile image"
              className="max-w-4xl max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
