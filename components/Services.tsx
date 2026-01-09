import React from 'react';
import { Theme } from '../types';
import { BarChart3, Users, Mic2, Globe } from 'lucide-react';

interface ServicesProps {
  theme: Theme;
}

export const Services: React.FC<ServicesProps> = ({ theme }) => {
  const services = [
    {
      icon: BarChart3,
      title: "Streaming Data Aggregation",
      description: "Custom analytics solutions to see all your streaming data in one place."
    },
    {
      icon: Users,
      title: "Audience Segmentation",
      description: "Turn casual listeners into super-fans. We identify high-value cohorts and target them directly."
    },
    {
      icon: Mic2,
      title: "Artist Management",
      description: "Day-to-day logistics, tour routing, and emotional support. The classic analog work."
    },
    {
      icon: Globe,
      title: "Global Distribution Strategy",
      description: "Don't just upload. Strategize release windows for maximum algorithmic pickup."
    }
  ];

  return (
    <section id="services" className={`scroll-mt-32 py-24 px-6 ${theme.colors.bg} transition-colors duration-500`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:w-1/2">
           <h2 className={`text-3xl md:text-5xl mb-6 ${theme.typography.heading} ${theme.colors.text}`}>
             Services
           </h2>
           <div className={`h-1 w-24 ${theme.colors.primary}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-xl border transition-all duration-300 hover:-translate-y-2 
                ${theme.colors.panel} ${theme.colors.border}
                ${theme.id === 'brutalist-beat' ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' : 'shadow-lg hover:shadow-xl'}
              `}
            >
              <service.icon className={`w-10 h-10 mb-6 ${theme.colors.accent}`} />
              <h3 className={`text-xl font-bold mb-3 ${theme.typography.heading} ${theme.colors.text}`}>
                {service.title}
              </h3>
              <p className={`opacity-70 leading-relaxed ${theme.typography.body} ${theme.colors.text}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};