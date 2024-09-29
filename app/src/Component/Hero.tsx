import { link } from "fs";
import CV from "../Asset/CV.pdf";
import BMI from "../Asset/logo-bmi.png";
import Link from "next/link";

function Hero() {
  const projects = [
    {
      title: "BMI Calculator",
      description:
        "My First Project from RevoU mini course about how to calculate your ideal weight",
      img: "https://ilhamsidiq.site/Asset/logo-bmi.png",
      link: "https://first-project-liham.netlify.app/",
    },
    {
      title: "Poke APP",
      description:
        "This web are my project on milestone 2, where this web using React for the liblary",
      img: "https://wondrous-valkyrie-b41b55.netlify.app/static/media/pngegg.9631a0e0100b336ef8dd.png",
      link: "https://wondrous-valkyrie-b41b55.netlify.app/",
    },
    {
      title: "Zoo App",
      description:
        "In this project I built a backend for a zoo where it can organize CRUD from animal and employee databases.",
      img: "",
    },
    { title: "Project 4", description: "Description 4", img: "" },
  ];

  return (
    <div className="flex flex-row max-w-screen-xl mx-auto mt-40 gap-16">
      <div className="font-semibold tracking-widest text-left w-1/2">
        <div className="flex font-c">
          <h1 className="text-5xl text-gray-200">Hi! I am Ilham Sidiq</h1>
          <div className="flex items-center justify-center">
            <h1 className="h-1.5 bg-gray-200 w-10 ml-3"></h1>
          </div>
        </div>
        <h3 className="text-2xl text-[#3DC2EC] mt-3">Software Engineer</h3>
        <p className="text-lg font-mono font-thin text-justify text-gray-200 w-5/6 mt-6">
          Junior software engineer graduated from RevoU focusing on frontend
          development but I have experienced in creating fullstack websites.My
          passion for technology drives me to stay updated with industry trends,
          ensuring that I can contribute effectively to any project I undertake.
        </p>

        <div className="text-white mt-14 font-mono font-normal w-5/6 justify-around flex">
          <a
            href={CV}
            download
            className="bg-[#3DC2EC] px-5 py-1 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#28A3D4]">
            CV Download
          </a>
          <a
            href="https://www.linkedin.com/in/ilhamsidiq"
            className="bg-gray-400 text-white px-5 py-1 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-500">
            Linked-in Me
          </a>
        </div>
      </div>

      <div className="font-semibold tracking-widest text-left w-1/2 text-gray-200 flex flex-col justify-center">
        <div className="flex flex-row-reverse">
          <h1 className="text-5xl text-[#3DC2EC]">My Project's</h1>
          <div className="flex items-center justify-center">
            <h1 className="h-1.5 bg-[#3DC2EC] w-10 mr-3"></h1>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-1 gap-4 p-4 flex justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 shadow-lg flex flex-col items-center font-mono transition duration-300 ease-in-out transform hover:scale-105">
              {project.link ? (
                <Link href={project.link} passHref>
                  <div className="flex flex-col items-center">
                    <h3 className="font-bold text-lg mb-5 text-center">
                      {project.title}
                    </h3>
                    {project.img && (
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-32 h-32 bg-white rounded-full mb-4"
                      />
                    )}
                    <p className="text-center text-gray-200 font-thin mt-5">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ) : (
                <div className="flex flex-col items-center">
                  <h3 className="font-bold text-lg mb-5 text-center">
                    {project.title}
                  </h3>
                  {project.img && (
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-32 h-32 bg-white rounded-full mb-4"
                    />
                  )}
                  <p className="text-center text-gray-200 font-thin mt-5">
                    {project.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
