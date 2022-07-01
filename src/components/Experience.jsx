import React from "react";

export default function Experience() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 lg:mt-28 xl:mt-40 pb-14 bg-experience">
      {/* LEFT side */}
      <div className=" justify-center md:col-span-6 lg:col-span-7 xl:col-span-6 lg:-mt-28 hidden md:flex">
        <img
          className="h-auto w-9/12 md:w-9/12 lg:w-8/12 md:h-fit md:self-center md:mt-12"
          src="images/our-exp.png"
          alt=""
        />
      </div>

      {/* RIGHT side */}
      <div className="flex flex-col items-center md:items-start md:col-span-6 lg:col-span-5 xl:col-span-6">
        <h2 className="mt-12 mb-6 text-white font-bold text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
          {" "}
          --- Nuestra Experiencia
        </h2>
        <p className="mb-12 w-9/12 sm:w-8/12 md:w-10/12 text-gray-100">
          Lorem ipsum, dolor sit sit amet consectetur adipisicing elit. Est
          dignissimos consequatur doloribus odio nam, ad fugiat deleniti modi
          iure, explicabo doloremque distinctio similique, possimus commodi
          saepe eaque omnis sint.
        </p>
        <div className="ml-2">
          <h4 className="mb-8 text-white font-semibold text-2xl">
            <i class="fa-solid fa-circle-check mr-3"></i>Maquinaria y Equipo
          </h4>
          <h4 className="mb-8 text-white font-semibold text-2xl">
            <i class="fa-solid fa-circle-check mr-3"></i>Servicios de Ingeniería
          </h4>
          <h4 className="text-white font-semibold text-2xl">
            <i class="fa-solid fa-circle-check mr-3"></i>Educación
          </h4>
        </div>
      </div>

      {/* BOTTOM IMAGE ~ Display only under MD breaking-point */}
      <div className="flex justify-center col-span-7 md:hidden mt-14">
        <img
          className="h-auto w-8/12 sm:w-7/12"
          src="images/our-exp.png"
          alt=""
        />
      </div>
    </section>
  );
}
