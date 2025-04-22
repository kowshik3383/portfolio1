import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from './Navbar';
import { 
  FaGithub, 
  FaTwitter, 
  FaLinkedin, 
  FaEnvelope, 
  FaSun, 
  FaMoon, 
  FaArrowRight 
} from "react-icons/fa";
export default function Hero() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


return (
  <div className={`relative min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'} transition-colors duration-500`}>
    {/* Enhanced background with more dynamic gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 opacity-30 dark:opacity-40">
        <div className="absolute left-1/4 top-1/4 w-36 sm:w-72 h-36 sm:h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute right-1/4 top-1/2 w-48 sm:w-96 h-48 sm:h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 sm:w-80 h-40 sm:h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 right-1/3 w-32 sm:w-64 h-32 sm:h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000"></div>
      </div>
    </div>

    {/* Content container */}
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Header with improved theme toggle */}
      <Navbar/>

      {/* Hero content with improved spacing and layout */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-6 lg:py-9">
        {/* Text content */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left">
          <div className="mb-4 sm:mb-6 inline-block">
            <span className="px-3 sm:px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium inline-block">
              Full Stack Developer
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4 sm:mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400 relative">
              Kowshik
              <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-200 dark:bg-blue-900 -z-10 transform -rotate-1"></span>
            </span>
            <span className="block mt-2">Web Developer & Designer</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            I craft elegant web experiences with React & Tailwind CSS, focusing on performance, accessibility, and exceptional user experience.
          </p>
          
          {/* CTA Buttons - improved with multiple options */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-12">
            <a  href="#work" className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
              View My Work
              <FaArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a  href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
              Contact Me
              <FaEnvelope className="ml-2 w-4 h-4" />
            </a>
          </div>
          
          {/* Social icons with improved hover effects */}
          <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 mb-6 sm:mb-8">
            {/* GitHub */}
            <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors p-2 sm:p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transform hover:scale-110 shadow-md">
              <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            {/* Twitter */}
            <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors p-2 sm:p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transform hover:scale-110 shadow-md">
              <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors p-2 sm:p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transform hover:scale-110 shadow-md">
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            {/* Email */}
            <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors p-2 sm:p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transform hover:scale-110 shadow-md">
              <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
          
          {/* Tech stack badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4 sm:mt-6">
            <span className="px-2 sm:px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium">React</span>
            <span className="px-2 sm:px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium">Tailwind CSS</span>
            <span className="px-2 sm:px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium">Next.js</span>
            <span className="px-2 sm:px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium">TypeScript</span>
          </div>
        </div>
        
        {/* Image container with improved styling */}
        <div className="lg:w-1/2 relative min-h-[30vh] sm:min-h-[40vh] lg:min-h-[60vh] xl:min-h-screen w-full overflow-hidden">
          {/* Fullscreen image container */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <iframe 
              src="https://lottie.host/embed/0e9a81e5-e833-41db-8b1c-6f79c7e76292/LqJ2w6UK5k.lottie" 
              className="w-full h-full object-cover"
            ></iframe>
          </div>
          
          {/* Decorative elements behind the animation */}
          <div className="absolute top-0 left-0 w-24 sm:w-40 h-24 sm:h-40 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-32 sm:w-56 h-32 sm:h-56 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-28 sm:w-48 h-28 sm:h-48 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
          
          {/* Decorative floating shapes */}
          <div className="absolute top-1/4 right-1/4 w-4 sm:w-8 h-4 sm:h-8 bg-yellow-400 rounded-full animate-float z-20"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 sm:w-6 h-3 sm:h-6 bg-blue-500 rounded-lg rotate-12 animate-float animation-delay-2000 z-20"></div>
          <div className="absolute top-1/3 right-1/4 w-5 sm:w-10 h-5 sm:h-10 bg-purple-500 rounded-lg -rotate-12 animate-float animation-delay-4000 z-20"></div>
          
          {/* Overlay with logo - showing only on mobile */}
        
          
          {/* Mobile dark mode toggle */}
         
        </div>
      </div>
      
      {/* Scroll indicator with improved visibility */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#projects" className="p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group animate-bounce">
          <ChevronDown size={20} className="group-hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
    </div>
    
    {/* Add these styles to your global CSS or style tag */}
    <style jsx>{`
      @keyframes blob {
        0% {
          transform: translate(0px, 0px) scale(1);
        }
        33% {
          transform: translate(30px, -50px) scale(1.1);
        }
        66% {
          transform: translate(-20px, 20px) scale(0.9);
        }
        100% {
          transform: translate(0px, 0px) scale(1);
        }
      }
      
      @keyframes float {
        0% {
          transform: translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-20px) rotate(10deg);
        }
        100% {
          transform: translateY(0px) rotate(0deg);
        }
      }
      
      .animate-blob {
        animation: blob 7s infinite;
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      
      .animation-delay-4000 {
        animation-delay: 4s;
      }
      
      .animation-delay-6000 {
        animation-delay: 6s;
      }
    `}</style>
  </div>
);
}