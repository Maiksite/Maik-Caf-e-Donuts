import React from 'react';
import { useStoreStatus } from '../hooks/useStoreStatus';

interface StatusBadgeProps {
  layout?: 'compact' | 'detailed' | 'hero';
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  layout = 'detailed',
  className = '',
}) => {
  const status = useStoreStatus();

  // Helper classes based on the 3 official states:
  // 1. 'open' (Verde)
  // 2. 'closing-soon' (Amarelo)
  // 3. 'closed' (Vermelho)
  const isClosingSoon = status.status === 'closing-soon';
  const isOpen = status.status === 'open';
  const isClosed = status.status === 'closed';

  if (layout === 'compact') {
    let containerClass = 'bg-[#F8EEF2] text-[#4A3028] border-rose-200';
    let dotClass = 'bg-rose-500';
    let pingClass = '';

    if (isOpen) {
      containerClass = 'bg-emerald-50 text-emerald-800 border-emerald-200';
      dotClass = 'bg-emerald-500';
      pingClass = 'bg-emerald-400';
    } else if (isClosingSoon) {
      containerClass = 'bg-amber-50 text-amber-900 border-amber-300';
      dotClass = 'bg-amber-500';
      pingClass = 'bg-amber-400';
    }

    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${containerClass} ${className}`}
      >
        <span className="relative flex h-2 w-2">
          {pingClass && (
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pingClass} opacity-75`} />
          )}
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotClass}`} />
        </span>
        <span className="font-semibold">{status.statusText}</span>
        <span className="opacity-60">•</span>
        <span className="opacity-80">{status.subtext}</span>
      </div>
    );
  }

  if (layout === 'hero') {
    let dotClass = 'bg-rose-500';
    let pingClass = '';
    let titleClass = 'text-rose-700';

    if (isOpen) {
      dotClass = 'bg-emerald-500';
      pingClass = 'bg-emerald-400';
      titleClass = 'text-emerald-700';
    } else if (isClosingSoon) {
      dotClass = 'bg-amber-500';
      pingClass = 'bg-amber-400';
      titleClass = 'text-amber-700';
    }

    return (
      <div
        className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#F2D8E2]/80 shadow-xs text-sm transition-all hover:border-[#EAA5BA] ${className}`}
      >
        <span className="relative flex h-3 w-3 shrink-0">
          {pingClass && (
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pingClass} opacity-75`} />
          )}
          <span className={`relative inline-flex rounded-full h-3 w-3 ${dotClass}`} />
        </span>
        <div className="flex flex-col text-left leading-tight">
          <span className={`font-semibold text-xs tracking-wide uppercase ${titleClass}`}>
            {status.statusText}
          </span>
          <span className="text-xs text-[#4A3028]/80 font-medium">{status.subtext}</span>
        </div>
      </div>
    );
  }

  // Detailed layout (used in Horários de Funcionamento section)
  let containerClass = 'bg-rose-50/50 border-rose-200/80 text-[#34251F]';
  let iconBoxClass = 'bg-rose-100/70 text-rose-600';
  let dotClass = 'bg-rose-500';
  let pingClass = '';
  let badgeClass = 'bg-rose-100/80 text-rose-800';

  if (isOpen) {
    containerClass = 'bg-emerald-50/70 border-emerald-200 text-emerald-950';
    iconBoxClass = 'bg-emerald-100 text-emerald-700';
    dotClass = 'bg-emerald-600';
    pingClass = 'bg-emerald-400';
    badgeClass = 'bg-emerald-200/60 text-emerald-800';
  } else if (isClosingSoon) {
    containerClass = 'bg-amber-50/80 border-amber-200 text-amber-950';
    iconBoxClass = 'bg-amber-100 text-amber-800';
    dotClass = 'bg-amber-500';
    pingClass = 'bg-amber-400';
    badgeClass = 'bg-amber-200/70 text-amber-900';
  }

  const locationTagText = status.isHoliday
    ? status.holidayName
      ? `Feriado: ${status.holidayName}`
      : 'Horário de Feriado'
    : 'São Paulo (Horário Local)';

  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${containerClass} ${className}`}
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${iconBoxClass}`}
      >
        <span className="relative flex h-3.5 w-3.5">
          {pingClass && (
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pingClass} opacity-75`} />
          )}
          <span className={`relative inline-flex rounded-full h-3.5 w-3.5 ${dotClass}`} />
        </span>
      </div>
      <div>
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="font-bold text-base leading-tight">{status.statusText}</h4>
          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${badgeClass}`}>
            {locationTagText}
          </span>
        </div>
        <p className="text-sm mt-0.5 font-medium opacity-85">{status.subtext}</p>
      </div>
    </div>
  );
};
