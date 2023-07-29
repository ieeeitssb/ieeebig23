import React from "react";

export default function JumbotronBCC() {
  return (
    <section>
      <div className="min-h-screen px-1 w-full bg-patternLight dark:bg-patternDark bg-cover bg-center bg-fixed text-black flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center font-bold bg-gradient-to-r from-blue-500 via-pink-500 to-teal-400 bg-clip-text text-transparent md:text-7xl neon">
          Bussiness Case Competition
        </h1>
        <p className="font-semibold text-slate-600 italic dark:text-slate-200 text-md md:text-3xl text-center">
          Tech Solutions for Sustainable Development
        </p>
        <a
          href="/"
          className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-800 mt-5"
        >
          Login
        </a>
      </div>
    </section>
  );
}
