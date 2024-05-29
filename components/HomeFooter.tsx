import React from 'react';
import { FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';

const HomeFooter: React.FC = () => {
  return (
    <footer className="bg-transparent absolute bottom-0 left-0 right-0">
      <div className="container mx-auto py-4 px-6 flex justify-center">
        <div className="flex space-x-4">
          <a href="https://youtube.com/@shotbymurktsg3411" className="text-white hover:text-blue-400">
            <FaYoutube className="h-8 w-8 rounded-xl border-2 border-red-500 p-1  hover:border-blue-500" />
          </a>
          <a href="https://instagram.com/murk_tsg?igshid=OGQ5ZDc2ODk2ZA==" className="text-white hover:text-blue-400">
            <FaInstagram className="h-8 w-8 rounded-xl border-2 border-red-500 p-1  hover:border-blue-500" />
          </a>
          <a href="https://twitter.com/ShotByMurkTSG" className="text-white hover:text-blue-400">
            <FaTwitter className="h-8 w-8 rounded-xl border-2 border-red-500 p-1 hover:border-blue-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;