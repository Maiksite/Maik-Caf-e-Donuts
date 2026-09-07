import React from 'react';
import { Compass, Navigation, MapPin } from 'lucide-react';
import { NEARBY_PLACES } from '../data/nearbyPlaces';
import { ScrollReveal } from '../components/ScrollReveal';

export const NearbyPlaces: React.FC = () => {
  return (
    <section id="pontos-proximos" className="py-20 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8EEF2] text-[#D97D9E] text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Fácil Acesso</span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#34251F] tracking-tight">
              PERTINHO DA MAIK
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#4A3028]/80 font-normal">
              Use pontos conhecidos da Zona Norte como referência para chegar até a Maik.
            </p>
          </div>
        </ScrollReveal>

        {/* 2 Modern reference cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {NEARBY_PLACES.map((place, idx) => (
            <ScrollReveal key={place.id} delay={idx * 0.15}>
              <div
                id={`card-${place.id}`}
                className="flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-[#F2D8E2]/90 shadow-xs hover:shadow-md hover:border-[#EAA5BA] transition-all duration-300 h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF8F5] text-[#D97D9E] border border-[#F2D8E2]">
                      {place.type}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-[#4A3028]/70 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-[#D97D9E]" />
                      <span>Zona Norte</span>
                    </div>
                  </div>

                  <h3 className="mt-4 font-serif font-bold text-2xl text-[#34251F]">
                    {place.name}
                  </h3>

                  <p className="mt-2.5 text-sm text-[#4A3028]/80 leading-relaxed font-normal">
                    {place.referenceText}
                  </p>

                  {/* Distance Indicator */}
                  <div className="mt-5 p-3 rounded-2xl bg-[#FAF8F5] border border-[#F8EEF2] flex items-center justify-between">
                    <span className="text-xs text-[#4A3028]/70 font-medium">
                      Distância até a Maik:
                    </span>
                    <span className="text-xs font-bold text-[#34251F]">
                      {place.estimatedDistanceText || 'Consultar distância no Maps'}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F8EEF2]">
                  <a
                    id={`btn-route-${place.id}`}
                    href={place.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#F8EEF2] hover:bg-[#D97D9E] text-[#4A3028] hover:text-white font-bold text-xs tracking-wider transition-all duration-200 shadow-2xs group active:scale-98"
                  >
                    <Navigation className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    <span>VER ROTA NO GOOGLE MAPS</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
