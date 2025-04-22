import { useState } from 'react';
import { Menu, X, Github, Twitter, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="font-bold text-xl">
            <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
              Portfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-teal-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-teal-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="outline-none focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-teal-400" />
              ) : (
                <Menu size={24} className="text-teal-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-4 space-y-1 bg-slate-800">
            <a href="#home" className="block px-3 py-2 rounded hover:bg-slate-700 transition-colors">Home</a>
            <a href="#about" className="block px-3 py-2 rounded hover:bg-slate-700 transition-colors">About</a>
            <a href="#projects" className="block px-3 py-2 rounded hover:bg-slate-700 transition-colors">Projects</a>
            <a href="#skills" className="block px-3 py-2 rounded hover:bg-slate-700 transition-colors">Skills</a>
            <a href="#contact" className="block px-3 py-2 rounded hover:bg-slate-700 transition-colors">Contact</a>
            
            <div className="flex space-x-4 px-3 py-2">
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}