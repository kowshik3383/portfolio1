import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Award, ExternalLink } from 'lucide-react';

export default function EnhancedHorizontalScroll() {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Sample data - replace with your actual certificates and images
const portfolioItems = [
  { id: 1, type: 'certificate', title: 'Web Development', image: 'https://i.ibb.co/spthc9fq/image.png', description: 'Frontend Development Certification' },
  { id: 2, type: 'certificate', title: 'UI/UX Design', image: 'https://i.ibb.co/jkRGXr9q/image.png', description: 'JavaScript (Intermediate) Certificate' },
  { id: 3, type: 'certificate', title: 'Python ', image: 'https://i.ibb.co/PZdWZ7qt/image.png', description: 'Python (Basic) Certificate' },
  { id: 4, type: 'certificate', title: 'SQL (Advanced)', image: 'https://i.ibb.co/jk3vXYxC/image.png', description: 'SQL (Advanced) Certificate' },
  { id: 5, type: 'certificate', title: 'React (Basic) ', image: 'https://i.ibb.co/HLkCBL7R/image.png', description: 'React (Basic) Certificate' },
  { id: 6, type: 'certificate', title: 'Web Development', image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-b5ca96fa-16a6-4b00-8710-e39e41782a76.jpg?v=1700911030000', description: ' Web Development Course: Full stack web application 2023 ' },
  { id: 7, type: 'certificate', title: 'Complete SQL & Relational Database ', image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-39e92522-fbaa-42dd-be3b-37532befc1ae.jpg?v=1700911501000', description: 'Complete SQL & Relational Database Management System ' },
  { id: 8, type: 'certificate', title: 'TypeScript  Expert', image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-fb2a4f17-b4a7-4cf8-852f-625636581221.jpg?v=1700911810000', description: 'TypeScript ' },
];


  // Intersection Observer to detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when visibility changes
        setIsInView(entry.isIntersecting);
        
        // Start auto-scrolling when in view
        if (entry.isIntersecting) {
          setIsAutoScrolling(true);
        } else {
          setIsAutoScrolling(false);
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.3, // trigger when 30% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto scroll effect - only runs when in view
  useEffect(() => {
    let interval = null;
    const container = scrollContainerRef.current;
    
    if (isAutoScrolling && !isPaused && container && isInView) {
      interval = setInterval(() => {
        const isAtEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10;
        
        if (isAtEnd) {
          // Reset to beginning when reaching the end
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll right by one card width
          container.scrollBy({ left: 300, behavior: 'smooth' });
        }
        
        checkScrollPosition();
      }, 1000); // Auto scroll every 3 seconds
    }
    
    return () => clearInterval(interval);
  }, [isAutoScrolling, isPaused, isInView]);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -container.offsetWidth / 2 : container.offsetWidth / 2;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      // Check scroll position after animation
      setTimeout(() => {
        checkScrollPosition();
      }, 500);
    }
  };

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      // Show/hide left arrow based on scroll position
      setShowLeftArrow(container.scrollLeft > 0);
      
      // Show/hide right arrow based on whether we can scroll more to the right
      const isAtEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10;
      setShowRightArrow(!isAtEnd);
    }
  };

  // Check scroll position when scrolling manually
  const handleScroll = () => {
    checkScrollPosition();
  };

  // Handle card click to open modal for certificates
  const handleCardClick = (item) => {
    if (item.type === 'certificate') {
      setSelectedItem(item);
      setModalOpen(true);
      setIsPaused(true); // Pause auto scroll when modal is open
    }
  };

  // Close modal and resume auto scroll
  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
    setIsPaused(false); // Resume auto scroll
  };

  // Pause auto scroll when hovering over cards
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  // Resume auto scroll when mouse leaves cards
  const handleMouseLeave = () => {
    if (!modalOpen) {
      setIsPaused(false);
    }
  };

  // Toggle auto scroll manually


  return (
    <div 
      ref={sectionRef}
      className="relative w-full max-w-6xl mx-auto  py-12  "
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">My Achievements</h2>
        
        {/* Status indicator showing if auto-scroll is active */}
        <div className="flex items-center gap-2 text-sm">
          <span className={`w-2 h-2 rounded-full ${isInView && isAutoScrolling && !isPaused ? 'bg-green-500' : 'bg-gray-300'}`}></span>
          <span className="text-gray-600">
            {isInView ? (isPaused ? 'Scroll paused' : (isAutoScrolling ? 'Auto-scrolling' : 'Manual mode')) : 'Scroll inactive'}
          </span>
        </div>
      </div>
      
      {/* Left scroll button */}
      {showLeftArrow && (
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} className="text-gray-700" />
        </button>
      )}
      
      {/* Scroll container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onScroll={handleScroll}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {portfolioItems.map((item) => (
          <div 
            key={item.id} 
            className={`flex-none w-72 snap-center rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 ${item.type === 'certificate' ? 'cursor-pointer' : ''}`}
            onClick={() => handleCardClick(item)}
          >
            <div className="relative h-44 bg-gray-100 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className={`absolute top-3 right-3 ${item.type === 'certificate' ? 'bg-blue-500' : 'bg-emerald-500'} text-white text-xs px-3 py-1 rounded-full font-medium shadow-md`}>
                {item.type === 'certificate' ? 'Certificate' : 'Project'}
              </div>
              {item.type === 'certificate' && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-xs">Click to view details</p>
                </div>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between">
                <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                {item.type === 'certificate' ? (
                  <Award size={20} className="text-blue-500" />
                ) : (
                  <ExternalLink size={20} className="text-emerald-500" />
                )}
              </div>
              <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
              <div className="mt-3 pt-3 border-t border-gray-100">
                {item.type === 'certificate' ? (
                  <p className="text-xs text-gray-500">Issued by {item.issuer} • {item.date}</p>
                ) : (
                  <p className="text-xs text-gray-500">Tech: {item.technologies}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Right scroll button */}
      {showRightArrow && (
        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} className="text-gray-700" />
        </button>
      )}
      
      {/* Indicator dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.ceil(portfolioItems.length / 3) }).map((_, index) => {
          // Calculate which dot should be active based on scroll position
          const isActive = index === 0; // Default to first dot
          return (
            <div 
              key={index} 
              className={`h-2 w-2 rounded-full transition-all duration-300 ${isActive ? 'bg-blue-500 w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
            ></div>
          );
        })}
      </div>
      
      {/* Certificate Modal */}
      {modalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-fadeIn">
            <div className="relative">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                className="w-full h-52 object-cover"
              />
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black text-white rounded-full p-2 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award size={28} className="text-blue-500" />
                <h3 className="text-2xl font-bold text-gray-800">{selectedItem.title}</h3>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
                <p className="text-gray-700">{selectedItem.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">ISSUED BY</h4>
                  <p className="text-gray-800 font-medium">{selectedItem.issuer}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">DATE</h4>
                  <p className="text-gray-800 font-medium">{selectedItem.date}</p>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-6 mt-6">
                <h4 className="text-sm font-medium text-gray-500 mb-3">CERTIFICATE PREVIEW</h4>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <img 
                    src={selectedItem.image}
                    alt={`${selectedItem.title} certificate`}
                    className="max-h-full rounded shadow"
                  />
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button 
                  onClick={closeModal}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}