import { useDeck } from '../../context/DeckContext';

export default function SlideCounter() {
  const { currentSlide, total } = useDeck();
  return (
    <div className="slide-counter">
      {currentSlide + 1} <span>/</span> {total}
    </div>
  );
}