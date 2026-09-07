import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { Search, X, AlertCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ProductCategory, Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';

export const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  // Guarantee that category scroll starts at left: 0 on initial load
  useEffect(() => {
    if (categoryScrollRef.current) {
      categoryScrollRef.current.scrollLeft = 0;
    }
  }, []);

  const handleOpenModal = useCallback((product: Product) => {
    setActiveModalProduct(product);
  }, []);

  // Filter products by category and search query in real time
  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'Todos' || product.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!query) return true;

      const matchesName = product.name.toLowerCase().includes(query);
      const matchesCatName = product.category.toLowerCase().includes(query);

      return matchesName || matchesCatName;
    });
  }, [selectedCategory, searchQuery]);

  const gridVariants = useMemo(() => {
    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { duration: 0 } },
      };
    }
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.18,
          ease: 'easeOut',
          staggerChildren: 0.012,
        },
      },
    };
  }, [shouldReduceMotion]);

  const itemVariants = useMemo(() => {
    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 0 } },
      };
    }
    return {
      hidden: { opacity: 0, y: 4 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.2, ease: 'easeOut' },
      },
    };
  }, [shouldReduceMotion]);

  return (
    <section
      id="cardapio"
      className="py-16 md:py-24 bg-white relative"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-[1280px] mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#30221E] tracking-tight">
            Nosso cardápio
          </h2>
          <div className="w-12 h-1 bg-[#EA789D] rounded-full mx-auto mt-2" />
        </div>

        {/* Search and Category Filter Section */}
        <div className="flex flex-col items-center gap-4 max-w-6xl mx-auto mb-8">
          {/* Search bar */}
          <div className="w-full max-w-md relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#776966]/60 pointer-events-none" />
            <input
              id="search-input-menu"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar no cardápio..."
              className="w-full pl-10 pr-9 py-2.5 rounded-full bg-white border border-[rgba(74,48,40,0.12)] text-xs sm:text-sm text-[#30221E] placeholder-[#776966]/60 shadow-2xs focus:border-[#EA789D] focus:ring-1 focus:ring-[#EA789D] transition-all outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-[#776966] hover:text-[#30221E] hover:bg-[#FCEBF1] transition-colors"
                aria-label="Limpar busca"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Categories Horizontal Pills */}
          <div
            ref={categoryScrollRef}
            className="w-full overflow-x-auto overflow-y-hidden px-4 sm:px-6 scroll-smooth no-scrollbar"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="flex w-max items-center gap-3 py-2">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    id={`tab-${category.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setSelectedCategory(category)}
                    className={`shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#EA789D] text-white border border-transparent shadow-2xs'
                        : 'bg-white text-[#4A3028] border border-[rgba(74,48,40,0.12)] hover:bg-[#FCEBF1]'
                    }`}
                    aria-selected={isActive}
                    role="tab"
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Counter and Filter Reset */}
        {(selectedCategory !== 'Todos' || searchQuery) && (
          <div className="flex items-center justify-between text-xs text-[#776966] mb-5 pb-2 border-b border-[rgba(74,48,40,0.08)]">
            <span>
              Mostrando <strong>{filteredProducts.length}</strong> produtos
              {selectedCategory !== 'Todos' && ` em ${selectedCategory}`}
              {searchQuery && ` para "${searchQuery}"`}
            </span>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Todos');
              }}
              className="text-[#EA789D] hover:text-[#DD638A] font-semibold cursor-pointer transition-colors"
            >
              Ver todos os produtos
            </button>
          </div>
        )}

        {/* Products Grid: 2 cols (mobile), 2 cols (sm), 3 cols (md), 4 cols (lg), 5 cols (2xl) */}
        {filteredProducts.length > 0 ? (
          <motion.div
            key={selectedCategory + searchQuery}
            initial="hidden"
            animate="visible"
            variants={gridVariants}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-[20px] max-w-[1280px] mx-auto"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
              >
                <ProductCard
                  product={product}
                  onOpenModal={handleOpenModal}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-12 px-4 rounded-2xl bg-[#FAF8F8] border border-[rgba(74,48,40,0.08)] max-w-md mx-auto my-8">
            <div className="w-10 h-10 rounded-full bg-[#FFF9FB] text-[#EA789D] flex items-center justify-center mx-auto mb-3 border border-[rgba(74,48,40,0.08)]">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-base text-[#30221E]">
              Nenhum produto encontrado
            </h3>
            <p className="mt-1 text-xs text-[#776966]">
              Não encontramos resultados para &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Todos');
              }}
              className="mt-3 px-4 py-2 rounded-full bg-[#EA789D] hover:bg-[#DD638A] text-white text-xs font-bold transition-colors"
            >
              Ver todos os produtos
            </button>
          </div>
        )}

        {/* Optional Reset / See all products button at bottom if filtered */}
        {selectedCategory !== 'Todos' && filteredProducts.length > 0 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setSelectedCategory('Todos')}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white hover:bg-[#FFF9FB] border border-[#EA789D] text-[#EA789D] hover:text-[#DD638A] text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-xs"
            >
              VER TODOS OS PRODUTOS
            </button>
          </div>
        )}
      </div>

      {/* Accessible Product Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </section>
  );
};
