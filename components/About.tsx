import React from 'react';
import { Theme } from '../types';
import { Linkedin, MapPin } from 'lucide-react';

interface AboutProps {
  theme: Theme;
}

export const About: React.FC<AboutProps> = ({ theme }) => {
  return (
    <section id="about" className={`scroll-mt-32 py-24 px-6 ${theme.colors.bg} transition-colors duration-500`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Side - Resized for mobile/tablet */}
          <div className="relative group order-first md:order-last w-full max-w-xs md:max-w-md mx-auto">
            <div className={`absolute inset-0 translate-x-4 translate-y-4 border-2 ${theme.colors.border} rounded-xl transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2`}></div>
            <div className={`relative rounded-xl overflow-hidden aspect-[4/5] ${theme.colors.panel} shadow-xl`}>
              {/* NOTE: Update this src with your actual LinkedIn profile picture URL */}
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" 
                alt="Michael Gelberg"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-last md:order-first">
            <div className={`inline-block px-3 py-1 mb-6 border rounded-full text-xs font-bold tracking-widest uppercase ${theme.colors.border} ${theme.colors.text}`}>
              Who We Are
            </div>
            
            <h2 className={`text-3xl md:text-5xl mb-8 ${theme.typography.heading} ${theme.colors.text}`}>
              Bridging the gap between <span className={theme.colors.accent}>raw data</span> and <span className={theme.colors.accent}>raw emotion</span>.
            </h2>
            
            <div className={`space-y-6 text-lg opacity-80 ${theme.typography.body} ${theme.colors.text}`}>
              <p>
                Metronome Frameworks was born from a desire to connect more directly with the people who make the music industry turn: the artists and their managers.
              </p>
              <p>
                With a background that straddles creative management and data analytics, I help artists navigate an increasingly complex landscape. We move beyond vanity metrics to build sustainable careers on your terms.
              </p>
              <p>
                We believe that while algorithms drive discovery, human connection drives longevity. My work is dedicated to ensuring you have the framework to thrive in both worlds.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-dashed opacity-100 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
               <a 
                 href="https://www.linkedin.com/in/michaelgelberg/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all hover:-translate-y-1 ${theme.colors.text} border-2 ${theme.colors.border} hover:${theme.colors.primary} hover:text-white hover:border-transparent`}
               >
                 <Linkedin className="w-5 h-5" />
                 Connect on LinkedIn
               </a>

               <div className={`flex items-center gap-2 font-mono text-sm opacity-60 ${theme.colors.text}`}>
                 <MapPin className="w-4 h-4" />
                 BASED IN LOS ANGELES, CA
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};