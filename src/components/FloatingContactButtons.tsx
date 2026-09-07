import React from 'react';

export const FloatingContactButtons: React.FC = () => {
  return (
    <aside
      aria-label="Canais de contato rápidos"
      className="fixed z-50 flex flex-col gap-2.5 right-3 bottom-[90px] md:right-5 md:top-1/2 md:-translate-y-1/2 md:bottom-auto"
    >
      {/* 1. Instagram Floating Button */}
      <div className="relative group flex items-center justify-end">
        {/* Desktop Tooltip */}
        <div
          role="tooltip"
          id="tooltip-instagram"
          className="hidden md:group-hover:flex md:group-focus-within:flex absolute right-full mr-3 top-1/2 -translate-y-1/2 items-center px-3 py-1.5 rounded-lg bg-[#30221E] text-white text-xs font-semibold whitespace-nowrap shadow-lg pointer-events-none transition-opacity duration-200"
        >
          Instagram da Maik
          <span
            aria-hidden="true"
            className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#30221E]"
          />
        </div>

        <a
          id="floating-btn-instagram"
          href="https://www.instagram.com/maik.cafeedonuts?igsi=MzdpNjNhZ2kyZGtu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram da Maik Café e Donuts"
          aria-describedby="tooltip-instagram"
          className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center border border-black/[0.08] shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E1306C] focus-visible:ring-offset-2"
        >
          {/* Official Instagram Icon with subtle signature gradient */}
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="insta-float-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f09433" />
                <stop offset="25%" stopColor="#e6683c" />
                <stop offset="50%" stopColor="#dc2743" />
                <stop offset="75%" stopColor="#cc2366" />
                <stop offset="100%" stopColor="#bc1888" />
              </linearGradient>
            </defs>
            <rect
              x="2.5"
              y="2.5"
              width="19"
              height="19"
              rx="5.5"
              stroke="url(#insta-float-gradient)"
              strokeWidth="2.1"
            />
            <circle
              cx="12"
              cy="12"
              r="4.2"
              stroke="url(#insta-float-gradient)"
              strokeWidth="2.1"
            />
            <circle
              cx="17.4"
              cy="6.6"
              r="1.2"
              fill="url(#insta-float-gradient)"
            />
          </svg>
        </a>
      </div>

      {/* 2. TikTok Floating Button */}
      <div className="relative group flex items-center justify-end">
        {/* Desktop Tooltip */}
        <div
          role="tooltip"
          id="tooltip-tiktok"
          className="hidden md:group-hover:flex md:group-focus-within:flex absolute right-full mr-3 top-1/2 -translate-y-1/2 items-center px-3 py-1.5 rounded-lg bg-[#30221E] text-white text-xs font-semibold whitespace-nowrap shadow-lg pointer-events-none transition-opacity duration-200"
        >
          TikTok da Maik
          <span
            aria-hidden="true"
            className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#30221E]"
          />
        </div>

        <a
          id="floating-btn-tiktok"
          href="https://www.tiktok.com/@maik.cafeedonuts?_r=1&_t=zs-95yrpsck15h"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok da Maik Café e Donuts"
          aria-describedby="tooltip-tiktok"
          className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center border border-black/[0.08] shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
          {/* Official TikTok Icon */}
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-[#010101]"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
          </svg>
        </a>
      </div>

      {/* 3. WhatsApp Floating Button */}
      <div className="relative group flex items-center justify-end">
        {/* Desktop Tooltip */}
        <div
          role="tooltip"
          id="tooltip-whatsapp"
          className="hidden md:group-hover:flex md:group-focus-within:flex absolute right-full mr-3 top-1/2 -translate-y-1/2 items-center px-3 py-1.5 rounded-lg bg-[#30221E] text-white text-xs font-semibold whitespace-nowrap shadow-lg pointer-events-none transition-opacity duration-200"
        >
          Falar com a Maik no WhatsApp
          <span
            aria-hidden="true"
            className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#30221E]"
          />
        </div>

        <a
          id="floating-btn-whatsapp"
          href="https://wa.me/551129720035"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com a Maik no WhatsApp"
          aria-describedby="tooltip-whatsapp"
          className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center border border-black/[0.08] shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        >
          {/* Official WhatsApp Green Icon */}
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            viewBox="0 0 24 24"
            fill="#25D366"
            aria-hidden="true"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.18 8.18 0 0 1-5.82 2.42c-1.44 0-2.86-.38-4.11-1.11l-.29-.17-3.12.82.83-3.04-.19-.3a8.15 8.15 0 0 1-1.25-4.34c0-4.54 3.7-8.24 8.24-8.24zm4.5 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
          </svg>
        </a>
      </div>
    </aside>
  );
};
