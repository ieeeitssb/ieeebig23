import React from "react";
import logo from "../img/background_ieeebig.png";

export default function About() {
  return (
    <section className="w-full min-h-[600px] bg-light dark:bg-dark bg-cover p-10">
      <div className="container">
        <h1 className="text-3xl font-bold text-black dark:text-white text-center mt-10 uppercase tracking-wide mb-3">
          About
        </h1>
        <hr className="border-t-4 w-[250px] mx-auto border-t-teal-600 dark:border-t-white" />
        <div className="container">
          <div className="mt-10 flex flex-wrap justify-center items-center">
            <div className="w-full relative flex md:w-1/3">
              <img
                src={logo}
                alt="gambar"
                className="mx-auto w-56 rounded-full border-2 shadow-lg"
              />
            </div>
            <div className="w-full mb-10 md:w-1/2">
              <p className="text-base text-justify lg:text-xl dark:text-white">
                IEEE Institut Teknologi Sepuluh Nopember (IEEE ITS SB) is a
                Student Branch from IEEE that provides opportunities to meet and
                learn from fellow IEEE Student and Graduate Student Members and
                engage with professional IEEE members locally. An active IEEE
                Student Branch can be one of the most positive elements of your
                academic career, offering programs, activities, and professional
                networking opportunities that build critical skills outside of
                the classroom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
