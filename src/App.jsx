import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Enable smooth scrolling for the whole app
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 3.5 seconds for better animation experience

    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050414] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading key="loading" />
        ) : (
          <div key="content" className="w-full">
            {/* Main Content */}
            <div className="w-full">
              <Navbar />
              <main className="w-full">
                <Home />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Contact />
              </main>
              <Footer />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;