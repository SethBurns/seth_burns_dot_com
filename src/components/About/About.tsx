import { useRef, useEffect, useState } from 'react';
import { AboutMe } from './AboutMe/AboutMe';
import { Technologies } from './Technologies/Technologies';

export function About({
  scrollValue,
  setHeight,
  height,
}: {
  scrollValue: number;
  setHeight: Function;
  height: number;
}) {
  const [scrollHeight, setScrollHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setScrollHeight(ref.current?.clientHeight || 0);
  }, []);

  return (
    <section ref={ref}>
      <div className="flex flex-wrap justify-evenly">
        <video
          src="./assets/PeacefulCanal.mp4"
          className="brightness-75 -z-10 bg-center object-cover w-screen h-screen fixed top-0 left-0"
          autoPlay
          loop
          muted
        />
        <AboutMe
          setHeight={setHeight}
          scrollValue={scrollValue}
          height={height}
        />
        <Technologies />
      </div>
    </section>
  );
}
