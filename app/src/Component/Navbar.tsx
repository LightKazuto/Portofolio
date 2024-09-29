import Image from "next/image";
import Logo from "../Asset/Hcopy.png";
import Mail from "../Asset/Mailcopy.png";
import Github from "../Asset/Rcopy.png";
import Insta from "../Asset/Igcopy.png";

function Navbar() {

  const onMail = () => {
    window.location.href = "mailto:ilhamsidiq62@gmail.com";
  }

  const onGithub = () => {
    window.location.href = "https://github.com/LightKazuto?tab=repositories";
  }

  const onInsta = () => {
    window.location.href = "https://www.instagram.com/isidiq7/";
  }

  return (
    <div className="flex mx-14 ">
      <div className="flex justify-between w-full ">
        <div className="pt-5 cursor-pointer">
          <Image src={Logo} alt="Logo" width={50} className="hover:scale-125 transition duration-300 ease-in-out"/>
        </div>

        <div className="flex mr-4 justify-bottom pt-10">
          <ul className="flex gap-5 ">
            <li>
              <Image
                src={Mail}
                alt="Mail"
                width={30}
                onClick={onMail}
                className="cursor-pointer transition duration-300 ease-in-out filter grayscale hover:filter-none hover:scale-125"
              />
            </li>
            <li>
              <Image
                src={Github}
                alt="Github"
                width={25}
                onClick={onGithub}
                className="cursor-pointer transition duration-300 ease-in-out filter grayscale hover:filter-none hover:scale-125"
              />
            </li>
            <li>
              <Image
                src={Insta}
                alt="R"
                width={25}
                onClick={onInsta}
                className="cursor-pointer transition duration-300 ease-in-out filter grayscale hover:filter-none hover:scale-125"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
