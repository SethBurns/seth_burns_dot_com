import { Scuba } from './components/Scuba/Scuba';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Videos } from './components/Videos/Videos';
import { Music } from './components/Music/Music';
import { useEffect, useState } from 'react';

function App() {
  const [scrollValue, setScrollValue] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      const changeY = window.scrollY;
      if (changeY >= 0 && changeY < height) {
        setScrollValue(Number(changeY.toFixed(0)));
      } else if (changeY > height) {
        setScrollValue(height);
      } else {
        setScrollValue(0);
      }
    };
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    };
  }, [height]);

  return (
    <div className="h-full w-full font-syne">
      <Navbar />
      <main className="h-full w-full">
        <Routes >
          <Route
            path="/"
            element={
              <About
                height={height}
                setHeight={setHeight}
                scrollValue={scrollValue}
              />
            }
          />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Scuba" element={<Scuba />} />
          <Route path="/Videos" element={<Videos />} />
          <Route path="/Music" element={<Music />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
