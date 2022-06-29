import React from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between py-6 md:mx-12">
      {/* Left side */}
      <div className="flex flex-row justify-between items-center  lg:w-4/12">
        {/* Logo */}
        <h1 className="px-4 py-2 mx-2 border-2 border-gray-400 font-black italic text-2xl">
          Test
        </h1>
        <a className="font-extrabold text-gray-700" href="#">
          INICIO
        </a>
        <a className="font-extrabold text-gray-700" href="#">
          NOSOTROS
        </a>
        <a className="font-extrabold text-gray-700 hidden sm:block" href="#">
          CONTACTO
        </a>
      </div>
      {/* Right side */}
      <button className="btn rounded-md px-5 py-3 text-white bg-cyanBlue font-bold shadow-md">
        COTIZAR AHORA
      </button>
    </nav>
  );
}
