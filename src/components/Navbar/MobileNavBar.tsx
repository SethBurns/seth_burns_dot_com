import { NavLink } from "react-router-dom";
import {IoMdClose} from 'react-icons/io';
import React, { useEffect, useState } from "react";

interface Props {
  mobileMenuOpen: Boolean;
  toggleMobileMenu: Function;
}

export const MobileNavBar = ({mobileMenuOpen, toggleMobileMenu}: Props) => {
  
  const [open, setOpen] = useState<String>('hidden');

  useEffect(() => {
    if (mobileMenuOpen) {
      setOpen('absolute top-0 right-0 bg-transparentWhite rounded-lg m-2');
    } else {
      setOpen('hidden');
    }
  }, [mobileMenuOpen])

  return (
    <div className={`${open}`}>
      <IoMdClose className='text-black text-3xl fixed right-2' onClick={() => toggleMobileMenu()}/>
      <div className="flex flex-col justify-center pt-4" onClick={() => toggleMobileMenu()}>
        {[
          ['About', '/'],
          ['Projects', '/Projects'],
          ['Contact', '/Contact'],
          ['Scuba', '/Scuba'],
          ['Videos', '/Videos'],
          ['Music', '/Music'],
        ].map(([title, path]) => (
          <NavLink to={path} key={title}>
            <button
              className="p-2 m-4 w-20 rounded-lg linkhover bg-eggshell"
            >
              {title}
            </button>
          </NavLink>))}
      </div>
    </div>
  );
}