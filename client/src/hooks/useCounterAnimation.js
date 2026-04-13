import { useEffect, useState } from 'react';

export const useCounterAnimation = (target, duration = 1200, enabled = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return undefined;

    let start = 0;
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };

    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [target, duration, enabled]);

  return count;
};
