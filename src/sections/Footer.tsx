import React from 'react';
import { Instagram, ExternalLink, MapPin, Clock } from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo';
import { IFOOD_STORE_URL, INSTAGRAM_URL } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#F2D8E2]/80 text-[#4A3028]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <BrandLogo size="lg" />
            <p className="mt-4 text-sm text-[#4A3028]/80 leading-relaxed max-w-sm">
              Café, carinho & donuts na Zona Norte de SP. Um lugar para transformar pequenos momentos da rotina em algo ainda mais gostoso.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                id="footer-social-instagram"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#F2D8E2] text-[#34251F] hover:text-[#D97D9E] hover:border-[#EAA5BA] transition-colors flex items-center justify-center shadow-2xs"
                aria-label="Instagram da Maik Café e Donuts"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="footer-social-ifood"
                href={IFOOD_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-white border border-[#F2D8E2] text-[#34251F] hover:text-[#D97D9E] hover:border-[#EAA5BA] transition-colors text-xs font-bold shadow-2xs flex items-center gap-1.5"
                aria-label="iFood da Maik"
              >
                <span>iFood</span>
                <ExternalLink className="w-3 h-3 text-[#D97D9E]" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-serif font-bold text-base text-[#34251F] mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="hover:text-[#D97D9E] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#D97D9E] transition-colors">
                  Sobre a loja
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-[#D97D9E] transition-colors">
                  Cardápio
                </a>
              </li>
              <li>
                <a href="#horarios" className="hover:text-[#D97D9E] transition-colors">
                  Horários
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#D97D9E] transition-colors">
                  Localização
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D97D9E] transition-colors inline-flex items-center gap-1"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={IFOOD_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D97D9E] transition-colors inline-flex items-center gap-1 font-semibold text-[#D97D9E]"
                >
                  <span>iFood</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Address & Info */}
          <div className="md:col-span-4">
            <h4 className="font-serif font-bold text-base text-[#34251F] mb-4">
              Localização & Contato
            </h4>
            <div className="space-y-3 text-sm text-[#4A3028]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D97D9E] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#34251F]">Maik Café e Donuts</p>
                  <p>Av. Luiz Dumont Villares, 1160</p>
                  <p className="text-xs text-[#4A3028]/70">Edifício Dgrif Tower • Santana / Jd. São Paulo</p>
                  <p className="text-xs text-[#4A3028]/70">São Paulo — SP</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <Clock className="w-4 h-4 text-[#D97D9E] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#34251F]">Funcionamento</p>
                  <p className="text-xs">Segunda a Quinta: 07:30 – 19:00</p>
                  <p className="text-xs">Sexta-feira: 07:30 – 20:00</p>
                  <p className="text-xs">Sábado: 10:00 – 18:00 • Domingo: 10:00 – 16:00</p>
                  <p className="text-xs text-[#4A3028]/70">Feriados: 10:00 – 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-[#F2D8E2] text-center text-xs text-[#4A3028]/70">
          <p>© 2026 Maik Café e Donuts. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
