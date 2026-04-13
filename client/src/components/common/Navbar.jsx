import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../../utils/constants';
import CTAButton from './CTAButton';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-amber-300/20 bg-[#090909]/90 backdrop-blur-lg">
      <div className="mx-auto flex min-h-[74px] w-[min(1320px,94vw)] items-center justify-between gap-4 px-2">
        <NavLink
          to="/"
          className="font-display text-xl font-semibold tracking-wide text-zinc-100 sm:text-2xl"
          onClick={() => setOpen(false)}
        >
          Mall of America
        </NavLink>

        <button
          className="inline-flex rounded-lg border border-amber-300/25 p-2 text-zinc-100 lg:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav
          className={`absolute left-0 right-0 top-[74px] border-b border-amber-300/20 bg-[#0e0e0e]/98 px-5 py-5 shadow-2xl transition-all lg:static lg:flex lg:items-center lg:gap-6 lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none ${
            open ? 'scale-y-100 opacity-100' : 'pointer-events-none scale-y-0 opacity-0 lg:pointer-events-auto lg:scale-y-100 lg:opacity-100'
          } origin-top`}
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `group relative block rounded-full px-3 py-2 text-sm font-semibold transition-colors lg:py-1 ${
                  isActive
                    ? 'bg-amber-300/12 text-amber-200'
                    : 'text-zinc-400 hover:bg-zinc-800/70 hover:text-zinc-100'
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative inline-block">
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px] w-full origin-left rounded-full bg-amber-300"
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.24, ease: 'easeOut' }}
                  />
                </span>
              )}
            </NavLink>
          ))}

          <div className="mt-4 lg:hidden">
            <CTAButton label="Get in Touch" to="/contact" className="w-full" />
          </div>
        </nav>

        <CTAButton label="Get in Touch" to="/contact" className="hidden lg:inline-flex" />
      </div>
    </header>
  );
};

export default Navbar;
