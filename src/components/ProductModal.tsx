import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import { Product } from '../types';
import { IFOOD_STORE_URL } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!product) return;

    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusModal = window.requestAnimationFrame(() => {
      const firstFocusable = modalRef.current?.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      (firstFocusable ?? modalRef.current)?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !modalRef.current) return;

      const focusable = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute('aria-hidden'));

      if (focusable.length === 0) {
        event.preventDefault();
        modalRef.current.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusModal);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedRef.current?.focus();
    };
  }, [product, onClose]);

  const targetUrl = product?.ifoodUrl || IFOOD_STORE_URL;
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.26, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          key={product.id}
          className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-product-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.18 }}
        >
          <motion.button
            type="button"
            className="fixed inset-0 bg-[#30221E]/50 backdrop-blur-sm cursor-default"
            onClick={onClose}
            aria-label="Fechar detalhes do produto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.18 }}
          />

          <motion.div
            ref={modalRef}
            tabIndex={-1}
            className="relative w-full max-w-lg max-h-[calc(100dvh-1.25rem)] sm:max-h-[calc(100dvh-3rem)] bg-white rounded-[20px] sm:rounded-[22px] shadow-2xl border border-[rgba(74,48,40,0.12)] overflow-x-hidden overflow-y-auto overscroll-contain z-10 outline-none"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8, scale: 0.995 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 5, scale: 0.995 }}
            transition={transition}
          >
            <button
              id="btn-close-modal"
              type="button"
              onClick={onClose}
              className="touch-feedback absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-[#30221E] hover:bg-[#FCEBF1] hover:text-[#EA789D] transition-colors flex items-center justify-center shadow-xs cursor-pointer border border-[rgba(74,48,40,0.08)]"
              aria-label="Fechar modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-full h-48 sm:h-64 bg-gradient-to-b from-[#FAF8F6]/80 via-[#FFFFFF] to-[#FFFFFF] flex items-center justify-center relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[60%] h-3 rounded-[100%] bg-[radial-gradient(ellipse_at_center,_rgba(74,48,40,0.06)_0%,_rgba(74,48,40,0.02)_50%,_transparent_75%)] pointer-events-none"
              />

              <div className="relative z-10 w-full h-full p-4 sm:p-5 flex items-center justify-center">
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
                  decoding="async"
                  className="max-h-full max-w-full w-auto h-auto object-contain object-center filter contrast-[1.02] brightness-[1.01] [backface-visibility:hidden]"
                />
              </div>

              <span className="absolute bottom-3 left-3 z-20 text-[11px] font-semibold px-3 py-1 rounded-full bg-white/95 text-[#4A3028] shadow-xs border border-[rgba(74,48,40,0.08)]">
                {product.category}
              </span>
            </div>

            <div className="p-4 sm:p-6">
              <span className="inline-block text-[11px] uppercase tracking-wider text-[#EA789D] font-bold mb-1">
                {product.category}
              </span>
              <h2
                id="modal-product-title"
                className="font-sans text-xl sm:text-2xl font-bold text-[#30221E] leading-tight"
              >
                {product.name}
              </h2>

              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[rgba(74,48,40,0.08)] flex items-center justify-between gap-3 sm:gap-4">
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
                  className="touch-feedback group/modal-order inline-flex items-center justify-center gap-1.5 whitespace-nowrap h-[40px] sm:h-[42px] px-4 sm:px-6 rounded-full bg-[#EA789D] hover:bg-transparent border border-[#EA789D] text-white hover:text-[#EA789D] text-[11px] min-[360px]:text-xs sm:text-sm font-bold transition-[background-color,color,transform,box-shadow] duration-300 hover:-translate-y-px active:scale-[0.98] shadow-xs hover:shadow-sm"
                >
                  <span>Pedir agora no iFood</span>
                  <ArrowUpRight
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover/modal-order:translate-x-0.5 group-hover/modal-order:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
