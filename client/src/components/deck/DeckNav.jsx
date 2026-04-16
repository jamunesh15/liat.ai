import { useDeck } from '../../context/DeckContext';
import { CHAPTERS } from '../../data/slides';

export default function DeckNav() {
  const { goToChapter, slides, currentSlide } = useDeck();
  const activeChapter = slides[currentSlide]?.chapter;

  return (
    <nav className="deck-nav">
      <div className="deck-nav-logo">Mall of America</div>
      <div className="deck-nav-chapters">
        {CHAPTERS.map(ch => (
          <button
            key={ch.key}
            onClick={() => goToChapter(ch.key)}
            className={`deck-nav-item ${activeChapter === ch.key ? 'active' : ''}`}
          >
            {ch.label}
          </button>
        ))}
      </div>
      <button className="cta-btn-gold" onClick={() => goToChapter('leasing')}>
        Get in Touch
      </button>
    </nav>
  );
}