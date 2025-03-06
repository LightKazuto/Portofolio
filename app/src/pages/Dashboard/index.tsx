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

interface Graduation {
  id: number;
  name: string;
  major: string;
  fromDate: string | number;
  toDate: string | number;
}

interface Intro {
  title: string;
  address: {
    icon: string;
    text: string;
  }[];
  graduation: Graduation[];
}

interface ProfileData {
  name: string;
  date: string;
  bio: {
    text: string;
  };
  intro: Intro;
  projects: Project[];
}

interface Photo {
  id: number;
  title: string;
  url: string;
  description: string;
}

interface Project {
  id: number;
  date: string;
  title: string;
  banner: string;
  description: string;
  responsibilities: string[];
}

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<string>("Postingan");
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]); // Default to an empty array
  const [project, setProject] = useState<Project[]>([]); // Default to an empty array
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    fetch("/Tentang.json")
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
        setPhotos(data.photos || []); // Make sure to default to empty array
      })
      .catch((error) => console.error("Error fetching profile data:", error));
  }, []);

  useEffect(() => {
    fetch("/photos.json")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos || []); // Default to empty array if no photos
      })
      .catch((error) => console.error("Error fetching photos:", error));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    fetch("/Project.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("project", data);
        setProject(data.project || []);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handleProfileClick = (photo: Photo | null) => {
    setSelectedPhoto(photo);
    setIsProfileOpen(true);
  };
  const closeProfileModal = () => setIsProfileOpen(false);

  const renderTab = () => {
    if (!profile) return <div>Loading...</div>;

    const iconMap = {
      faPhone: faPhone,
      faAt: faAt,
      faLocationDot: faLocationDot,
    };

    switch (activeTab) {
      case "Postingan":
        return (
          <div className="w-full h-auto flex justify-center items-center mt-4">
            <div className="xl:flex flex flex-col-reverse xl:flex-row-reverse xl:grid-cols-2 w-[1300px] xl:justify-center justify-between gap-4">
              <div className="xl:w-[750px] xl:mt-0 mt-4">
                <div className="w-[750px] w-full h-auto p-4 bg-white rounded-md shadow-md ">
                  <h3 className="text-lg font-bold font-segoe xl:text-left text-center">
                    Postingan
                  </h3>
                </div>

                {/* Render About me */}
                <div className="xl:w-[750px] h-auto p-4 bg-white rounded-md shadow-md mt-4 xl:items-center">
                  <div className="flex">
                    <img
                      src="https://profilepicture7.com/img/img_dongman/3/1382673276.jpg"
                      alt="Foto Profile"
                      className="w-12 rounded-full cursor-pointer"
                      onClick={() =>
                        handleProfileClick({
                          id: 0,
                          title: "Profile Image",
                          url: "https://profilepicture7.com/img/img_dongman/3/1382673276.jpg",
                          description: "Profile image",
                        })
                      }
                    />
                    <div className="flex flex-col ml-2">
                      <span className="text-black font-segoe font-semibold text-base">
                        {profile.name}
                      </span>
                      <span className="text-gray-500 font-segoe text-sm font-semibold">
                        {profile.date}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-black font-segoe mt-2 text-justify px-2">
                      {profile.bio.text}
                    </p>
                  </div>
                </div>

                {/* Render Project */}
                    {project && project.length > 0 ? (
                      project.map((projectItem: Project) => (
                        <div
                          key={projectItem.id}
                          className="xl:w-[750px] h-auto p-4 bg-white rounded-md shadow-md mt-4 xl:items-center gap-4">
                          <div className="flex">
                            <img
                              src="https://profilepicture7.com/img/img_dongman/3/1382673276.jpg"
                              alt="Foto Profile"
                              className="w-12 rounded-full cursor-pointer"
                              onClick={() =>
                                handleProfileClick({
                                  id: 0,
                                  title: "Profile Image",
                                  url: "https://profilepicture7.com/img/img_dongman/3/1382673276.jpg",
                                  description: "Profile image",
                                })
                              }
                            />
                            <div className="flex flex-col ml-2">
                              <span className="text-black font-segoe font-semibold text-base">
                                {profile.name}
                              </span>
                              <span className="text-gray-500 font-segoe text-sm font-semibold">
                                {projectItem.date} . {projectItem.title}
                              </span>
                            </div>
                          </div>

                          <div className="mt-2 flex flex-col-reverse gap-4">
                            <img
                              src={projectItem.banner}
                              alt={projectItem.title}
                              className="w-full h-[250px] object-cover rounded-md"
                            />
                          
                          <p className="text-black mt-2 text-justify">
                            {projectItem.description}
                          </p>
                          </div>
                          {/* <div className="mt-2">
                            <h5 className="font-semibold">Responsibilities:</h5>
                            <ul className="list-disc pl-5">
                              {projectItem.responsibilities.map(
                                (responsibility, index) => (
                                  <li key={index} className="text-gray-700">
                                    {responsibility}
                                  </li>
                                )
                              )}
                            </ul>
                          </div> */}
                        </div>
                      ))
                    ) : (
                      <div>No projects available</div>
                    )}
                  </div>

              {/* Render Intro */}
              <div className="flex flex-wrap xl:flex-col sm:flex-wrap xl:justify-start justify-evenly  gap-4">
                <div className="w-full sm:w-[500px] xl:w-[500px] xl:h-[260px] p-4 bg-white rounded-md shadow-md ">
                  <h3 className="text-lg font-bold font-segoe">
                    {profile.intro.title}
                  </h3>
                  <div className="text-gray-600 font-segoe mt-4 text-left xl:text-justify">
                    <ul className="mt-2 space-y-2 flex flex-col flex-wrap">
                      {profile.intro.graduation
                        .sort((a, b) => b.id - a.id)
                        .map((grad) => (
                          <li
                            key={grad.id}
                            className="flex items-center text-gray-600">
                            <FontAwesomeIcon
                              icon={faGraduationCap}
                              className="mr-2"
                            />
                            <div className="space-x-1">
                              <span className="text-gray-500">
                                {grad.major}
                              </span>
                              <span>di</span>
                              <span>{grad.name}</span>
                            </div>
                          </li>
                        ))}

                      {/* Render address info */}
                      {profile.intro.address.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <FontAwesomeIcon
                            icon={iconMap[item.icon as keyof typeof iconMap]}
                            className="mr-2"
                          />
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Photos Section */}
                <div className="w-full sm:w-[500px] xl:w-[500px] xl:h-auto bg-white p-4 rounded-md shadow-md xl:mt-4">
                  <h3 className="text-lg font-bold font-segoe">Foto</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 gap-4 mt-4">
                    {photos && photos.length > 0 ? (
                      (isSmallScreen ? photos.slice(0, 4) : photos).map(
                        (photo) => (
                          <div
                            key={photo.id}
                            className="flex flex-col items-center cursor-pointer"
                            onClick={() => handleProfileClick(photo)}>
                            <img
                              src={photo.url}
                              alt={photo.title}
                              className="w-full h-[150px] object-cover rounded-md"
                            />
                          </div>
                        )
                      )
                    ) : (
                      <div>No photos available</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
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
