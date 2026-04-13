import { useState } from 'react';
import SectionWrapper from '../components/common/SectionWrapper';
import contactService from '../services/contactService';

const INITIAL_FORM = {
  name: '',
  email: '',
  company: '',
  interestType: 'leasing',
  message: '',
};

const FAQ_ITEMS = [
  {
    q: 'How quickly can a retail or sponsorship proposal be prepared?',
    a: 'Most first-pass proposals are shared within 1-2 business days after receiving your objectives and timeline.',
  },
  {
    q: 'Can we start with a short activation before long-term commitment?',
    a: 'Yes. Pop-up programs and pilot activations are available for many categories before scaling into long-term placements.',
  },
  {
    q: 'Do you support co-branded campaigns with events and attractions?',
    a: 'Yes. Multi-format campaigns can combine events, in-property media, and attraction zones for stronger audience impact.',
  },
];

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState({ loading: false, message: '', error: '' });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, message: '', error: '' });

    try {
      await contactService.submit(form);
      setStatus({ loading: false, message: 'Inquiry sent successfully.', error: '' });
      setForm(INITIAL_FORM);
    } catch (error) {
      setStatus({ loading: false, message: '', error: error.message });
    }
  };

  return (
    <SectionWrapper
      id="contact"
      title="Start a Conversation"
      subtitle="Share your objectives and timeline. We will recommend the right retail, event, or sponsorship pathway."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <aside className="rounded-2xl border border-amber-300/20 bg-zinc-900/50 p-6">
          <h3 className="font-display text-3xl text-zinc-100">What to Include</h3>
          <ul className="mt-4 space-y-3 text-zinc-300">
            <li>Business objective and preferred launch window</li>
            <li>Category, footprint, or activation type</li>
            <li>Any audience or campaign goals you are targeting</li>
            <li>Decision timeline and key stakeholders</li>
          </ul>
          <p className="mt-6 text-sm text-zinc-400">
            Typical response window: 1-2 business days with a recommended next-step plan.
          </p>
        </aside>

        <div className="rounded-2xl border border-amber-300/20 bg-black/35 p-6">
          <form className="grid gap-4" onSubmit={onSubmit}>
            <input
              className="rounded-xl border border-amber-300/20 bg-zinc-950/70 px-4 py-3 text-zinc-100 placeholder:text-zinc-500"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={onChange}
              required
            />
            <input
              className="rounded-xl border border-amber-300/20 bg-zinc-950/70 px-4 py-3 text-zinc-100 placeholder:text-zinc-500"
              name="email"
              type="email"
              placeholder="Work Email"
              value={form.email}
              onChange={onChange}
              required
            />
            <input
              className="rounded-xl border border-amber-300/20 bg-zinc-950/70 px-4 py-3 text-zinc-100 placeholder:text-zinc-500"
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={onChange}
              required
            />
            <select
              className="rounded-xl border border-amber-300/20 bg-zinc-950/70 px-4 py-3 text-zinc-100"
              name="interestType"
              value={form.interestType}
              onChange={onChange}
            >
              <option value="leasing">Leasing</option>
              <option value="sponsorship">Sponsorship</option>
              <option value="event">Event Booking</option>
            </select>
            <textarea
              className="rounded-xl border border-amber-300/20 bg-zinc-950/70 px-4 py-3 text-zinc-100 placeholder:text-zinc-500"
              name="message"
              placeholder="Tell us what you want to launch at MOA..."
              value={form.message}
              onChange={onChange}
              rows={6}
              required
            />
            <button
              type="submit"
              disabled={status.loading}
              className="inline-flex items-center justify-center rounded-full border border-amber-300 bg-gradient-to-r from-amber-300 to-yellow-200 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 disabled:opacity-70"
            >
              {status.loading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-700 border-t-transparent" />
                  Sending...
                </span>
              ) : (
                'Submit Inquiry'
              )}
            </button>
          </form>

          {status.message && <p className="mt-3 text-sm text-emerald-400">{status.message}</p>}
          {status.error && <p className="mt-3 text-sm text-rose-400">{status.error}</p>}
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {FAQ_ITEMS.map((item) => (
          <article key={item.q} className="rounded-2xl border border-amber-300/20 bg-zinc-900/40 p-5">
            <h4 className="font-display text-2xl text-zinc-100">{item.q}</h4>
            <p className="mt-2 text-zinc-400">{item.a}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Contact;
