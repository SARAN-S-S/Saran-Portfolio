import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const dropdownRef = useRef();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", countryCode: "+91", subject: "", message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  const countryCodes = [
    { code: "+91", name: "India", flag: "🇮🇳" },
    { code: "+1", name: "United States", flag: "🇺🇸" },
    { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
    { code: "+61", name: "Australia", flag: "🇦🇺" },
    { code: "+65", name: "Singapore", flag: "🇸🇬" },
    { code: "+60", name: "Malaysia", flag: "🇲🇾" },
    { code: "+971", name: "UAE", flag: "🇦🇪" },
    { code: "+966", name: "Saudi Arabia", flag: "🇸🇦" },
    { code: "+49", name: "Germany", flag: "🇩🇪" },
    { code: "+33", name: "France", flag: "🇫🇷" },
    { code: "+39", name: "Italy", flag: "🇮🇹" },
    { code: "+34", name: "Spain", flag: "🇪🇸" },
    { code: "+81", name: "Japan", flag: "🇯🇵" },
    { code: "+82", name: "South Korea", flag: "🇰🇷" },
    { code: "+86", name: "China", flag: "🇨🇳" },
    { code: "+55", name: "Brazil", flag: "🇧🇷" },
    { code: "+52", name: "Mexico", flag: "🇲🇽" },
    { code: "+27", name: "South Africa", flag: "🇿🇦" },
    { code: "+31", name: "Netherlands", flag: "🇳🇱" },
    { code: "+41", name: "Switzerland", flag: "🇨🇭" },
    { code: "+46", name: "Sweden", flag: "🇸🇪" },
    { code: "+47", name: "Norway", flag: "🇳🇴" },
    { code: "+45", name: "Denmark", flag: "🇩🇰" },
    { code: "+358", name: "Finland", flag: "🇫🇮" },
    { code: "+32", name: "Belgium", flag: "🇧🇪" }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountrySelect = (country) => {
    setFormData({ ...formData, countryCode: country.code });
    setIsCountryDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Get current date and time information
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });

    // Format phone number with country code
    const formattedPhone = formData.phone ? `${formData.countryCode} ${formData.phone}` : "Not provided";

    try {
      const result = await emailjs.send(
        "service_erm4u44",
        'template_ufg5h1p',
        {
          subject: formData.subject,
          name: formData.name,
          email: formData.email,
          phone: formattedPhone,
          message: formData.message,
          time: time,
          date: date,
          day: day
        },
        'EijES09_dByS2B_9I'
      );

      console.log("Email sent successfully:", result);
      setIsSent(true);
      setFormData({ name: "", email: "", phone: "", countryCode: "+91", subject: "", message: "" });
      setTimeout(() => setIsSent(false), 5000);
    } catch (error) {
      console.error("Full error details:", error);
      console.error("Error text:", error.text);
      alert(`Failed to send message: ${error.text || "Please check console for details"}`);
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const selectedCountry = countryCodes.find(country => country.code === formData.countryCode);

  return (
    <section id="contact" className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Contact{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me!
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-3"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-gray-300 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light"
          >
            Let's bring your ideas to life! Reach out and let's create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a friendly chat about technology and innovation.
              </p>
            </motion.div>

            {/* Contact Details */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.a
                href="mailto:saranriderz22@gmail.com"
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-base">Email</h4>
                  <p className="text-gray-300 text-sm">saranriderz22@gmail.com</p>
                </div>
                <div className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</div>
              </motion.a>

              <motion.a
                href="tel:+916369623214"
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-base">Phone</h4>
                  <p className="text-gray-300 text-sm">+91 6369623214</p>
                </div>
                <div className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</div>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-base">Location</h4>
                  <p className="text-gray-300 text-sm">Erode, Tamilnadu</p>
                </div>
                <div className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</div>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants} 
              className="space-y-3 pt-2"
            >
              <motion.h4 
                className="text-white font-semibold text-base text-center lg:text-left"
              >
                Let's Connect
              </motion.h4>
              <motion.div 
                className="flex justify-center lg:justify-start gap-3"
              >
                <motion.a
                  href="https://github.com/SARAN-S-S"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-purple-400/50 transition-all duration-300 text-gray-400 hover:text-white"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/saran-s-s-84a696245/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-purple-400/50 transition-all duration-300 text-gray-400 hover:text-white"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/saran_riderz?utm_source=qr&igsh=MTJvYXJvaHF2a3dtcw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-purple-400/50 transition-all duration-300 text-gray-400 hover:text-white"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form with Country Code Selector */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              
              <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 lg:p-8">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-white font-medium text-sm">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 transition-all duration-300 text-sm"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-white font-medium text-sm">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 transition-all duration-300 text-sm"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  {/* Phone Number Section - Full Width on Mobile */}
                  <div className="space-y-2">
                    <label className="text-white font-medium text-sm">Phone Number (Optional)</label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      {/* Country Code Dropdown */}
                      <div className="relative flex-shrink-0" ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                          className="flex items-center justify-between w-full sm:w-32 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:border-purple-400/50 transition-all duration-300 text-sm cursor-pointer"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{selectedCountry?.flag}</span>
                            <span className="text-sm">{selectedCountry?.code}</span>
                          </div>
                          <svg 
                            className={`w-3 h-3 transition-transform duration-300 ${isCountryDropdownOpen ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {isCountryDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            className="absolute z-50 mt-1 w-full sm:w-64 max-h-60 overflow-y-auto bg-slate-800/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl"
                          >
                            <div className="py-2">
                              {countryCodes.map((country) => (
                                <button
                                  key={country.code}
                                  type="button"
                                  onClick={() => handleCountrySelect(country)}
                                  className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-left hover:bg-white/10 transition-all duration-200 cursor-pointer ${
                                    formData.countryCode === country.code 
                                      ? 'bg-purple-500/20 text-purple-300 border-r-2 border-purple-400' 
                                      : 'text-gray-300'
                                  }`}
                                >
                                  <span className="text-base flex-shrink-0">{country.flag}</span>
                                  <span className="flex-1 text-left">{country.name}</span>
                                  <span className="text-gray-400 text-xs font-mono">{country.code}</span>
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {/* Phone Number Input - Takes remaining space */}
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 transition-all duration-300 text-sm"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  {/* Subject Field - Full Width */}
                  <div className="space-y-2">
                    <label className="text-white font-medium text-sm">Email Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 transition-all duration-300 text-sm"
                      placeholder="Enter email subject"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white font-medium text-sm">Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 transition-all duration-300 resize-none text-sm"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  {/* Send Message Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ 
                      scale: isLoading ? 1 : 1.02,
                      y: isLoading ? 0 : -2
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    <span className={`relative z-10 font-semibold text-sm tracking-wide ${isLoading ? 'text-white' : ''}`}>
                      {isLoading ? "Sending... ✈️" : isSent ? "Message Sent! ✓" : "Send Message"}
                    </span>
                    
                    {!isLoading && !isSent && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <div className="absolute inset-0 rounded-lg shadow-lg shadow-purple-500/0 group-hover:shadow-purple-500/40 group-hover:shadow-xl transition-all duration-500"></div>
                      </>
                    )}
                    
                    {isLoading && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}
                  </motion.button>

                  {isSent && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center p-3 bg-green-500/20 border border-green-400/30 rounded-lg text-green-300 text-sm"
                    >
                      <p className="font-semibold">✓ Message sent successfully! I'll get back to you soon.</p>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes tilt {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(0.5deg) scale(1.01); }
          50% { transform: rotate(0deg) scale(1.02); }
          75% { transform: rotate(-0.5deg) scale(1.01); }
        }
        .animate-tilt {
          animation: tilt 8s infinite linear;
        }

        /* Custom scrollbar for dropdown */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(192, 132, 252, 0.5);
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(192, 132, 252, 0.7);
        }
      `}</style>
    </section>
  );
};

export default Contact;