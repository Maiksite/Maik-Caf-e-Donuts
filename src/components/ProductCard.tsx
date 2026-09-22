import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '../types';
import { IFOOD_STORE_URL } from '../data/products';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = React.memo(({ product, onOpenModal }) => {
  const targetUrl = product.ifoodUrl || IFOOD_STORE_URL;
  const shouldReduceMotion = useReducedMotion();

  return (
    <article
      id={`product-card-${product.id}`}
      className="product-card-touch group flex flex-col w-full bg-white rounded-[14px] sm:rounded-[18px] border border-[rgba(74,48,40,0.10)] shadow-[0_4px_16px_rgba(74,48,40,0.04)] sm:shadow-[0_6px_20px_rgba(74,48,40,0.04)] hover:border-[#EAA5BA]/70 hover:shadow-[0_10px_25px_rgba(74,48,40,0.08)] hover:-translate-y-[3px] transition-[transform,box-shadow,border-color] duration-300 overflow-hidden"
    >
      <button
        type="button"
        className="touch-surface w-full h-[135px] sm:h-[185px] bg-gradient-to-b from-[#FAF8F6]/70 via-[#FFFFFF] to-[#FFFFFF] flex items-center justify-center relative cursor-pointer select-none overflow-hidden text-left"
        onClick={() => onOpenModal(product)}
        aria-label={`Ver detalhes de ${product.name}`}
      >
        <div
          aria-hidden="true"
          className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-[65%] h-2.5 rounded-[100%] bg-[radial-gradient(ellipse_at_center,_rgba(74,48,40,0.06)_0%,_rgba(74,48,40,0.02)_50%,_transparent_75%)] pointer-events-none transition-opacity duration-300 group-hover:opacity-75"
        />

        <div className="relative z-10 w-full h-full p-2 sm:p-3 flex items-center justify-center">
          <motion.img
            layoutId={shouldReduceMotion ? undefined : `product-image-${product.id}`}
            transition={{ layout: { type: 'spring', stiffness: 390, damping: 34, mass: 0.7 } }}
            src={product.imageUrl}
            srcSet={
              product.imageUrl.includes('/t_low/')
                ? `${product.imageUrl} 1x, ${product.imageUrl.replace('/t_low/', '/t_medium/')} 2x`
                : undefined
            }
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="max-h-full max-w-full w-auto h-auto object-contain object-center filter contrast-[1.02] brightness-[1.01] group-hover:scale-[1.035] transition-transform duration-300 ease-out pointer-events-none [backface-visibility:hidden] [transform:translateZ(0)]"
          />
        </div>
      </button>

      <div className="p-2.5 sm:p-4 flex flex-col flex-1 justify-between gap-2 sm:gap-3">
        <h3 className="font-sans text-[13px] sm:text-[16px] font-bold text-[#30221E] leading-snug line-clamp-2 min-h-[36px] sm:min-h-[42px] flex items-start">
          <button
            type="button"
            onClick={() => onOpenModal(product)}
            className="touch-feedback text-left hover:text-[#EA789D] transition-colors cursor-pointer rounded-sm"
            aria-label={`Abrir detalhes de ${product.name}`}
          >
            {product.name}
          </button>
        </h3>

        <div className="mt-auto pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
          <span className="whitespace-nowrap inline-flex items-center text-[14px] sm:text-[17px] font-extrabold text-[#30221E] tracking-tight">
            {product.price || 'Consulte'}
          </span>

          <a
            id={`btn-order-${product.id}`}
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-feedback group/order inline-flex items-center justify-center gap-1 whitespace-nowrap h-[30px] sm:h-[34px] px-2.5 sm:px-3.5 rounded-full bg-[#EA789D] hover:bg-transparent hover:text-[#EA789D] text-white text-[11px] sm:text-[12px] font-bold border border-[#EA789D] transition-[background-color,color,transform,box-shadow] duration-300 hover:-translate-y-px active:scale-[0.98] shrink-0 select-none shadow-2xs hover:shadow-xs w-full sm:w-auto"
            aria-label={`Pedir ${product.name} no iFood (abre em nova aba)`}
          >
            <span>Pedir agora</span>
            <ArrowUpRight
              className="w-3 h-3 transition-transform duration-200 group-hover/order:translate-x-0.5 group-hover/order:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </article>
  );
});
