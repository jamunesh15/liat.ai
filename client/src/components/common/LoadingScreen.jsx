const LoadingScreen = () => {
  return (
    <div className="grid min-h-[45vh] place-items-center gap-3" role="status" aria-live="polite">
      <div className="h-11 w-11 animate-spin rounded-full border-4 border-amber-300/20 border-t-amber-300" />
      <p className="text-zinc-300">Loading Mall of America Deck...</p>
    </div>
  );
};

export default LoadingScreen;
