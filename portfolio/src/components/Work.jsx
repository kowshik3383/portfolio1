import { useState, useEffect } from 'react';

export default function Work() {
  const [projects] = useState([
    {
  title: 'GenixAI Hospital Management',
  description: 'A smart healthcare dashboard to manage appointments, patient records, and prescriptions — powered by AI-driven voice recognition.',
  image: 'https://i.ibb.co/WpKw1Qdf/Genix-Google-Chrome-13-04-2025-19-13-43.png',
  link: 'https://app.genixai.info/',
  tags: ['React', 'Tailwind CSS', 'Firebase', 'AI', 'Speech-to-Text'],
  details: {
    overview: "GenixAI Hospital Management is an intelligent platform designed to streamline patient care. It helps hospitals and clinics automate appointment scheduling, generate medical notes using AI-powered speech-to-text, and simplify prescription handling.",
    features: [
      "AI-driven speech-to-text for quick note generation",
      "Seamless appointment booking and tracking",
      "Prescription uploads and import from external sources",
      "Patient history and record management",
      "Real-time notifications and role-based access"
    ],
    challenges: "Integrating accurate and fast speech-to-text transcription in real-world noisy environments was a core challenge. We overcame it by fine-tuning AI models and implementing custom noise-filtering layers. Additionally, prescription import compatibility across varying formats required robust parsing logic.",
    outcome: "The system reduced manual data entry by 65%, improved doctor efficiency, and significantly enhanced patient satisfaction by streamlining check-in and follow-up workflows."
  }
}
,{
  title: 'NextGen UI Landing Page',
  description: 'A futuristic and responsive landing page crafted to highlight modern UI/UX design principles and interaction patterns.',
  image: 'https://i.ibb.co/KcHSW9nC/Visionary-Builders-Google-Chrome-28-01-2025-09-41-37.png', // Replace with your actual preview image
  link: 'https://nextgen-mern-stack.vercel.app/',
  tags: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
  details: {
    overview: "NextGen is a concept landing page designed to demonstrate cutting-edge UI skills with a focus on clean layouts, fluid animations, and a modern aesthetic. It serves as a showcase for interactive components, consistent theming, and responsive behavior across devices.",
    features: [
      "Hero section with layered animations and CTA",
      "Mobile-first responsive layout",
      "Smooth scroll and section-based navigation",
      "Modern typography and glassmorphism effects",
      "Animated cards, tooltips, and hover states"
    ],
    challenges: "Achieving pixel-perfect responsiveness and maintaining consistent animation performance across all devices required careful layout planning and optimization. Advanced Tailwind utilities and custom breakpoints were used to achieve fluid responsiveness.",
    outcome: "The project effectively showcases UI proficiency and has been used as a template for multiple client presentations, helping secure design-related freelance work and collaborations."
  }
}
,
  {
  title: 'DataMate - The ADA Platform',
  description: 'A robust and user-friendly platform designed to empower your data analysis journey with advanced AI tools and seamless integrations.',
  image: 'https://i.ibb.co/zTnygQ9s/React-App-Google-Chrome-23-04-2025-00-03-11.png', // Replace with your actual screenshot
  link: 'https://datamate.connectplus.org.uk/',
  tags: ['AI', 'Data Analysis', 'Machine Learning', 'API Integration'],
  details: {
    overview: "DataMate is a powerful platform that simplifies data analysis and enables users to build custom AI-powered analysts, integrate data sources seamlessly, and automate reporting. With a no-code interface, DataMate empowers users of all technical levels to gain valuable insights from their data.",
    features: [
      "Bot Studio: Build custom AI data analysts tailored to your specific needs. No coding experience required!",
      "Analyst Assist: Get intelligent suggestions and real-time insights for data interpretation.",
      "Seamless Integration: Integrate effortlessly with spreadsheets, CRMs, databases, and third-party APIs.",
      "Conversational AI: Interact with your data using natural language, asking questions and getting instant answers.",
      "Reporting Manager: Generate professional reports in minutes with customizable templates and automated scheduling."
    ],
    challenges: "Building a seamless integration system that could handle multiple data sources in real-time while maintaining performance was a significant challenge. Data security and user access control were also crucial areas of focus.",
    outcome: "DataMate successfully streamlined data workflows and empowered businesses to make data-driven decisions faster. With real-time insights, customizable reports, and powerful AI tools, DataMate significantly improved operational efficiency for its users."
  }
}
,
   {
  title: 'PostCrafts Auth System',
  description: 'A secure and modern authentication system built using the MERN stack with full-featured login and registration flows.',
  image: 'https://i.ibb.co/Jw9ZxyXP/Next-Gen-Google-Chrome-06-02-2025-18-29-55.png', // Replace with your actual screenshot
  link: 'https://mern-postcrafts-kowshik.vercel.app/',
  tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'JWT'],
  details: {
    overview: "PostCrafts provides a clean and secure authentication interface using the MERN stack. It includes fully validated login and registration forms, token-based authentication, and responsive UI styling with Tailwind CSS.",
    features: [
      "User registration with input validation",
      "Secure login with JWT-based session handling",
      "Password hashing using bcrypt",
      "Persistent sessions and protected routes",
      "Tailwind-styled responsive UI with error feedback"
    ],
    challenges: "Ensuring secure password handling and session management was a key focus. JWT was integrated with refresh token logic for scalable session control. On the frontend, managing form validation and dynamic error handling required careful UX considerations.",
    outcome: "The auth module was successfully deployed and integrated into a broader content platform, serving as the foundation for protected user experiences and admin-level access control."
  }
}
,{
  title: 'GenixAI - Data-Driven Healthcare Insights',
  description: 'A powerful AI platform designed to provide real-time transcription, predictive analytics, and seamless EHR integration for healthcare systems.',
  image: 'https://i.ibb.co/ccY4w24Q/React-App-Google-Chrome-23-04-2025-00-09-06.png', // Replace with your actual screenshot
  link: 'https://genixai.connectplus.org.uk/',
  tags: ['Healthcare', 'AI', 'Predictive Analytics', 'EHR Integration', 'Multilingual Support'],
  details: {
    overview: "GenixAI offers data-driven insights tailored for healthcare providers. With features like real-time transcription, multilingual support, predictive analytics, and seamless EHR integration, GenixAI helps healthcare systems scale and provide better care through actionable insights.",
    features: [
      "Data-driven insights for healthcare: Transform raw data into actionable insights that enhance decision-making.",
      "Scales with the largest health systems: GenixAI is built to scale with your organization's needs, from small clinics to large hospitals.",
      "Real-time transcription: Automatically transcribe medical conversations and notes in real time, improving patient documentation efficiency.",
      "Hassle-free partnership: Work closely with GenixAI’s team for easy integration into your existing workflows.",
      "Multilingual support: Promote inclusivity by supporting multiple languages, ensuring accessibility for all patients and healthcare providers.",
      "EHR integration: Seamlessly integrate with existing Electronic Health Records (EHR) systems, enabling smoother patient care coordination.",
      "Predictive analytics: Use AI-driven predictive models to offer actionable insights and improve patient outcomes."
    ],
    challenges: "Integrating real-time transcription with existing healthcare systems while ensuring HIPAA compliance was a major challenge. Additionally, scaling the platform to support large health systems without compromising performance required extensive testing and optimization.",
    outcome: "GenixAI successfully enhanced healthcare operations by providing real-time insights, improving patient care, and enabling proactive decision-making, leading to improved efficiency and patient outcomes."
  }
}
,
   {
  title: 'Visionary Builders Platform',
  description: 'A modern real estate and construction management platform built using HTML, CSS, React, and the MERN stack for full functionality and responsiveness.',
  image: 'https://i.ibb.co/ZRBxwX47/Visionary-Builders-Google-Chrome-28-01-2025-09-38-57.png', // Replace with your actual screenshot
  link: 'https://visionary-builders.vercel.app/',
  tags: ['HTML', 'CSS', 'React', 'MongoDB', 'Express.js', 'Node.js'],
  details: {
    overview: "Visionary Builders is a comprehensive platform designed for real estate and construction businesses. It enables users to manage projects, showcase properties, and track tasks through a beautifully designed and responsive interface.",
    features: [
      "Clean and modern landing pages using HTML and CSS",
      "Dynamic and responsive frontend built with React",
      "MongoDB for efficient and scalable data storage",
      "Express.js and Node.js for robust backend APIs",
      "Project and task management modules",
      "Client inquiries and contact integration",
      "User authentication and admin control panel"
    ],
    challenges: "Designing a clean, responsive UI that remains consistent across all pages while ensuring seamless integration between the frontend and backend using the MERN stack required careful coordination.",
    outcome: "Visionary Builders was successfully deployed for internal team use and client engagement, significantly improving project tracking and customer interaction in the construction domain."
  }
},
{
  title: 'CoffeeHub - Café Experience Redefined',
  description: 'A stylish and interactive café ordering and management platform built with HTML, CSS, React, and the MERN stack.',
  image: 'https://i.ibb.co/WWrCqZ1w/Blog-Google-Chrome-26-11-2023-20-22-04.png', // Replace with your actual screenshot URL
  link: 'https://kowshik3383.github.io/coffee-hub/',
  tags: ['HTML', 'CSS', 'React', 'MongoDB', 'Express.js', 'Node.js'],
  details: {
    overview: "CoffeeHub is a modern café platform that allows users to explore menus, place orders, and manage cafés effortlessly. Designed for both customers and café managers, it features a sleek UI and robust backend built with the MERN stack.",
    features: [
      "Beautiful landing page and UI built with HTML and CSS",
      "Interactive frontend with React for smooth user experience",
      "Real-time order placement and tracking",
      "MongoDB-powered product and order data storage",
      "Express.js and Node.js backend for API handling",
      "Admin dashboard for menu updates and order management",
      "User authentication and role-based access"
    ],
    challenges: "Implementing real-time order updates and ensuring a smooth user experience with dynamic state management using React and MongoDB presented integration challenges. Efficiently structuring backend routes and securing user sessions also required attention.",
    outcome: "CoffeeHub successfully transformed the digital experience for café customers and staff, enabling faster service, improved order accuracy, and better customer engagement."
  }
}
,
{
  title: 'Genix HRMS Tool',
  description: 'A robust Human Resource Management System (HRMS) developed using React for the frontend, PHP and MySQL for the backend, and deployed on Azure for scalable cloud hosting.',
  image: 'https://i.ibb.co/mrGW3LCp/Genix-Google-Chrome-23-04-2025-00-19-42.png', // Replace with your actual screenshot URL
  link: 'https://genixwebsite.connectplus.org.uk/',
  tags: ['React', 'PHP', 'MySQL', 'Azure', 'HRMS'],
  details: {
    overview: "Genix is a full-featured Human Resource Management System designed to streamline employee and HR operations. The system enables efficient leave management, employee tracking, payroll details, and admin control—all hosted securely on Microsoft Azure.",
    features: [
      "User-friendly employee and admin dashboards",
      "Leave management system with status tracking and approvals",
      "Dynamic forms for onboarding and profile updates",
      "Secure login and registration using PHP and MySQL",
      "Cloud deployment with Azure for high availability",
      "Real-time data access and update capabilities",
      "Role-based access control for employees and HR admins"
    ],
    challenges: "Integrating real-time leave status updates, managing secure authentication flows in PHP, and ensuring a seamless deployment on Azure required careful planning and testing.",
    outcome: "Genix improved HR efficiency by over 40%, reducing manual paperwork and enabling smooth communication between employees and HR managers. It is now actively used in a production environment."
  }
},
{
  title: 'Gatherly - Zoom Clone',
  description: 'A real-time video conferencing app inspired by Zoom, built using Next.js with secure meeting rooms and live communication features.',
  image: 'https://i.ibb.co/yFHQsmx5/Gatherly-Google-Chrome-09-07-2024-09-53-32.png', // Replace with your actual screenshot URL
  link: 'https://gatherly-um9r.vercel.app/',
  tags: ['Next.js', 'React', 'Tailwind CSS'],
  details: {
    overview: "Gatherly is a Zoom-inspired video conferencing platform developed using Next.js. It allows users to create and join secure video meetings with real-time audio, video, and chat functionalities.",
    features: [
      "Create and join virtual meeting rooms",
      "Real-time video and audio communication using WebRTC",
      "Live chat within meeting rooms",
      "Unique meeting codes with access control",
      "Responsive and modern UI with Tailwind CSS",
      "Socket.io for real-time signaling and event handling",
      "Optimized with Next.js for fast routing and performance"
    ],
    challenges: "Setting up peer-to-peer communication and signaling for multiple users was complex. Ensuring stable audio/video streams and low-latency interactions required deep integration of WebRTC and Socket.io.",
    outcome: "Gatherly provides a reliable and intuitive Zoom-like experience for virtual meetings. It’s scalable, secure, and serves as a great foundation for remote collaboration tools."
  }
}




  ]);

  // Extract all unique tags for filter options
  const allTags = [...new Set(projects.flatMap(project => project.tags))].sort();
  
  const [activeFilters, setActiveFilters] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  
  // Apply filters
  useEffect(() => {
    if (activeFilters.length === 0) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        activeFilters.some(filter => project.tags.includes(filter))
      );
      setFilteredProjects(filtered);
    }
    
    // Simulate loading for animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [activeFilters, projects]);

  // Toggle filter
  const toggleFilter = (tag) => {
    setIsLoading(true);
    if (activeFilters.includes(tag)) {
      setActiveFilters(activeFilters.filter(filter => filter !== tag));
    } else {
      setActiveFilters([...activeFilters, tag]);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setIsLoading(true);
    setActiveFilters([]);
  };

  // Open modal with project details
  const openProjectModal = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Close modal when clicking outside
  const handleModalClick = (e) => {
    if (e.target.id === 'modal-backdrop') {
      closeModal();
    }
  };
const [showAllTags, setShowAllTags] = useState(false);
  const initialTagsCount = 6; // Number of tags to show initially
  
  // Display either all tags or just the initial count
  const visibleTags = showAllTags ? allTags : allTags.slice(0, initialTagsCount);


return (
  <div className="bg-gradient-to-br from-teal-100 via-white to-green-50 py-12 sm:py-16 md:py-20 lg:py-24 min-h-screen">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header with animated elements */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16 relative">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full bg-purple-500 opacity-20 blur-xl"></div>
        <div className="absolute -top-8 left-1/3 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full bg-blue-500 opacity-20 blur-xl"></div>
        <div className="absolute -top-12 right-1/3 w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-full bg-pink-500 opacity-20 blur-xl"></div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4 relative inline-block">
          My Work
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-black max-w-2xl mx-auto mt-3 sm:mt-4 md:mt-6 px-4">
          Explore my projects and dive deeper by clicking on any card to see the full details.
        </p>
      </div>

      {/* Filter section */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
          {visibleTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleFilter(tag)}
              className={`px-3 py-1.5 sm:px-4 md:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform ${
                activeFilters.includes(tag)
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-black shadow-lg shadow-purple-500/25 scale-105'
                  : 'bg-gray-800/60 text-white hover:bg-gray-700/80 hover:scale-105'
              }`}
            >
              {tag}
            </button>
          ))}
          
          {/* Show All/Less Tags button */}
          {allTags.length > initialTagsCount && (
            <button
              onClick={() => setShowAllTags(!showAllTags)}
              className="px-3 py-1.5 sm:px-4 md:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-indigo-400 to-cyan-400 text-black hover:from-indigo-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              {showAllTags ? 'Show Less' : `Show All (${allTags.length})`}
            </button>
          )}
          
          {/* Clear Filters button */}
          {activeFilters.length > 0 && (
            <button
              onClick={clearFilters}
              className="px-3 py-1.5 sm:px-4 md:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600 transition-all duration-300 shadow-lg shadow-pink-500/20"
            >
              Clear Filters
            </button>
          )}
        </div>
        
        {/* Active filters display */}
        {activeFilters.length > 0 && (
          <div className="text-center text-gray-400 mb-4 sm:mb-6 animate-fade-in text-xs sm:text-sm">
            <span>Active Filters: </span>
            {activeFilters.map((filter, index) => (
              <span key={filter} className="text-blue-400">
                {filter}{index < activeFilters.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Projects grid with loading effect */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {filteredProjects.length === 0 ? (
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-10 sm:py-16 md:py-20">
            <p className="text-gray-300 text-base sm:text-lg md:text-xl">No projects match your selected filters.</p>
            <button onClick={clearFilters} className="mt-3 sm:mt-4 px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base">
              Reset Filters
            </button>
          </div>
        ) : (
          filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
              style={{ 
                animation: `fadeSlideUp 0.6s ease forwards ${index * 0.15}s`,
                opacity: 0,
                transform: 'translateY(20px)'
              }}
              onMouseEnter={() => setSelectedProject(index)}
              onMouseLeave={() => setSelectedProject(null)}
              onClick={() => openProjectModal(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-3 sm:p-4 md:p-6">
                  <div className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-gray-300 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">{project.description}</p>
                    <button
                      className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-5 md:p-6 relative">
                {/* Animated border */}
                <div className={`absolute inset-0 rounded-xl border-2 border-purple-500/50 opacity-0 ${selectedProject === index ? 'animate-pulse-border' : ''}`}></div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-400 transition-colors duration-300">{project.title}</h3>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3 md:mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                        activeFilters.includes(tag)
                          ? 'bg-purple-600/80 text-white'
                          : 'bg-gray-700/60 text-gray-300 group-hover:bg-gray-600/80'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    
    {/* Project Modal */}
    {modalOpen && currentProject && (
      <div 
        id="modal-backdrop" 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
        onClick={handleModalClick}
        style={{ animation: 'fadeIn 0.3s ease forwards' }}
      >
        <div 
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl max-w-4xl w-full max-h-[85vh] sm:max-h-[90vh] overflow-y-auto relative"
          style={{ animation: 'scaleIn 0.4s ease forwards' }}
        >
          <button 
            onClick={closeModal}
            className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 text-white bg-gray-800/80 hover:bg-gray-700 rounded-full p-1.5 sm:p-2 transition-colors z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div className="relative">
            <img 
              src={currentProject.image} 
              alt={currentProject.title} 
              className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover rounded-t-lg sm:rounded-t-xl md:rounded-t-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">{currentProject.title}</h2>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                {currentProject.tags.map((tag, index) => (
                  <span key={index} className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium rounded-full bg-purple-600/80 text-white">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-4 sm:p-6 md:p-8 pt-3 sm:pt-4 md:pt-6">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">Overview</h3>
              <p className="text-gray-300 text-sm sm:text-base">{currentProject.details.overview}</p>
            </div>
            
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                {currentProject.details.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 sm:mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">Challenges</h3>
              <p className="text-gray-300 text-sm sm:text-base">{currentProject.details.challenges}</p>
            </div>
            
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">Outcome</h3>
              <p className="text-gray-300 text-sm sm:text-base">{currentProject.details.outcome}</p>
            </div>
            
            <div className="flex justify-center mt-6 sm:mt-8">
              <a 
                href={currentProject.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 font-medium text-sm sm:text-base"
              >
                View Live Project
              </a>
            </div>
          </div>
        </div>
      </div>
    )}
    
    {/* Global CSS animations */}
    <style jsx global>{`
      @keyframes expand {
        0% { transform: scaleX(0); }
        100% { transform: scaleX(1); }
      }
      
      @keyframes fadeSlideUp {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes pulse-border {
        0% { opacity: 0; transform: scale(0.95); }
        50% { opacity: 0.5; transform: scale(1); }
        100% { opacity: 0; transform: scale(1.05); }
      }
      
      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      
      @keyframes scaleIn {
        0% { opacity: 0; transform: scale(0.9); }
        100% { opacity: 1; transform: scale(1); }
      }
      
      .animate-pulse-border {
        animation: pulse-border 2s ease-in-out infinite;
      }
      
      .animate-fade-in {
        animation: fadeIn 0.5s ease forwards;
      }
      
      /* Scrollbar styling for modal */
      .max-h-\\[85vh\\]::-webkit-scrollbar,
      .max-h-\\[90vh\\]::-webkit-scrollbar {
        width: 6px;
      }
      
      .max-h-\\[85vh\\]::-webkit-scrollbar-track,
      .max-h-\\[90vh\\]::-webkit-scrollbar-track {
        background: rgba(31, 41, 55, 0.5);
        border-radius: 8px;
      }
      
      .max-h-\\[85vh\\]::-webkit-scrollbar-thumb,
      .max-h-\\[90vh\\]::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #8b5cf6, #3b82f6);
        border-radius: 8px;
      }
    `}</style>
  </div>
);
}