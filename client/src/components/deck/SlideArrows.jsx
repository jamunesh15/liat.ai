import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDeck } from '../../context/DeckContext';

export default function SlideArrows() {
  const { next, prev, currentSlide, total } = useDeck();
  return (
    <>
      {currentSlide > 0 && (
        <button className="arrow-btn arrow-left" onClick={prev}>
          <ChevronLeft size={28} />
        </button>
      )}
      {currentSlide < total - 1 && (
        <button className="arrow-btn arrow-right" onClick={next}>
          <ChevronRight size={28} />
        </button>
      )}
    </>
  );
}