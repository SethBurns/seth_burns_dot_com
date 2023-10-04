import React, { useState, useEffect, useRef } from 'react';
import useWindowDimensions from '../../util/helperFunctions';

export function AboutMe({
  scrollValue,
  setHeight,
  height,
}: {
  scrollValue: number;
  setHeight: Function;
  height: number;
}) {
  const [top, setTop] = useState(0);
  const [round, setRound] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const { windowWidth, windowHeight } = useWindowDimensions();

  const sliderHeight = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const maxScroll = height - windowHeight + 84;
    const maxTop = height - imageHeight - 64;
    const scrollRatio = maxTop / maxScroll;
    const roundRatio = imageHeight / 2 / maxScroll;
    if (scrollValue >= 0 && scrollValue <= maxScroll) {
      setTop(scrollValue * scrollRatio);
      const roundValue = Math.round(scrollValue * roundRatio);
      setRound(roundValue);
    } else if (scrollValue > maxScroll) {
      setTop(maxTop);
      setRound(imageHeight / 2);
    } else {
      setTop(0);
      setRound(0);
    }
    console.log(scrollValue);
  }, [scrollValue, height, windowHeight, imageHeight]);

  useEffect(() => {
    setHeight(sliderHeight.current?.clientHeight || 0);
    setImageHeight(image.current?.clientHeight || 0);
  }, []);

  return (
    <div ref={sliderHeight} className="flex flex-col justify-between">
      <h2 className="text-2xl text-center">Hi! I'm Seth.</h2>
      <div className="h-full flex justify-center">
        <img
          ref={image}
          style={{
            borderRadius: `${round}px`,
            top: `${top + 116}px`,
            position: 'absolute',
          }}
          src="./assets/SethProfile.png"
          alt="Face of Seth Burns"
          className="w-36 h-36 lg:w-64 lg:h-64 object-cover object-center border-4 border-blue-700"
        />
      </div>
      <h2 className="text-2xl">And I'm well rounded.</h2>
    </div>
  );
}
