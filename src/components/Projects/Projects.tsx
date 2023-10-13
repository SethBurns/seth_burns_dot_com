import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export function Projects() {
  const projects = [
    {
      title: 'Bare-Minimum',
      githubLink: 'https://github.com/SethBurns/bare-minimum',
      deployedLink: 'https://bare-minimum.vercel.app/',
      screenShot: './assets/bareMinimum.png',
    },
    {
      title: 'Wordle Solver',
      githubLink: 'https://github.com/SethBurns/wordle-solver',
      deployedLink: 'https://wordle-solver-three.vercel.app/',
      screenShot: './assets/WordleSolver.png',
    },
    {
      title: `What's Cookin?`,
      githubLink: 'https://github.com/SethBurns/whats-cookin',
      deployedLink: 'https://sakisandrac.github.io/whats-cookin-sc/',
      screenShot: './assets/WhatsCookin.png',
    },
    {
      title: 'coloRandom',
      githubLink: 'https://github.com/SethBurns/coloRandom',
      deployedLink: 'https://colo-random-pi.vercel.app/',
      screenShot: './assets/coloRandom.png',
    },
    {
      title: 'tideWatch',
      githubLink: 'https://github.com/SethBurns/tidewatch',
      deployedLink: 'https://tidewatch.vercel.app/',
      screenShot: './assets/tideWatch.png',
    },
    { title: 'nOmNoM', githubLink: 'https://github.com/SethBurns/nomnom', deployedLink: '', screenShot: '' },
  ];

  return (
    <div className="h-full w-full flex flex-col items-center">
      <img src="./assets/construction.jpg" alt="construction themed background" className="w-full h-full object-cover object-center fixed top-0 left-0 -z-10" />
      <h1 className="text-center text-4xl bg-grey p-2 mt-2 rounded-lg">Projects</h1>
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center content-evenly justify-evenly justify-items-center">
        {projects.map((project) => (
          <div
            className="flex flex-col justify-evenly items-center text-center font-bold m-4 p-2 w-1/2 lg:w-5/6 bg-gray-500 rounded-xl"
            key={project.title}
          >
            <p className='text-2xl'>{project.title}</p>
            <img
              src={project.screenShot}
              alt={project.title}
              className="rounded-xl border border-black"
            />
            <div className="flex flex-row justify-evenly items-center w-full">
              <a href={project.githubLink} target="_blank" rel="noreferrer" className='flex flex-col items-center hover:text-blue-700 hover:scale-110 transition-all duration-500 ease-in-out'>
                <FaGithub className="text-4xl m-2 " />
                <p>Github Repo</p>
              </a>
              <a href={project.deployedLink} target="_blank" rel="noreferrer" className='flex flex-col items-center hover:text-green-600 hover:scale-110 transition-all duration-500 ease-in-out'>
                <FaExternalLinkAlt className="text-4xl m-2 " />
                <p>Deployed Link</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
