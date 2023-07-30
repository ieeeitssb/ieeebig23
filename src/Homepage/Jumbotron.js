import React from "react";

export default function Jumbotron() {
  return (
    <section>
      <div className="min-h-screen w-full bg-patternLight dark:bg-patternDark bg-cover bg-center bg-fixed text-black flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r font-monoton from-blue-500 via-pink-500 to-teal-400 bg-clip-text text-transparent md:text-7xl neon">
          IEEEBIG 2023
        </h1>
        <p className="font-semibold text-slate-600 font-oswald dark:text-slate-200 text-md md:text-3xl">
          TechnoSustainable: Empowering a BIG Future
        </p>
        <a
          href="https://ieeebig.000webhostapp.com"
          className="py-3 px-6 bg-gradient-to-r from-blue-700 to-pink-700 hover:opacity-80 text-white rounded-full mt-5"
        >
          Login
        </a>
      </div>
    </section>
  );
}
