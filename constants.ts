import { Theme, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Who We Are', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const THEMES: Theme[] = [
  {
    id: 'data-wave',
    name: 'Data Wave',
    description: 'Precision meets electronic pulse. Dark, sleek, and analytical.',
    colors: {
      bg: 'bg-slate-950',
      text: 'text-slate-200',
      primary: 'bg-indigo-500', // Buttons, Highlights
      secondary: 'bg-cyan-500', // Accents
      accent: 'text-cyan-400',
      panel: 'bg-slate-900',
      border: 'border-slate-800',
    },
    typography: {
      heading: 'font-mono tracking-tighter',
      body: 'font-sans',
    },
    vibe: 'Cyberpunk, analytical, high-frequency trading meets synthesizer waves.',
  },
  {
    id: 'analog-warmth',
    name: 'Analog Warmth',
    description: 'Organic textures for artist-first management. Trustworthy and classic.',
    colors: {
      bg: 'bg-stone-100',
      text: 'text-stone-800',
      primary: 'bg-orange-600',
      secondary: 'bg-yellow-500',
      accent: 'text-orange-700',
      panel: 'bg-white',
      border: 'border-stone-300',
    },
    typography: {
      heading: 'font-serif tracking-wide',
      body: 'font-sans',
    },
    vibe: 'Vinyl records, coffee shop meetings, human connection, warm tube amps.',
  },
  {
    id: 'brutalist-beat',
    name: 'Brutalist Beat',
    description: 'Bold, raw, and unapologetic. Starts conversations. Not for everyone.',
    colors: {
      bg: 'bg-neutral-50',
      text: 'text-black',
      primary: 'bg-black',
      secondary: 'bg-lime-400',
      accent: 'text-black',
      panel: 'bg-white',
      border: 'border-black',
    },
    typography: {
      heading: 'font-sans uppercase font-black tracking-normal',
      body: 'font-mono',
    },
    vibe: 'Underground rave posters, raw concrete, architectural, loud.',
  },
];