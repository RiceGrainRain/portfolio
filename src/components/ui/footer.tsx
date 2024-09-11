import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';


const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-neutral-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Groundbreaking Std. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
