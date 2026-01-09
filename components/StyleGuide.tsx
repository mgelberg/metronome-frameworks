import React, { useState } from 'react';
import { Theme, BrandVoice } from '../types';
import { generateBrandVoice } from '../services/geminiService';
import { Sparkles, Loader2, type LucideIcon, Palette, Type as TypeIcon } from 'lucide-react';

interface StyleGuideProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  availableThemes: Theme[];
}

export const StyleGuide: React.FC<StyleGuideProps> = ({ theme, setTheme, availableThemes }) => {
  const [loading, setLoading] = useState(false);
  const [brandVoice, setBrandVoice] = useState<BrandVoice | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateVoice = async () => {
    setLoading(true);
    setError(null);
    try {
      const voice = await generateBrandVoice(theme);
      setBrandVoice(voice);
    } catch (err) {
      setError("Could not summon the creative muse. Check API key.");
    } finally {
      setLoading(false);
    }
  };

  // Re-generate voice when theme changes if voice was already present
  React.useEffect(() => {
    setBrandVoice(null);
  }, [theme]);

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

          {/* AI Brand Voice Generator */}
          <div className={`p-8 rounded-2xl border-2 border-dashed ${theme.colors.border} relative overflow-hidden flex flex-col`}>
             <div className="flex items-center gap-2 mb-6 z-10">
                <Sparkles className={`w-5 h-5 ${theme.colors.accent}`} />
                <h3 className={`text-xl font-bold ${theme.colors.text} ${theme.typography.heading}`}>AI Brand Voice</h3>
             </div>

             <div className="flex-grow z-10">
               {!brandVoice && !loading && (
                 <div className="h-full flex flex-col items-center justify-center text-center p-6 opacity-60">
                    <p className={`mb-6 ${theme.typography.body} ${theme.colors.text}`}>
                        See how this visual style translates into written copy. 
                        Generate a tagline and mission statement matching the "{theme.name}" vibe.
                    </p>
                    <button 
                      onClick={handleGenerateVoice}
                      className={`px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 ${theme.colors.primary} text-white`}
                    >
                        <Sparkles className="w-4 h-4" />
                        Generate Manifesto
                    </button>
                 </div>
               )}

               {loading && (
                 <div className="h-full flex flex-col items-center justify-center">
                    <Loader2 className={`w-8 h-8 animate-spin ${theme.colors.accent}`} />
                    <p className={`mt-4 ${theme.typography.body} ${theme.colors.text} animate-pulse`}>
                        Analyzing color psychology...
                    </p>
                 </div>
               )}

               {brandVoice && (
                 <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div>
                        <p className={`text-xs uppercase tracking-widest opacity-50 mb-1 ${theme.colors.text}`}>Tagline</p>
                        <p className={`text-2xl md:text-3xl ${theme.typography.heading} ${theme.colors.accent}`}>
                            "{brandVoice.tagline}"
                        </p>
                    </div>
                    <div>
                        <p className={`text-xs uppercase tracking-widest opacity-50 mb-1 ${theme.colors.text}`}>Mission</p>
                        <p className={`text-lg leading-relaxed ${theme.typography.body} ${theme.colors.text}`}>
                            {brandVoice.missionStatement}
                        </p>
                    </div>
                    <div>
                        <p className={`text-xs uppercase tracking-widest opacity-50 mb-2 ${theme.colors.text}`}>Keywords</p>
                        <div className="flex flex-wrap gap-2">
                            {brandVoice.keywords.map((k, i) => (
                                <span key={i} className={`px-3 py-1 rounded-full text-xs font-bold ${theme.colors.bg} ${theme.colors.text} border ${theme.colors.border}`}>
                                    #{k}
                                </span>
                            ))}
                        </div>
                    </div>
                    <button 
                      onClick={handleGenerateVoice}
                      className={`mt-4 text-sm underline opacity-50 hover:opacity-100 ${theme.colors.text}`}
                    >
                        Regenerate
                    </button>
                 </div>
               )}
               {error && (
                   <div className="text-red-500 text-sm text-center mt-4">{error}</div>
               )}
             </div>

             {/* Background decoration */}
             <div className={`absolute -bottom-10 -right-10 w-64 h-64 rounded-full opacity-5 ${theme.colors.secondary}`}></div>
          </div>

        </div>
      </div>
    </section>
  );
};
