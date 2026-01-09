import React, { useState } from 'react';
import { THEMES } from './constants';
import { Theme } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
// import { StyleGuide } from './components/StyleGuide'; // Kept in codebase for backend use
import { Contact } from './components/Contact';

const App: React.FC = () => {
  // Default to the "Brutalist Beat" theme (index 2)
  const [currentTheme, setCurrentTheme] = useState<Theme>(THEMES[2]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${currentTheme.colors.bg}`}>
      <Header theme={currentTheme} />
      
      <main>
        <Hero theme={currentTheme} />
        <About theme={currentTheme} />
        <Services theme={currentTheme} />
        {/* StyleGuide hidden from main landing page view
        <StyleGuide 
            theme={currentTheme} 
            setTheme={setCurrentTheme} 
            availableThemes={THEMES} 
        /> 
        */}
        <Contact theme={currentTheme} />
      </main>

      <footer className={`py-8 text-center border-t ${currentTheme.colors.border} ${currentTheme.colors.bg}`}>
        <p className={`opacity-50 text-sm ${currentTheme.colors.text} ${currentTheme.typography.body}`}>
          © {new Date().getFullYear()} Metronome Frameworks. Built with React & Tailwind.
        </p>
      </footer>
    </div>
  );
};

export default App;