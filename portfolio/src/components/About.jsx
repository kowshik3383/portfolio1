import { useState } from 'react';
import { Users, Award, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate web developer dedicated to creating modern, responsive, and user-friendly websites.
          </p>
        </div>

        {/* Main content with image and text */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-gray-200 rounded-lg w-full h-96 flex items-center justify-center">
  <iframe
   src="https://lottie.host/embed/8ac383d6-c798-4862-9c48-7d4e2d77a870/bIAHbEpBPG.lottie"
    className="w-full h-96 border-none"
    title="Lottie Animation"
  ></iframe>
</div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
            <p className="text-gray-700 mb-4">
              I started my career as a front-end developer, honing my skills in HTML, CSS, JavaScript, and React. Over the years, I’ve built a variety of web applications and have expanded my knowledge to back-end technologies like Node.js and databases.
            </p>
            <p className="text-gray-700 mb-6">
              I'm passionate about solving complex problems and delivering clean, maintainable code that provides great user experiences.
            </p>
            
            {/* Read more section */}
            {expanded && (
              <div className="text-gray-700 mb-6">
                <p className="mb-4">
                  I am constantly learning and evolving as a developer, keeping up with the latest trends and technologies to provide high-quality solutions.
                </p>
                <p>
                  My ultimate goal is to continue growing as a developer, working on challenging projects, and contributing to open-source communities.
                </p>
              </div>
            )}
            
            <button 
              onClick={() => setExpanded(!expanded)}
              className="flex items-center text-blue-600 font-medium"
            >
              {expanded ? 'Read less' : 'Read more'}
              {expanded ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600 mb-2">3+</p>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600 mb-2">50+</p>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600 mb-2">5+</p>
            <p className="text-gray-600">Technologies Mastered</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600 mb-2">10+</p>
            <p className="text-gray-600">Client Testimonials</p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">My Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-700">I believe in the power of teamwork to create innovative and successful projects. Collaboration is key to growth.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-700">I strive for excellence in all my work, ensuring high-quality code and exceptional user experiences.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-700">Honesty and transparency are central to how I work with clients and teams. I take pride in delivering reliable results.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to create something amazing? Get in touch with me to discuss your next web development project.
          </p>
          <div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg mr-4">
              Contact Me
            </button>
            <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-8 rounded-lg">
              View My Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
