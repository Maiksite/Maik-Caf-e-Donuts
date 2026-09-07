import React from 'react';
import { MapPin, Navigation, Car, Train } from 'lucide-react';
import { GOOGLE_MAPS_STORE_URL } from '../data/products';
import { ScrollReveal } from '../components/ScrollReveal';

export const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8EEF2] text-[#D97D9E] text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Zona Norte de São Paulo</span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#34251F] tracking-tight">
              VENHA CONHECER A MAIK
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#4A3028]/80 font-normal">
              Um ambiente preparado com carinho para você desfrutar do melhor café e donuts artesanais.
            </p>
          </div>
        </ScrollReveal>

        {/* Location Content Box */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Address Details Card */}
          <div className="lg:col-span-5 h-full">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#F2D8E2] shadow-xs h-full">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-[#D97D9E]">
                    Endereço Oficial
                  </span>
                  <h3 className="mt-2 font-serif font-bold text-2xl sm:text-3xl text-[#34251F]">
                    Av. Luiz Dumont Villares, 1160
                  </h3>
                  <p className="mt-1 text-base text-[#4A3028]/85 font-medium">
                    Santana / Jardim São Paulo — São Paulo — SP
                  </p>
                  <p className="mt-2 text-xs text-[#4A3028]/70">
                    Edifício Dgrif Tower • Loja 2 (dentro do prédio comercial)
                  </p>

                  <div className="mt-6 space-y-3.5 border-t border-[#F2D8E2]/80 pt-6">
                    <div className="flex items-center gap-3 text-sm text-[#4A3028]/85">
                      <div className="w-8 h-8 rounded-xl bg-white border border-[#F2D8E2] flex items-center justify-center text-[#D97D9E] shrink-0">
                        <Car className="w-4 h-4" />
                      </div>
                      <span>Estacionamento gratuito na lateral do edifício.</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-[#4A3028]/85">
                      <div className="w-8 h-8 rounded-xl bg-white border border-[#F2D8E2] flex items-center justify-center text-[#D97D9E] shrink-0">
                        <Train className="w-4 h-4" />
                      </div>
                      <span>Próximo à Estação Parada Inglesa (Metrô Linha 1-Azul).</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#F2D8E2]/80">
                  <a
                    id="btn-como-chegar"
                    href={GOOGLE_MAPS_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-[#D97D9E] hover:bg-[#C95D80] text-white font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition-all active:scale-98"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>COMO CHEGAR NO GOOGLE MAPS</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Interactive Map Display */}
          <div className="lg:col-span-7 h-full">
            <ScrollReveal delay={0.2}>
              <div className="rounded-3xl overflow-hidden border border-[#F2D8E2] shadow-md bg-[#FAF8F5] relative h-[380px] sm:h-[420px]">
                {/* Embedded Google Map */}
                <iframe
                  title="Localização Maik Café e Donuts"
                  src="https://maps.google.com/maps?q=Av.+Luiz+Dumont+Villares,+1160+-+Santana,+S%C3%A3o+Paulo+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale-[15%] contrast-[105%]"
                  loading="lazy"
                  allowFullScreen
                />

                {/* Quick floating card on top of map */}
                <div className="absolute top-4 left-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#F2D8E2] shadow-md flex items-center gap-3 max-w-xs">
                  <div className="w-9 h-9 rounded-xl bg-[#F8EEF2] flex items-center justify-center text-[#D97D9E] shrink-0 font-serif font-bold text-sm">
                    Maik
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-xs text-[#34251F]">
                      Maik Café e Donuts
                    </span>
                    <span className="block text-[11px] text-[#4A3028]/70">
                      Av. Luiz Dumont Villares, 1160
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
