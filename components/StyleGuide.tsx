import React from 'react';
import { Theme } from '../types';
import { Palette, Type as TypeIcon } from 'lucide-react';

interface StyleGuideProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  availableThemes: Theme[];
}

export const StyleGuide: React.FC<StyleGuideProps> = ({ theme, setTheme, availableThemes }) => {

  return (
    <section id="style-guide" className={`py-20 px-6 ${theme.colors.bg} ${theme.colors.border} border-t`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className={`text-3xl md:text-5xl mb-4 ${theme.typography.heading} ${theme.colors.text}`}>
            Sonic Identity System
          </h2>
          <p className={`text-lg opacity-70 max-w-2xl ${theme.typography.body} ${theme.colors.text}`}>
            A living design document. Switch the active theme below to verify how branding elements adapt across the consultancy's touchpoints.
          </p>
        </div>

        {/* Theme Switcher */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {availableThemes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t)}
              className={`p-6 text-left transition-all duration-300 border-2 rounded-xl group relative overflow-hidden
                ${theme.id === t.id ? `border-current ring-2 ring-offset-4 ring-offset-transparent ${theme.colors.text}` : 'border-transparent bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10'}
              `}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${t.colors.bg}`} />
              <h3 className={`text-xl font-bold mb-2 ${theme.colors.text}`}>{t.name}</h3>
              <p className={`text-sm opacity-60 ${theme.colors.text}`}>{t.description}</p>
              
              <div className="flex gap-2 mt-4">
                 <div className={`w-6 h-6 rounded-full ${t.colors.primary}`}></div>
                 <div className={`w-6 h-6 rounded-full ${t.colors.secondary}`}></div>
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Colors & Type */}
          <div className={`p-8 rounded-2xl ${theme.colors.panel} shadow-xl`}>
             <div className="flex items-center gap-2 mb-6">
                <Palette className={`w-5 h-5 ${theme.colors.accent}`} />
                <h3 className={`text-xl font-bold ${theme.colors.text} ${theme.typography.heading}`}>Color Palette</h3>
             </div>
             
             <div className="space-y-4">
                <div className="flex items-center justify-between group">
                    <span className={`${theme.colors.text} ${theme.typography.body}`}>Primary Action</span>
                    <div className="flex items-center gap-3">
                        <span className="text-xs opacity-50 font-mono">var(--primary)</span>
                        <div className={`w-16 h-10 rounded-md shadow-sm ${theme.colors.primary}`}></div>
                    </div>
                </div>
                <div className="flex items-center justify-between group">
                    <span className={`${theme.colors.text} ${theme.typography.body}`}>Secondary Highlight</span>
                    <div className="flex items-center gap-3">
                        <span className="text-xs opacity-50 font-mono">var(--secondary)</span>
                        <div className={`w-16 h-10 rounded-md shadow-sm ${theme.colors.secondary}`}></div>
                    </div>
                </div>
                <div className="flex items-center justify-between group">
                    <span className={`${theme.colors.text} ${theme.typography.body}`}>Surface Panel</span>
                    <div className="flex items-center gap-3">
                        <span className="text-xs opacity-50 font-mono">var(--surface)</span>
                        <div className={`w-16 h-10 rounded-md shadow-sm ${theme.colors.panel} border ${theme.colors.border}`}></div>
                    </div>
                </div>
             </div>

             <div className="mt-10 mb-6 flex items-center gap-2">
                <TypeIcon className={`w-5 h-5 ${theme.colors.accent}`} />
                <h3 className={`text-xl font-bold ${theme.colors.text} ${theme.typography.heading}`}>Typography</h3>
             </div>
             
             <div className="space-y-6">
                <div>
                   <p className={`text-4xl ${theme.typography.heading} ${theme.colors.text}`}>Aa Bb Cc</p>
                   <p className={`text-xs mt-2 opacity-50 ${theme.colors.text} font-mono`}>Heading Family</p>
                </div>
                <div>
                   <p className={`text-lg ${theme.typography.body} ${theme.colors.text}`}>The quick brown fox jumps over the lazy dog.</p>
                   <p className={`text-xs mt-2 opacity-50 ${theme.colors.text} font-mono`}>Body Family</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
