import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="min-h-screen bg-gradient-animated bg-[length:400%_400%] animate-gradient-bg text-white">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Achievements />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
