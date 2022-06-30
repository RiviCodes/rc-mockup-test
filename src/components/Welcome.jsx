import React from "react";

export default function Welcome() {
  return (
    <section
      id="start"
      className="flex flex-col  items-center h-80 md:h-96 lg:h-screen w-auto"
    >
      <span className="mt-4 md:mt-8 lg:mt-12 pt-8 lg:pt-12 pb-8 text-white font-mono tracking-widest">
        --- BIENVENIDOS ---
      </span>
      <h1 className="mt-4 md:mt-8 lg:mt-12 text-xl md:text-3xl lg:text-4xl font-semibold text-white">
        Lorem ipsum, dolor sit amet
      </h1>
      <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        consectetur adipisic
      </h2>
      <button className="btn rounded-md border border-white py-3 px-4 text-xs text-white">
        CONOCE NUESTROS SERVICIOS
      </button>
    </section>
  );
}
