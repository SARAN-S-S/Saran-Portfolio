import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiCode } from 'react-icons/fi';
// Import your project images from constants
import { 
  accident, 
  atm, 
  career, 
  portfolio, 
  studentachievement, 
  supermarket, 
  weather 
} from '../../constants';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "SuperMarket Billing and Management System",
      category: "Console",
      description: "A C++ console application for managing supermarket billing and product records using file handling.",
      fullDescription: "A console-based C++ system that simplifies supermarket operations with product management, secure admin access, and an automated billing process. It allows administrators to manage product details and buyers to place orders and receive detailed receipts with totals and discounts.",
      image: supermarket,
      demoLink: null,
      codeLink: "https://github.com/SARAN-S-S/Super-Market-Billing-System",
      technologies: ["C++", "OOP", "File Handling"]
    },
    {
      id: 2,
      title: "Simple command-line based ATM simulation",
      category: "Console",
      description: "A C++ console-based ATM system supporting deposits, withdrawals, balance checks, and PIN changes.",
      fullDescription: "A simple ATM simulator built in C++ with features like secure PIN verification, deposit and withdrawal operations, balance display with low-balance alerts, and PIN modification. The system ensures basic banking interactions through an interactive console interface.",
      image: atm,
      demoLink: null,
      codeLink: "https://github.com/SARAN-S-S/ATM-Simulation-Console-Application",
      technologies: ["C++", "File Operations"]
    },
    {
      id: 3,
      title: "Blog for Posting Student Achievement",
      category: "Web",
      description: "A MERN-based platform where students post their achievements and admins manage approvals.",
      
      fullDescription: "A MERN stack web application that allows students to share their achievement stories, including event participation, placements, and success updates. The system includes two user roles: students and admins. Students can create posts, like posts, comment, and view engagement counts, while all posts go to the admin panel for approval before publishing. Admins can approve, edit, delete, and manage posts as well as user details and statistics. This platform enhances interaction and motivation by allowing students to connect through comments and story sharing.",
      
      image: studentachievement,
      demoLink: "https://achievehub-blog.onrender.com",
      codeLink: "https://github.com/SARAN-S-S/AchieveHub",
      technologies: ["React", "CSS", "MongoDB"  , "Node.js", "Express.js"]
    },
    {
      id: 4,
      title: "Weather App",
      category: "Web",
      description: "A simple weather app showing temperature, humidity, and wind speed using an open weather API.",
      
      fullDescription: "A lightweight weather application built with HTML, CSS, and an open weather API. It displays the current temperature, city name, humidity level, and wind speed for any searched location. The UI is clean and minimal, providing essential weather details in a simple and user-friendly format.",
      
      image: weather,
      demoLink: "https://saran-s-s.github.io/Simple-Weather-App/",
      codeLink: "https://github.com/SARAN-S-S/Simple-Weather-App",
      technologies: ["HTML", "CSS", "JavaScript", "Weather API"]
    },
    {
      id: 5,
      title: "Personal Portfolio",
      category: "Web",
      description: "A responsive and attractive portfolio showcasing my projects, skills, services, and profile.",
      
      fullDescription: "A responsive and modern portfolio website built with React, Tailwind CSS, and Framer Motion. It highlights my projects, skills, services, and personal information with smooth animations and a clean, attractive UI. Designed to offer a seamless browsing experience across devices with smooth interactions and a visually engaging layout.",
      
      image: portfolio,
      demoLink: "https://myportfolio.vercel.app",
      codeLink: "https://github.com/yourusername/portfolio",
      technologies: ["React", "Tailwind CSS", "Framer Motion"]
    },
    {
      id: 6,
      title: "CareerTalks Blog",
      category: "Web",
      description: "A blog platform helping students explore career guidance, placement insights, and shared experiences.",
      
      fullDescription: "CareerTalks is a web-based blog platform designed to support students in their early career journey. It provides categorized posts on career guidance, placement insights, and real-world experiences shared by peers. Students can interact through comments, explore topics using search, and gain valuable knowledge and connections. An admin dashboard manages posts, comments, and overall content flow, making the platform structured and informative.",      
      image: career,
      codeLink: "https://github.com/SARAN-S-S/CareerTalks-Blog",
      technologies: ["React", "CSS", "MongoDB", "Node.js", "Express.js"]
    },
    {
      id: 7,
      title: "Accident Detection Using Emergency SOS",
      category: "Core",
      description: "An embedded system that detects bike accidents and sends automatic SOS alerts with location.",
      
      fullDescription: "An embedded safety system designed to detect two-wheeler accidents and automatically send SOS alerts with live GPS location. The system evaluates three test cases to ensure accurate accident detection: the first test case checks bike tilt, the second checks whether the rider is seated, and the third verifies rider consciousness using a helmet tilt sensor, buzzer, and push button. If the rider does not respond within the alert window, the system confirms an accident, fetches nearby hospital details using Google Cloud API, and sends an emergency message with location and hospital contacts through GSM. The system also includes a helmet-based ignition lock that prevents the bike from starting unless the rider wears the helmet, improving overall safety.",
      
      image: accident,
      demoLink: null,
      codeLink: null,
      technologies: [
        "Arduino",
        "Embedded C",
        "GSM Module",
        "GPS Module",
        "MPU6050 Sensor",
        "Tilt Sensor",
        "Force Sensor"
      ]
    }

  ];

  const filters = [
    { key: 'All', label: 'All' },
    { key: 'Console', label: 'Console Projects' },
    { key: 'Web', label: 'Web Development' },
    { key: 'Core', label: 'Core Projects' }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryGradient = (category) => {
    switch (category) {
      case 'Console':
        return 'from-blue-500 via-cyan-500 to-blue-700';
      case 'Web':
        return 'from-emerald-500 via-green-500 to-emerald-700';
      case 'Core':
        return 'from-purple-500 via-violet-500 to-purple-700';
      default:
        return 'from-cyan-500 via-blue-500 to-emerald-500';
    }
  };

  const getCategoryColors = (category) => {
    switch (category) {
      case 'Console':
        return {
          bg: 'bg-blue-500/20',
          text: 'text-blue-300',
          border: 'border-blue-500/40',
          glow: 'shadow-blue-500/25',
          gradient: 'from-blue-500/10 to-cyan-500/10',
          buttonGradient: 'from-blue-500 to-cyan-500',
          filterGradient: 'from-blue-400 to-cyan-400'
        };
      case 'Web':
        return {
          bg: 'bg-green-500/20',
          text: 'text-green-300',
          border: 'border-green-500/40',
          glow: 'shadow-green-500/25',
          gradient: 'from-emerald-500/10 to-green-500/10',
          buttonGradient: 'from-emerald-500 to-green-500',
          filterGradient: 'from-emerald-400 to-green-400'
        };
      case 'Core':
        return {
          bg: 'bg-purple-500/20',
          text: 'text-purple-300',
          border: 'border-purple-500/40',
          glow: 'shadow-purple-500/25',
          gradient: 'from-purple-500/10 to-violet-500/10',
          buttonGradient: 'from-purple-500 to-violet-500',
          filterGradient: 'from-purple-400 to-violet-400'
        };
      default:
        return {
          bg: 'bg-cyan-500/20',
          text: 'text-cyan-300',
          border: 'border-cyan-500/40',
          glow: 'shadow-cyan-500/25',
          gradient: 'from-cyan-500/10 to-blue-500/10',
          buttonGradient: 'from-cyan-500 to-emerald-500',
          filterGradient: 'from-cyan-400 to-emerald-400'
        };
    }
  };

  const getFilterColors = (filterKey) => {
    const colors = getCategoryColors(filterKey);
    return {
      active: `bg-gradient-to-r ${colors.filterGradient} text-white shadow-lg ${colors.glow}`,
      inactive: 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/10'
    };
  };

  return (
    <section id="projects" className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            My <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full mb-6"
          />

          {/* Inspirational Quote */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ 
              delay: 0.7, 
              duration: 0.8,
              ease: "easeOut"
            }}
            className="text-gray-300 mt-6 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-light mb-8"
          >
            Turning ideas into reality through code and creativity
          </motion.p>

          {/* Enhanced Filter Buttons - Smaller Size */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 px-2">
            {filters.map((filter) => {
              const colors = getFilterColors(filter.key);
              return (
                <motion.button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-5 py-2 rounded-full font-bold text-xs transition-all duration-300 backdrop-blur-sm ${
                    activeFilter === filter.key ? colors.active : colors.inactive
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                    y: -1
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 17 
                  }}
                >
                  {filter.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const categoryColors = getCategoryColors(project.category);
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Enhanced Shimmer Border Container - Thicker Border */}
                  <div className={`relative p-[3px] rounded-2xl bg-gradient-to-r ${getCategoryGradient(project.category)} animate-shimmer bg-[length:400%_100%] transition-all duration-500 ${
                    hoveredProject === project.id ? 'scale-105 shadow-2xl' : 'scale-100'
                  }`}>
                    
                    {/* Main Card */}
                    <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 backdrop-blur-sm">
                      
                      {/* Project Image - Full Cover */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      
                      {/* Default State - Only show category badge */}
                      <div className="absolute bottom-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${categoryColors.bg} ${categoryColors.text} ${categoryColors.border}`}>
                          {project.category}
                        </span>
                      </div>

                      {/* Hover Overlay - Reveal Content */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      
                      {/* Reveal Content - Hidden by default, shown on hover */}
                      <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        
                        {/* Top Section - Title & Description */}
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 text-xs sm:text-sm font-medium leading-relaxed line-clamp-3">
                            {project.description}
                          </p>
                        </div>

                        {/* Bottom Section */}
                        <div className="flex justify-between items-center">
                          {/* Technologies Preview */}
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 2).map((tech, index) => (
                              <span 
                                key={index}
                                className="px-2 py-1 bg-white/10 rounded-full text-gray-300 text-xs font-medium border border-white/10 backdrop-blur-sm"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 2 && (
                              <span className="px-2 py-1 bg-white/10 rounded-full text-gray-300 text-xs font-medium border border-white/10 backdrop-blur-sm">
                                +{project.technologies.length - 2}
                              </span>
                            )}
                          </div>

                          {/* More Link */}
                          <div className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                            <span className="text-xs font-bold">More</span>
                            <FiExternalLink className="text-sm" />
                          </div>
                        </div>
                      </div>

                      {/* Hover Effect Layer */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${getCategoryGradient(project.category)} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut"
          }}
          className="mt-16 text-center"
        >
          <motion.div 
            className="inline-flex flex-wrap justify-center gap-6 px-8 py-6 rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            whileHover={{ 
              scale: 1.02,
              y: -2,
              transition: { duration: 0.2 }
            }}
          >
            {[
              { text: "Design -> Develop -> Deliver", color: "bg-cyan-400", delay: 0 },
              { text: "Code with Precision", color: "bg-emerald-400", delay: 0.1 },
              { text: "Innovate with Purpose", color: "bg-blue-400", delay: 0.2 },
              { text: "Build for Impact", color: "bg-purple-400", delay: 0.3 }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.5 + item.delay,
                  duration: 0.4,
                  ease: "easeOut"
                }}
                className="flex items-center gap-2 text-white group cursor-pointer"
                whileHover={{ 
                  y: -3,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className={`w-2 h-2 ${item.color} rounded-full shadow-lg`}
                  animate={{ 
                    scale: [1, 1.4, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity, 
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                />
                <span className="text-sm font-bold group-hover:text-cyan-200 transition-colors duration-200">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-base backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
              <p>No projects found in this category.</p>
              <p className="text-sm mt-1 text-gray-500">Try selecting a different filter</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Enhanced Project Modal - Fixed Scrolling with Smooth Animation */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ 
                type: "spring", 
                damping: 30,
                stiffness: 300
              }}
              className="relative w-full max-w-2xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Enhanced Shimmer Border for Modal - Fixed Height */}
              <div className={`relative rounded-3xl bg-gradient-to-r ${getCategoryGradient(selectedProject.category)} animate-shimmer bg-[length:400%_100%] h-full max-h-[90vh] flex flex-col`}>
                
                {/* Main Modal Card - Fixed Structure */}
                <div className="flex flex-col h-full bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 rounded-3xl border border-white/20 shadow-2xl backdrop-blur-xl overflow-hidden m-[3px]">
                  
                  {/* Fixed Header Section - No Scroll */}
                  <div className="flex-shrink-0 relative h-40 sm:h-48">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${selectedProject.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md border ${
                        selectedProject.category === 'Console' 
                          ? 'bg-blue-500/30 text-blue-200 border-blue-400/50 shadow-lg shadow-blue-500/20'
                          : selectedProject.category === 'Web'
                          ? 'bg-green-500/30 text-green-200 border-green-400/50 shadow-lg shadow-green-500/20'
                          : 'bg-purple-500/30 text-purple-200 border-purple-400/50 shadow-lg shadow-purple-500/20'
                      }`}>
                        {selectedProject.category === 'All' ? 'All Projects' : 
                         selectedProject.category === 'Console' ? 'Console Project' :
                         selectedProject.category === 'Web' ? 'Web Development' : 'Core Project'}
                      </span>
                    </div>

                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all duration-300 backdrop-blur-md border border-white/20 hover:scale-110 hover:rotate-90"
                    >
                      <FiX className="text-lg" />
                    </button>
                  </div>

                  {/* Scrollable Content Area Only with Smooth Scrolling */}
                  <div className="flex-1 min-h-0 flex flex-col">
                    <div className="p-5 sm:p-6 flex-1 overflow-y-auto smooth-scroll custom-scrollbar">
                      
                      {/* Project Title */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 leading-tight">
                        {selectedProject.title}
                      </h3>

                      {/* Project Description */}
                      <p className="text-gray-200 font-medium leading-relaxed mb-5 text-sm sm:text-base">
                        {selectedProject.fullDescription}
                      </p>

                      {/* Technologies Section */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <FiCode className="text-cyan-400 text-lg" />
                          <h4 className="text-white font-bold text-lg">Technologies Used</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                            <motion.span 
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className="px-3 py-1.5 bg-gradient-to-r from-white/10 to-white/5 rounded-lg text-gray-200 text-xs font-medium border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Fixed Action Buttons - No Scroll */}
                    <div className="flex-shrink-0 p-5 sm:p-6 pt-0">
                      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                        {selectedProject.demoLink && (
                          <motion.a
                            href={selectedProject.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 group flex-1 text-sm"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <FiExternalLink className="text-lg group-hover:scale-110 transition-transform duration-300" />
                            Live Demo
                          </motion.a>
                        )}
                        {selectedProject.codeLink && (
                          <motion.a
                            href={selectedProject.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold transition-all duration-300 group flex-1 text-sm ${
                              selectedProject.demoLink 
                                ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-sm hover:shadow-lg'
                                : 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:shadow-2xl hover:shadow-cyan-500/30'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <FiGithub className="text-lg group-hover:scale-110 transition-transform duration-300" />
                            View Code
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced custom styles with smooth scrolling */}
      <style jsx>{`
        @keyframes shimmer {
          0% { 
            background-position: -200% 0; 
          }
          100% { 
            background-position: 200% 0; 
          }
        }
        .animate-shimmer {
          animation: shimmer 2.5s ease-in-out infinite;
          background-size: 400% 100%;
        }
        
        /* Smooth scrolling container */
        .smooth-scroll {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        
        /* Enhanced custom scrollbar with smooth transitions */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          transition: all 0.3s ease;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #10b981);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #059669);
          transform: scale(1.1);
        }
        
        /* Firefox scrollbar styling */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #06b6d4 rgba(255, 255, 255, 0.1);
        }
        
        /* Smooth scrolling for the entire modal */
        .smooth-scroll {
          animation: fadeInScroll 0.5s ease-out;
        }
        
        @keyframes fadeInScroll {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Responsive improvements */
        @media (max-width: 640px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;