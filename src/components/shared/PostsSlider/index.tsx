import React, { FC, useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

import { useOnClickOutside, useSliderKeys } from 'hooks';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './PostsSlider.module.scss';

type TPostsSliderProps = {
  speed?: number;
  infinite?: boolean;
  autoplay?: boolean;
  slideToShow?: number;
  autoplaySpeed?: number;
  slideToScroll?: number;
  children: React.ReactNode;
  getActiveSlide: (value: number) => void;
};

const PostsSlider: FC<TPostsSliderProps> = ({
  children,
  speed = 100,
  getActiveSlide,
  slideToShow = 1,
  autoplay = false,
  infinite = false,
  slideToScroll = 1,
  autoplaySpeed = 2000,
}) => {
  const sliderBoxRef = useRef<HTMLDivElement | null>(null);

  const [disableKeys, setDisableKeys] = useState<boolean>(false);
  const { ref } = useSliderKeys(disableKeys);

  const [slide, setSlide] = useState({ oldSlide: 0, nextSlide: 0, activeSlide: 1 });

  useEffect(() => {
    getActiveSlide(slide.activeSlide);
  }, [getActiveSlide, slide.activeSlide]);

  const useableKeys = () => setDisableKeys(true);
  const unableKeys = () => setDisableKeys(false);

  useOnClickOutside(sliderBoxRef, unableKeys);

  const settings = {
    dots: true,
    speed: speed,
    arrows: false,
    cssEase: 'linear',
    infinite: infinite,
    autoplay: autoplay,
    slidesToShow: slideToShow,
    autoplaySpeed: autoplaySpeed,
    slidesToScroll: slideToScroll,
    accessibility: true,
    beforeChange: (current: number, next: number) => {
      setSlide({ ...slide, oldSlide: current, nextSlide: next });
    },
    afterChange: (current: number) => {
      setSlide({ ...slide, activeSlide: current + 1 });
    },
  };

  return (
    <div onClick={useableKeys} ref={sliderBoxRef}>
      <Slider className={styles.slider} {...settings} ref={ref}>
        {children}
      </Slider>
    </div>
  );
};

export default PostsSlider;
