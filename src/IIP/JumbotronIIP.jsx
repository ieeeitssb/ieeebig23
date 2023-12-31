import React from "react";

export default function JumbotronIIP() {
  return (
    <section>
      <div className="min-h-screen px-1 w-full bg-patternLight dark:bg-patternDark bg-cover bg-center bg-fixed text-black flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center font-bold bg-gradient-to-r from-blue-500 via-pink-500 to-teal-400 bg-clip-text text-transparent md:text-7xl neon font-monoton">
          IEEE Paper Competition
        </h1>
        <p className="font-semibold text-slate-600 italic dark:text-slate-200 text-md md:text-3xl font-oswald text-center">
          TechnoSustainable: Empowering a BIG Future.
        </p>
        <a
          className="py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-800 mt-5 font-oswald"
          href="https://drive.google.com/file/d/1lIdEplM1Wu45IsxmqKXWMPcVq71x7GXc/view?usp=drivesdk/"
        >
          Guidebook
        </a>
      </div>
    </section>
  );
}
