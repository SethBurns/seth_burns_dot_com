import React from 'react';
import { Scuba } from './components/Scuba/Scuba';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Videos } from './components/Videos/Videos';
import { Music } from './components/Music/Music';

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <main className="h-full w-screen">
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Scuba' element={<Scuba />} />
          <Route path='/Videos' element={<Videos />} />
          <Route path='/Music' element={<Music />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
