import BookingCTA from './BookingCTA';

const EVENTS = [
  { title: 'Concert Programming', body: 'Large-format audience moments with high digital spillover.' },
  { title: 'Brand Activations', body: 'Premium consumer engagement with measurable footfall uplift.' },
  { title: 'Exposition Capacity', body: 'Flexible venue geometry for trade, corporate, and fan conventions.' },
];

const EventsModule = () => {
  return (
    <div className="feature-grid">
      {EVENTS.map((event) => (
        <article className="feature-card" key={event.title}>
          <h3>{event.title}</h3>
          <p>{event.body}</p>
        </article>
      ))}
      <BookingCTA />
    </div>
  );
};

export default EventsModule;
