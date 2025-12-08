import React, { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiX } from 'react-icons/fi';
import { profileImage } from '../../constants';

const Home = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);
  const [isLinkedinLoading, setIsLinkedinLoading] = useState(false);

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/SARAN-S-S",
      color: "hover:text-[#6e5494]",
      name: "GitHub",
      onClick: () => handleSocialClick('github')
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/saran-s-s-84a696245/",
      color: "hover:text-[#0077b5]",
      name: "LinkedIn",
      onClick: () => handleSocialClick('linkedin')
    },
    {
      icon: FiMail,
      href: "mailto:saranriderz22@gmail.com",
      color: "hover:text-[#ea4335]",
      name: "Email"
    }
  ];

  const handleDownload = () => {
    setIsDownloadModalOpen(true);
    setTimeout(() => {
      window.open('https://drive.google.com/file/d/1MkZaWMra837SvPlQpi1wp8--kGI5LuYs/view?usp=sharing', '_blank');
      setIsDownloadModalOpen(false);
    }, 1500);
  };

  const handleGetInTouch = () => {
    setIsContactModalOpen(true);
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      setIsContactModalOpen(false);
    }, 1200);
  };

  const handleSocialClick = (platform) => {
    if (platform === 'github') {
      setIsGithubLoading(true);
      setTimeout(() => {
        window.open('https://github.com/SARAN-S-S', '_blank');
        setIsGithubLoading(false);
      }, 2000);
    } else if (platform === 'linkedin') {
      setIsLinkedinLoading(true);
      setTimeout(() => {
        window.open('https://www.linkedin.com/in/saran-s-s-84a696245/', '_blank');
        setIsLinkedinLoading(false);
      }, 2000);
    }
  };

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center pt-20 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900"
      >
        <div className="max-w-6xl mx-auto w-full mt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
            
            {/* Profile Image - First on Mobile, Right on Desktop */}
            <motion.div 
              className="lg:w-2/5 flex justify-center order-1 lg:order-2 mb-6 lg:mb-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="relative">
                {/* Enhanced Circular Profile Image Container */}
                <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 relative">
                  {/* Outer Glow Ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 animate-spin-slow opacity-75 blur-md"></div>
                  
                  {/* Main Profile Circle */}
                  <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                    <img
                      src={profileImage}
                      alt="Saran S S"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Inner Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
                  </div>
                  
                  {/* Floating Animation Container */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Decorative Dots */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full blur-sm"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-400 rounded-full blur-sm"></div>
                    <div className="absolute top-1/2 -right-3 w-3 h-3 bg-emerald-400 rounded-full blur-sm"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Content - Second on Mobile, Left on Desktop */}
            <motion.div 
              className="lg:w-3/5 text-center lg:text-left order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Greeting and Name */}
              <motion.div 
                className="mb-4 lg:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                  Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">Saran S S</span>
                </h1>
              </motion.div>
              
              {/* Enhanced Typing Effect - RESPONSIVE FIX */}
              <motion.div 
                className="font-bold mb-6 lg:mb-8 text-gray-300 min-h-[60px] flex items-center justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className="text-xl sm:text-2xl lg:text-3xl inline-flex flex-wrap items-center justify-center lg:justify-start gap-1">
                  <span className="text-white whitespace-nowrap">I'm a</span>
                  <div className="inline-block min-w-[200px] sm:min-w-[250px] text-center lg:text-left">
                    <ReactTypingEffect
                      text={[
                        'Aspiring Software Developer',
                        'MERN Stack Developer',
                        'Problem Solver',
                        'Tech Enthusiast',
                      ]}
                      speed={80}
                      eraseSpeed={40}
                      typingDelay={800}
                      eraseDelay={2500}
                      cursorRenderer={(cursor) => (
                        <span className="text-cyan-400 ml-1 font-bold">{cursor}</span>
                      )}
                      displayTextRenderer={(text, i) => {
                        return (
                          <span className="text-cyan-400 font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                            {text}
                          </span>
                        );
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* About Text */}
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                Aspiring Software Developer currently learning and building projects with the MERN stack. 
                I enjoy exploring new technologies and improving my skills through hands-on development, driven 
                by a strong passion for programming and continuous growth.
              </motion.p>

              {/* Enhanced CTA Buttons with 3D effects */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 lg:gap-5 mb-7 lg:mb-9 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <motion.button
                  onClick={handleDownload}
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white py-3 lg:py-4 px-7 lg:px-9 rounded-xl font-bold text-base lg:text-lg transition-all duration-300 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiDownload className="text-lg lg:text-xl group-hover:animate-bounce" />
                  DOWNLOAD RESUME
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
                
                <motion.button
                  onClick={handleGetInTouch}
                  className="group relative inline-flex items-center justify-center border-2 border-cyan-400 text-cyan-400 py-3 lg:py-4 px-7 lg:px-9 rounded-xl font-bold text-base lg:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/30 backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  GET IN TOUCH
                  <div className="absolute inset-0 rounded-xl bg-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </motion.button>
              </motion.div>

              {/* Enhanced Social Links with 3D Effects */}
              <motion.div 
                className="flex justify-center lg:justify-start gap-4 lg:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    className="relative"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.1, duration: 0.4 }}
                  >
                    <motion.button
                      onClick={social.onClick || (() => window.open(social.href, '_blank'))}
                      whileHover={{ 
                        scale: 1.2,
                        y: -5,
                        rotateY: 10
                      }}
                      whileTap={{ 
                        scale: 0.9,
                        rotateY: 0
                      }}
                      className={`p-3 lg:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 ${social.color} group relative block`}
                      aria-label={social.name}
                      disabled={(social.name === 'GitHub' && isGithubLoading) || (social.name === 'LinkedIn' && isLinkedinLoading)}
                    >
                      <social.icon size={20} className="lg:size-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                      
                      {/* Enhanced Tooltip */}
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-gray-600/50 shadow-xl">
                        {social.name}
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900/90 rotate-45 border-l border-t border-gray-600/50"></div>
                      </div>

                      {/* Hover Pulse Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-transparent"
                        whileHover={{
                          borderColor: "rgba(255,255,255,0.2)",
                          boxShadow: "0 0 20px rgba(255,255,255,0.1)"
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Scroll Indicator - MOVED UP */}
          <motion.div 
            className="flex justify-center mt-8 lg:mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <motion.div
              className="flex flex-col items-center text-gray-400 cursor-pointer group"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ y: 2 }}
            >
              <motion.span 
                className="text-sm mb-2 group-hover:text-cyan-400 transition-colors duration-300"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Explore More
              </motion.span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center group-hover:border-cyan-400 transition-colors duration-300 relative"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-gray-400 rounded-full mt-2 group-hover:bg-cyan-400 transition-colors duration-300"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Download Confirmation Modal */}
        <AnimatePresence>
          {isDownloadModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 max-w-sm w-full border border-cyan-400/30 shadow-2xl"
              >
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <FiDownload className="text-white text-2xl" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">Downloading Resume</h3>
                  <p className="text-gray-300 mb-4">Your resume is being prepared...</p>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5 }}
                      className="bg-gradient-to-r from-cyan-500 to-emerald-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Get in Touch Confirmation Modal */}
        <AnimatePresence>
          {isContactModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -50, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 max-w-sm w-full border border-purple-400/30 shadow-2xl text-center relative overflow-hidden"
              >
                {/* Envelope Animation */}
                <motion.div
                  className="relative mx-auto mb-6 w-20 h-20"
                  initial={{ y: 0 }}
                  animate={{
                    y: [0, -15, 0, -25, -300],
                    opacity: [1, 1, 1, 1, 0],
                  }}
                  transition={{
                    duration: 2.8,
                    times: [0, 0.2, 0.4, 0.6, 1],
                    ease: "easeInOut",
                    repeat: 0,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-purple-500 rounded-lg flex items-center justify-center shadow-lg"
                    style={{ transformOrigin: "bottom center" }}
                    animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FiMail className="text-white text-3xl" />
                  </motion.div>
                </motion.div>

                {/* Text Content */}
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl font-bold text-white mb-2"
                >
                  Message on the Way ✉️
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-300"
                >
                  Redirecting to contact section...
                </motion.p>

                {/* Soft Glow Effect */}
                <div className="absolute -inset-10 bg-purple-500/10 blur-3xl rounded-full"></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* GitHub Matrix Code Rain Animation */}
        <AnimatePresence>
          {isGithubLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-[60] p-4"
            >
              <div className="absolute inset-0 overflow-hidden">
                {/* Matrix Code Rain Background */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-green-400 text-xs font-mono"
                    style={{
                      left: `${(i * 5)}%`,
                      top: '-20px',
                    }}
                    animate={{
                      top: '100%',
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  >
                    {Math.random().toString(36).substring(2, 15)}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl p-8 border border-green-500/30 backdrop-blur-xl"
              >
                {/* Binary Orb */}
                <motion.div
                  animate={{
                    rotateY: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                  className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 relative overflow-hidden"
                >
                  {/* Floating Code Snippets */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-green-400 text-xs font-mono"
                      style={{
                        left: `${Math.random() * 80}%`,
                        top: `${Math.random() * 80}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    >
                      {['<Code/>', '{}', '() =>', 'import', 'export'][i]}
                    </motion.div>
                  ))}
                </motion.div>

                <motion.h3
                  animate={{
                    color: ['#10b981', '#34d399', '#10b981'],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-2xl font-bold text-center mb-2 font-mono"
                >
                  DECODING SOURCE
                </motion.h3>
                <p className="text-green-300 text-center">Accessing GitHub repository...</p>
                
                {/* Progress Matrix */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2 }}
                  className="h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-4"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

       {/* LinkedIn Holographic Portal Animation */}
        <AnimatePresence>
          {isLinkedinLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-[60] p-4"
            >
              {/* Centered Container */}
              <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                  exit={{ scale: 0.5, opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="relative flex flex-col items-center justify-center"
                >
                  {/* Portal Ring with LinkedIn Blue */}
                  <motion.div
                    animate={{ 
                      rotateZ: 360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      rotateZ: { duration: 3, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                    className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border-4 border-blue-400/50 border-t-blue-300 border-b-blue-300 relative flex items-center justify-center"
                  >
                    {/* Portal Core */}
                    <motion.div
                      animate={{
                        rotateZ: -360,
                        scale: [0.8, 1, 0.8],
                      }}
                      transition={{
                        rotateZ: { duration: 3, repeat: Infinity, ease: "linear" },
                        scale: { duration: 1.5, repeat: Infinity }
                      }}
                      className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-400/20 to-sky-400/20 backdrop-blur-sm border border-blue-400/30"
                    />
                    
                    {/* Floating Particles */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400 rounded-full"
                        style={{
                          left: `${50 + 35 * Math.cos((i * 45 * Math.PI) / 180)}%`,
                          top: `${50 + 35 * Math.sin((i * 45 * Math.PI) / 180)}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}

                    {/* LinkedIn Icon in Center */}
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <FiLinkedin className="text-white text-3xl sm:text-4xl" />
                    </motion.div>
                  </motion.div>

                  {/* Connection Lines */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-12 bg-gradient-to-b from-blue-400 to-transparent"
                        style={{
                          transform: `rotate(${i * 60}deg)`,
                          transformOrigin: 'bottom center',
                        }}
                        animate={{
                          height: [0, 48, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Text Content - Centered below the animation */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center mt-6 sm:mt-8 w-full"
                >
                  <motion.h3
                    animate={{ 
                      textShadow: [
                        "0 0 10px rgba(59, 130, 246, 0.5)",
                        "0 0 20px rgba(59, 130, 246, 0.8)",
                        "0 0 10px rgba(59, 130, 246, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-xl sm:text-2xl font-bold text-blue-300 mb-2 sm:mb-3"
                  >
                    Establishing Connection
                  </motion.h3>
                  <p className="text-blue-100 text-sm sm:text-base mb-4">
                    Opening professional network portal...
                  </p>
                  
                  {/* Network Nodes */}
                  <div className="flex justify-center gap-3 sm:gap-4">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Add the CSS animation to your global CSS file instead */}
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Home;