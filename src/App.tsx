import React from 'react';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Menu } from './sections/Menu';
import { StoreHours } from './sections/StoreHours';
import { Location } from './sections/Location';
import { NearbyPlaces } from './sections/NearbyPlaces';
import { MediaGallery } from './sections/MediaGallery';
import { InstagramSection } from './sections/InstagramSection';
import { CtaFinal } from './sections/CtaFinal';
import { Footer } from './sections/Footer';
import { FloatingContactButtons } from './components/FloatingContactButtons';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#34251F]">
      {/* 1. Sticky Header */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section with dynamic store status */}
        <Hero />

        {/* 3. Cardápio completo por abas & busca em tempo real */}
        <Menu />

        {/* 4, 5. Sobre a loja, História da Maik & O que torna os donuts especiais */}
        <About />

        {/* 6. Horários de funcionamento */}
        <StoreHours />

        {/* 8. Localização */}
        <Location />

        {/* 9. Pontos próximos e distância */}
        <NearbyPlaces />

        {/* 10. Galeria / Mídia real da loja */}
        <MediaGallery />

        {/* 11. Instagram */}
        <InstagramSection />

        {/* 12. CTA final para iFood */}
        <CtaFinal />
      </main>

      {/* Floating Instagram and WhatsApp Contact Buttons */}
      <FloatingContactButtons />

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
