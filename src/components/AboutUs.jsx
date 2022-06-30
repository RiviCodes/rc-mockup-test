import React from "react";

export default function AboutUs() {
  return (
    <main id="about" className="flex align-center">
      {/* Contact bar */}
      <div className="grid grid-cols-1 items-center md:grid-cols-3 md:justify-items-center px-6 py-6 rounded-lg shadow-lg">
        {/* LOCATION */}
        <div className="grid grid-rows-12 grid-flow-col items-center my-6">
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
    </main>
  );
}
