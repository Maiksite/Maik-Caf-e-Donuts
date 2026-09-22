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

const INTERNAL_SECTIONS = NAV_LINKS
  .filter((link) => !link.external)
  .map((link) => link.href.slice(1));

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState('inicio');
  const ifoodMagnetic = useMagnetic(6);

  useEffect(() => {
    let ticking = false;

    const updateHeaderState = () => {
      const nextScrolled = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== nextScrolled ? nextScrolled : prev));

      const markerY = window.scrollY + Math.min(window.innerHeight * 0.34, 320);
      let currentSection = INTERNAL_SECTIONS[0];

      INTERNAL_SECTIONS.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (sectionTop <= markerY) currentSection = sectionId;
      });

      setActiveNav((prev) => (prev !== currentSection ? currentSection : prev));
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        updateHeaderState();
        ticking = false;
      });
    };

    updateHeaderState();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
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
  const highlightedNav = hoveredNav ?? activeNav;

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
            onClick={() => setActiveNav('inicio')}
          >
            <BrandLogo size="md" />
          </a>

          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[#F2D8E2]/60 shadow-2xs"
            aria-label="Navegação principal"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {NAV_LINKS.map((link) => {
              const id = link.external ? slugify(link.label) : link.href.slice(1);
              const isHighlighted = highlightedNav === id;
              const isCurrentSection = !link.external && activeNav === id;

              return (
                <a
                  key={link.label}
                  id={`header-nav-${slugify(link.label)}`}
                  href={link.href}
                  {...(link.external
                    ? {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        'aria-label': 'Instagram da Maik Café e Donuts',
                      }
                    : {
                        'aria-current': isCurrentSection ? ('location' as const) : undefined,
                      })}
                  onMouseEnter={() => setHoveredNav(id)}
                  onClick={() => {
                    if (!link.external) setActiveNav(id);
                  }}
                  className={`relative isolate overflow-hidden px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-colors duration-200 ${
                    isHighlighted ? 'text-[#D97D9E]' : 'text-[#4A3028] hover:text-[#D97D9E]'
                  }`}
                >
                  {isHighlighted && (
                    <motion.span
                      layoutId="header-nav-highlight-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-[#F8EEF2] pointer-events-none"
                      transition={{ type: 'spring', stiffness: 420, damping: 34, mass: 0.65 }}
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
              className="touch-feedback px-3 py-1.5 rounded-full bg-[#D97D9E] text-white font-bold text-xs tracking-wider shadow-2xs flex items-center gap-1"
            >
              <span>iFood</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              id="btn-mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="touch-feedback p-2 rounded-xl text-[#34251F] hover:bg-[#F8EEF2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D97D9E]"
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
              {NAV_LINKS.map((link) => {
                const sectionId = link.external ? null : link.href.slice(1);
                const isCurrentSection = sectionId === activeNav;

                return (
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
                      : {
                          'aria-current': isCurrentSection ? ('location' as const) : undefined,
                        })}
                    onClick={() => {
                      if (sectionId) setActiveNav(sectionId);
                      closeMobileMenu();
                    }}
                    className={`touch-feedback px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                      isCurrentSection
                        ? 'bg-[#F8EEF2] text-[#D97D9E]'
                        : 'text-[#34251F] hover:bg-[#F8EEF2] hover:text-[#D97D9E]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-[#EAA5BA] text-sm" aria-hidden="true">→</span>
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[#F8EEF2]">
                <a
                  href={IFOOD_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="touch-feedback w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#D97D9E] text-white font-bold text-sm tracking-wide shadow-sm"
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
