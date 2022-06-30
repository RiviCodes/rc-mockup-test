import React from "react";

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center">
      <div className="flex flex-row">
        <h3 className="font-semibold text-slate-700 mb-7">
          --- ACERCA DE NOSOTROS ---
        </h3>
      </div>
      <h2 className="font-bold text-center text-3xl lg:text-4xl w-10/12 md:w-9/12 lg:w-9/12 mb-7">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
        dignissimos consequatur doloribus
      </h2>
      <p className="text-center text-md md:text-lg w-5/6 lg:w-3/6 mb-2 lg:mb-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
        dignissimos consequatur doloribus odio nam, ad fugiat deleniti modi
        iure, explicabo doloremque distinctio similique, possimus.
      </p>

      {/* Grid Container */}
      <div className="grid grid-cols-1 justify-items-center mt-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-12">
        {/* Item #1 */}
        <div className="flex flex-col items-center w-9/12 py-6 lg:py-12 rounded-tl-3xl rounded-br-3xl lg:col-span-4 lg:justify-self-end">
          <img
            className="h-auto w-3/12 lg:w-4/12 pb-4"
            src="images/target-icon.png"
            alt=""
          />
          <p className="w-5/6 lg:w-auto font-bold text-lg text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* Item #2 */}
        <div className="flex flex-col items-center w-9/12 py-6 lg:py-12 rounded-tl-3xl rounded-br-3xl lg:col-span-4 lg:shadow-2xl">
          <img
            className="h-auto w-3/12 lg:w-4/12 pb-4"
            src="images/person-icon.png"
            alt=""
          />
          <p className="w-5/6 lg:w-auto font-bold text-lg text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* Item #3 */}
        <div className="flex flex-col items-center w-9/12 py-6 lg:py-12 rounded-tl-3xl rounded-br-3xl lg:col-span-4 lg:justify-self-start">
          <img
            className="h-auto w-3/12 lg:w-4/12 pb-4"
            src="images/shield-icon.png"
            alt=""
          />
          <p className="w-5/6 lg:w-auto font-bold text-lg text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* Item #4 */}
        <div className="flex flex-col items-center w-9/12 py-6 lg:py-12 rounded-tl-3xl rounded-br-3xl lg:col-span-6 lg:justify-self-end">
          <img
            className="h-auto w-3/12 pb-4"
            src="images/lock-icon.png"
            alt=""
          />
          <p className="w-4/6 md:w-5/6 lg:w-4/6 font-bold text-lg text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* Item #5 */}
        <div className="flex flex-col items-center w-9/12 py-6 lg:py-12 rounded-tl-3xl rounded-br-3xl lg:col-span-6 lg:justify-self-start">
          <img
            className="h-auto w-3/12 pb-4"
            src="images/docs-icon.png"
            alt=""
          />
          <p className="w-4/6 md:w-5/6 lg:w-4/6 font-bold text-lg text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
  );
}
