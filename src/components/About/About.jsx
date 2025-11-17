import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import { FiCode, FiGlobe, FiServer, FiLayers } from 'react-icons/fi';

const About = () => {
  const codingProfiles = [
    {
      platform: "LeetCode",
      url: "https://leetcode.com/u/SARAN_s_S/",
      icon: SiLeetcode,
      color: "from-cyan-400 to-blue-500",
      description: "Enhancing problem-solving skills through DSA"
    },
    {
      platform: "CodeChef",
      url: "https://www.codechef.com/users/saran_2004",
      icon: SiCodechef,
      color: "from-purple-400 to-pink-500",
      description: "Competitive programming and coding challenges"
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Journey & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Journey Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/30 hover:border-cyan-400/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-emerald-400 rounded-full"></div>
                My Journey
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm an aspiring software developer passionate about creating innovative solutions 
                  and learning new technologies. My journey began with curiosity about how websites work, 
                  which evolved into a deep interest in full-stack development.
                </p>
                <p>
                  Currently focused on mastering the MERN stack and building projects that solve real-world 
                  problems. As a <span className="text-cyan-400 font-semibold">quick learner</span> and{' '}
                  <span className="text-purple-400 font-semibold">adaptable individual</span>, I thrive in 
                  dynamic environments and enjoy challenges that push my boundaries.
                </p>
                <p>
                  I believe in continuous learning and constantly challenging myself to grow as a developer, 
                  turning every obstacle into an opportunity for improvement.
                </p>
              </div>
            </motion.div>

            {/* Philosophy Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-emerald-500/10 p-8 rounded-2xl border border-cyan-400/20 backdrop-blur-sm"
            >
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-emerald-400 rounded-full"></div>
                My Philosophy
              </h4>
              <div className="space-y-4">
                <motion.div 
                  className="text-center mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <p className="text-2xl font-bold text-white">
                    <span className="text-cyan-400">Learn</span> • <span className="text-purple-400">Build</span> • <span className="text-emerald-400">Grow</span>
                  </p>
                </motion.div>
                <motion.p 
                  className="text-gray-300 text-center leading-relaxed text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  Growth stems from consistent curiosity and dedication. Every challenge is an 
                  opportunity to learn, and every project brings me closer to mastery. The journey 
                  of improvement is endless and endlessly exciting.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Coding Platforms & Service */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Service Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/30"
            >
              <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <motion.div
                  className="p-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FiLayers className="text-white text-lg" />
                </motion.div>
                My Services
              </h4>
              
              {/* Web Development Block */}
              <motion.div
                className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-400/20 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: "rgba(59, 130, 246, 0.4)"
                }}
              >
                <h5 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <motion.div
                    className="p-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg"
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FiServer className="text-white text-sm" />
                  </motion.div>
                  Web Development
                </h5>
                <p className="text-gray-300 leading-relaxed text-sm">
                  I build responsive and modern web applications using the MERN stack.
                  From elegant front-end design with React to efficient back-end development 
                  with Node.js and MongoDB, I create comprehensive, scalable, and user-friendly 
                  web solutions.
                </p>
              </motion.div>
            </motion.div>

            {/* Coding Profiles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/30"
            >
              <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <motion.div
                  className="p-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FiCode className="text-white text-lg" />
                </motion.div>
                Coding Platforms
              </h4>
              <div className="grid gap-6">
                {codingProfiles.map((profile, index) => (
                  <motion.a
                    key={profile.platform}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-br from-gray-800/40 to-gray-900/60 p-6 rounded-xl border border-gray-600/30 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-cyan-500/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -3,
                    }}
                  >
                    <div className="flex items-center gap-5">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${profile.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <profile.icon className="text-white text-2xl" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-white font-bold text-xl mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {profile.platform}
                        </h5>
                        <p className="text-gray-400 text-sm">
                          {profile.description}
                        </p>
                      </div>
                      <div className="text-gray-400 text-xl group-hover:text-cyan-400 transition-colors duration-300 transform group-hover:translate-x-2">
                        ↗
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;