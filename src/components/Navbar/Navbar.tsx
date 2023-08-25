import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="border-b-2 flex flex-col justify-center">
        <h1 className="text-3xl text-center">Seth Burns</h1>
        <div className="flex justify-center">
          <NavLink to="/">
            <button className="border-2 border-black p-2 m-4 w-20 rounded-lg hover:bg-red-500 active:bg-red-600 focus:bg-red-600 focus:ring focus:ring-green-500">
              About
            </button>
          </NavLink>
          <NavLink to="/Projects">
            <button className="border-2 border-black p-2 m-4 w-20 rounded-lg hover:bg-green-500 active:bg-green-600 focus:bg-green-600 focus:ring focus:ring-yellow-500">
              Projects
            </button>
          </NavLink>
          <NavLink to="/Contact">
            <button className="border-2 border-black p-2 m-4 w-20 rounded-lg hover:bg-yellow-500 active:bg-yellow-600 focus:bg-yellow-600 focus:ring focus:ring-blue-500">
              Contact
            </button>
          </NavLink>
          <NavLink to="/Scuba">
            <button className="border-2 border-black p-2 m-4 w-20 rounded-lg hover:bg-blue-500 active:bg-blue-600 focus:bg-blue-600 focus:ring focus:ring-purple-500">
              Scuba
            </button>
          </NavLink>
          <NavLink to="/Videos">
            <button className="border-2 border-black p-2 m-4 w-20 rounded-lg hover:bg-purple-500 active:bg-purple-600 focus:bg-purple-600 focus:ring focus:ring-orange-500">
              Videos
            </button>
          </NavLink>
          <NavLink to="/Music">
            <button className="border-2 border-black p-2 m-4 w-20 rounded-lg hover:bg-orange-500 active:bg-orange-600 focus:bg-orange-600 focus:ring focus:ring-red-500">
              Music
            </button>
          </NavLink>
        </div>
      </nav>
  )
}