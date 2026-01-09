import React, { useState, useEffect } from 'react';
import { Theme } from '../types';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Activity } from 'lucide-react';

interface HeaderProps {
  theme: Theme;
}

export const Header: React.FC<HeaderProps> = ({ theme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled ? `${theme.colors.bg}/90 backdrop-blur-md border-b ${theme.colors.border}` : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Area */}
        <div className={`flex items-center gap-2 text-2xl font-bold tracking-tighter ${theme.typography.heading} ${theme.colors.text}`}>
          <Activity className={`w-6 h-6 ${theme.colors.accent}`} />
          <span>
            Metronome<span className={`opacity-70 font-normal ml-1 ${theme.typography.body}`}>Frameworks</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className={`text-sm font-medium hover:opacity-100 transition-opacity ${theme.colors.text} opacity-70 uppercase tracking-widest`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={`w-6 h-6 ${theme.colors.text}`} />
          ) : (
            <Menu className={`w-6 h-6 ${theme.colors.text}`} />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className={`absolute top-20 left-0 right-0 h-screen ${theme.colors.bg} p-6 border-t ${theme.colors.border} md:hidden`}>
            <nav className="flex flex-col gap-6 text-center mt-10">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-bold ${theme.colors.text} ${theme.typography.heading}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}

      </div>
    </header>
  );
};