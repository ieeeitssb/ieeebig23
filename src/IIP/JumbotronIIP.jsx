import React from "react";

export default function JumbotronIIP() {
  return (
    <section>
      <div className="min-h-screen px-1 w-full bg-patternLight dark:bg-patternDark bg-cover bg-center bg-fixed text-black flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center font-bold bg-gradient-to-r from-blue-500 via-pink-500 to-teal-400 bg-clip-text text-transparent md:text-7xl neon font-monoton">
          IEEE Innovation Project Competition
        </h1>
        <p className="font-semibold text-slate-600 italic dark:text-slate-200 text-md md:text-3xl font-oswald text-center">
          TechnoSustainable: Empowering a BIG Future.
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
