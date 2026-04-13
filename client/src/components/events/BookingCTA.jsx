import CTAButton from '../common/CTAButton';

const BookingCTA = () => {
  return (
    <div className="inline-cta">
      <h3>Need a High-Impact Venue?</h3>
      <p>Host concerts, launches, conventions, and branded experiences at destination scale.</p>
      <CTAButton label="Start Event Inquiry" to="/contact" />
    </div>
  );
};

export default BookingCTA;
