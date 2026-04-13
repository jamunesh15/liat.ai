import { useCounterAnimation } from '../../hooks/useCounterAnimation';
import { formatStatNumber } from '../../utils/formatters';

const AnimatedCounter = ({ value, suffix = '' }) => {
  const count = useCounterAnimation(value, 1300, true);
  return <span>{`${formatStatNumber(count)}${suffix}`}</span>;
};

export default AnimatedCounter;
