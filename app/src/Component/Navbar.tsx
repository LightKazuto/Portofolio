import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faUser,
  faObjectGroup,
} from "@fortawesome/free-regular-svg-icons";

function Navbar() {
  return (
    <div className="w-full shadow-md h-auto flex items-center justify-center text-black p-2 bg-white">
      <div className="flex space-x-1 items-center w-1/2 justify-evenly">
        <FontAwesomeIcon
          icon={faBuilding}
          className="text-2xl cursor-pointer hover:bg-gray-100 transition duration-300 px-20 py-3 rounded-md"
          title="Home"
        />
        <FontAwesomeIcon
          icon={faUser}
          className="text-2xl cursor-pointer hover:bg-gray-100 transition duration-300 px-20 py-3 rounded-md"
          title="Profile"
        />
        <FontAwesomeIcon
          icon={faObjectGroup}
          className="text-2xl cursor-pointer hover:bg-gray-100 transition duration-300 px-20 py-3 rounded-md"
          title="Projects"
        />
      </div>
    </div>
  );
}

export default Navbar;
