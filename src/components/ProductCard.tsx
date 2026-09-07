import React from 'react';
import { Product } from '../types';
import { IFOOD_STORE_URL } from '../data/products';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = React.memo(({ product, onOpenModal }) => {
  const targetUrl = product.ifoodUrl || IFOOD_STORE_URL;

  return (
    <article
      id={`product-card-${product.id}`}
      className="group flex flex-col w-full bg-white rounded-[18px] border border-[rgba(74,48,40,0.10)] shadow-[0_6px_20px_rgba(74,48,40,0.04)] hover:shadow-[0_10px_25px_rgba(74,48,40,0.08)] hover:-translate-y-[3px] transition-all duration-300 overflow-hidden"
    >
      {/* Photo Box: Clean studio presentation with balanced framing and soft grounding shadow */}
      <div
        className="w-full h-[175px] sm:h-[185px] bg-gradient-to-b from-[#FAF8F6]/70 via-[#FFFFFF] to-[#FFFFFF] flex items-center justify-center relative cursor-pointer select-none overflow-hidden"
        onClick={() => onOpenModal(product)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenModal(product);
          }
        }}
        aria-label={`Ver detalhes de ${product.name}`}
      >
        {/* Soft natural grounding pedestal shadow */}
        <div
          aria-hidden="true"
          className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-[65%] h-2.5 rounded-[100%] bg-[radial-gradient(ellipse_at_center,_rgba(74,48,40,0.06)_0%,_rgba(74,48,40,0.02)_50%,_transparent_75%)] pointer-events-none transition-opacity duration-300 group-hover:opacity-75"
        />

        {/* Centered Product Photo with balanced spacing and crisp rendering */}
        <div className="relative z-10 w-full h-full p-2.5 sm:p-3 flex items-center justify-center">
          <img
            src={product.imageUrl}
            srcSet={
              product.imageUrl.includes('/t_low/')
                ? `${product.imageUrl} 1x, ${product.imageUrl.replace('/t_low/', '/t_medium/')} 2x`
                : undefined
            }
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="max-h-full max-w-full w-auto h-auto object-contain object-center filter contrast-[1.02] brightness-[1.01] group-hover:scale-[1.03] transition-transform duration-300 ease-out pointer-events-none [backface-visibility:hidden] [transform:translateZ(0)]"
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between gap-3">
        <h3
          className="text-[15px] sm:text-[16px] font-bold text-[#30221E] leading-snug cursor-pointer hover:text-[#EA789D] transition-colors line-clamp-2 min-h-[42px] flex items-start"
          onClick={() => onOpenModal(product)}
        >
          {product.name}
        </h3>

        {/* Footer Row: Price + Pedir agora button */}
        <div className="mt-auto pt-1 flex items-center justify-between gap-2">
          {/* Price: strictly single line, never breaks */}
          <span className="whitespace-nowrap inline-flex items-center text-[16px] sm:text-[17px] font-extrabold text-[#30221E] tracking-tight">
            {product.price || 'Consulte'}
          </span>

          {/* Pedir agora button: direct absolute external link */}
          <a
            id={`btn-order-${product.id}`}
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center whitespace-nowrap h-[34px] px-3.5 rounded-full bg-[#EA789D] hover:bg-[#DD638A] text-white text-[11px] sm:text-[12px] font-bold border-none transition-all duration-200 hover:-translate-y-px active:scale-95 shrink-0 select-none shadow-2xs"
            aria-label={`Pedir ${product.name} no iFood (abre em nova aba)`}
          >
            Pedir agora ↗
          </a>
        </div>
      </div>
    </article>
  );
});
