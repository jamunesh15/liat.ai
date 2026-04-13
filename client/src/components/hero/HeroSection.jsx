import CTAButton from '../common/CTAButton';
import VideoPlayer from '../common/VideoPlayer';
import HeroOverlay from './HeroOverlay';

const HeroSection = () => {
  return (
    <section id="overview" className="relative min-h-screen overflow-hidden border border-amber-300/20 bg-black">
      <VideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" overlay />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(246,196,78,0.22),transparent_40%)]" />
      <HeroOverlay />

      <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 flex-wrap items-center justify-center gap-3 px-4">
        <CTAButton label="Explore the Property" to="/retail" />
        <CTAButton label="Start a Conversation" to="/contact" variant="secondary" />
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2" aria-hidden="true">
        <span className="block h-4 w-4 rotate-45 border-b-2 border-r-2 border-amber-200 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
