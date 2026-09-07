import React from 'react';
import { Camera, Sparkles } from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo';
import { ScrollReveal } from '../components/ScrollReveal';

export const MediaGallery: React.FC = () => {
  return (
    <section id="conheca-a-maik" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8EEF2] text-[#D97D9E] text-xs font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Ambiente & Produção</span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#34251F] tracking-tight">
              CONHEÇA A MAIK
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#4A3028]/80 font-normal">
              Acompanhe nosso dia a dia, a produção dos donuts frescos e os bastidores na Av. Luiz Dumont Villares.
            </p>
          </div>
        </ScrollReveal>

        {/* Pure authentic brand showcase & artisanal production */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6">
          {/* Card 1: Official Brand Identity & Emblem */}
          <ScrollReveal delay={0.1}>
            <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#F2D8E2] flex flex-col items-center justify-center text-center shadow-xs h-full">
              <BrandLogo variant="full" size="lg" />
              <div className="mt-6 pt-4 border-t border-[#F2D8E2]/80 w-full">
                <span className="text-xs uppercase tracking-wider font-bold text-[#D97D9E]">
                  Identidade Autêntica
                </span>
                <p className="mt-1 text-xs text-[#4A3028]/70">
                  “Quem é como Deus?” — Propósito, fé e confeitaria artesanal.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Fresh Artisanal Dough & Glazes with 100% REAL photo */}
          <ScrollReveal delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden border border-[#F2D8E2] shadow-xs group bg-[#FAF8F5] min-h-[320px] h-full flex flex-col justify-end p-6">
              <img
                src="/homer_real.jpg"
                alt="Donuts Homer Maik com cobertura rosa artesanal e confeitos crocantes"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#34251F]/85 via-[#34251F]/35 to-transparent" />
              <div className="relative z-10 text-white">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#D97D9E] mb-2 shadow-xs">
                  <Sparkles className="w-3 h-3" />
                  Massa Fresquinha
                </span>
                <h4 className="font-serif font-bold text-xl leading-tight">
                  Donuts Roscas & Recheados
                </h4>
                <p className="text-xs text-white/90 mt-1">
                  Feitos manualmente com receitas estudadas e testadas cuidadosamente.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
