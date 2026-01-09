import React from 'react';
import { Theme } from '../types';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  theme: Theme;
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  // Select image based on theme ID
  const getHeroImage = () => {
    switch (theme.id) {
      case 'data-wave':
        return "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?auto=format&fit=crop&w=800&q=80";
      case 'analog-warmth':
        return "https://images.unsplash.com/photo-1605518216965-7a51e6e84460?auto=format&fit=crop&w=800&q=80";
      case 'brutalist-beat':
        return "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80";
      default:
        return "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80";
    }
  };

  return (
    <section id="hero" className={`min-h-[90vh] flex items-center relative overflow-hidden transition-colors duration-500 ${theme.colors.bg}`}>
      
      {/* Abstract Background Element */}
      <div className={`absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none transition-all duration-700
        ${theme.id === 'data-wave' ? 'bg-gradient-to-bl from-indigo-500 to-transparent skew-x-12' : ''}
        ${theme.id === 'analog-warmth' ? 'bg-orange-200 rounded-bl-[20rem]' : ''}
        ${theme.id === 'brutalist-beat' ? 'bg-black w-1/3' : ''}
      `} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="order-2 md:order-1 relative z-20">
            <div className={`inline-block px-3 py-1 mb-6 border rounded-full text-xs font-bold tracking-widest uppercase ${theme.colors.border} ${theme.colors.text}`}>
              Artist Management & Data Consultancy
            </div>
            
            {/* Adjusted font sizes to prevent overlap with image on medium screens */}
            <h1 className={`text-5xl md:text-6xl lg:text-7xl mb-6 break-words hyphens-auto ${theme.typography.heading} ${theme.colors.text}`}>
              Metronome <br/>
              <span className={`${theme.colors.accent}`}>Frameworks.</span>
            </h1>
            
            <p className={`text-lg md:text-xl mb-8 opacity-80 max-w-lg leading-relaxed ${theme.typography.body} ${theme.colors.text}`}>
              Helping artists and managers make sense of their data, navigate an increasingly complex landscape, and build sustainable careers on their terms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className={`px-8 py-4 rounded text-center font-bold transition-all hover:brightness-110 flex items-center justify-center gap-2 ${theme.colors.primary} text-white shadow-lg`}
              >
                Let's Talk
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end relative z-10">
             {/* Visual placeholder */}
             <div className={`relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl ${theme.colors.border} border-4`}>
                <img 
                    src={getHeroImage()}
                    alt="Studio Equipment or Venue"
                    className="object-cover w-full h-full mix-blend-overlay opacity-80 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Text/Data Points */}
                <div className="absolute bottom-6 left-6 right-6">
                    <div className={`p-4 backdrop-blur-md bg-white/10 rounded-lg border ${theme.colors.border}`}>
                        <div className="flex justify-between items-end">
                             <div>
                                <p className={`text-xs uppercase ${theme.colors.text}`}>Career Velocity</p>
                                <p className={`text-2xl font-bold ${theme.colors.text}`}>Sustainable</p>
                             </div>
                             <div className={`h-8 w-24 flex items-end gap-1`}>
                                <div className={`w-full ${theme.colors.secondary} h-[40%]`}></div>
                                <div className={`w-full ${theme.colors.secondary} h-[50%]`}></div>
                                <div className={`w-full ${theme.colors.secondary} h-[60%]`}></div>
                                <div className={`w-full ${theme.colors.secondary} h-[70%]`}></div>
                                <div className={`w-full ${theme.colors.secondary} h-[80%]`}></div>
                             </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};