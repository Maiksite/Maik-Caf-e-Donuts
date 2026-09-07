import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { IFOOD_STORE_URL } from '../data/products';
import { ScrollReveal } from '../components/ScrollReveal';

export const CtaFinal: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle modern soft glow backdrop */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#F8EEF2] rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#FAF8F5] to-white border border-[#F2D8E2] shadow-sm">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8EEF2] text-[#D97D9E] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Peça Sem Sair de Casa</span>
            </div>

            <h2 className="font-serif font-bold text-4xl sm:text-5xl text-[#34251F] tracking-tight">
              Deu vontade?
            </h2>

            <p className="mt-4 text-lg sm:text-xl text-[#4A3028]/85 font-normal max-w-lg mx-auto">
              Escolha seu favorito e peça pelo iFood.
            </p>

            <p className="mt-2 text-sm text-[#4A3028]/70 max-w-md mx-auto">
              Entregamos na sua casa ou trabalho na Zona Norte com todo o carinho e cuidado da Maik.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                id="cta-btn-ifood"
                href={IFOOD_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-[#EA789D] hover:bg-[#DD638A] text-white font-bold text-sm sm:text-base tracking-wider uppercase shadow-md hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>PEDIR PELO IFOOD</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
