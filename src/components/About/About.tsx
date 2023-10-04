import { useRef, useEffect, useState } from 'react';
import { AboutMe } from './AboutMe/AboutMe';
import { Technologies } from './Technologies/Technologies';

export function About({scrollValue, setHeight, height}: {scrollValue: number, setHeight: Function, height: number}) {

  const [scrollHeight, setScrollHeight] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setScrollHeight(ref.current?.clientHeight || 0)
  }, [])

  return (
    <section ref={ref}>
        <div className="flex flex-wrap justify-evenly">
          <AboutMe setHeight={setHeight} scrollValue={scrollValue} height={height} />
          <Technologies />
        </div>
    </section>
  );
}
