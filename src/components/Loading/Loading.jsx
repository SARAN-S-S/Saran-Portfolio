import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiCoffee, FiZap } from 'react-icons/fi';

const Loading = () => {
  const quotes = [
    "Make it work, make it right, make it fast.","The best error message is the one that never shows up.",
    "Programming is the art of telling another human what one wants the computer to do.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Debugging is like being the detective in a crime movie where you are also the murderer.",
    "There are two ways to write error-free programs; only the third one works.",
    "Software is a great combination of artistry and engineering.",
    "The computer was born to solve problems that did not exist before.",
    "Quality is not an act, it is a habit.",
    "The only way to go fast is to go well.",
    "Code never lies, comments sometimes do.",
    "Programming is not about typing, it's about thinking.",
    "The most dangerous phrase in the language is, 'We've always done it this way.",
    "The best way to predict the future is to invent it.",
    "Technology is nothing. What's important is that you have faith in people.",
    "Innovation is the ability to see change as an opportunity, not a threat.",
    "The science of today is the technology of tomorrow.",
    "Any sufficiently advanced technology is indistinguishable from magic.",
    "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",
    "Great things are not done by impulse, but by a series of small things brought together.",
    "The people who are crazy enough to think they can change the world are the ones who do.",
    "Your time is limited, so don't waste it living someone else's life.",
    "The only way to do great work is to love what you do.",
    "Programming isn't about what you know; it's about what you can figure out."
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900 flex items-center justify-center z-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Tech Elements */}
        {[FiCode, FiCpu, FiCoffee, FiZap].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-white/5"
            style={{
              left: `${15 + index * 25}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              delay: index * 1,
            }}
          >
            <Icon size={50} />
          </motion.div>
        ))}

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main Loading Content */}
      <div className="text-center relative z-10 max-w-2xl mx-4">
        {/* Animated Name */}
        <motion.div
          initial={{ scale: 0, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100,
            damping: 15,
            duration: 1 
          }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-2">
            SARAN S S
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 text-lg"
          >
            Aspiring Software Developer
          </motion.p>
        </motion.div>

        {/* Central Loading Animation */}
        <div className="relative mb-8">
          {/* Outer Ring */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 3, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
            className="w-24 h-24 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full mx-auto mb-4"
          />

          {/* Inner Core */}
          <motion.div
            animate={{
              rotate: -360,
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1.5, repeat: Infinity }
            }}
            className="absolute inset-0 m-auto w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full border border-cyan-400/50"
          />

          {/* Center Dot */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="absolute inset-0 m-auto w-3 h-3 bg-cyan-400 rounded-full"
          />
        </div>

        {/* Motivational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-6"
        >
          <motion.p
            animate={{
              textShadow: [
                "0 0 10px rgba(34, 211, 238, 0.3)",
                "0 0 20px rgba(34, 211, 238, 0.5)",
                "0 0 10px rgba(34, 211, 238, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-cyan-200 text-lg italic max-w-md mx-auto leading-relaxed"
          >
            "{randomQuote}"
          </motion.p>
        </motion.div>

        {/* Loading Progress */}
        <div className="max-w-xs mx-auto">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mb-2"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-400 text-sm"
          >
            Preparing your digital experience...
          </motion.p>
        </div>

        {/* Tech Stack Preview */}
        {/* 
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center gap-3 mt-6 flex-wrap"
        >
          {["React", "Node.js", "MongoDB", "Tailwind", "JavaScript"].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                delay: 2 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              className="px-3 py-1 bg-white/10 rounded-full text-gray-300 text-xs border border-white/20 backdrop-blur-sm"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        */}
      </div>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-0 right-0 text-center"
      >
        <p className="text-gray-500 text-sm">
          Crafted with passion using modern technologies
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Loading;