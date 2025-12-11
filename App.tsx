import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Research from './components/Research';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased selection:bg-accent selection:text-white bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Research />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;