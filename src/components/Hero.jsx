import React from "react";

export default function Hero() {
  return (
    <main
      id="hero"
      className="flex flex-col align-center sm:-mb-52 md:mb-10 lg:mb-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 mx-8 md:mx-12 mt-12 xl:mb-">
        {/* LEFT SIDE */}
        <div className="col-span-6">
          <h2 className="font-semibold text-slate-700 pb-4">
            --- ¿QUÉ HACEMOS? ---
          </h2>
          <h3 className="pb-8 sm:w-5/6 lg:w-5/6 text-3xl lg:text-4xl font-extrabold text-slate-800">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit d fugiat
            deleniti modi iure, explicabo doloremque
          </h3>
          <p className="pb-8 sm:w-5/6 lg:w-5/6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
            dignissimos consequatur doloribus odio nam, ad fugiat deleniti modi
            iure, explicabo doloremque distinctio similique.
          </p>
          <button className="btn px-4 py-3 mb-10 md:mb-0 rounded text-xs font-sans font-bold text-white bg-blue-900 hover:bg-blue-800">
            HABLA CON NUESTROS EXPERTOS
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-6 relative flex justify-center">
          <img
            className="relative top-0 left-14 sm:left-28 md:left-14 xl:left-20 w-auto h-4/6 sm:h-3/6 md:h-3/5 shadow-lg shadow-gray-400"
            src="images/picture-2.jpg"
            alt=""
          />
          <img
            className="absolute top-48 md:top-44 xl:top-64 left-3 sm:left-12 md:left-12 lg:left-6 xl:left-2 w-4/6 sm:w-3/6 md:w-4/6 xl:w-3/5 shadow-lg shadow-gray-400"
            src="images/picture-1.jpg"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
