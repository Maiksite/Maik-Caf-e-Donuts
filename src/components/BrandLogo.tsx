import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'horizontal',
  size = 'md',
}) => {
  const [imgError, setImgError] = React.useState(false);

  // Dimension presets
  const sizeMap = {
    sm: { icon: 34, text: 'text-base', sub: 'text-[10px]' },
    md: { icon: 44, text: 'text-xl', sub: 'text-xs' },
    lg: { icon: 56, text: 'text-2xl', sub: 'text-sm' },
    xl: { icon: 80, text: 'text-4xl', sub: 'text-base' },
  };

  const currentSize = sizeMap[size];

  // The central emblem: coffee cup with half-chocolate, half-pink donut (fallback)
  const emblemSvg = (
    <svg
      viewBox="0 0 100 100"
      className="shrink-0 drop-shadow-xs select-none"
      style={{ width: currentSize.icon, height: currentSize.icon }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="donutDough" cx="50%" cy="50%" r="50%">
          <stop offset="65%" stopColor="#E5B27D" />
          <stop offset="100%" stopColor="#C9884F" />
        </radialGradient>
        <linearGradient id="chocoIcing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A3028" />
          <stop offset="100%" stopColor="#2E1C15" />
        </linearGradient>
        <linearGradient id="pinkIcing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F294B2" />
          <stop offset="100%" stopColor="#DE678D" />
        </linearGradient>
      </defs>

      {/* Saucer / plate line */}
      <path
        d="M 22 75 C 38 82 62 82 78 75"
        stroke="#34251F"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Cup handle right */}
      <path
        d="M 72 45 C 88 47 88 68 70 70"
        stroke="#34251F"
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* Cup outline */}
      <path
        d="M 27 42 C 22 58 28 73 50 74 C 72 73 78 58 73 42"
        stroke="#34251F"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* Donut dough base */}
      <circle cx="50" cy="50" r="22" fill="url(#donutDough)" stroke="#34251F" strokeWidth="1.2" />

      {/* Left half: Chocolate frosting */}
      <path
        d="M 50 28 C 36 28 28 38 28 50 C 28 62 36 72 50 72 C 48 66 50 60 48 55 C 47 50 48 45 48 40 C 50 35 48 30 50 28 Z"
        fill="url(#chocoIcing)"
      />

      {/* Right half: Vibrant Pink frosting */}
      <path
        d="M 50 28 C 64 28 72 38 72 50 C 72 62 64 72 50 72 C 52 66 50 60 52 55 C 53 50 52 45 52 40 C 50 35 52 30 50 28 Z"
        fill="url(#pinkIcing)"
      />

      {/* Donut center hole */}
      <circle cx="50" cy="50" r="7" fill="#FAF8F5" stroke="#34251F" strokeWidth="1.5" />

      {/* Chocolate sprinkles */}
      <g stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" opacity="0.9">
        <line x1="36" y1="38" x2="39" y2="41" />
        <line x1="32" y1="48" x2="35" y2="47" />
        <line x1="40" y1="46" x2="43" y2="49" />
        <line x1="35" y1="58" x2="38" y2="56" />
        <line x1="42" y1="62" x2="45" y2="65" />
      </g>

      {/* Pink sprinkles */}
      <g stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" opacity="0.9">
        <line x1="64" y1="38" x2="61" y2="41" />
        <line x1="68" y1="48" x2="65" y2="47" />
        <line x1="60" y1="46" x2="57" y2="49" />
        <line x1="65" y1="58" x2="62" y2="56" />
        <line x1="58" y1="62" x2="55" y2="65" />
      </g>

      {/* Little crown / sparkle above cup */}
      <circle cx="50" cy="18" r="1.5" fill="#DE678D" />
      <circle cx="45" cy="19.5" r="1.1" fill="#DE678D" />
      <circle cx="55" cy="19.5" r="1.1" fill="#DE678D" />
    </svg>
  );

  const emblem = !imgError ? (
    <img
      src="/maik_logo_oficial.jpg"
      alt="Maik Café e Donuts Logo"
      width={currentSize.icon}
      height={currentSize.icon}
      decoding="async"
      className="shrink-0 rounded-full object-cover shadow-2xs border border-[#F2D8E2]/60 select-none"
      style={{ width: currentSize.icon, height: currentSize.icon }}
      onError={() => setImgError(true)}
    />
  ) : (
    emblemSvg
  );

  if (variant === 'icon') {
    return <div className={`inline-flex items-center ${className}`}>{emblem}</div>;
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {/* Top arched name with crown over 'i' */}
        <div className="relative font-serif font-bold text-[#34251F] tracking-tight text-3xl">
          <span>Ma</span>
          <span className="relative inline-block">
            i
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-0.5">
              <span className="w-1 h-1 rounded-full bg-[#DE678D]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#DE678D]" />
              <span className="w-1 h-1 rounded-full bg-[#DE678D]" />
            </span>
          </span>
          <span>k</span>
        </div>

        {/* Center emblem */}
        <div className="my-1">{emblem}</div>

        {/* Bottom subtitle */}
        <div className="font-serif font-semibold text-[#34251F] tracking-wide text-lg">
          Café e Donuts
        </div>
      </div>
    );
  }

  // Default: Horizontal layout for Header & Navbar
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {emblem}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1">
          <span className={`font-serif font-bold text-[#34251F] tracking-tight ${currentSize.text}`}>
            Maik
          </span>
          <span className="inline-flex items-center gap-0.5 -mt-1">
            <span className="w-1 h-1 rounded-full bg-[#DE678D]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#DE678D]" />
            <span className="w-1 h-1 rounded-full bg-[#DE678D]" />
          </span>
        </div>
        <span
          className={`font-serif font-semibold text-[#4A3028]/80 tracking-wider uppercase ${currentSize.sub}`}
        >
          Café e Donuts
        </span>
      </div>
    </div>
  );
};
