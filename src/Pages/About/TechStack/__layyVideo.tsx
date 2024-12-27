import React from "react";

const LazyVideo = () => {
  return (
    <div className="relative w-full h-[620px] md:h-[480px]  overflow-hidden rounded-lg">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
      preload="auto"
      playsInline
      loop
      autoPlay
      muted
      src="/about/cards-video.webm"
    ></video>
    </div>
  );
};

export default LazyVideo;
