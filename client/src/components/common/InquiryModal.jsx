import { useMemo, useState } from 'react';
import inquiryService from '../../services/inquiryService';
import { useDeck } from '../../context/DeckContext';

export default function InquiryModal() {
  const { inquiryModal, closeInquiryModal } = useDeck();
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', text: '' });
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const submitMap = useMemo(
    () => ({
      leasing: inquiryService.submitLeasing,
      sponsorship: inquiryService.submitSponsorship,
      event: inquiryService.submitEvent,
    }),
    []
  );

  if (!inquiryModal.open || !inquiryModal.action) return null;

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onClose = () => {
    if (!submitting) {
      closeInquiryModal();
      setStatus({ type: '', text: '' });
      setForm({ name: '', email: '', company: '', message: '' });
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const submitFn = submitMap[inquiryModal.action.type];
    if (!submitFn) {
      setStatus({ type: 'error', text: 'This inquiry type is not configured yet.' });
      return;
    }

    try {
      setSubmitting(true);
      await submitFn({
        ...form,
        message:
          form.message ||
          `Interested in ${inquiryModal.action.label.toLowerCase()} at Mall of America.`,
        source: 'deck-inquiry-modal',
      });

      setStatus({
        type: 'success',
        text: 'Inquiry submitted successfully. Our team will contact you shortly.',
      });
      setForm({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        text: error.message || 'Failed to submit inquiry. Please try again.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.75)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
      onClick={onClose}
    >
      <form
        onSubmit={onSubmit}
        onClick={(event) => event.stopPropagation()}
        style={{
          width: 'min(560px, 100%)',
          background: '#121212',
          border: '1px solid rgba(201,168,76,0.28)',
          borderRadius: '18px',
          padding: '24px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
          display: 'grid',
          gap: '12px',
        }}
      >
        <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '1.8rem' }}>
          {inquiryModal.action.label}
        </h3>
        <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
          Submit your details and our team will get back to you.
        </p>

        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Full name"
          required
          style={fieldStyle}
        />
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="Work email"
          type="email"
          required
          style={fieldStyle}
        />
        <input
          name="company"
          value={form.company}
          onChange={onChange}
          placeholder="Company"
          required
          style={fieldStyle}
        />
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          placeholder="Tell us what you're looking for"
          required
          rows={4}
          style={{ ...fieldStyle, resize: 'vertical' }}
        />

        {status.text && (
          <div
            style={{
              background: status.type === 'success' ? 'rgba(68, 190, 122, 0.14)' : 'rgba(255, 99, 99, 0.14)',
              border: `1px solid ${status.type === 'success' ? 'rgba(68, 190, 122, 0.5)' : 'rgba(255, 99, 99, 0.5)'}`,
              color: status.type === 'success' ? '#8df0ad' : '#ffb1b1',
              padding: '10px 12px',
              borderRadius: '10px',
              fontSize: '0.92rem',
            }}
          >
            {status.text}
          </div>
        )}

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '4px' }}>
          <button type="button" onClick={onClose} disabled={submitting} className="cta-btn-gold" style={{ background: '#2a2a2a', color: '#fff' }}>
            Cancel
          </button>
          <button type="submit" className="cta-btn-primary" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit Inquiry'}
          </button>
        </div>
      </form>
    </div>
  );
}

const fieldStyle = {
  width: '100%',
  background: '#1a1a1a',
  color: '#fff',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '10px',
  padding: '12px 14px',
  outline: 'none',
  fontFamily: 'var(--font-body)',
  fontSize: '0.98rem',
};
