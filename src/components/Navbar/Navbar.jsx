import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Enhanced scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced smooth scroll with better offset calculation
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = 90;
        const sectionTop = section.offsetTop - offset;
        
        window.scrollTo({
          top: sectionTop,
          behavior: "smooth"
        });
      }
    }, 150);
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.25,
        ease: "easeOut"
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: { 
      opacity: 0, 
      x: -15,
      transition: {
        duration: 0.2
      }
    },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Enhanced hamburger icon with better sizing and visibility
  const MenuIcon = ({ isOpen }) => (
    <motion.div
      className="relative w-6 h-6 flex flex-col justify-between cursor-pointer group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        animate={isOpen ? { rotate: 45, y: 8, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
        className="h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full origin-center transition-all duration-300 group-hover:from-purple-200 group-hover:to-pink-200"
      />
      <motion.span
        animate={isOpen ? { opacity: 0, width: "0%" } : { opacity: 1, width: "70%" }}
        className="h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full transition-all duration-300 group-hover:from-purple-200 group-hover:to-pink-200 ml-auto"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -8, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
        className="h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full origin-center transition-all duration-300 group-hover:from-purple-200 group-hover:to-pink-200"
      />
      
      {/* Subtle glow effect */}
      <motion.div
        animate={isOpen ? { scale: 1.5, opacity: 0 } : { scale: 1, opacity: 0.15 }}
        className="absolute inset-0 rounded-full bg-purple-300 blur-sm -z-10 transition-all duration-300"
      />
    </motion.div>
  );

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-gradient-to-br from-slate-900/98 via-purple-900/40 to-blue-900/60 backdrop-blur-2xl shadow-2xl shadow-purple-500/10 border-b border-purple-500/20" 
          : "bg-gradient-to-br from-slate-900/80 via-purple-900/20 to-blue-900/40 backdrop-blur-xl"
      }`}
    >
      {/* CHANGED: max-w-7xl to max-w-6xl to match About page */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Enhanced Logo with creative design */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer group relative"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={() => handleMenuItemClick("home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated logo icon */}
            <motion.div
              animate={{
                rotate: isHovered ? 360 : 0,
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25"
            >
              <motion.span
                animate={{ 
                  scale: isHovered ? 0.8 : 1,
                  rotate: isHovered ? -10 : 0
                }}
                className="text-white font-bold text-lg"
              >
                S
              </motion.span>
              
              {/* Pulsing effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl blur-sm"
              />
            </motion.div>

            {/* Text with enhanced styling */}
            <div className="flex flex-col">
              <motion.span
                animate={{ color: isHovered ? "#ffffff" : "#f8fafc" }}
                className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent transition-all duration-500 leading-6"
              >
                Saran
              </motion.span>
              <motion.span
                animate={{ opacity: isHovered ? 1 : 0.7 }}
                className="text-xs text-gray-400 font-medium transition-opacity duration-300"
              >
                Developer
              </motion.span>
            </div>

            {/* Enhanced underline animation */}
            <motion.div
              animate={{ 
                width: isHovered ? "100%" : "0%",
                opacity: isHovered ? 1 : 0.7
              }}
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-[1px]"
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </motion.div>

          {/* Enhanced Desktop Menu - Decreased length */}
          <div className="hidden lg:flex items-center space-x-1">
            <div className="flex space-x-1 bg-black/20 backdrop-blur-lg rounded-2xl p-1 border border-white/10 shadow-2xl">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1 + 0.4, 
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  className="relative"
                  whileHover={{ y: -1 }}
                >
                  <button
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`relative px-4 py-2 text-sm font-semibold transition-all duration-400 group rounded-lg mx-0.5 overflow-hidden ${
                      activeSection === item.id
                        ? "text-white bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-400/40 shadow-xl shadow-purple-500/30"
                        : "text-gray-200 hover:text-white hover:bg-white/10 border border-transparent"
                    }`}
                  >
                    <span className="relative z-10">
                      {item.label}
                    </span>
                    
                    {/* Active indicator with enhanced glow */}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-cyan-400/30 shadow-lg shadow-cyan-500/20"
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 35 
                        }}
                      />
                    )}
                    
                    {/* Enhanced hover effect */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/5"
                      transition={{ duration: 0.3 }}
                    />

                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Mobile Menu Button - Smaller and better visibility */}
          <motion.div
            className="lg:hidden flex items-center justify-center p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-purple-400/30 hover:border-purple-300/50 transition-all duration-300 group"
            whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.15)" }}
            whileTap={{ scale: 0.95 }}
          >
            <div 
              onClick={() => setIsOpen(!isOpen)}
              className="relative"
            >
              <MenuIcon isOpen={isOpen} />
            </div>
          </motion.div>
        </div>

        {/* Enhanced Mobile Menu - Decreased width and moved to right side */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Enhanced Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-lg lg:hidden z-40"
                onClick={() => setIsOpen(false)}
                style={{ top: '64px' }}
              />
              
              {/* Enhanced Mobile Menu Container - Decreased width and right aligned */}
              <motion.div
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed top-16 right-4 bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-blue-900/95 backdrop-blur-2xl border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/20 lg:hidden overflow-hidden z-50"
                style={{ 
                  width: '280px', // Decreased width
                  maxWidth: 'calc(100vw - 3rem)' // Adjusted max width
                }}
              >
                <div className="p-4 border-b border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                  <h3 className="text-lg font-bold text-white text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Menu
                  </h3>
                </div>
                
                {/* Menu items with perfect arrow styling - points removed */}
                <div className="flex flex-col p-3 space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      variants={menuItemVariants}
                      transition={{ delay: index * 0.08 }}
                      whileHover={{ x: 5 }}
                    >
                      <button
                        onClick={() => handleMenuItemClick(item.id)}
                        className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-400 font-semibold group flex items-center justify-between relative overflow-hidden ${
                          activeSection === item.id
                            ? "bg-gradient-to-r from-purple-600/30 to-cyan-600/30 text-white border border-cyan-400/40 shadow-lg shadow-cyan-500/20"
                            : "text-gray-200 hover:text-white hover:bg-white/10 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-base font-semibold relative z-10">
                            {item.label}
                          </span>
                        </div>
                        
                        {/* Enhanced arrow with animation */}
                        <motion.span
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.08 + 0.2 }}
                          className="text-cyan-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300 text-lg font-black relative z-10"
                        >
                          →
                        </motion.span>

                        {/* Enhanced background effects */}
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-2xl"
                          transition={{ duration: 0.3 }}
                        />

                        {/* Shine effect */}
                        <motion.div
                          animate={{
                            x: ['-100%', '200%', '-100%'],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.2
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                        />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;