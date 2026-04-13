import { Link } from 'react-router-dom';

const CTAButton = ({
  label,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}) => {
  const isPrimary = variant === 'primary';
  const baseClasses =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-200/50';
  const variants = {
    primary:
      'border border-amber-300 bg-linear-to-r from-yellow-200 via-amber-300 to-amber-400 !text-zinc-900 hover:-translate-y-0.5 hover:!text-black hover:shadow-[0_10px_30px_rgba(247,200,90,0.26)]',
    secondary:
      'border border-amber-300/65 bg-transparent text-zinc-100 hover:border-yellow-200 hover:bg-amber-200/10 hover:text-white',
  };

  const classes = `${baseClasses} ${variants[variant] || variants.primary} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} style={isPrimary ? { color: '#18181b' } : undefined}>
        {label}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} style={isPrimary ? { color: '#18181b' } : undefined}>
        {label}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      style={isPrimary ? { color: '#18181b' } : undefined}
    >
      {label}
    </button>
  );
};

export default CTAButton;
