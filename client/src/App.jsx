import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ApiActivityLoader from './components/common/ApiActivityLoader';
import LoadingScreen from './components/common/LoadingScreen';

const Home = lazy(() => import('./pages/Home'));
const Retail = lazy(() => import('./pages/Retail'));
const Entertainment = lazy(() => import('./pages/Entertainment'));
const Events = lazy(() => import('./pages/Events'));
const Sponsorship = lazy(() => import('./pages/Sponsorship'));
const Leasing = lazy(() => import('./pages/Leasing'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <ApiActivityLoader />
      <Navbar />
      <main className="overflow-x-hidden">
        <Suspense fallback={<LoadingScreen />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/retail" element={<Retail />} />
                <Route path="/entertainment" element={<Entertainment />} />
                <Route path="/events" element={<Events />} />
                <Route path="/sponsorship" element={<Sponsorship />} />
                <Route path="/leasing" element={<Leasing />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
