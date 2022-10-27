import React from 'react';

type TVideoProps = {
  src: string;
  loop?: boolean;
  muted?: boolean;
  className: string;
  autoPlay?: boolean;
  controls?: boolean;
};

const Video = React.forwardRef<any, TVideoProps>(
  ({ src, autoPlay, muted, loop, className, controls }, ref) => (
    <video
      ref={ref}
      src={src}
      loop={loop}
      muted={muted}
      controls={controls}
      autoPlay={autoPlay}
      className={className}
    />
  ),
);

export default Video;
