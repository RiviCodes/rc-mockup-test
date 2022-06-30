import React from "react";

export default function AboutUs() {
  return (
    <main id="about" className="flex flex-col align-center">
      {/* Contact bar */}
      <div className="grid grid-cols-1 items-center md:grid-cols-3 md:justify-items-center px-6 py-6 mb-12 rounded-lg shadow-lg">
        {/* LOCATION */}
        <div className="grid grid-rows-12 grid-flow-col justify-start items-center my-6">
          {/* Icon */}
          <div className="col-span-3">
            <span className="px-3 py-2 mr-3 border-2 border-black rounded-full text-xl">
              <i class="fa-solid fa-location-dot"></i>
            </span>
          </div>
          {/* Text */}
          <div className="col-span-9">
            <span className="text-sm lg:text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. CDMX
            </span>
          </div>
        </div>

        {/* EMAIL */}
        <div className="grid grid-rows-12 grid-flow-col justify-start items-center my-6">
          {/* Icon */}
          <div className="col-span-3">
            <span className="px-3 py-2 mr-3 border-2 border-black rounded-full text-lg">
              <i class="fa-solid fa-envelope"></i>
            </span>
          </div>
          {/* Text */}
          <div className="col-span-9">
            <span className="text-sm lg:text-base">
              atencionacliente@test.com
            </span>
          </div>
        </div>

        {/* PHONE */}
        <div className="grid grid-rows-12 grid-flow-col justify-start items-center my-6">
          {/* Icon */}
          <div className="col-span-3">
            <span className="px-3 py-2 mr-3 border-2 border-black rounded-full text-xl">
              <i class="fa-solid fa-phone"></i>
            </span>
          </div>
          {/* Text */}
          <div className="grid grid-cols-1 col-span-9">
            <span className="text-sm lg:text-base">(993) 3524257</span>
            <span className="text-sm lg:text-base">
              Lunes a Viernes de 8:00 a 17:00 hrs.
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 mx-8 md:mx-12 mt-12">
        {/* LEFT SIDE */}
        <div className="col-span-6">
          <h2 className="mb-4 font-mono text-gray-600">
            --- ¿QUÉ HACEMOS? ---
          </h2>
          <h3 className="mb-8 lg:w-5/6 text-3xl lg:text-4xl font-extrabold text-slate-800">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit d fugiat
            deleniti modi iure, explicabo doloremque
          </h3>
          <p className="mb-8 lg:w-5/6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
            dignissimos consequatur doloribus odio nam, ad fugiat deleniti modi
            iure, explicabo doloremque distinctio similique.
          </p>
          <button className="btn px-4 py-3 mb-12 md:mb-0 rounded text-xs font-sans font-bold text-white bg-blue-900 hover:bg-blue-800">
            HABLA CON NUESTROS EXPERTOS
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-6 relative flex justify-center">
          <img
            className="relative top-1 xl:top-0 xl:bottom-44 left-14 sm:left-28 md:left-14 xl:left-20 w-auto h-4/6 sm:h-3/6 md:h-3/5 shadow-lg shadow-gray-400"
            src="images/picture-2.jpg"
            alt=""
          />
          <img
            className="absolute top-48 md:top-44 lg:top-56 xl:top-64 left-3 sm:left-12 md:left-12 lg:left-6 xl:left-2 w-4/6 sm:w-3/6 md:w-4/6 xl:w-3/5 shadow-lg shadow-gray-400"
            src="images/picture-1.jpg"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
