import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useResolvedPath } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
// import { MobileNavBar } from './MobileNavBar';

type Position = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';

export function Navbar() {
  
  const [navColor, setNavColor] = useState('#ffffff01');
  const [navPosition, setNavPosition] = useState<Position>('relative');
  const path = useLocation();
  
  useEffect (() => {
    if (path.pathname === '/') {
      setNavColor('#ffffff01');
      // setNavPosition('relative');
    } else if (path.pathname === '/Projects') {
      setNavColor('#ffffff');
      // setNavPosition('relative');
    } else if (path.pathname === '/Contact') {
      setNavColor('#ffffff');
      // setNavPosition('relative');
    } else if (path.pathname === '/Scuba') {
      setNavColor('#a6faa359');
      // setNavPosition('fixed');
    } else if (path.pathname === '/Videos') {
      setNavColor('#ffffff');
      // setNavPosition('relative');
    } else if (path.pathname === '/Music') {
      setNavColor('#ffffff');
      // setNavPosition('relative');
    } else {
      setNavColor('#ffffff');
      // setNavPosition('relative');
    }
  }, [path])

  return (
    <nav 
      style={{backgroundColor: `${navColor}`, position: `${navPosition}`}}
      className="flex flex-row justify-around items-center w-full z-10">
      <h1 className="text-3xl p-2 m-4 whitespace-nowrap">Seth Burns</h1>
      <div className="flex-row items-center gap-4 justify-center hidden lg:flex">
        {[
          ['About', '/'],
          ['Projects', '/Projects'],
          ['Contact', '/Contact'],
          ['Scuba', '/Scuba'],
          ['Videos', '/Videos'],
          ['Music', '/Music'],
        ].map(([title, path]) => (
          <NavLink to={path} key={title}>
            <button data-replace={`${title}`} className={`p-2 m-4 w-20 rounded-lg linkhover`}><span>{title}</span></button>
          </NavLink>
        ))}
      </div>
      <BiMenuAltRight className="text-black text-3xl lg:hidden" />

      {/* <MobileNavBar ref={refMobileNavBar}/> */}
    </nav>
  );
}
