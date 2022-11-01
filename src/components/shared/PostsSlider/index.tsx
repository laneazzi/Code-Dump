import React, { FC, useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

import { useOnClickOutside, useSliderKeys } from 'hooks';

import styles from './PostsSlider.module.scss';

type TPostsSliderProps = {
  children: React.ReactNode;
  getActiveSlide: (value: number) => void;
};

const PostsSlider: FC<TPostsSliderProps> = ({ children, getActiveSlide }) => {
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
    speed: 100,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
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
