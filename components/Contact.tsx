import React, { useState } from 'react';
import { Theme } from '../types';
import { Send } from 'lucide-react';

interface ContactProps {
  theme: Theme;
}

export const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("This is a demo form. In a real app, this would send to your backend.");
  };

  return (
    <section id="contact" className={`scroll-mt-32 py-24 px-6 transition-colors duration-500 ${theme.colors.bg} ${theme.colors.border} border-t`}>
      <div className="max-w-4xl mx-auto">
        <div className={`p-8 md:p-12 rounded-3xl ${theme.colors.panel} border ${theme.colors.border} shadow-2xl`}>
          
          <div className="text-center mb-10">
            <h2 className={`text-3xl md:text-5xl mb-4 ${theme.typography.heading} ${theme.colors.text}`}>
              Start the Conversation
            </h2>
            <p className={`opacity-70 ${theme.typography.body} ${theme.colors.text}`}>
              Whether you have raw data or raw talent, we want to hear about it.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={`text-sm font-bold uppercase tracking-wider ${theme.colors.text}`}>Name</label>
                <input 
                  type="text" 
                  className={`w-full p-4 rounded-lg bg-transparent border-2 outline-none focus:ring-2 focus:ring-offset-2 
                    ${theme.colors.border} ${theme.colors.text} focus:${theme.colors.border}`}
                  placeholder="Artist or Manager Name"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className={`text-sm font-bold uppercase tracking-wider ${theme.colors.text}`}>Email</label>
                <input 
                  type="email" 
                  className={`w-full p-4 rounded-lg bg-transparent border-2 outline-none focus:ring-2 focus:ring-offset-2 
                    ${theme.colors.border} ${theme.colors.text} focus:${theme.colors.border}`}
                  placeholder="you@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className={`text-sm font-bold uppercase tracking-wider ${theme.colors.text}`}>The Vision</label>
              <textarea 
                rows={4}
                className={`w-full p-4 rounded-lg bg-transparent border-2 outline-none focus:ring-2 focus:ring-offset-2 
                  ${theme.colors.border} ${theme.colors.text} focus:${theme.colors.border}`}
                placeholder="Tell us about your project..."
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                required
              />
            </div>

            <button 
              type="submit"
              className={`w-full py-4 rounded-lg font-bold text-lg transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2
                ${theme.colors.primary} text-white shadow-lg`}
            >
              Send Message
              <Send className="w-5 h-5" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};