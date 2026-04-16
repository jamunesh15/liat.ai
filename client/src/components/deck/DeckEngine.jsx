import { useEffect } from 'react';
import { useDeck } from '../../context/DeckContext';
import SlideRenderer from './SlideRenderer';
import DeckNav from './DeckNav';
import SlideArrows from './SlideArrows';
import SlideCounter from './SlideCounter';

export default function DeckEngine() {
  const { next, prev } = useDeck();

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  return (
    <div className="deck-container">
      <DeckNav />
      <SlideRenderer />
      <SlideArrows />
      <SlideCounter />
    </div>
  );
}