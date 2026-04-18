import { useDeck } from '../../context/DeckContext';

export default function CTASlide({ data }) {
  const { openInquiryModal } = useDeck();

  return (
    <>
      <div
        className="slide"
        style={{
          backgroundImage: `url(${data.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="slide-overlay" style={{ background: 'rgba(0,0,0,0.85)' }} />

        <div className="slide-content" style={{ maxWidth: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1
            className="slide-headline"
            style={{ marginBottom: '24px' }}
          >
            {data.headline}
          </h1>

          <p
            className="slide-subheadline"
            style={{ marginBottom: '60px', color: 'var(--text-primary)', fontSize: '1.2rem' }}
          >
            {data.subheadline}
          </p>

          <div
            style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}
          >
            {data.actions.map((action, idx) => (
              <div key={idx}>
                <button
                  type="button"
                  className="cta-btn-primary"
                  onClick={() => openInquiryModal(action)}
                  style={{
                    padding: '24px 48px',
                    fontSize: '1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    borderRadius: '40px',
                    width: '300px',
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px rgba(201,168,76,0.15)'
                  }}
                >
                  {action.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
