import { useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import type { MouseEvent } from 'react';

export function useMagnetic(strength = 5) {
  const reduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, {
    stiffness: 300,
    damping: 24,
    mass: 0.25,
  });

  const y = useSpring(rawY, {
    stiffness: 300,
    damping: 24,
    mass: 0.25,
  });

  const canUsePointerMotion = () =>
    !reduceMotion &&
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const onMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!canUsePointerMotion()) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const normalizedX = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const normalizedY = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    rawX.set(normalizedX * strength);
    rawY.set(normalizedY * strength);
  };

  const onMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return {
    style: { x, y },
    onMouseMove,
    onMouseLeave,
  };
}
