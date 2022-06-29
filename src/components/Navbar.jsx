import React from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between py-5 mx-3 md:mx-12">
      {/* Left side */}
      <div className="flex flex-row justify-between items-center w-7/12 lg:w-5/12">
        {/* Logo */}
        <h1 className="px-4 py-2 mx-2 border-2 border-gray-400 font-black italic md:text-lg lg:text-2xl">
          Test
        </h1>
        <a
          className="border-b-4 border-transparent hover:border-cyan-400 text-sm font-extrabold text-gray-700 md:text-base"
          href="#"
        >
          INICIO
        </a>
        <a
          className="border-b-4 border-transparent hover:border-cyan-400 text-sm font-extrabold text-gray-700 md:text-base"
          href="#"
        >
          NOSOTROS
        </a>
        <a
          className="border-b-4 border-transparent hover:border-cyan-400 text-sm font-extrabold text-gray-700 md:text-base hidden sm:block"
          href="#"
        >
          CONTACTO
        </a>
      </div>
      {/* Right side */}
      <button className="btn rounded-md px-5 py-3 text-white bg-cyanBlue hover:bg-cyan-500 transition ease-in-out delay-80 text-sm font-bold shadow-md">
        COTIZAR AHORA
      </button>
    </nav>
  );
}
