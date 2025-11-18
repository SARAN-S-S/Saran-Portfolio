import React from "react";
import { motion } from "framer-motion";

// Corrected icon imports
import { 
  SiC, 
  SiCplusplus, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman
} from "react-icons/si";
import { 
  VscCode,
  VscSymbolRuler,
  VscGlobe,
  VscServer,
  VscDatabase,
  VscTools 
} from "react-icons/vsc";

const Skills = () => {
  // Skills data organized by categories
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <VscCode className="text-xl" />,
      skills: [
        { name: "C", icon: <SiC />, level: 85 },
        { name: "C++", icon: <SiCplusplus />, level: 90 },
      ]
    },
    {
      title: "Core Concepts",
      icon: <VscSymbolRuler className="text-xl" />,
      skills: [
        { name: "OOPS", icon: <VscCode />, level: 90 },
        { name: "DSA", icon: <VscCode />, level: 72 },
      ]
    },
    {
      title: "Frontend Technologies",
      icon: <VscGlobe className="text-xl" />,
      skills: [
        { name: "HTML5", icon: <SiHtml5 />, level: 82 },
        { name: "CSS3", icon: <SiCss3 />, level: 80 },
        { name: "JavaScript", icon: <SiJavascript />, level: 55 },
        { name: "React.js", icon: <SiReact />, level: 50 },
      ]
    },
    {
      title: "Backend Technologies",
      icon: <VscServer className="text-xl" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, level: 50 },
        { name: "Express.js", icon: <SiExpress />, level: 58 },
      ]
    },
    {
      title: "Database",
      icon: <VscDatabase className="text-xl" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 50 },
        { name: "SQL", icon: <SiMysql />, level: 80 },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <VscTools className="text-xl" />,
      skills: [
        { name: "Git", icon: <SiGit />, level: 55 },
        { name: "GitHub", icon: <SiGithub />, level: 75 },
        { name: "Figma", icon: <SiFigma />, level: 72 },
        { name: "Postman", icon: <SiPostman />, level: 60 },
      ]
    }
  ];

  // Color scheme for categories
  const categoryColors = [
    { 
      bg: "from-blue-500/10 to-cyan-500/10", 
      border: "border-blue-400/40", 
      accent: "text-cyan-300",
      level: "from-cyan-400 to-blue-500",
      progressBg: "bg-gray-700/60",
      progressBorder: "border-white/30",
      glow: "hover:shadow-blue-500/20",
      hover: "hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/20",
      skillHover: "hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/5",
      skillBg: "from-cyan-500/5 to-blue-500/5"
    },
    { 
      bg: "from-purple-500/10 to-pink-500/10", 
      border: "border-purple-400/40", 
      accent: "text-pink-300",
      level: "from-purple-400 to-pink-500",
      progressBg: "bg-gray-700/60",
      progressBorder: "border-white/30",
      glow: "hover:shadow-purple-500/20",
      hover: "hover:border-pink-500/30 hover:shadow-xl hover:shadow-pink-500/20",
      skillHover: "hover:border-pink-400/40 hover:shadow-lg hover:shadow-pink-500/5",
      skillBg: "from-purple-500/5 to-pink-500/5"
    },
    { 
      bg: "from-green-500/10 to-emerald-500/10", 
      border: "border-green-400/40", 
      accent: "text-emerald-300",
      level: "from-green-400 to-emerald-500",
      progressBg: "bg-gray-700/60",
      progressBorder: "border-white/30",
      glow: "hover:shadow-green-500/20",
      hover: "hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/20",
      skillHover: "hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-500/5",
      skillBg: "from-green-500/5 to-emerald-500/5"
    },
    { 
      bg: "from-orange-500/10 to-red-500/10", 
      border: "border-orange-400/40", 
      accent: "text-red-300",
      level: "from-orange-400 to-red-500",
      progressBg: "bg-gray-700/60",
      progressBorder: "border-white/30",
      glow: "hover:shadow-orange-500/20",
      hover: "hover:border-red-500/30 hover:shadow-xl hover:shadow-red-500/20",
      skillHover: "hover:border-red-400/40 hover:shadow-lg hover:shadow-red-500/5",
      skillBg: "from-orange-500/5 to-red-500/5"
    },
    { 
      bg: "from-indigo-500/10 to-purple-500/10", 
      border: "border-indigo-400/40", 
      accent: "text-purple-300",
      level: "from-indigo-400 to-purple-500",
      progressBg: "bg-gray-700/60",
      progressBorder: "border-white/30",
      glow: "hover:shadow-indigo-500/20",
      hover: "hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/20",
      skillHover: "hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/5",
      skillBg: "from-indigo-500/5 to-purple-500/5"
    },
    { 
      bg: "from-teal-500/10 to-blue-500/10", 
      border: "border-teal-400/40", 
      accent: "text-blue-300",
      level: "from-teal-400 to-blue-500",
      progressBg: "bg-gray-700/60",
      progressBorder: "border-white/30",
      glow: "hover:shadow-teal-500/20",
      hover: "hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/20",
      skillHover: "hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/5",
      skillBg: "from-teal-500/5 to-blue-500/5"
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Crafting digital experiences with modern technologies and best practices
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => {
            const colors = categoryColors[index % categoryColors.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                className={`relative bg-gradient-to-br ${colors.bg} backdrop-blur-xl rounded-2xl border ${colors.border} p-6 overflow-hidden group cursor-pointer transition-all duration-500 ${colors.hover}`}
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Category Header with Rotating Icon */}
                  <div className="flex items-center justify-center gap-4 mb-8 group/header">
                    <motion.div 
                      className={`p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 ${colors.accent} shadow-lg transition-all duration-300 group-hover/header:bg-white/20`}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1
                      }}
                      transition={{ 
                        rotate: { duration: 0.6, ease: "easeInOut" },
                        scale: { type: "spring", stiffness: 400 }
                      }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className={`text-xl font-bold ${colors.accent} text-center transition-colors duration-300 group-hover/header:text-white`}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4 flex-1">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: (index * 0.1) + (skillIndex * 0.05) + 0.3,
                          ease: "easeOut"
                        }}
                        whileHover={{
                          scale: 1.03,
                          x: 4,
                          transition: { 
                            type: "spring",
                            stiffness: 400,
                            damping: 25
                          }
                        }}
                        className={`relative flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-gradient-to-r ${colors.skillBg} backdrop-blur-sm border-2 border-white/10 group/skill overflow-hidden transition-all duration-300 ${colors.skillHover}`}
                      >
                        {/* Subtle Background Gradient on Hover */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${colors.level} opacity-0 group-hover/skill:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
                        
                        {/* Subtle Glow Effect */}
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover/skill:opacity-50 transition-opacity duration-300">
                          <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colors.level} blur-sm opacity-20 group-hover/skill:opacity-30`}></div>
                        </div>

                        {/* Skill Content */}
                        <div className="flex items-center gap-4 relative z-10 flex-1 min-w-0">
                          <motion.div 
                            className={`text-2xl p-2 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 ${colors.accent} transition-all duration-300 group-hover/skill:bg-white/10 group-hover/skill:border-white/30 group-hover/skill:scale-110 group-hover/skill:shadow-md`}
                            whileHover={{ rotate: 10 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {skill.icon}
                          </motion.div>
                          <span className="text-white font-medium text-sm flex-1 min-w-0 transition-all duration-300 group-hover/skill:font-semibold group-hover/skill:tracking-wide truncate">
                            {skill.name}
                          </span>
                        </div>
                        
                        {/* Enhanced Skill Level Indicator */}
                        <div className="flex items-center gap-3 relative z-10 mt-3 sm:mt-0 w-full sm:w-auto">
                          <div className="flex-1 sm:flex-none sm:w-32">
                            <div className={`w-full h-3 ${colors.progressBg} rounded-full overflow-hidden backdrop-blur-sm border-2 ${colors.progressBorder} shadow-inner group-hover/skill:border-white/30 transition-all duration-300`}>
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ 
                                  delay: (index * 0.1) + (skillIndex * 0.05) + 0.5,
                                  duration: 1.2,
                                  ease: "easeOut"
                                }}
                                className={`h-full bg-gradient-to-r ${colors.level} rounded-full shadow-lg transition-all duration-300 group-hover/skill:shadow-md group-hover/skill:brightness-105`}
                              />
                            </div>
                          </div>
                          {/* Hidden Percentage - removed badge but kept for accessibility */}
                          <span className="sr-only">{skill.level}%</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Info */}
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
            className="inline-flex flex-wrap justify-center gap-6 px-8 py-6 rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            whileHover={{ 
              scale: 1.02,
              y: -2,
              transition: { duration: 0.2 }
            }}
          >
            {[
              { text: "Continuous Learner", color: "bg-purple-400", delay: 0 },
              { text: "Innovative Thinker", color: "bg-pink-400", delay: 0.1 },
              { text: "Quality Focused", color: "bg-blue-400", delay: 0.2 },
              { text: "Fast Adaptability", color: "bg-cyan-400", delay: 0.3 }
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
                <span className="text-sm font-medium group-hover:text-purple-200 transition-colors duration-200">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;