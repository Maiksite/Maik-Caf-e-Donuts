import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { STORE_HOURS } from '../data/storeHours';
import { StatusBadge } from '../components/StatusBadge';
import { ScrollReveal } from '../components/ScrollReveal';
import { useStoreStatus } from '../hooks/useStoreStatus';

export const StoreHours: React.FC = () => {
  const storeStatus = useStoreStatus();

  return (
    <section id="horarios" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8EEF2] text-[#D97D9E] text-xs font-bold uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Planeje Sua Visita</span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#34251F] tracking-tight">
              HORÁRIOS DE FUNCIONAMENTO
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#4A3028]/80 font-normal">
              Estamos prontos para te receber com café quentinho e donuts artesanais fresquinhos.
            </p>
          </div>
        </ScrollReveal>

        {/* Live Status Top Card */}
        <ScrollReveal delay={0.1}>
          <div className="mt-10 max-w-xl mx-auto">
            <StatusBadge layout="detailed" />
          </div>
        </ScrollReveal>

        {/* Schedule Table Cards */}
        <ScrollReveal delay={0.2}>
          <div className="mt-10 max-w-xl mx-auto bg-white rounded-3xl border border-[#F2D8E2]/80 shadow-xs overflow-hidden">
            <div className="p-4 sm:p-6 divide-y divide-[#F8EEF2]">
              {STORE_HOURS.map((entry) => {
                const isToday = entry.isHoliday
                  ? storeStatus.isHoliday
                  : !storeStatus.isHoliday &&
                    (entry.activeDays
                      ? entry.activeDays.includes(storeStatus.currentDayIndex)
                      : entry.dayIndex === storeStatus.currentDayIndex);

                return (
                  <div
                    key={entry.dayName}
                    className={`py-3.5 px-3 rounded-2xl flex items-center justify-between transition-colors ${
                      isToday ? 'bg-[#F8EEF2]/90 font-semibold shadow-2xs' : 'hover:bg-[#FAF8F5]/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isToday ? 'bg-[#D97D9E]' : 'bg-[#4A3028]/30'
                        }`}
                      />
                      <span className="text-sm sm:text-base text-[#34251F]">
                        {entry.dayName}
                      </span>
                      {isToday && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#D97D9E] text-white uppercase tracking-wider">
                          Hoje
                        </span>
                      )}
                    </div>

                    <div className="text-right">
                      {entry.isClosed ? (
                        <span className="text-xs sm:text-sm font-semibold text-[#D97D9E] px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#F2D8E2]">
                          Fechada
                        </span>
                      ) : (
                        <span
                          className={`text-xs sm:text-sm font-mono font-medium ${
                            isToday ? 'text-[#34251F] font-bold' : 'text-[#4A3028]/80'
                          }`}
                        >
                          {entry.openTime} – {entry.closeTime}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer note on free parking */}
            <div className="p-4 bg-[#FAF8F5] border-t border-[#F2D8E2] text-center text-xs text-[#4A3028]/80 flex items-center justify-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#D97D9E]" />
              <span>Estacionamento gratuito na lateral do prédio comercial.</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
