import { useState } from 'react';
import Link from 'next/link';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-4 py-3 md:px-32 md:py-5 flex justify-between items-center">
      <div>
        <Link href="/home">
          <img
            className="w-16 object-contain cursor-pointer"
            src="/logo.png"
            alt="The official Murk The Sauce God logo"
          />
        </Link>
      </div>

      {/* Hamburger Menu and Header Items (Medium and Smaller Screens) */}
      <div className="flex items-center space-x-5 text-black md:hidden">
        <div
          className="md:hidden cursor-pointer"
          onClick={toggleMenu}
          role="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div
          className={`md:hidden absolute top-16 right-0 w-1/3 justify-center pl-9 bg-white shadow-lg ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <h3 className="text-center w-2/3 hover:bg-red-500 hover:bg-opacity-90 hover:rounded-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105">
            <a href="/shop"><img src='./1b.png' className='-m-32' alt='Shop' /></a>
          </h3>
          <h3 className="text-center w-2/3 hover:bg-red-500 hover:bg-opacity-90 hover:rounded-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105">
            <a href="/services"><img src='./4b.png' className='-m-32' alt='Services' /></a>
          </h3>
          <h3 className="text-center w-2/3 hover:bg-red-500 hover:bg-opacity-90 hover:rounded-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105">
            <a href="/videos"><img src='./5b.png' className='-m-32' alt='Videos' /></a>
          </h3>
          <h3 className="text-center w-2/3 hover:bg-red-500 hover:bg-opacity-90 hover:rounded-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105">
            <a href="/bookme"><img src='./6b.png' className='-m-32' alt='Book Me' /></a>
          </h3>
        </div>
      </div>

      {/* Header Items (Desktop) */}
      <div className="hidden md:flex items-center space-x-3 text-black clicker-pointer ">
        <h3><a href="/shop"><img src='./1b.png' alt='Shop' className='w-28 hover:bg-red-500 hover:bg-opacity-90 hover:rounded-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105'/></a></h3>
        <h3><a href="/services"><img src='./4b.png' alt='Services' className='w-28 hover:bg-red-500 hover:bg-opacity-90 hover:rounded-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105'/></a></h3>
        <h3><a href="/videos"><img src='./5b.png' alt='Videos' className='w-28 hover:bg-red-500 hover:bg-opacity-90 hover:rounded-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105'/></a></h3>
        <h3><a href="/bookme"><img src='./6b.png' alt='Book Me' className='w-28 hover:bg-red-500 hover:bg-opacity-90 hover:rounded-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105'/></a></h3>
      </div>
    </header>
  );
}

export default Header;






