import { useMemo } from 'react';

export const useScrollAnimation = () => {
  return useMemo(
    () => ({
      fadeUp: {
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
      },
      staggerContainer: {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      },
    }),
    []
  );
};
