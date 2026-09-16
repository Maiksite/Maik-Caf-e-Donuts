import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo';
import { IFOOD_STORE_URL } from '../data/products';
import { INSTAGRAM_URL } from '../data/site';
import { useMagnetic } from '../hooks/useMagnetic';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio', external: false },
  { label: 'Cardápio', href: '#cardapio', external: false },
  { label: 'Sobre a loja', href: '#sobre', external: false },
  { label: 'Horários', href: '#horarios', external: false },
  { label: 'Localização', href: '#localizacao', external: false },
  { label: 'Instagram', href: INSTAGRAM_URL, external: true },
];

const slugify = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const ifoodMagnetic = useMagnetic(6);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const next = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== next ? next : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[#F2D8E2]/80 shadow-xs py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#inicio"
            className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Maik Café e Donuts - Voltar ao início"
          >
            <BrandLogo size="md" />
          </a>

          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[#F2D8E2]/60 shadow-2xs"
            aria-label="Navegação principal"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {NAV_LINKS.map((link) => {
              const id = slugify(link.label);
              const isHovered = hoveredNav === id;

              return (
                <a
                  key={link.label}
                  id={`header-nav-${id}`}
                  href={link.href}
                  {...(link.external
                    ? {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        'aria-label': 'Instagram da Maik Café e Donuts',
                      }
                    : {})}
                  onMouseEnter={() => setHoveredNav(id)}
                  className="relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium text-[#4A3028] hover:text-[#D97D9E] transition-colors"
                >
                  {isHovered && (
                    <motion.span
                      layoutId="header-nav-hover-pill"
                      className="absolute inset-0 rounded-full bg-[#F8EEF2]/90 pointer-events-none"
                      transition={{ type: 'spring', stiffness: 360, damping: 32, mass: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <motion.a
              id="header-btn-ifood"
              href={IFOOD_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={ifoodMagnetic.style}
              onMouseMove={ifoodMagnetic.onMouseMove}
              onMouseLeave={ifoodMagnetic.onMouseLeave}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D97D9E] hover:bg-transparent border border-[#D97D9E] text-white hover:text-[#D97D9E] font-bold text-xs lg:text-sm tracking-wide shadow-xs hover:shadow-sm transition-[background-color,color,border-color,box-shadow] duration-300"
            >
              <span>PEDIR PELO IFOOD</span>
              <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <a
              href={IFOOD_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-[#D97D9E] text-white font-bold text-xs tracking-wider shadow-2xs flex items-center gap-1"
            >
              <span>iFood</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              id="btn-mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="p-2 rounded-xl text-[#34251F] hover:bg-[#F8EEF2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D97D9E]"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-drawer-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-x-0 top-[65px] bg-white/98 backdrop-blur-xl border-b border-[#F2D8E2] shadow-xl p-6"
          >
            <nav className="flex flex-col gap-2" aria-label="Navegação mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  id={`mobile-nav-${slugify(link.label)}`}
                  href={link.href}
                  {...(link.external
                    ? {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        'aria-label': 'Instagram da Maik Café e Donuts',
                      }
                    : {})}
                  onClick={closeMobileMenu}
                  className="px-4 py-3 rounded-xl text-base font-semibold text-[#34251F] hover:bg-[#F8EEF2] hover:text-[#D97D9E] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[#EAA5BA] text-sm" aria-hidden="true">→</span>
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-[#F8EEF2]">
                <a
                  href={IFOOD_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#D97D9E] text-white font-bold text-sm tracking-wide shadow-sm"
                >
                  <span>PEDIR PELO IFOOD</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
