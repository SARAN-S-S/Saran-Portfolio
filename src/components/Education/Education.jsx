import React from "react";
import { motion } from "framer-motion";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute top-10 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-pink-500/10 rounded-full blur-lg"></div>

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Education{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Journey
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-3 sm:mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-gray-300 mt-3 sm:mt-4 lg:mt-6 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto px-2 leading-relaxed"
          >
            My academic path that shaped my technical foundation and problem-solving abilities
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line - Closer to cards */}
          <div className="absolute left-4 sm:left-5 md:left-6 top-6 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/40 via-pink-500/40 to-blue-500/40"></div>
          
          {/* Education Items */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-10 sm:pl-12 md:pl-14"
              >
                {/* Timeline Dot - Closer to content */}
                <div className="absolute left-2 sm:left-3 md:left-4 top-5 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-3 border-slate-900 z-10 shadow-lg shadow-purple-500/30"></div>

                {/* Compact Content Card */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative bg-white/5 backdrop-blur-lg p-4 sm:p-5 rounded-xl border border-gray-700/30 hover:border-purple-400/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 overflow-hidden max-w-2xl"
                >
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Compact Header */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 relative z-10">
                    {/* Logo Container */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.15,
                        transition: { duration: 0.2 }
                      }}
                      className="flex-shrink-0 relative"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 p-1 group-hover:border-purple-400/60 transition-all duration-300 shadow group-hover:shadow-purple-500/20">
                        <img
                          src={edu.img}
                          alt={edu.school}
                          className="w-full h-full object-cover rounded-md filter group-hover:brightness-110 transition-all duration-200"
                        />
                      </div>
                    </motion.div>
                    
                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                        {edu.degree}
                      </h3>
                      <p className="text-purple-300 font-semibold text-sm sm:text-base lg:text-lg mb-1 group-hover:text-purple-200 transition-colors duration-300 truncate">
                        {edu.school}
                      </p>
                      <div className="flex items-center gap-1.5 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs sm:text-sm truncate">{edu.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Grade and Description */}
                  <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-gray-700/30 group-hover:border-purple-400/30 transition-colors duration-300 relative z-10">
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 group-hover:border-purple-400/50 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300 shadow group-hover:shadow-purple-500/20 w-fit">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-white font-medium text-xs sm:text-sm truncate">
                        {edu.grade}
                      </span>
                    </div>
                    
                    {/* Description */}
                    {edu.description && (
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {edu.description}
                      </p>
                    )}
                  </div>

                  {/* Hover Border Animation */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final Achievement Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-8 sm:mt-10 lg:mt-12"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 backdrop-blur-sm">
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
            <span className="text-white font-semibold text-xs sm:text-sm lg:text-base">
              Continuous Learner & Tech Enthusiast
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;