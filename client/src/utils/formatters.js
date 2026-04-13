export const formatCompactNumber = (value) =>
  new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value);

export const formatStatNumber = (value) => {
  if (value >= 1000000) {
    return formatCompactNumber(value).toUpperCase();
  }

  return new Intl.NumberFormat('en-US').format(value);
};

export const formatNumber = (value) => new Intl.NumberFormat('en-US').format(value);
