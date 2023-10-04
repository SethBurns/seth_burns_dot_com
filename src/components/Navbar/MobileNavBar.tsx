import { NavLink } from "react-router-dom";
import {IoMdClose} from 'react-icons/io';
import React from "react";

export const MobileNavBar = () => {


  return (
    <div className="h-screen w-screen bg-black absolute top-0 left-0 z-20">
      <div className="flex justify-center">
        {[
          ['About', '/'],
          ['Contact', '/Contact'],
          ['Scuba', '/Scuba'],
          ['Videos', '/Videos'],
          ['Music', '/Music'],
        ].map(([title, path]) => (
          <NavLink to={path} key={title}>
            <button
              className="p-2 m-4 w-20 rounded-lg"
            >
              {title}
            </button>
          </NavLink>))}
      </div>
      <IoMdClose className='text-black absolute top-4 right-4 text-3xl'/>
    </div>
  );
}