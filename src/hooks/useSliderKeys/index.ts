import { useEffect, useRef } from 'react';
import Slider from 'react-slick';

const useSliderKeys = (disable: boolean) => {
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    if (disable == true) {
      const handleKeyPress = (e: KeyboardEvent): void => {
        if (e.keyCode === 39) {
          sliderRef.current?.slickNext();
        } else if (e.keyCode === 37) {
          sliderRef.current?.slickPrev();
        }
      };

      document.addEventListener('keydown', handleKeyPress);

      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }
  }, [sliderRef, disable]);

  return {
    ref: sliderRef,
  };
};

export default useSliderKeys;
