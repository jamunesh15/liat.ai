import { MOA_STATS } from '../../utils/constants';
import AnimatedCounter from '../common/AnimatedCounter';

const StatsGrid = () => {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {MOA_STATS.map((stat) => (
        <article
          key={stat.label}
          className="rounded-2xl border border-amber-300/25 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 shadow-[0_0_0_1px_rgba(255,196,57,0.04)]"
        >
          <h3 className="font-display text-3xl text-amber-300 md:text-4xl">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          </h3>
          <p className="mt-2 text-sm uppercase tracking-wide text-zinc-400">{stat.label}</p>
        </article>
      ))}
    </div>
  );
};

export default StatsGrid;
