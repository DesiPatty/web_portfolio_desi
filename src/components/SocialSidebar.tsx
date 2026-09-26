import React from 'react';
import { Instagram } from 'lucide-react';

export const BehanceIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M7.7 10.3c.7-.4 1.2-1.1 1.2-2.1 0-1.9-1.4-2.7-3.6-2.7H0v13h5.7c2.4 0 3.9-1.1 3.9-3.2 0-1.4-.7-2.5-1.9-2.8zM2.8 7.3h2.3c1.2 0 1.9.4 1.9 1.4 0 .9-.7 1.4-1.9 1.4H2.8V7.3zm2.5 9.4H2.8v-3.2h2.5c1.4 0 2.2.5 2.2 1.6 0 1.1-.8 1.6-2.2 1.6zm13.3-8.2c-3.6 0-5.8 2.5-5.8 6.1 0 3.7 2.3 6.1 6 6.1 2.5 0 4.4-1.2 5.1-3.2h-2.5c-.4.8-1.3 1.3-2.6 1.3-1.9 0-3-1.1-3.2-2.9h8.4c.1-.4.1-.9.1-1.3 0-3.5-2-6.1-5.5-6.1zm-3.1 4.9c.2-1.5 1.3-2.6 3.1-2.6 1.7 0 2.8 1.1 3 2.6h-6.1zm-.2-6.1h6.6V5.9h-6.6v1.4z" />
  </svg>
);

export const XIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Exactly the 3 requested social networks
export const SOCIAL_LINKS = [
  {
    name: 'X / Twitter',
    icon: XIcon,
    url: '#',
    ariaLabel: 'Perfil de Twitter / X de DesiPatty',
  },
  {
    name: 'Behance',
    icon: BehanceIcon,
    url: '#',
    ariaLabel: 'Portafolio en Behance de DesiPatty',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: '#',
    ariaLabel: 'Perfil de Instagram de DesiPatty',
  },
];

interface SocialSidebarProps {
  layout?: 'vertical' | 'horizontal';
}

export const SocialSidebar: React.FC<SocialSidebarProps> = ({ layout = 'vertical' }) => {
  if (layout === 'horizontal') {
    return (
      <div className="flex items-center gap-2.5">
        <span className="text-[11px] font-heading font-semibold text-white/40 tracking-wider mr-1">
          REDES:
        </span>
        {SOCIAL_LINKS.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.ariaLabel}
              title={item.name}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/70 transition-all hover:scale-105 hover:border-[#ff8a7a]/60 hover:bg-[#ff8a7a]/15 hover:text-white"
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          );
        })}
      </div>
    );
  }

  // Desktop Vertical Sidebar (inspired by Petit Planet's left column)
  return (
    <div 
      className="hidden lg:flex absolute left-4 xl:left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-3"
      role="complementary"
      aria-label="Enlaces a redes sociales"
    >
      {/* Decorative vertical line above */}
      <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/25 to-white/10" />

      {/* Social Icons list */}
      <div className="flex flex-col items-center gap-3">
        {SOCIAL_LINKS.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.ariaLabel}
              title={item.name}
              className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#120e1c]/70 text-white/70 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#ff8a7a]/70 hover:bg-[#ff8a7a]/20 hover:text-white hover:shadow-[#ff8a7a]/25 focus:outline-none focus:ring-2 focus:ring-[#ff8a7a]"
            >
              <Icon className="h-4 w-4 transition-transform group-hover:scale-105" />
              
              {/* Tooltip on hover */}
              <span className="pointer-events-none absolute left-full ml-2.5 hidden rounded-lg border border-white/10 bg-[#161222]/95 px-2.5 py-1 font-heading text-[11px] font-semibold text-white shadow-xl backdrop-blur-md transition-all group-hover:block whitespace-nowrap z-50">
                {item.name}
              </span>
            </a>
          );
        })}
      </div>

      {/* Decorative vertical line below */}
      <div className="h-10 w-px bg-gradient-to-b from-white/10 via-white/25 to-transparent" />
    </div>
  );
};
