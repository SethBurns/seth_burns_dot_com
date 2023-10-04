import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
// import { MobileNavBar } from './MobileNavBar';


export function Navbar() {
  
  const [navColor, setNavColor] = useState('#ffffff');

  return (
    <nav 
    style={{backgroundColor: `${navColor}`}}
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
