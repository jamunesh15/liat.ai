import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ApiActivityLoader = () => {
  const [activeRequests, setActiveRequests] = useState(0);

  useEffect(() => {
    const handleStart = () => setActiveRequests((count) => count + 1);
    const handleEnd = () => setActiveRequests((count) => (count > 0 ? count - 1 : 0));

    window.addEventListener('api:request:start', handleStart);
    window.addEventListener('api:request:end', handleEnd);

    return () => {
      window.removeEventListener('api:request:start', handleStart);
      window.removeEventListener('api:request:end', handleEnd);
    };
  }, []);

  return (
    <AnimatePresence>
      {activeRequests > 0 ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none fixed inset-x-0 top-0 z-[85] h-1 overflow-hidden bg-zinc-800/70"
          >
            <motion.div
              className="h-full w-1/3 bg-linear-to-r from-amber-200 via-yellow-300 to-amber-400"
              initial={{ x: '-100%' }}
              animate={{ x: '320%' }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.05, ease: 'linear' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none fixed left-1/2 top-5 z-[86] -translate-x-1/2"
          >
            <div className="flex items-center gap-3 rounded-full border border-amber-300/55 bg-zinc-900/95 px-4 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-amber-300" />
              <p className="text-sm font-semibold tracking-wide text-zinc-100">
                Connecting to server... ({activeRequests})
              </p>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default ApiActivityLoader;
