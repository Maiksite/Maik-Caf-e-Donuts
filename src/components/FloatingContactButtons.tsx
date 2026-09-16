import React from 'react';
import { motion } from 'motion/react';
import { INSTAGRAM_URL, TIKTOK_URL, WHATSAPP_URL } from '../data/site';
import { useMagnetic } from '../hooks/useMagnetic';

interface FloatingButtonProps {
  id: string;
  href: string;
  label: string;
  tooltip: string;
  focusRingClass: string;
  strength?: number;
  children: React.ReactNode;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  id,
  href,
  label,
  tooltip,
  focusRingClass,
  strength = 5,
  children,
}) => {
  const magnetic = useMagnetic(strength);
  const tooltipId = `${id}-tooltip`;

  return (
    <div className="relative group flex items-center justify-end">
      <div
        role="tooltip"
        id={tooltipId}
        className="hidden md:group-hover:flex md:group-focus-within:flex absolute right-full mr-3 top-1/2 -translate-y-1/2 items-center px-3 py-1.5 rounded-lg bg-[#30221E] text-white text-xs font-semibold whitespace-nowrap shadow-lg pointer-events-none"
      >
        {tooltip}
        <span
          aria-hidden="true"
          className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#30221E]"
        />
      </div>

      <motion.a
        id={id}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        aria-describedby={tooltipId}
        style={magnetic.style}
        onMouseMove={magnetic.onMouseMove}
        onMouseLeave={magnetic.onMouseLeave}
        whileHover={{ scale: 1.035 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 360, damping: 24 }}
        className={`w-11 h-11 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center border border-black/[0.08] shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${focusRingClass}`}
      >
        {children}
      </motion.a>
    </div>
  );
};

export const FloatingContactButtons: React.FC = () => {
  return (
    <aside
      aria-label="Canais de contato rápidos"
      className="fixed z-50 flex flex-col gap-2.5 right-3 bottom-[90px] md:right-5 md:top-1/2 md:-translate-y-1/2 md:bottom-auto"
    >
      <FloatingButton
        id="floating-btn-instagram"
        href={INSTAGRAM_URL}
        label="Instagram da Maik Café e Donuts"
        tooltip="Instagram da Maik"
        focusRingClass="focus-visible:ring-[#E1306C]"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="insta-float-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f09433" />
              <stop offset="25%" stopColor="#e6683c" />
              <stop offset="50%" stopColor="#dc2743" />
              <stop offset="75%" stopColor="#cc2366" />
              <stop offset="100%" stopColor="#bc1888" />
            </linearGradient>
          </defs>
          <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="url(#insta-float-gradient)" strokeWidth="2.1" />
          <circle cx="12" cy="12" r="4.2" stroke="url(#insta-float-gradient)" strokeWidth="2.1" />
          <circle cx="17.4" cy="6.6" r="1.2" fill="url(#insta-float-gradient)" />
        </svg>
      </FloatingButton>

      <FloatingButton
        id="floating-btn-tiktok"
        href={TIKTOK_URL}
        label="TikTok da Maik Café e Donuts"
        tooltip="TikTok da Maik"
        focusRingClass="focus-visible:ring-black"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-[#010101]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
        </svg>
      </FloatingButton>

      <FloatingButton
        id="floating-btn-whatsapp"
        href={WHATSAPP_URL}
        label="Falar com a Maik no WhatsApp"
        tooltip="Falar com a Maik no WhatsApp"
        focusRingClass="focus-visible:ring-[#25D366]"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.18 8.18 0 0 1-5.82 2.42c-1.44 0-2.86-.38-4.11-1.11l-.29-.17-3.12.82.83-3.04-.19-.3a8.15 8.15 0 0 1-1.25-4.34c0-4.54 3.7-8.24 8.24-8.24zm4.5 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
        </svg>
      </FloatingButton>
    </aside>
  );
};
