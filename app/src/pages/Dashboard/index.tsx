import { useState, useEffect } from "react";
import Navbar from "../../Component/Navbar";
import Hero from "../../Component/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faGraduationCap,
  faPhone,
  faAt,
} from "@fortawesome/free-solid-svg-icons";

interface Photo {
  id: number;
  title: string;
  url: string;
  description: string;
}

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<string>("Postingan");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Update to handle photo click and set the selected photo
  const handleProfileClick = (photo: Photo | null) => {
    setSelectedPhoto(photo); // Set selected photo in the state
    setIsProfileOpen(true); // Open the modal
  };

  const closeProfileModal = () => {
    setIsProfileOpen(false); // Close the modal
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    fetch("/photos.json")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos);
      })
      .catch((error) => console.error("Error fetching photos:", error));
  }, []);

  const renderTab = () => {
    switch (activeTab) {
      case "Postingan":
        return (
          <div className="w-full h-auto flex justify-center items-center mt-4">
            <div className="flex flex-row-reverse grid-cols-2 w-[1300px] justify-between">
              <div className="w-[750px]">
                <div className="w-[750px] h-auto p-4 bg-white rounded-md shadow-md">
                  <h3 className="text-lg font-bold font-segoe">Postingan</h3>
                </div>

                <div className="w-[750px] h-auto p-4 bg-white rounded-md shadow-md mt-4">
                  <div className="flex">
                    <img
                      src="https://profilepicture7.com/img/img_dongman/3/1382673276.jpg"
                      alt="Foto Profile"
                      className="w-12 rounded-full cursor-pointer"
                      onClick={() => handleProfileClick(null)} // Placeholder for profile image click
                    />
                    <div className="flex flex-col ml-2">
                      <span className="text-black font-segoe font-semibold text-base">
                        Ilham Sidiq
                      </span>
                      <span className="text-gray-500 font-segoe text-sm font-semibold">
                        24 September 2024
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-black font-segoe mt-2 text-justify px-2">
                      I am a result-oriented professional with over six years of
                      experience in electronics and public affairs. With a
                      degree in English Literature, I effectively combine my
                      literary insights with technical skills in software
                      engineering. I am proficient in various technologies,
                      including React.js, Next.js, TypeScript, Python, and
                      MySQL, which enable me to build responsive and efficient
                      web applications. As an interim head at PT. Panasonic
                      Gobel Indonesia, I achieved more than 80% of the
                      improvement targets, demonstrating my ability to enhance
                      team productivity. I believe my commitment to
                      collaboration and excellence in communication are
                      essential to achieving organizational goals. Ambitious and
                      driven, I aim to develop impactful technology solutions as
                      a Software Engineer in a progressive organization,
                      leveraging my unique ability to approach challenges with
                      both creativity and analytical precision.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap">
                <div className="w-[500px] h-[260px] p-4 bg-white rounded-md shadow-md">
                  <h3 className="text-lg font-bold font-segoe">Intro</h3>
                  <div className="text-gray-600 font-segoe mt-4 text-justify">
                    <ul className="space-y-2">
                      <li>
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <span className="ml-2">
                          Lulusan Fullstack Engineering di RevoU
                        </span>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <span className="ml-2">
                          Lulusan Sastra Inggris di Universitas Terbuka
                        </span>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <span className="ml-2">
                          Lulusan Teknik Komputer dan Jaringan di SMKN 2
                          Baleendah
                        </span>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faPhone} />
                        <span className="ml-2">+62822-9500-9833</span>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAt} />
                        <span className="ml-2">ilhamsidiq62@gmail.com</span>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span className="ml-2">
                          Kiaracondong Kota.Bandung Jawa Barat
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="w-[500px] bg-white p-4 rounded-md shadow-md mt-4">
                  <h3 className="text-lg font-bold font-segoe">Foto</h3>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {photos.map((photo) => (
                      <div
                        key={photo.id}
                        className="flex flex-col items-center cursor-pointer"
                        onClick={() => handleProfileClick(photo)} // Updated to pass selected photo
                      >
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="w-full h-[150px] object-cover rounded-md"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      // Handle other cases...
      default:
        return <div />;
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col w-full h-auto">
      <div className="flex-shrink-0">
        <Navbar />
      </div>
      <div className="flex-shrink-0">
        <Hero activeTab={activeTab} handleTabClick={handleTabClick} />
      </div>
      <div className="w-full h-full">{renderTab()}</div>

      {/* Modal for Profile Image Popup */}
      {isProfileOpen && selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative">
            <button
              onClick={closeProfileModal}
              className="absolute top-0 right-0 text-white font-bold text-2xl p-2">
              X
            </button>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="max-w-full max-h-[80vh] object-contain rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
