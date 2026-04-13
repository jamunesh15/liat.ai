const VideoPlayer = ({ src, poster, className = '', overlay = true }) => {
  return (
    <div className={`absolute inset-0 ${className}`.trim()}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        className="h-full w-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      {overlay && <div className="absolute inset-0 bg-black/55" />}
    </div>
  );
};

export default VideoPlayer;
