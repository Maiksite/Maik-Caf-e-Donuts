import React from 'react';
import { UtensilsCrossed, ExternalLink, MapPin } from 'lucide-react';
import { StatusBadge } from '../components/StatusBadge';
import { ScrollReveal } from '../components/ScrollReveal';
import { IFOOD_STORE_URL } from '../data/products';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-14 md:pt-36 md:pb-16 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5]"
    >
      {/* Subtle modern background blur accents */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-[#F8EEF2]/50 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <ScrollReveal delay={0.05}>
          <div className="mb-4">
            <StatusBadge layout="hero" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#F2D8E2] text-xs font-semibold text-[#4A3028] mb-5 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-[#EA789D]" />
            <span>Av. Luiz Dumont Villares, 1160 • Santana / Jd. São Paulo</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#30221E] tracking-tight leading-[1.14] max-w-2xl">
            Um lugar pra <br />
            <span className="text-[#EA789D] inline-block">adoçar sua rotina.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-5 text-lg sm:text-xl text-[#4A3028]/85 font-normal max-w-xl leading-relaxed">
            Café, carinho & donuts na Zona Norte de SP.
          </p>
          <p className="mt-2 text-sm text-[#776966] max-w-lg leading-relaxed">
            Donuts artesanais fresquinhos feitos diariamente à mão, combinados com cafés especiais e bebidas exclusivas.
          </p>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal delay={0.25} className="w-full sm:w-auto">
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto">
            <a
              id="hero-btn-cardapio"
              href="#cardapio"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#EA789D] hover:bg-[#DD638A] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer w-full sm:w-auto"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>VER CARDÁPIO</span>
            </a>

            <a
              id="hero-btn-ifood"
              href={IFOOD_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-[#FCEBF1] text-[#30221E] border border-[rgba(74,48,40,0.14)] hover:border-[#EA789D] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-2xs hover:shadow-xs transition-all duration-200 active:scale-95 cursor-pointer w-full sm:w-auto"
            >
              <span>PEDIR PELO IFOOD</span>
              <ExternalLink className="w-4 h-4 text-[#EA789D]" />
            </a>
          </div>
        </ScrollReveal>

        {/* Quick highlight micro-metrics */}
        <ScrollReveal delay={0.3} className="w-full">
          <div className="mt-10 pt-6 border-t border-[rgba(74,48,40,0.08)] grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg mx-auto">
            <div>
              <span className="block font-serif font-bold text-2xl sm:text-3xl text-[#30221E]">
                100%
              </span>
              <span className="text-xs text-[#776966] font-medium leading-tight">
                Artesanal Diário
              </span>
            </div>
            <div>
              <span className="block font-serif font-bold text-2xl sm:text-3xl text-[#30221E]">
                +10 anos
              </span>
              <span className="text-xs text-[#776966] font-medium leading-tight">
                Na Confeitaria
              </span>
            </div>
            <div>
              <span className="block font-serif font-bold text-2xl sm:text-3xl text-[#30221E]">
                ZN • SP
              </span>
              <span className="text-xs text-[#776966] font-medium leading-tight">
                Parada Inglesa
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
