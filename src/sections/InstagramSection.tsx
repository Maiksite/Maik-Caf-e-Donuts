import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-20 md:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8EEF2] text-[#D97D9E] text-xs font-bold uppercase tracking-wider mb-3">
              <Instagram className="w-3.5 h-3.5" />
              <span>Comunidade Maik</span>
            </div>

            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#34251F] tracking-tight">
              SIGA A MAIK
            </h2>

            <p className="mt-2 text-xl sm:text-2xl font-bold text-[#D97D9E]">
              @maik.cafeedonuts
            </p>

            <p className="mt-3 text-base sm:text-lg text-[#4A3028]/80 font-normal">
              Mais novidades, donuts e momentos especiais.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                id="btn-instagram"
                href="https://www.instagram.com/maik.cafeedonuts?igsi=MzdpNjNhZ2kyZGtu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Maik Café e Donuts"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-[#F8EEF2] text-[#34251F] border border-[#F2D8E2] hover:border-[#EAA5BA] font-bold text-sm tracking-wide shadow-xs hover:shadow-md transition-all active:scale-98"
              >
                <Instagram className="w-4 h-4 text-[#D97D9E]" />
                <span>VER INSTAGRAM</span>
                <ArrowUpRight className="w-4 h-4 text-[#4A3028]/60" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
