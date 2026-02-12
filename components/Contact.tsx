import React, { useState } from 'react';
import { Theme } from '../types';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface ContactProps {
  theme: Theme;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

// Replace this with your deployed Google Apps Script web app URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxqhZ4zoxYC1RuGPnCs06vVn9ujp-1TsFEyPAsm-tKe-x4HVjupobyLp-ouah1mC3o95A/exec';

export const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          timestamp: new Date().toISOString(),
        }),
      });

      // With no-cors mode, we can't read the response, but if no error was thrown, assume success
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email directly.');
    }
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
                  disabled={status === 'loading'}
                  className={`w-full p-4 rounded-lg bg-transparent border-2 outline-none focus:ring-2 focus:ring-offset-2
                    ${theme.colors.border} ${theme.colors.text} focus:${theme.colors.border}
                    ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                  disabled={status === 'loading'}
                  className={`w-full p-4 rounded-lg bg-transparent border-2 outline-none focus:ring-2 focus:ring-offset-2
                    ${theme.colors.border} ${theme.colors.text} focus:${theme.colors.border}
                    ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                disabled={status === 'loading'}
                className={`w-full p-4 rounded-lg bg-transparent border-2 outline-none focus:ring-2 focus:ring-offset-2
                  ${theme.colors.border} ${theme.colors.text} focus:${theme.colors.border}
                  ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
                placeholder="Tell us about your project..."
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2
                ${theme.colors.primary} text-white shadow-lg
                ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.01] active:scale-[0.99]'}`}
            >
              {status === 'loading' ? (
                <>
                  Sending...
                  <Loader2 className="w-5 h-5 animate-spin" />
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Success Message */}
            {status === 'success' && (
              <div className={`flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/30 ${theme.colors.text}`}>
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <p className="font-bold">Message sent!</p>
                  <p className="text-sm opacity-70">Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className={`flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30 ${theme.colors.text}`}>
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <p className="font-bold">Something went wrong</p>
                  <p className="text-sm opacity-70">{errorMessage}</p>
                </div>
              </div>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};