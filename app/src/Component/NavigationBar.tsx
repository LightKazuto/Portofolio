import { FC, useState } from 'react';

// Define the props interface for NavigationBar
interface NavigationBarProps {
  activeTab: string;
  onTabClick: (tabName: string) => void;
}

const NavigationBar: FC<NavigationBarProps> = ({ activeTab, onTabClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl mx-auto bg-white border-t-2">
        {/* Navigation Items for Large Screens */}
        <ul className="hidden md:flex text-gray-600 space-x-8 pt-4 font-segoe font-medium">
          <li
            onClick={() => onTabClick('Postingan')}
            className={`${
              activeTab === 'Postingan' ? 'text-blue-500 border-b-4 border-blue-500 rounded-none' : ''
            } hover:text-blue-500 hover:bg-gray-100 rounded-md cursor-pointer py-4 px-6`}
          >
            Postingan
          </li>
          <li
            onClick={() => onTabClick('Tentang')}
            className={`${
              activeTab === 'Tentang' ? 'text-blue-500 border-b-4 border-blue-500 rounded-none' : ''
            } hover:text-blue-500 hover:bg-gray-100 rounded-md cursor-pointer py-4 px-6`}
          >
            Tentang
          </li>
          <li
            onClick={() => onTabClick('Foto')}
            className={`${
              activeTab === 'Foto' ? 'text-blue-500 border-b-4 border-blue-500 rounded-none' : ''
            } hover:text-blue-500 hover:bg-gray-100 rounded-md cursor-pointer py-4 px-6`}
          >
            Foto
          </li>
          <li
            onClick={() => onTabClick('Video')}
            className={`${
              activeTab === 'Video' ? 'text-blue-500 border-b-4 border-blue-500 rounded-none' : ''
            } hover:text-blue-500 hover:bg-gray-100 rounded-md cursor-pointer py-4 px-6`}
          >
            Video
          </li>
        </ul>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden flex justify-between items-center py-4 px-6">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Hidden by default, shown when toggled) */}
        <div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            zIndex: 10,
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white',
            marginTop: '8px',
          }}
        >
          <ul className="text-gray-600 flex flex-col space-y-4 py-4 font-segoe font-medium">
            <li
              onClick={() => onTabClick('Postingan')}
              className={`${
                activeTab === 'Postingan' ? 'text-blue-500 border-b-4 border-blue-500' : ''
              } hover:text-blue-500 hover:bg-gray-100 rounded-xl cursor-pointer py-4 px-6`}
            >
              Postingan
            </li>
            <li
              onClick={() => onTabClick('Tentang')}
              className={`${
                activeTab === 'Tentang' ? 'text-blue-500 border-b-4 border-blue-500' : ''
              } hover:text-blue-500 hover:bg-gray-100 rounded-xl cursor-pointer py-4 px-6`}
            >
              Tentang
            </li>
            <li
              onClick={() => onTabClick('Foto')}
              className={`${
                activeTab === 'Foto' ? 'text-blue-500 border-b-4 border-blue-500' : ''
              } hover:text-blue-500 hover:bg-gray-100 rounded-xl cursor-pointer py-4 px-6`}
            >
              Foto
            </li>
            <li
              onClick={() => onTabClick('Video')}
              className={`${
                activeTab === 'Video' ? 'text-blue-500 border-b-4 border-blue-500' : ''
              } hover:text-blue-500 hover:bg-gray-100 rounded-xl cursor-pointer py-4 px-6`}
            >
              Video
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
