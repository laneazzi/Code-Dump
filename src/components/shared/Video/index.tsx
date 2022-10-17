import React, { FC } from 'react';

interface IVideoProps {
  src: string;
  loop?: boolean;
  muted?: boolean;
  className: string;
  autoPlay?: boolean;
}

const Video: FC<IVideoProps> = ({ src, autoPlay, muted, loop, className }) => {
  return <video src={src} autoPlay={autoPlay} muted={muted} loop={loop} className={className} />;
};

export default Video;
