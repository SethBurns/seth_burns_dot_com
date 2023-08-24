import React from 'react';



function App() {
  return (
    <div className="h-screen">
      <nav className="border-b-2">
        <h1 className="text-3xl text-center">Seth Burns</h1>
      </nav>
      <main className='h-full w-screen'>
        <video
          src='./WolfEelBackground.mp4'
          className="object-cover object-center h-full w-screen"
          autoPlay
          loop
          muted
        />
      </main>
    </div>
  );
}

export default App;
