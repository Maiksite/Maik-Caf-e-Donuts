import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Product } from '../types';
import { IFOOD_STORE_URL } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close with ESC key and lock body scroll
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [product, onClose]);

  if (!product) return null;

  const targetUrl = product.ifoodUrl || IFOOD_STORE_URL;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#30221E]/50 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Box */}
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white rounded-[22px] shadow-2xl border border-[rgba(74,48,40,0.12)] overflow-hidden z-10 animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          id="btn-close-modal"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-[#30221E] hover:bg-[#FCEBF1] hover:text-[#EA789D] transition-colors flex items-center justify-center shadow-xs cursor-pointer border border-[rgba(74,48,40,0.08)]"
          aria-label="Fechar modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Image Display */}
        <div className="w-full h-56 sm:h-64 bg-gradient-to-b from-[#FAF8F6]/80 via-[#FFFFFF] to-[#FFFFFF] flex items-center justify-center relative overflow-hidden">
          {/* Soft natural grounding pedestal shadow */}
          <div
            aria-hidden="true"
            className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[60%] h-3 rounded-[100%] bg-[radial-gradient(ellipse_at_center,_rgba(74,48,40,0.06)_0%,_rgba(74,48,40,0.02)_50%,_transparent_75%)] pointer-events-none"
          />

          <div className="relative z-10 w-full h-full p-4 sm:p-5 flex items-center justify-center">
            <img
              src={product.imageUrl}
              srcSet={
                product.imageUrl.includes('/t_low/')
                  ? `${product.imageUrl} 1x, ${product.imageUrl.replace('/t_low/', '/t_medium/')} 2x`
                  : undefined
              }
              alt={product.name}
              decoding="async"
              className="max-h-full max-w-full w-auto h-auto object-contain object-center filter contrast-[1.02] brightness-[1.01] [backface-visibility:hidden]"
            />
          </div>
          <span className="absolute bottom-3 left-3 z-20 text-[11px] font-semibold px-3 py-1 rounded-full bg-white/95 text-[#4A3028] shadow-xs border border-[rgba(74,48,40,0.08)]">
            {product.category}
          </span>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6">
          <span className="inline-block text-[11px] uppercase tracking-wider text-[#EA789D] font-bold mb-1">
            {product.category}
          </span>
          <h2
            id="modal-product-title"
            className="font-sans text-xl sm:text-2xl font-bold text-[#30221E] leading-tight"
          >
            {product.name}
          </h2>

          {/* Modal Footer */}
          <div className="mt-6 pt-5 border-t border-[rgba(74,48,40,0.08)] flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wider text-[#776966] font-medium">
                Preço
              </span>
              <span className="whitespace-nowrap text-xl font-extrabold text-[#30221E]">
                {product.price || 'Consulte'}
              </span>
            </div>

            <a
              id="btn-modal-order"
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap h-[42px] px-6 rounded-full bg-[#EA789D] hover:bg-[#DD638A] text-white text-xs sm:text-sm font-bold transition-all duration-200 hover:-translate-y-px active:scale-95 shadow-xs"
            >
              Pedir agora no iFood ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
