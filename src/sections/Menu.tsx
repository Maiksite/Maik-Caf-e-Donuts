import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { Search, X, AlertCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ProductCategory, Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';

const getCategoryTabId = (category: ProductCategory) =>
  `tab-${category
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}`;

export const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (categoryScrollRef.current) {
      categoryScrollRef.current.scrollLeft = 0;
    }
  }, []);

  useEffect(() => {
    const scrollContainer = categoryScrollRef.current;
    if (!scrollContainer || !window.matchMedia('(max-width: 767px)').matches) return;

    const activeTab = document.getElementById(getCategoryTabId(selectedCategory));
    if (!activeTab) return;

    const targetLeft =
      activeTab.offsetLeft - (scrollContainer.clientWidth - activeTab.offsetWidth) / 2;

    scrollContainer.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    });
  }, [selectedCategory, shouldReduceMotion]);

  const handleOpenModal = useCallback((product: Product) => {
    setActiveModalProduct(product);
  }, []);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'Todos' || product.category === selectedCategory;

      if (!matchesCategory) return false;
      if (!query) return true;

      return (
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    });
  }, [selectedCategory, searchQuery]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('Todos');
  };

  const handleCategoryKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    category: ProductCategory,
  ) => {
    const currentIndex = CATEGORIES.indexOf(category);
    let nextIndex = currentIndex;

    if (event.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % CATEGORIES.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + CATEGORIES.length) % CATEGORIES.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = CATEGORIES.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    const nextCategory = CATEGORIES[nextIndex];
    setSelectedCategory(nextCategory);

    window.requestAnimationFrame(() => {
      document.getElementById(getCategoryTabId(nextCategory))?.focus();
    });
  };

  const selectedTabId = getCategoryTabId(selectedCategory);

  return (
    <section
      id="cardapio"
      className="py-16 md:py-24 bg-white relative"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-[1280px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#30221E] tracking-tight">
            Nosso cardápio
          </h2>
          <div className="w-12 h-1 bg-[#EA789D] rounded-full mx-auto mt-2" aria-hidden="true" />
        </div>

        <div className="flex flex-col items-center gap-4 max-w-6xl mx-auto mb-8">
          <div className="group w-full max-w-md relative">
            <label htmlFor="search-input-menu" className="sr-only">
              Buscar no cardápio
            </label>
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#776966]/60 group-focus-within:text-[#EA789D] transition-colors duration-200 pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="search-input-menu"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar no cardápio..."
              autoComplete="off"
              className="w-full pl-10 pr-9 py-2.5 rounded-full bg-white border border-[rgba(74,48,40,0.12)] text-xs sm:text-sm text-[#30221E] placeholder-[#776966]/60 shadow-2xs focus:border-[#EA789D] focus:ring-[3px] focus:ring-[#EA789D]/10 transition-[border-color,box-shadow] duration-200 outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="touch-feedback absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-[#776966] hover:text-[#30221E] hover:bg-[#FCEBF1] transition-colors"
                aria-label="Limpar busca"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div
            ref={categoryScrollRef}
            className="w-full overflow-x-auto overflow-y-hidden px-4 sm:px-6 scroll-smooth no-scrollbar"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div
              className="flex w-max items-center gap-3 py-2"
              role="tablist"
              aria-label="Categorias do cardápio"
            >
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                const tabId = getCategoryTabId(category);

                return (
                  <motion.button
                    key={category}
                    id={tabId}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    onKeyDown={(event) => handleCategoryKeyDown(event, category)}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    className={`relative isolate shrink-0 overflow-hidden px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border transition-[color,border-color,box-shadow] duration-200 cursor-pointer ${
                      isActive
                        ? 'text-white border-transparent shadow-2xs'
                        : 'bg-white text-[#4A3028] border-[rgba(74,48,40,0.12)] hover:border-[#EAA5BA] hover:text-[#D97D9E]'
                    }`}
                    aria-selected={isActive}
                    aria-controls="catalog-results"
                    role="tab"
                    tabIndex={isActive ? 0 : -1}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="catalog-category-active-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-[#EA789D]"
                        transition={{ type: 'spring', stiffness: 430, damping: 36, mass: 0.65 }}
                      />
                    )}
                    <span className="relative z-10">{category}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="sr-only" role="status" aria-live="polite">
          {filteredProducts.length} produtos encontrados
        </div>

        {(selectedCategory !== 'Todos' || searchQuery) && (
          <div className="flex items-center justify-between gap-4 text-xs text-[#776966] mb-5 pb-2 border-b border-[rgba(74,48,40,0.08)]">
            <span>
              Mostrando <strong>{filteredProducts.length}</strong> produtos
              {selectedCategory !== 'Todos' && ` em ${selectedCategory}`}
              {searchQuery && ` para "${searchQuery}"`}
            </span>
            <button
              type="button"
              onClick={resetFilters}
              className="touch-feedback shrink-0 text-[#EA789D] hover:text-[#DD638A] font-semibold cursor-pointer transition-colors"
            >
              Ver todos os produtos
            </button>
          </div>
        )}

        {filteredProducts.length > 0 ? (
          <div
            id="catalog-results"
            role="tabpanel"
            aria-labelledby={selectedTabId}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-[20px] max-w-[1280px] mx-auto"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onOpenModal={handleOpenModal} />
            ))}
          </div>
        ) : (
          <div
            id="catalog-results"
            role="tabpanel"
            aria-labelledby={selectedTabId}
            className="text-center py-12 px-4 rounded-2xl bg-[#FAF8F8] border border-[rgba(74,48,40,0.08)] max-w-md mx-auto my-8"
          >
            <div className="w-10 h-10 rounded-full bg-[#FFF9FB] text-[#EA789D] flex items-center justify-center mx-auto mb-3 border border-[rgba(74,48,40,0.08)]">
              <AlertCircle className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-serif font-bold text-base text-[#30221E]">
              Nenhum produto encontrado
            </h3>
            <p className="mt-1 text-xs text-[#776966]">
              Não encontramos resultados para &quot;{searchQuery}&quot;.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="touch-feedback mt-3 px-4 py-2 rounded-full bg-[#EA789D] hover:bg-[#DD638A] text-white text-xs font-bold transition-colors"
            >
              Ver todos os produtos
            </button>
          </div>
        )}

        {selectedCategory !== 'Todos' && filteredProducts.length > 0 && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setSelectedCategory('Todos')}
              className="touch-feedback inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white hover:bg-[#FFF9FB] border border-[#EA789D] text-[#EA789D] hover:text-[#DD638A] text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-xs hover:-translate-y-px"
            >
              VER TODOS OS PRODUTOS
            </button>
          </div>
        )}
      </div>

      <ProductModal product={activeModalProduct} onClose={() => setActiveModalProduct(null)} />
    </section>
  );
};
