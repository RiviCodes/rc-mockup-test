import React from "react";

export default function About() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-row">
        <span className="tracking-tighter">---</span>
        <h1> ACERCA DE NOSOTROS </h1>
        <span className="tracking-tighter">---</span>
      </div>
      <h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
        dignissimos consequatur doloribus
      </h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
        dignissimos consequatur doloribus odio nam, ad fugiat deleniti modi
        iure, explicabo doloremque distinctio similique, possimus.
      </p>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">
        {/* Item #1 */}
        <div className="flex flex-col items-center lg:col-span-4">
          <img className="h-auto w-1/6" src="images/target-icon.png" alt="" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        {/* Item #2 */}
        <div className="flex flex-col items-center lg:col-span-4">
          <img className="h-auto w-1/6" src="images/target-icon.png" alt="" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        {/* Item #3 */}
        <div className="flex flex-col items-center lg:col-span-4">
          <img className="h-auto w-1/6" src="images/target-icon.png" alt="" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        {/* Item #4 */}
        <div className="flex flex-col items-center lg:col-span-6">
          <img className="h-auto w-1/6" src="images/target-icon.png" alt="" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        {/* Item #5 */}
        <div className="flex flex-col items-center lg:col-span-6">
          <img className="h-auto w-1/6" src="images/target-icon.png" alt="" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
  );
}
