import React from "react";
import logo from "../img/background_ieeebig.png";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-[600px] bg-light dark:bg-dark bg-cover font-oswald p-10"
    >
      <div className="container">
        <h1 className="text-3xl font-bold text-black dark:text-white text-center mt-10 uppercase tracking-wide mb-3">
          About IEEE BIG
        </h1>
        <hr className="border-t-4 w-[250px] md:w-[300px] mx-auto border-t-teal-600 dark:border-t-white" />
        <div className="container">
          <div className="mt-10 flex flex-wrap justify-center items-center">
            <div className="w-full relative flex pb-8 md:w-1/3">
              <img
                src={logo}
                alt="gambar"
                className="mx-auto w-36 md:w-56 rounded-full border-2 shadow-lg"
              />
            </div>
            <div className="w-full mb-10 md:w-1/2">
              <p className="text-base text-justify lg:text-xl dark:text-white">
                With the theme "TechnoSustainable: Empowering a BIG Future"
                IEEEBIG 2023 introduces interesting approach to educating the
                general public about technology. Therefore, all events and
                activities organized as part of IEEEBIG 2023 are not solely
                intended for the participants, but also expected as a
                significant step to involve everyone to advance technology based
                on sustainability. Therefore, it cannot be recalled if today's
                humans cannot be separated from technology by considering all
                aspects of sustainability, IEEEBIG 2023 is here as an initiative
                innovative which aims to prepare competent individuals for
                thrive in a competitive and sustainable technology sector.
                IEEEBIG 2023 consists of series
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
